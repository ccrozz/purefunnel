export const site = {
  name: "FundTheCrew",
  wordmark: "FUNDTHECREW",
  domain: "fundthecrew.com",
  parent: "Pure Asset Group",
  phoneDisplay: "(516) 688-0248",
  phoneTel: "+15166880248",
  email: "info@pureassetgrp.com",
  applyUrl: "https://www.pureassetgrp.com/apply",
} as const;

export const placements = ["nav", "hero", "footer"] as const;
export type Placement = (typeof placements)[number];
