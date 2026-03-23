"use client";

import { useCallback, useEffect, useId, useMemo, useState } from "react";
import { X } from "lucide-react";

function digitsOnly(phone: string) {
  return phone.replace(/\D/g, "");
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const DEFAULT_PREFILL =
  "Hi! I have a question about ViralThumbnails (from the website).";

export default function WhatsAppSupportWidget() {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() ?? "";
  const phone = useMemo(() => digitsOnly(raw), [raw]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(
    process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE?.trim() || DEFAULT_PREFILL
  );
  const panelId = useId();

  const waUrl = useMemo(() => {
    if (!phone) return "";
    const text = message.trim() || DEFAULT_PREFILL;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }, [phone, message]);

  const openWhatsApp = useCallback(() => {
    if (!waUrl) return;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setOpen(false);
  }, [waUrl]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!phone) return null;

  return (
    <div
      className="fixed right-4 bottom-4 z-[100] flex flex-col items-end gap-3 sm:right-6 sm:bottom-6"
      role="region"
      aria-label="WhatsApp support"
    >
      {open && (
        <div
          id={panelId}
          className="w-[min(100vw-2rem,20rem)] rounded-2xl border border-border bg-bg-card p-4 shadow-2xl shadow-black/40"
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <h2 className="text-sm font-semibold text-text-primary">
                Chat on WhatsApp
              </h2>
              <p className="mt-1 text-xs text-text-dim">
                Your message opens in WhatsApp — we&apos;ll reply there.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-1.5 text-text-dim transition-colors hover:bg-bg hover:text-text-primary"
              aria-label="Close support panel"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <label htmlFor="wa-support-message" className="sr-only">
            Your message
          </label>
          <textarea
            id="wa-support-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="mt-3 w-full resize-y rounded-xl border border-border bg-bg px-3 py-2.5 text-sm text-text-primary placeholder:text-text-dim outline-none transition-all focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/25"
            placeholder="Type your question…"
          />

          <button
            type="button"
            onClick={openWhatsApp}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-transform hover:scale-[1.02] hover:bg-[#20BD5A] active:scale-[0.98]"
          >
            <WhatsAppGlyph className="h-5 w-5" />
            Open WhatsApp
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/35 transition-transform hover:scale-105 hover:bg-[#20BD5A] focus:ring-4 focus:ring-[#25D366]/30 focus:outline-none active:scale-95"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close WhatsApp support" : "Open WhatsApp support"}
      >
        {open ? (
          <X className="h-7 w-7" aria-hidden />
        ) : (
          <WhatsAppGlyph className="h-7 w-7" />
        )}
      </button>
    </div>
  );
}
