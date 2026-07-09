'use client';

import { WifiOff } from 'lucide-react';
import { useNetworkStatus } from '@/lib/use-network-status';

/** Non-blocking banner shown while the browser reports offline. */
export function NetworkStatusBanner() {
  const isOnline = useNetworkStatus();
  if (isOnline) {
    return null;
  }
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-x-0 top-0 z-[90] border-b border-amber-500/25 bg-amber-500/10 px-4 py-2.5 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-center gap-2 text-center text-sm text-zinc-100">
        <WifiOff className="h-4 w-4 shrink-0 text-amber-300" aria-hidden />
        <p className="text-pretty">
          You&apos;re offline. This page stays open, but pricing and app links resume when your connection returns.
        </p>
      </div>
    </div>
  );
}
