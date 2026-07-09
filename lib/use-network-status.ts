'use client';

import { useEffect, useState } from 'react';

/** Tracks browser online/offline state for non-blocking offline UI. */
export function useNetworkStatus(): boolean {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function syncOnlineState(): void {
      setIsOnline(window.navigator.onLine);
    }
    syncOnlineState();
    window.addEventListener('online', syncOnlineState);
    window.addEventListener('offline', syncOnlineState);
    return () => {
      window.removeEventListener('online', syncOnlineState);
      window.removeEventListener('offline', syncOnlineState);
    };
  }, []);

  return isOnline;
}
