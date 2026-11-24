import type { ReactNode } from "react";
import Link from "next/link";
import { applyHref } from "@/lib/apply";
import type { Placement } from "@/lib/site";

export function ApplyLink({
  placement,
  className,
  children,
}: {
  placement: Placement;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={applyHref(placement)} className={className}>
      {children}
    </Link>
  );
}
