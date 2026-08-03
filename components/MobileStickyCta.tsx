"use client";

import { useEffect, useState } from "react";
import AppCtaButton from "@/components/AppCtaButton";
import { VIRAL_APP_SIGNUP_URL } from "@/lib/app-url";

export const STICKY_CTA_ATTR = "data-vt-sticky-cta";

/**
 * Mobile sticky signup bar after the hero leaves view.
 * Hidden during consent, near final CTA, and on lg+.
 */
export default function MobileStickyCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const finalCta = document.getElementById("cta");
    if (!hero) return;

    let heroOut = false;
    let nearFinalCta = false;
    let consentOpen = document.documentElement.hasAttribute("data-vt-consent-banner");

    function syncVisibility(): void {
      const next = heroOut && !nearFinalCta && !consentOpen;
      setIsVisible(next);
      if (next) {
        document.documentElement.setAttribute(STICKY_CTA_ATTR, "1");
      } else {
        document.documentElement.removeAttribute(STICKY_CTA_ATTR);
      }
    }

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroOut = !entry.isIntersecting;
        syncVisibility();
      },
      { threshold: 0.08 },
    );
    heroObserver.observe(hero);

    let finalObserver: IntersectionObserver | null = null;
    if (finalCta) {
      finalObserver = new IntersectionObserver(
        ([entry]) => {
          nearFinalCta = entry.isIntersecting;
          syncVisibility();
        },
        { rootMargin: "0px 0px -20% 0px", threshold: 0.15 },
      );
      finalObserver.observe(finalCta);
    }

    const attrObserver = new MutationObserver(() => {
      consentOpen = document.documentElement.hasAttribute("data-vt-consent-banner");
      syncVisibility();
    });
    attrObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-vt-consent-banner"],
    });

    syncVisibility();

    return () => {
      heroObserver.disconnect();
      finalObserver?.disconnect();
      attrObserver.disconnect();
      document.documentElement.removeAttribute(STICKY_CTA_ATTR);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[80] border-t border-border/80 bg-bg/95 px-4 pt-3 shadow-[0_-12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
      role="region"
      aria-label="Continue to signup"
    >
      <div className="mx-auto flex max-w-lg items-center gap-3">
        <p className="min-w-0 flex-1 text-xs leading-snug text-text-muted">
          3 free credits · no card
        </p>
        <AppCtaButton
          variant="secondary"
          size="sm"
          appHref={VIRAL_APP_SIGNUP_URL}
          className="shrink-0 min-h-11 px-5"
        >
          Get started
        </AppCtaButton>
      </div>
    </div>
  );
}
