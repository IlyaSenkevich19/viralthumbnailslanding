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
 * App-like glass bar, mobile-first: short copy, equal side-by-side actions,
 * safe-area padding. Support dock is hidden while this bar is open (CSS).
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
      className="vt-cookie-consent-banner fixed inset-x-0 bottom-0 z-[90] border-t border-border/80 bg-bg/95 px-4 pt-3 shadow-[0_-12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6 sm:pt-4 sm:pb-[max(1rem,env(safe-area-inset-bottom))]"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="text-xs leading-snug text-text-muted sm:max-w-3xl sm:text-sm sm:leading-relaxed">
          <span className="sm:hidden">
            Essential storage runs ViralThumblify. Optional analytics &amp; ads help
            improve campaigns.
          </span>
          <span className="hidden sm:inline">
            We use essential storage to run ViralThumblify. With your permission, we also
            use analytics and ads measurement to understand signups and improve campaigns.
          </span>
        </p>
        <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:shrink-0 sm:flex-row">
          <button
            type="button"
            disabled={!isInteractive}
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border px-3 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-border-hover hover:bg-bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 sm:px-4"
            onClick={() => handleChoice("denied")}
          >
            Reject
          </button>
          <button
            type="button"
            disabled={!isInteractive}
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-text-primary px-3 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 sm:px-4"
            onClick={() => handleChoice("granted")}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
