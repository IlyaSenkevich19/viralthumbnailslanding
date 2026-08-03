"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { CONSENT_UPDATED_EVENT, isAnalyticsStorageGranted } from "@/lib/consent";

const Analytics = dynamic(
  () => import("@vercel/analytics/next").then((mod) => mod.Analytics),
  { ssr: false, loading: () => null },
);
const SpeedInsights = dynamic(
  () => import("@vercel/speed-insights/next").then((mod) => mod.SpeedInsights),
  { ssr: false, loading: () => null },
);

function scheduleIdle(callback: () => void): () => void {
  let idleId: number | undefined;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  if ("requestIdleCallback" in window) {
    idleId = window.requestIdleCallback(callback, { timeout: 8000 });
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

export default function VercelObservabilityLazy() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let cancelIdle: (() => void) | undefined;
    function enable(): void {
      if (!cancelled) {
        setShouldLoad(true);
      }
    }
    function scheduleAfterLoad(): void {
      if (!isAnalyticsStorageGranted()) return;
      cancelIdle = scheduleIdle(enable);
    }
    function handleConsentUpdate(): void {
      scheduleAfterLoad();
    }
    if (document.readyState === "complete") {
      scheduleAfterLoad();
    } else {
      window.addEventListener("load", scheduleAfterLoad, { once: true });
    }
    window.addEventListener(CONSENT_UPDATED_EVENT, handleConsentUpdate);
    return () => {
      cancelled = true;
      cancelIdle?.();
      window.removeEventListener("load", scheduleAfterLoad);
      window.removeEventListener(CONSENT_UPDATED_EVENT, handleConsentUpdate);
    };
  }, []);

  if (!shouldLoad) {
    return null;
  }

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
