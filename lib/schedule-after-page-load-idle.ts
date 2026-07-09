const IDLE_CALLBACK_TIMEOUT_MS = 8000;
const IDLE_FALLBACK_DELAY_MS = 3000;

/** Defers work until after load and browser idle time to keep it off the critical path. */
export function scheduleAfterPageLoadIdle(callback: () => void): () => void {
  let idleId: number | undefined;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  function scheduleIdleCallback(): void {
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(callback, {
        timeout: IDLE_CALLBACK_TIMEOUT_MS,
      });
      return;
    }
    timeoutId = setTimeout(callback, IDLE_FALLBACK_DELAY_MS);
  }
  if (document.readyState === "complete") {
    scheduleIdleCallback();
  } else {
    window.addEventListener("load", scheduleIdleCallback, { once: true });
  }
  return () => {
    window.removeEventListener("load", scheduleIdleCallback);
    if (idleId !== undefined) {
      window.cancelIdleCallback(idleId);
    }
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
  };
}
