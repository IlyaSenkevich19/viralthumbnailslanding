"use client";

import { useEffect, useState } from "react";
import {
  applyStoredConsentDecision,
  COOKIE_PREFERENCES_OPEN_EVENT,
  hasConsentDecision,
  persistAndUpdateConsent,
} from "@/lib/consent";

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (hasConsentDecision()) {
      applyStoredConsentDecision();
    } else {
      setIsVisible(true);
    }
    function handleOpenPreferences(): void {
      setIsVisible(true);
    }
    window.addEventListener(COOKIE_PREFERENCES_OPEN_EVENT, handleOpenPreferences);
    return () => {
      window.removeEventListener(COOKIE_PREFERENCES_OPEN_EVENT, handleOpenPreferences);
    };
  }, []);
  function handleChoice(value: "denied" | "granted"): void {
    persistAndUpdateConsent(value);
    setIsVisible(false);
  }
  if (!isVisible) {
    return null;
  }
  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-border bg-bg-card/95 px-4 py-4 shadow-lg backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 text-sm text-text-primary sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl leading-relaxed text-text-dim">
          We use essential storage to run ViralThumblify. With your permission, we also use
          analytics and ads measurement to understand signups and improve campaigns.
        </p>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            className="rounded-md border border-border px-4 py-2 font-medium text-text-primary transition-colors hover:bg-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => handleChoice("denied")}
          >
            Reject non-essential
          </button>
          <button
            type="button"
            className="rounded-md bg-text-primary px-4 py-2 font-medium text-bg-page transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => handleChoice("granted")}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
