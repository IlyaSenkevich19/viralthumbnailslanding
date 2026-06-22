"use client";

import { useEffect, useState } from "react";
import { appendMarketingAttributionToAppUrl } from "@/lib/marketing-attribution";

/** Client-only: appends current landing UTM/gclid to outbound app links. */
export function useAttributedAppUrl(baseUrl: string): string {
  const [href, setHref] = useState(baseUrl);
  useEffect(() => {
    const search = typeof window !== "undefined" ? window.location.search : "";
    setHref(appendMarketingAttributionToAppUrl(baseUrl, search));
  }, [baseUrl]);
  return href;
}
