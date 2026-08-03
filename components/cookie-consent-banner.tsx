"use client";

import Link from "next/link";
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
 * Corner consent card (not a full-bleed bar): leaves support FAB clear,
 * equal Accept/Reject prominence (GDPR / EDPB), privacy link for informed choice.
 */
export function CookieConsentBanner() {
  const [isInteractive, setIsInteractive] = useState(false);
  useEffect(() => {
    setIsInteractive(true);
    if (hasConsentDecision()) {
      applyStoredConsentDecision();
      setBannerAttr(false);
    } else {
      setBannerAttr(true);
    }
    function handleOpenPreferences(): void {
      setBannerAttr(true);
    }
    window.addEventListener(COOKIE_PREFERENCES_OPEN_EVENT, handleOpenPreferences);
    return () => {
      window.removeEventListener(COOKIE_PREFERENCES_OPEN_EVENT, handleOpenPreferences);
    };
  }, []);
  function handleChoice(value: "denied" | "granted"): void {
    persistAndUpdateConsent(value);
    setBannerAttr(false);
  }
  return (
    <div
      role="region"
      aria-label="Cookie consent"
      aria-hidden={!isInteractive}
      data-consent-banner=""
      className="vt-cookie-consent-banner pointer-events-none fixed bottom-4 left-4 z-[90] w-[min(calc(100vw-5.5rem),22rem)] sm:bottom-5 sm:left-5"
    >
      <div className="pointer-events-auto relative overflow-hidden rounded-2xl border border-border bg-bg-card p-5 shadow-2xl shadow-black/50">
        <div
          className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/[0.1] blur-3xl"
          aria-hidden
        />
        <div className="relative space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-tight text-text-primary">
              Cookie preferences
            </p>
            <p className="text-sm leading-relaxed text-text-muted">
              We use essential storage to run the site. Analytics and ads cookies are optional —
              choose Accept or Reject. Details in our{" "}
              <Link
                href="/privacy"
                className="font-medium text-text-primary underline decoration-border underline-offset-2 transition-colors hover:decoration-accent"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          {/* Equal size/weight on first layer — no Accept-only emphasis (EDPB parity). */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <button
              type="button"
              disabled={!isInteractive}
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-border-hover hover:bg-bg-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50"
              onClick={() => handleChoice("denied")}
            >
              Reject
            </button>
            <button
              type="button"
              disabled={!isInteractive}
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-border-hover hover:bg-bg-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50"
              onClick={() => handleChoice("granted")}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
