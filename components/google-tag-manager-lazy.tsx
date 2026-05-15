"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GTM_IDLE_DELAY_MS = 15000;
const GTM_IDLE_TIMEOUT_MS = 10000;
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
    timeoutId = setTimeout(callback, 3500);
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
    let delayId: ReturnType<typeof setTimeout> | undefined;
    let cancelIdle: (() => void) | undefined;
    function enable(): void {
      if (!cancelled) {
        setShouldLoad(true);
      }
    }
    function scheduleAfterLoad(): void {
      delayId = setTimeout(() => {
        cancelIdle = scheduleIdle(enable);
      }, GTM_IDLE_DELAY_MS);
    }
    function enableFromInteraction(): void {
      if (delayId !== undefined) {
        clearTimeout(delayId);
      }
      cancelIdle?.();
      cancelIdle = scheduleIdle(enable);
    }
    if (document.readyState === "complete") {
      scheduleAfterLoad();
    } else {
      window.addEventListener("load", scheduleAfterLoad, { once: true });
    }
    interactionEvents.forEach((eventName) => {
      window.addEventListener(eventName, enableFromInteraction, {
        once: true,
        passive: true,
      });
    });
    return () => {
      cancelled = true;
      if (delayId !== undefined) {
        clearTimeout(delayId);
      }
      cancelIdle?.();
      window.removeEventListener("load", scheduleAfterLoad);
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, enableFromInteraction);
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
