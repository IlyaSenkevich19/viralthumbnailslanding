"use client";

import { useEffect, useState, useRef } from "react";
import { Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import { VIRAL_APP_URL } from "@/lib/app-url";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: VIRAL_APP_URL },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isVisible || mobileOpen
          ? "border-b border-border/50 bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="relative z-10 flex items-center gap-2">
          <Zap className="h-6 w-6 text-accent" />
          <span className="text-lg font-bold text-text-primary">
            Viral<span className="text-accent">Thumbnails</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={VIRAL_APP_URL}
            rel="noopener noreferrer"
            className="text-sm text-text-muted transition-colors hover:text-text-primary"
          >
            Login
          </a>
          <Button variant="primary" size="sm" href={VIRAL_APP_URL}>
            Get Started
          </Button>
        </div>

        {/* Mobile hamburger — animated bars */}
        <button
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-bg-card lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex w-5 flex-col items-end gap-[5px]">
            <span
              className={`block h-[2px] rounded-full bg-text-primary transition-all duration-300 ease-out ${
                mobileOpen
                  ? "w-5 translate-y-[7px] rotate-45"
                  : "w-5"
              }`}
            />
            <span
              className={`block h-[2px] rounded-full bg-text-primary transition-all duration-300 ease-out ${
                mobileOpen ? "w-0 opacity-0" : "w-3.5 opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] rounded-full bg-text-primary transition-all duration-300 ease-out ${
                mobileOpen
                  ? "w-5 -translate-y-[7px] -rotate-45"
                  : "w-5"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu — slide down */}
      <div
        ref={menuRef}
        className={`overflow-hidden border-t transition-all duration-300 ease-out lg:hidden ${
          mobileOpen
            ? "max-h-[420px] border-border/50 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
        style={{ background: "rgba(10, 10, 11, 0.95)", backdropFilter: "blur(20px)" }}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-lg font-medium text-text-muted hover:bg-accent/10 hover:text-text-primary"
              style={{
                transitionProperty: "opacity, transform, background-color, color",
                transitionDuration: "0.3s, 0.3s, 0.2s, 0.2s",
                transitionTimingFunction: "ease-out",
                transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateX(0)" : "translateX(-12px)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={VIRAL_APP_URL}
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg px-4 py-3 text-lg font-medium text-text-muted hover:bg-accent/10 hover:text-text-primary"
            style={{
              transitionProperty: "opacity, transform, background-color, color",
              transitionDuration: "0.3s, 0.3s, 0.2s, 0.2s",
              transitionTimingFunction: "ease-out",
              transitionDelay: mobileOpen ? `${navLinks.length * 50}ms` : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateX(0)" : "translateX(-12px)",
            }}
          >
            Login
          </a>
          <div
            className="mt-3 px-4"
            style={{
              transitionProperty: "opacity, transform",
              transitionDuration: "0.3s",
              transitionTimingFunction: "ease-out",
              transitionDelay: mobileOpen ? `${(navLinks.length + 1) * 50}ms` : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(8px)",
            }}
          >
            <Button
              variant="primary"
              size="md"
              href={VIRAL_APP_URL}
              className="w-full"
            >
              Get Started
            </Button>
          </div>
        </nav>
      </div>

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 -z-10 bg-black/60 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />
    </header>
  );
}
