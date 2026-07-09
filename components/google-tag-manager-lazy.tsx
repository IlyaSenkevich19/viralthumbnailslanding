"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

/** After full page load — keeps GTM off the LCP window while loading sooner than 15s. */
const GTM_LOAD_DELAY_MS = 5000;
const GTM_IDLE_TIMEOUT_MS = 8000;
const GTM_SCROLL_DEPTH_PX = 300;
const interactionEvents = ["pointerdown", "keydown", "touchstart"] as const;

type GoogleTagManagerLazyProps = {
  readonly gtmId: string;
};

function scheduleIdle(callback: () => void): () => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  let idleId: number | undefined;
  if ("requestIdleCallback" in window) {
    idleId = window.requestIdleCallback(callback, { timeout: GTM_IDLE_TIMEOUT_MS });
  } else {
    timeoutId = setTimeout(callback, 3000);
  }
  return () => {
    if (idleId !== undefined) {
      window.cancelIdleCallback(idleId);
    }
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
  };
}

export default function GoogleTagManagerLazy({
  gtmId,
}: GoogleTagManagerLazyProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let hasScheduledLoad = false;
    let delayId: ReturnType<typeof setTimeout> | undefined;
    let cancelIdle: (() => void) | undefined;
    function enable(): void {
      if (!cancelled) {
        setShouldLoad(true);
      }
    }
    function scheduleGtmLoad(): void {
      if (hasScheduledLoad || cancelled) {
        return;
      }
      hasScheduledLoad = true;
      if (delayId !== undefined) {
        clearTimeout(delayId);
        delayId = undefined;
      }
      cancelIdle?.();
      cancelIdle = scheduleIdle(enable);
    }
    function scheduleAfterLoad(): void {
      delayId = setTimeout(scheduleGtmLoad, GTM_LOAD_DELAY_MS);
    }
    function handleScroll(): void {
      if (window.scrollY < GTM_SCROLL_DEPTH_PX) {
        return;
      }
      scheduleGtmLoad();
    }
    if (document.readyState === "complete") {
      scheduleAfterLoad();
    } else {
      window.addEventListener("load", scheduleAfterLoad, { once: true });
    }
    interactionEvents.forEach((eventName) => {
      window.addEventListener(eventName, scheduleGtmLoad, {
        once: true,
        passive: true,
      });
    });
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      cancelled = true;
      if (delayId !== undefined) {
        clearTimeout(delayId);
      }
      cancelIdle?.();
      window.removeEventListener("load", scheduleAfterLoad);
      window.removeEventListener("scroll", handleScroll);
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, scheduleGtmLoad);
      });
    };
  }, []);

  if (!shouldLoad) {
    return null;
  }

  return (
    <>
      <Script id="gtm-init" strategy="lazyOnload">
        {`window.dataLayer=window.dataLayer||[];
window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});`}
      </Script>
      <Script
        id="gtm-script"
        src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
        strategy="lazyOnload"
      />
    </>
  );
}
