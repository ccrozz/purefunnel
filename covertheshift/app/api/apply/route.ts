import { NextResponse } from "next/server";
import { buildApplication } from "@/lib/application";
import { campaign } from "@/lib/brand";

const endpoint = "https://www.pureassetgrp.com/api/submit-easy-application";

export async function POST(request: Request) {
  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ error: "The application could not be read." }, { status: 400 });
  }

  const built = buildApplication(input, campaign);
  if ("honeypot" in built) return NextResponse.json({ ok: true });
  if ("error" in built) return NextResponse.json({ error: built.error }, { status: 400 });

  let upstream: Response;
  try {
    upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(built.body),
      cache: "no-store",
    });
  } catch {
    return NextResponse.json(
      { error: "Pure Asset Group did not accept the application. Try again." },
      { status: 502 },
    );
  }

  let payload: { error?: string } = {};
  try {
    payload = (await upstream.json()) as { error?: string };
  } catch {
    payload = {};
  }

  if (!upstream.ok) {
    const message = payload.error?.startsWith("Missing required field")
      ? "Pure Asset Group did not accept the application."
      : payload.error || "Pure Asset Group did not accept the application.";
    return NextResponse.json({ error: message }, { status: upstream.status });
  }

  return NextResponse.json({ ok: true });
}
