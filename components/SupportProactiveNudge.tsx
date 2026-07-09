"use client";

/**
 * Proactive support bubble above the launcher.
 * Keep markup/classes in sync with ViralThumbnails/apps/frontend/src/components/support/support-proactive-nudge.tsx
 */

import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";

type SupportProactiveNudgeProps = {
  visible: boolean;
  onDismiss: () => void;
  onAccept: () => void;
};

export function SupportProactiveNudge({
  visible,
  onDismiss,
  onAccept,
}: SupportProactiveNudgeProps) {
  const acceptButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!visible) {
      return;
    }
    acceptButtonRef.current?.focus({ preventScroll: true });
  }, [visible]);

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Support offer"
      aria-hidden={!visible}
      className={`mb-3 w-[min(calc(100vw-2rem),300px)] origin-bottom-right rounded-2xl border border-zinc-700 bg-zinc-900 p-4 shadow-2xl shadow-black/40 transition-all duration-300 motion-reduce:transition-none ${
        visible
          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-3 scale-95 opacity-0"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/15">
          <MessageCircle
            className="h-5 w-5 text-red-400"
            strokeWidth={1.75}
            aria-hidden
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-zinc-100">
            Need help with thumbnails?
          </p>
          <p className="mt-0.5 text-xs text-zinc-400">
            We can answer questions about setup, credits, or exports.
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={onDismiss}
          className="rounded-lg px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:text-zinc-100"
        >
          No, thanks
        </button>
        <button
          ref={acceptButtonRef}
          type="button"
          onClick={onAccept}
          className="rounded-lg border border-red-500/60 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-400 transition-colors hover:bg-red-500/15"
        >
          Yes, sure
        </button>
      </div>
    </div>
  );
}
