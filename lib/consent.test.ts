import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  applyConsentDefault,
  CONSENT_STORAGE_KEY,
  CONSENT_UPDATED_EVENT,
  getStoredConsent,
  hasConsentDecision,
  isAdUserDataGranted,
  isAnalyticsStorageGranted,
  persistAndUpdateConsent,
} from "./consent";

function createStorage(): Storage {
  const map = new Map<string, string>();
  return {
    get length() {
      return map.size;
    },
    clear() {
      map.clear();
    },
    getItem(key: string) {
      return map.get(key) ?? null;
    },
    key(index: number) {
      return Array.from(map.keys())[index] ?? null;
    },
    removeItem(key: string) {
      map.delete(key);
    },
    setItem(key: string, value: string) {
      map.set(key, value);
    },
  };
}

describe("consent", () => {
  beforeEach(() => {
    const localStorage = createStorage();
    vi.stubGlobal("localStorage", localStorage);
    vi.stubGlobal("window", {
      localStorage,
      dataLayer: [],
      dispatchEvent: vi.fn(),
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns no decision before the user chooses", () => {
    expect(getStoredConsent()).toBeNull();
    expect(hasConsentDecision()).toBe(false);
    expect(isAnalyticsStorageGranted()).toBe(false);
    expect(isAdUserDataGranted()).toBe(false);
  });

  it("persists granted consent and pushes Consent Mode update", () => {
    const consent = persistAndUpdateConsent("granted");
    const stored = JSON.parse(localStorage.getItem(CONSENT_STORAGE_KEY) ?? "{}");
    const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
    expect(consent).toEqual({
      ad_storage: "granted",
      analytics_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });
    expect(stored).toEqual(consent);
    expect(dataLayer).toContainEqual(["consent", "update", consent]);
    expect(dataLayer).toContainEqual({ event: "consent_update", ...consent });
    expect(window.dispatchEvent).toHaveBeenCalledWith(expect.objectContaining({ type: CONSENT_UPDATED_EVENT }));
  });

  it("persists denied consent for reject", () => {
    persistAndUpdateConsent("denied");
    expect(getStoredConsent()).toEqual({
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    expect(isAnalyticsStorageGranted()).toBe(false);
    expect(isAdUserDataGranted()).toBe(false);
  });

  it("generates default denied bootstrap with wait_for_update", () => {
    const script = applyConsentDefault();
    expect(script).toContain('gtag("consent","default"');
    expect(script).toContain('"ad_storage":"denied"');
    expect(script).toContain('"analytics_storage":"denied"');
    expect(script).toContain('"ad_user_data":"denied"');
    expect(script).toContain('"ad_personalization":"denied"');
    expect(script).toContain('"wait_for_update":500');
  });
});
