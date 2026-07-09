'use client';

import { useEffect, useRef, useState } from 'react';
import { registerServiceWorker } from '@/lib/register-service-worker';

/** Registers the landing service worker and prompts reload when an update is ready. */
export function ServiceWorkerProvider() {
  const hasShownUpdateToastRef = useRef(false);
  const [isUpdateVisible, setIsUpdateVisible] = useState(false);

  useEffect(() => {
    function showUpdateToast(): void {
      if (hasShownUpdateToastRef.current) {
        return;
      }
      hasShownUpdateToastRef.current = true;
      setIsUpdateVisible(true);
    }
    return registerServiceWorker({ onUpdateAvailable: showUpdateToast });
  }, []);

  if (!isUpdateVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 z-[120] max-w-[18rem] rounded-xl border border-zinc-700 bg-zinc-900 p-4 shadow-2xl shadow-black/40">
      <p className="text-sm font-semibold text-zinc-100">Update available</p>
      <p className="mt-1 text-xs text-zinc-400">Reload to get the latest version.</p>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="mt-3 w-full rounded-lg bg-gradient-to-r from-red-600 to-red-500 px-3 py-2 text-xs font-semibold text-white"
      >
        Reload
      </button>
    </div>
  );
}
