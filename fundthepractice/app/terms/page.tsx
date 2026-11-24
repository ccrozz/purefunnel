import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms · FundThePractice",
  description: "What this site is, and what it is not.",
};

export default function TermsPage() {
  return (
    <article className="wrap prose">
      <h1>Terms</h1>
      <p>FundThePractice is a service of Pure Asset Group.</p>
      <p>This site is not a bank. Submitting the application is not an offer of credit.</p>
      <p>Lenders decide whether a file funds. A fee is owed only if one of them funds.</p>
      <p>
        <Link href="/">Back to FundThePractice</Link>
      </p>
    </article>
  );
}
