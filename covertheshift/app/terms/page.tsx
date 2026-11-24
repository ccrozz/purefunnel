import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms · CoverTheShift",
  description: "What this site is, and what it is not.",
};

export default function TermsPage() {
  return (
    <article className="wrap prose">
      <h1>Terms</h1>
      <p>CoverTheShift is a service of Pure Asset Group.</p>
      <p>This site is not a bank. Submitting the application is not an offer of credit.</p>
      <p>Lenders decide whether a file funds. You pay a fee only if one funds.</p>
      <p>
        <Link href="/">Back to CoverTheShift</Link>
      </p>
    </article>
  );
}
