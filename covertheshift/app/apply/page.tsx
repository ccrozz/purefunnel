import type { Metadata } from "next";
import { ApplicationForm } from "@/components/application-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Apply · ${site.name}`,
  description: "The application is sent to Pure Asset Group.",
};

export default function ApplyPage() {
  return <ApplicationForm />;
}
