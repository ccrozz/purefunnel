import { campaign } from "@/lib/brand";
import type { Placement } from "@/lib/site";

export function applyHref(placement: Placement) {
  const params = new URLSearchParams({
    utm_source: "meta",
    utm_medium: "paid",
    utm_campaign: campaign,
    utm_content: placement,
  });
  return `/apply?${params.toString()}`;
}
