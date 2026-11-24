import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy · FundTheCrew",
  description: "What FundTheCrew does with a visit and a call.",
};

export default function PrivacyPage() {
  return (
    <article className="wrap prose">
      <h1>Privacy</h1>
      <p>The application on this site is sent to Pure Asset Group.</p>
      <p>
        It asks for the business name, your name, phone, email, time in business, credit score, and
        annual revenue. Pure Asset Group stores that file. This page does not keep a copy.
      </p>
      <p>A call to the number on this page goes to Pure Asset Group.</p>
      <p>
        <Link href="/">Back to FundTheCrew</Link>
      </p>
    </article>
  );
}
