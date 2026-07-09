"use client";

/**
 * Proactive support bubble above the launcher.
 * Keep markup/classes in sync with ViralThumbnails/apps/frontend/src/components/support/support-proactive-nudge.tsx
 */

import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import { playSupportNudgeSound } from "@/lib/playSupportNudgeSound";

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
  const hasPlayedSoundRef = useRef(false);

  useEffect(() => {
    if (!visible) {
      hasPlayedSoundRef.current = false;
      return;
    }
    if (!hasPlayedSoundRef.current) {
      hasPlayedSoundRef.current = true;
      playSupportNudgeSound();
    }
    acceptButtonRef.current?.focus({ preventScroll: true });
  }, [visible]);

  if (!visible) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Support offer"
      className="pointer-events-auto w-full origin-bottom-right overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-2xl shadow-black/40 transition-all duration-300 motion-reduce:transition-none"
    >
      <div className="flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-500 px-5 py-3.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
          <MessageCircle className="h-4 w-4 text-white" aria-hidden />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-white">
            ViralThumblify Support
          </div>
          <div className="flex items-center gap-1.5 text-xs text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-white/90" aria-hidden />
            <span>We&apos;re here to help</span>
          </div>
        </div>
      </div>

      <div className="px-5 py-4 text-zinc-100">
        <div className="rounded-xl rounded-tl-none border border-zinc-700/80 bg-zinc-800/80 px-4 py-3 text-sm text-zinc-300">
          Need help with thumbnails? Ask about setup, credits, or exports —
          we&apos;ll follow up by email.
        </div>
        <div className="mt-4 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onDismiss}
            className="rounded-lg px-3 py-2 text-xs font-medium text-zinc-400 transition-colors hover:text-zinc-100"
          >
            No, thanks
          </button>
          <button
            ref={acceptButtonRef}
            type="button"
            onClick={onAccept}
            className="rounded-lg bg-gradient-to-r from-red-600 to-red-500 px-4 py-2 text-xs font-medium text-white transition-all hover:from-red-500 hover:to-red-500 active:scale-[0.98]"
          >
            Yes, sure
          </button>
        </div>
      </div>
    </div>
  );
}
