"use client";

import { useEffect, useState } from "react";
import {
  appendMarketingAttributionToAppUrl,
  captureMarketingAttribution,
  getMarketingAttributionSearch,
} from "@/lib/marketing-attribution";

/** Client-only: appends current landing UTM/gclid to outbound app links. */
export function useAttributedAppUrl(baseUrl: string): string {
  const [href, setHref] = useState(baseUrl);
  useEffect(() => {
    captureMarketingAttribution();
    setHref(appendMarketingAttributionToAppUrl(baseUrl, getMarketingAttributionSearch()));
  }, [baseUrl]);
  return href;
}
