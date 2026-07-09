import { scheduleAfterPageLoadIdle } from "@/lib/schedule-after-page-load-idle";

const SERVICE_WORKER_URL = "/sw.js";

type RegisterServiceWorkerParams = {
  onUpdateAvailable?: () => void;
};

/**
 * Registers the landing service worker in production for offline navigation fallback.
 * Registration is deferred until after page load and idle time.
 */
export function registerServiceWorker({
  onUpdateAvailable,
}: RegisterServiceWorkerParams = {}): () => void {
  if (process.env.NODE_ENV !== "production") {
    return () => {};
  }
  if (!("serviceWorker" in navigator)) {
    return () => {};
  }
  return scheduleAfterPageLoadIdle(() => {
    void navigator.serviceWorker
      .register(SERVICE_WORKER_URL)
      .then((registration) => {
        registration.addEventListener("updatefound", () => {
          const installingWorker = registration.installing;
          if (!installingWorker) {
            return;
          }
          installingWorker.addEventListener("statechange", () => {
            if (
              installingWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              onUpdateAvailable?.();
            }
          });
        });
      })
      .catch(() => {
        /* Service worker unsupported or blocked */
      });
  });
}
