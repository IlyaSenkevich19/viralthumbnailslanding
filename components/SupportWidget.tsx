"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X, Send, ArrowUpRight } from "lucide-react";

const WHATSAPP_NUMBER = "375XXXXXXXXX";

export default function SupportWidget() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1500);
    return () => clearTimeout(t);
  }, []);

  function handleSend() {
    const text = [
      name.trim() ? `Hi, I'm ${name.trim()}.` : "Hi!",
      message.trim() || "I have a question about ViralThumblify.",
    ].join(" ");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  function handleQuick(text: string) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end">
      {/* Chat panel */}
      <div
        className={`mb-3 w-[320px] origin-bottom-right overflow-hidden rounded-2xl border border-border bg-bg-card shadow-2xl shadow-black/40 transition-all duration-300 sm:w-[340px] ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-95 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="relative flex items-center gap-3 bg-[#25D366] px-5 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
            <MessageCircle className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">
              ViralThumblify Support
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-white/90" />
              Online — replies in minutes
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-5 py-4">
          {sent ? (
            <div className="flex flex-col items-center py-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10">
                <ArrowUpRight className="h-6 w-6 text-[#25D366]" />
              </div>
              <p className="mt-3 text-sm font-medium text-text-primary">
                Opening WhatsApp...
              </p>
              <p className="mt-1 text-xs text-text-dim">
                Continue the conversation there.
              </p>
            </div>
          ) : (
            <>
              {/* Greeting bubble */}
              <div
                className={`mb-4 rounded-xl rounded-tl-none bg-bg-elevated px-4 py-3 text-sm text-text-muted transition-all duration-500 ${
                  open
                    ? "translate-x-0 opacity-100 delay-200"
                    : "-translate-x-2 opacity-0"
                }`}
              >
                Hey! 👋 Ask us anything about ViralThumblify. We&apos;ll
                reply in WhatsApp.
              </div>

              {/* Quick actions */}
              <div
                className={`mb-4 flex flex-wrap gap-2 transition-all duration-500 ${
                  open
                    ? "translate-y-0 opacity-100 delay-300"
                    : "translate-y-2 opacity-0"
                }`}
              >
                {[
                  "How does it work?",
                  "Pricing question",
                  "Need help",
                ].map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => handleQuick(q)}
                    className="rounded-full border border-border bg-bg px-3 py-1.5 text-xs text-text-muted transition-all hover:border-[#25D366]/40 hover:text-text-primary"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Name */}
              <div
                className={`transition-all duration-500 ${
                  open
                    ? "translate-y-0 opacity-100 delay-[350ms]"
                    : "translate-y-2 opacity-0"
                }`}
              >
                <input
                  type="text"
                  placeholder="Your name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mb-3 w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-dim outline-none transition-all focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20"
                />
              </div>

              {/* Message */}
              <div
                className={`transition-all duration-500 ${
                  open
                    ? "translate-y-0 opacity-100 delay-[400ms]"
                    : "translate-y-2 opacity-0"
                }`}
              >
                <textarea
                  placeholder="Type your message..."
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mb-3 w-full resize-none rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-dim outline-none transition-all focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20"
                />
              </div>

              {/* Send */}
              <div
                className={`transition-all duration-500 ${
                  open
                    ? "translate-y-0 opacity-100 delay-[450ms]"
                    : "translate-y-2 opacity-0"
                }`}
              >
                <button
                  onClick={handleSend}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#1fb855] active:scale-[0.98]"
                >
                  <Send className="h-4 w-4" />
                  Send via WhatsApp
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Open support chat"}
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#25D366]/40 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        } ${open ? "rotate-0" : "hover:scale-105"}`}
      >
        <MessageCircle
          className={`absolute h-6 w-6 text-white transition-all duration-300 ${
            open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <X
          className={`absolute h-6 w-6 text-white transition-all duration-300 ${
            open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </button>
    </div>
  );
}
