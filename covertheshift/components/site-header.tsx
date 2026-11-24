import Link from "next/link";
import { ApplyLink } from "@/components/apply-link";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="bar">
      <div className="brand">
        <Link href="/" className="wordmark">
          {site.name}
        </Link>
        <p className="parent">a service of {site.parent}</p>
      </div>
      <div className="header-actions">
        <a href={`tel:${site.phoneTel}`} className="phone">
          {site.phoneDisplay}
        </a>
        <ApplyLink placement="nav" className="apply">
          Apply now
        </ApplyLink>
      </div>
    </header>
  );
}
