"use client";

import { useState } from "react";
import { buttonClass, intro } from "@/lib/brand";

const timeOptions = [
  "Under 6 months",
  "6 months to 1 year",
  "1 to 2 years",
  "2 to 5 years",
  "5 years or more",
] as const;

const creditOptions = [
  "Under 550",
  "550 to 599",
  "600 to 649",
  "650 to 699",
  "700 or higher",
] as const;

const revenueOptions = [
  "Under $100,000",
  "$100,000 to $250,000",
  "$250,000 to $500,000",
  "$500,000 to $1,000,000",
  "$1,000,000 to $2,000,000",
  "Over $2,000,000",
] as const;

type Draft = {
  businessName: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  timeInBusiness: string;
  creditScore: string;
  annualRevenue: string;
  companyWebsite: string;
};

const empty: Draft = {
  businessName: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  timeInBusiness: "",
  creditScore: "",
  annualRevenue: "",
  companyWebsite: "",
};

function digits(value: string, max: number) {
  return value.replace(/\D/g, "").slice(0, max);
}

function phone(value: string) {
  const next = digits(value, 10);
  if (next.length <= 3) return next.length ? `(${next}` : "";
  if (next.length <= 6) return `(${next.slice(0, 3)}) ${next.slice(3)}`;
  return `(${next.slice(0, 3)}) ${next.slice(3, 6)}-${next.slice(6)}`;
}

export function ApplicationForm() {
  const [draft, setDraft] = useState<Draft>(empty);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  function patch<K extends keyof Draft>(key: K, value: Draft[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  function problem() {
    if (!draft.businessName.trim()) return "Enter the business name.";
    if (!draft.firstName.trim()) return "Enter the first name.";
    if (!draft.lastName.trim()) return "Enter the last name.";
    if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(draft.phone)) return "Enter a 10-digit phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email)) return "Enter an email address.";
    if (!draft.timeInBusiness) return "Choose the time in business.";
    if (!draft.creditScore) return "Choose the credit score.";
    if (!draft.annualRevenue) return "Choose the annual revenue.";
    return "";
  }

  async function submit() {
    const next = problem();
    setError(next);
    if (next || busy) return;
    setBusy(true);
    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(draft),
      });
      const payload = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(payload.error || "The application was not saved.");
      if (typeof window.fbq === "function") window.fbq("track", "Lead");
      setSent(true);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "The application was not saved.");
    } finally {
      setBusy(false);
    }
  }

  if (sent) {
    return (
      <section className="wrap appform">
        <h1>Thank you.</h1>
        <p>A rep will reach out to you within the next 24 hours.</p>
      </section>
    );
  }

  return (
    <section className="wrap appform">
      <h1>Application</h1>
      <p className="app-intro">{intro}</p>
      {error ? <p className="app-error">{error}</p> : null}
      <div className="fields">
        <label className="field">
          <span>Business name</span>
          <input value={draft.businessName} autoComplete="organization" onChange={(event) => patch("businessName", event.target.value)} />
        </label>
        <div className="pair two">
          <label className="field">
            <span>First name</span>
            <input value={draft.firstName} autoComplete="given-name" onChange={(event) => patch("firstName", event.target.value)} />
          </label>
          <label className="field">
            <span>Last name</span>
            <input value={draft.lastName} autoComplete="family-name" onChange={(event) => patch("lastName", event.target.value)} />
          </label>
        </div>
        <div className="pair two">
          <label className="field">
            <span>Phone number</span>
            <input value={draft.phone} type="tel" inputMode="tel" autoComplete="tel" placeholder="(305) 555-0100" onChange={(event) => patch("phone", phone(event.target.value))} />
          </label>
          <label className="field">
            <span>Email</span>
            <input value={draft.email} type="email" autoComplete="email" onChange={(event) => patch("email", event.target.value)} />
          </label>
        </div>
        <label className="field">
          <span>Time in business</span>
          <select value={draft.timeInBusiness} onChange={(event) => patch("timeInBusiness", event.target.value)}>
            <option value="">Choose one</option>
            {timeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Credit score</span>
          <select value={draft.creditScore} onChange={(event) => patch("creditScore", event.target.value)}>
            <option value="">Choose one</option>
            {creditOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Annual revenue</span>
          <select value={draft.annualRevenue} onChange={(event) => patch("annualRevenue", event.target.value)}>
            <option value="">Choose one</option>
            {revenueOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="hp">
        Company website
        <input value={draft.companyWebsite} tabIndex={-1} autoComplete="off" onChange={(event) => patch("companyWebsite", event.target.value)} />
      </label>
      <div className="actions">
        <button type="button" className={buttonClass} disabled={busy} onClick={submit}>
          {busy ? "Sending" : "Submit"}
        </button>
      </div>
    </section>
  );
}
