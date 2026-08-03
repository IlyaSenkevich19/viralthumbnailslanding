"use client";

import { useLayoutEffect } from "react";
import { captureMarketingAttribution } from "@/lib/marketing-attribution";

/** Capture first-touch UTM/gclid as early as possible on every landing page. */
export function MarketingAttributionBoot() {
  useLayoutEffect(() => {
    captureMarketingAttribution();
  }, []);
  return null;
}
