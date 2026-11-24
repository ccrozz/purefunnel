import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy · FundThePractice",
  description: "What FundThePractice does with a visit and a call.",
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
      <p>The application does not collect patient records, and it does not ask for them.</p>
      <p>
        <Link href="/">Back to FundThePractice</Link>
      </p>
    </article>
  );
}
