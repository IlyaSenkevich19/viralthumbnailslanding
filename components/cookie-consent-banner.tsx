"use client";

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
      className="vt-cookie-consent-banner pointer-events-none fixed inset-x-0 bottom-0 z-[90] flex justify-start p-4 pr-[5.5rem] sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-md sm:p-0 sm:pr-0"
    >
      <div className="pointer-events-auto relative w-full overflow-hidden rounded-2xl border border-border bg-bg-card p-5 shadow-2xl shadow-black/50 sm:p-6">
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-accent/[0.12] blur-3xl"
          aria-hidden
        />
        <div className="relative space-y-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Cookies
            </p>
            <p className="text-sm leading-relaxed text-text-muted">
              Essential storage keeps ViralThumblify running. Accept analytics and ads
              measurement if you want us to improve campaigns and understand signups.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <Button
              type="button"
              variant="primary"
              size="sm"
              disabled={!isInteractive}
              className="w-full sm:w-auto"
              onClick={() => handleChoice("granted")}
            >
              Accept all
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={!isInteractive}
              className="w-full sm:w-auto"
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
