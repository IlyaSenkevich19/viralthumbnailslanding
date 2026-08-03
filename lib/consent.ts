export type ConsentValue = "denied" | "granted";

export type ConsentState = {
  ad_storage: ConsentValue;
  analytics_storage: ConsentValue;
  ad_user_data: ConsentValue;
  ad_personalization: ConsentValue;
};

export const CONSENT_STORAGE_KEY = "vt_consent_v1";
export const CONSENT_UPDATED_EVENT = "vt:consent-updated";
export const COOKIE_PREFERENCES_OPEN_EVENT = "vt:cookie-preferences-open";

const CONSENT_KEYS = [
  "ad_storage",
  "analytics_storage",
  "ad_user_data",
  "ad_personalization",
] as const;

const CONSENT_WAIT_FOR_UPDATE_MS = 500;

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

export function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as unknown;
    return isConsentState(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function hasConsentDecision(): boolean {
  return getStoredConsent() !== null;
}

export function isAnalyticsStorageGranted(): boolean {
  return getStoredConsent()?.analytics_storage === "granted";
}

export function isAdUserDataGranted(): boolean {
  return getStoredConsent()?.ad_user_data === "granted";
}

export function applyConsentDefault(): string {
  const denied = buildConsentState("denied");
  return [
    "window.dataLayer=window.dataLayer||[];",
    "function gtag(){window.dataLayer.push(arguments);}",
    `gtag("consent","default",${JSON.stringify({
      ...denied,
      wait_for_update: CONSENT_WAIT_FOR_UPDATE_MS,
    })});`,
  ].join("");
}

export function persistAndUpdateConsent(value: ConsentValue): ConsentState | null {
  if (typeof window === "undefined") return null;
  const consent = buildConsentState(value);
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  pushConsentUpdate(consent);
  return consent;
}

export function applyStoredConsentDecision(): ConsentState | null {
  if (typeof window === "undefined") return null;
  const consent = getStoredConsent();
  if (!consent) return null;
  pushConsentUpdate(consent);
  return consent;
}

export function openCookiePreferences(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(COOKIE_PREFERENCES_OPEN_EVENT));
}
