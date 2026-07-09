import { SITE_NAME, SITE_URL } from "@/lib/site";
import { VIRAL_APP_URL } from "@/lib/app-url";

export { SITE_NAME, SITE_URL };

/** Product application origin (accounts, credits, generation). */
export const APP_URL = VIRAL_APP_URL;

/** Shown at the top of Terms and Privacy. */
export const LEGAL_EFFECTIVE_DATE = "May 19, 2026";

export const LEGAL_LAST_UPDATED = LEGAL_EFFECTIVE_DATE;

/** Legal entity / operator name shown in policies. */
export const LEGAL_OPERATOR_NAME = "ViralThumblify";

/** US governing law — update if your LLC is registered in another state. */
export const LEGAL_GOVERNING_STATE = "Delaware";

const DEFAULT_CONTACT_EMAIL = "viralthumblify@gmail.com";

/** Support, privacy, DMCA, and legal contact email. */
export const LEGAL_CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_LEGAL_CONTACT_EMAIL?.trim() || DEFAULT_CONTACT_EMAIL;

export const SUPPORT_CONTACT_EMAIL = LEGAL_CONTACT_EMAIL;

export function legalSiteHost(): string {
  return SITE_URL.replace(/^https:\/\//, "");
}

export function legalAppHost(): string {
  return APP_URL.replace(/^https:\/\//, "");
}

export function legalContactHref(): string {
  return `mailto:${LEGAL_CONTACT_EMAIL}`;
}
