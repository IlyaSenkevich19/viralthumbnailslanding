"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SupportWidget = dynamic(() => import("@/components/SupportWidget"), {
  ssr: false,
  loading: () => null,
});

/**
 * Loads support UI only after the page has finished loading, then when the
 * main thread is idle (fallback timeout). Keeps widget JS off the critical path.
 */
export default function SupportWidgetLazy() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    function enable() {
      if (!cancelled) {
        setShouldLoad(true);
      }
    }

    function scheduleAfterLoad() {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(enable, { timeout: 8000 });
      } else {
        timeoutId = setTimeout(enable, 2000);
      }
    }

    if (document.readyState === "complete") {
      scheduleAfterLoad();
    } else {
      window.addEventListener("load", scheduleAfterLoad, { once: true });
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!shouldLoad) {
    return null;
  }

  return <SupportWidget />;
}
