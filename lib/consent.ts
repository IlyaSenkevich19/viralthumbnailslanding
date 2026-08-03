export type ConsentValue = "denied" | "granted";

export type ConsentState = {
  ad_storage: ConsentValue;
  analytics_storage: ConsentValue;
  ad_user_data: ConsentValue;
  ad_personalization: ConsentValue;
};

export const CONSENT_STORAGE_KEY = "vt_consent_v1";
export const CONSENT_QUERY_PARAM = "vt_consent";
export const CONSENT_UPDATED_EVENT = "vt:consent-updated";
export const COOKIE_PREFERENCES_OPEN_EVENT = "vt:cookie-preferences-open";
export const CONSENT_BANNER_ATTR = "data-vt-consent-banner";

const CONSENT_KEYS = [
  "ad_storage",
  "analytics_storage",
  "ad_user_data",
  "ad_personalization",
] as const;

const CONSENT_WAIT_FOR_UPDATE_MS = 500;
const CONSENT_COOKIE_MAX_AGE_SEC = 180 * 24 * 60 * 60;

function buildConsentState(value: ConsentValue): ConsentState {
  return {
    ad_storage: value,
    analytics_storage: value,
    ad_user_data: value,
    ad_personalization: value,
  };
}

function isConsentValue(value: unknown): value is ConsentValue {
  return value === "denied" || value === "granted";
}

function isConsentState(value: unknown): value is ConsentState {
  if (!value || typeof value !== "object") return false;
  const record = value as Record<string, unknown>;
  return CONSENT_KEYS.every((key) => isConsentValue(record[key]));
}

function pushConsentUpdate(consent: ConsentState): void {
  const target = window as Window & {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };
  target.dataLayer = target.dataLayer ?? [];
  target.gtag =
    target.gtag ??
    function gtag(...args: unknown[]): void {
      target.dataLayer?.push(args);
    };
  target.gtag("consent", "update", consent);
  target.dataLayer.push({ event: "consent_update", ...consent });
  window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_UPDATED_EVENT, { detail: consent }));
}

function resolveSharedCookieDomain(): string | undefined {
  if (typeof window === "undefined") return undefined;
  const host = window.location.hostname;
  if (host === "viralthumblify.com" || host.endsWith(".viralthumblify.com")) {
    return ".viralthumblify.com";
  }
  return undefined;
}

function readConsentChoiceCookie(): ConsentValue | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${CONSENT_STORAGE_KEY}=(granted|denied)(?:;|$)`),
  );
  const value = match?.[1];
  return isConsentValue(value) ? value : null;
}

function writeConsentChoiceCookie(value: ConsentValue): void {
  if (typeof document === "undefined") return;
  const parts = [
    `${CONSENT_STORAGE_KEY}=${value}`,
    "Path=/",
    `Max-Age=${CONSENT_COOKIE_MAX_AGE_SEC}`,
    "SameSite=Lax",
  ];
  if (window.location.protocol === "https:") {
    parts.push("Secure");
  }
  const domain = resolveSharedCookieDomain();
  if (domain) {
    parts.push(`Domain=${domain}`);
  }
  document.cookie = parts.join("; ");
}

function readConsentFromLocalStorage(): ConsentState | null {
  const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as unknown;
    return isConsentState(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function readConsentFromQuery(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = new URLSearchParams(window.location.search).get(CONSENT_QUERY_PARAM);
  return isConsentValue(value) ? value : null;
}

function stripConsentQueryParam(): void {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (!url.searchParams.has(CONSENT_QUERY_PARAM)) return;
  url.searchParams.delete(CONSENT_QUERY_PARAM);
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

export function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  const fromStorage = readConsentFromLocalStorage();
  if (fromStorage) return fromStorage;
  const fromCookie = readConsentChoiceCookie();
  return fromCookie ? buildConsentState(fromCookie) : null;
}

export function hasConsentDecision(): boolean {
  return getStoredConsent() !== null;
}

export function getConsentHandoffValue(): ConsentValue | null {
  const consent = getStoredConsent();
  if (!consent) return null;
  return consent.analytics_storage === "granted" ? "granted" : "denied";
}

export function isAnalyticsStorageGranted(): boolean {
  return getStoredConsent()?.analytics_storage === "granted";
}

export function isAdUserDataGranted(): boolean {
  return getStoredConsent()?.ad_user_data === "granted";
}

/**
 * Blocking head bootstrap: Consent Mode default denied + first-paint banner flag.
 * Banner hides when localStorage or shared parent-domain cookie already has a choice.
 */
export function applyConsentDefault(): string {
  const denied = buildConsentState("denied");
  return [
    "window.dataLayer=window.dataLayer||[];",
    "function gtag(){window.dataLayer.push(arguments);}",
    `gtag("consent","default",${JSON.stringify({
      ...denied,
      wait_for_update: CONSENT_WAIT_FOR_UPDATE_MS,
    })});`,
    `try{var __vtRaw=localStorage.getItem(${JSON.stringify(CONSENT_STORAGE_KEY)});`,
    `var __vtCookie=document.cookie.match(/(?:^|;\\s*)${CONSENT_STORAGE_KEY}=(granted|denied)(?:;|$)/);`,
    `if(!__vtRaw&&!__vtCookie){document.documentElement.setAttribute(${JSON.stringify(CONSENT_BANNER_ATTR)},"1");}`,
    `}catch(e){document.documentElement.setAttribute(${JSON.stringify(CONSENT_BANNER_ATTR)},"1");}`,
  ].join("");
}

export function persistAndUpdateConsent(value: ConsentValue): ConsentState | null {
  if (typeof window === "undefined") return null;
  const consent = buildConsentState(value);
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  writeConsentChoiceCookie(value);
  pushConsentUpdate(consent);
  return consent;
}

/**
 * Import consent from shared cookie or inbound `vt_consent` query (www → app handoff).
 */
export function hydrateConsentFromCrossDomain(): ConsentState | null {
  if (typeof window === "undefined") return null;
  const fromQuery = readConsentFromQuery();
  if (fromQuery) {
    const consent = persistAndUpdateConsent(fromQuery);
    stripConsentQueryParam();
    return consent;
  }
  const existing = getStoredConsent();
  if (!existing) return null;
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(existing));
  writeConsentChoiceCookie(
    existing.analytics_storage === "granted" ? "granted" : "denied",
  );
  pushConsentUpdate(existing);
  return existing;
}

export function applyStoredConsentDecision(): ConsentState | null {
  if (typeof window === "undefined") return null;
  return hydrateConsentFromCrossDomain();
}

export function openCookiePreferences(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(COOKIE_PREFERENCES_OPEN_EVENT));
}
