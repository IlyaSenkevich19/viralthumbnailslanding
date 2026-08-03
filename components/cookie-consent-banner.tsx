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
import Button from "@/components/ui/Button";

function setBannerAttr(isVisible: boolean): void {
  if (typeof document === "undefined") return;
  if (isVisible) {
    document.documentElement.setAttribute(CONSENT_BANNER_ATTR, "1");
    return;
  }
  document.documentElement.removeAttribute(CONSENT_BANNER_ATTR);
}

/**
 * Landing-styled corner consent card: accent glow + amber Accept CTA
 * (same language as hero), outline Reject at equal size, privacy link.
 * Bottom-left so the support FAB stays clear by layout.
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
      className="vt-cookie-consent-banner pointer-events-none fixed bottom-4 left-4 z-[90] w-[min(calc(100vw-5.5rem),24rem)] sm:bottom-6 sm:left-6"
    >
      <div className="pointer-events-auto relative overflow-hidden rounded-2xl border border-accent/35 bg-bg-card p-5 shadow-xl shadow-accent/15 sm:p-6">
        <div
          className="pointer-events-none absolute -left-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-accent/[0.14] blur-[90px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-accent-amber/[0.12] blur-[70px]"
          aria-hidden
        />
        <div className="relative space-y-5">
          <div className="space-y-2.5">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                style={{ animation: "badge-pulse 2s ease-in-out infinite" }}
                aria-hidden
              />
              Cookies
            </span>
            <p className="text-lg font-bold tracking-tight text-text-primary sm:text-xl">
              Help us measure what works
            </p>
            <p className="text-sm leading-relaxed text-text-muted">
              Essential storage keeps the site running. Optional analytics &amp; ads cookies
              help us improve campaigns.{" "}
              <Link
                href="/privacy"
                className="font-medium text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:decoration-accent"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <Button
              type="button"
              variant="secondary"
              size="md"
              disabled={!isInteractive}
              className="w-full min-h-11 shadow-lg shadow-accent-amber/25"
              onClick={() => handleChoice("granted")}
            >
              Accept all
            </Button>
            <Button
              type="button"
              variant="outline"
              size="md"
              disabled={!isInteractive}
              className="w-full min-h-11"
              onClick={() => handleChoice("denied")}
            >
              Reject non-essential
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
