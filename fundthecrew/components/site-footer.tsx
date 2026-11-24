import Link from "next/link";
import { footerPlace } from "@/lib/facts";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <p className="footer-lead">
            {site.name} is a service of {site.parent}.
          </p>
          <p className="footer-meta">
            {footerPlace()} |{" "}
            <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            {" | "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        <p className="legal">
          <Link href="/privacy">Privacy</Link>
          <span aria-hidden="true"> · </span>
          <Link href="/terms">Terms</Link>
        </p>
      </div>
    </footer>
  );
}
