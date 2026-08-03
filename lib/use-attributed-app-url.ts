"use client";

import { useLayoutEffect, useState } from "react";
import {
  appendMarketingAttributionToAppUrl,
  captureMarketingAttribution,
  getMarketingAttributionSearch,
} from "@/lib/marketing-attribution";

/** Client-only: appends UTM/gclid + consent handoff to outbound app links before paint. */
export function useAttributedAppUrl(baseUrl: string): string {
  const [href, setHref] = useState(baseUrl);
  useLayoutEffect(() => {
    captureMarketingAttribution();
    setHref(appendMarketingAttributionToAppUrl(baseUrl, getMarketingAttributionSearch()));
  }, [baseUrl]);
  return href;
}
