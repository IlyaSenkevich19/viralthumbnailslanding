const ATTRIBUTION_QUERY_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
] as const;

/** Forward landing campaign params into app URLs (cross-origin; localStorage does not apply). */
export function appendMarketingAttributionToAppUrl(appUrl: string, search = ""): string {
  const sourceParams = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  if ([...sourceParams.keys()].length === 0) return appUrl;
  let target: URL;
  try {
    target = new URL(appUrl);
  } catch {
    return appUrl;
  }
  for (const key of ATTRIBUTION_QUERY_KEYS) {
    const value = sourceParams.get(key)?.trim();
    if (value && !target.searchParams.has(key)) {
      target.searchParams.set(key, value);
    }
  }
  return target.toString();
}
