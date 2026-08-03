"use client";

import { useEffect, useState } from "react";
import {
  applyStoredConsentDecision,
  CONSENT_BANNER_ATTR,
  COOKIE_PREFERENCES_OPEN_EVENT,
  hasConsentDecision,
  persistAndUpdateConsent,
} from "@/lib/consent";

function setBannerAttr(isVisible: boolean): void {
  if (typeof document === "undefined") return;
  if (isVisible) {
    document.documentElement.setAttribute(CONSENT_BANNER_ATTR, "1");
    return;
  }
  document.documentElement.removeAttribute(CONSENT_BANNER_ATTR);
}

/**
 * Full-bleed glass bar (same pattern as app), landing tokens.
 * Support FAB lifts via CSS when `data-vt-consent-banner` is set.
 */
export function CookieConsentBanner() {
  const [isInteractive, setIsInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsInteractive(true);
    if (hasConsentDecision()) {
      applyStoredConsentDecision();
      setBannerAttr(false);
      setIsVisible(false);
    } else {
      setBannerAttr(true);
      setIsVisible(true);
    }
    function handleOpenPreferences(): void {
      setBannerAttr(true);
      setIsVisible(true);
    }
    window.addEventListener(COOKIE_PREFERENCES_OPEN_EVENT, handleOpenPreferences);
    return () => {
      window.removeEventListener(COOKIE_PREFERENCES_OPEN_EVENT, handleOpenPreferences);
    };
  }, []);
  function handleChoice(value: "denied" | "granted"): void {
    persistAndUpdateConsent(value);
    setBannerAttr(false);
    setIsVisible(false);
  }
  if (!isVisible) {
    return null;
  }
  return (
    <div
      role="region"
      aria-label="Cookie consent"
      aria-hidden={!isInteractive}
      data-consent-banner=""
      className="vt-cookie-consent-banner fixed inset-x-0 bottom-0 z-[90] border-t border-border/80 bg-bg/95 px-4 py-4 shadow-[0_-12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl leading-relaxed text-text-muted">
          We use essential storage to run ViralThumblify. With your permission, we also use
          analytics and ads measurement to understand signups and improve campaigns.
        </p>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            disabled={!isInteractive}
            className="rounded-xl border border-border px-4 py-2.5 font-medium text-text-primary transition-colors hover:border-border-hover hover:bg-bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50"
            onClick={() => handleChoice("denied")}
          >
            Reject non-essential
          </button>
          <button
            type="button"
            disabled={!isInteractive}
            className="rounded-xl bg-text-primary px-4 py-2.5 font-medium text-bg transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50"
            onClick={() => handleChoice("granted")}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
