import type { ReactNode } from "react";
import { VIRAL_APP_PLANS_URL } from "@/lib/app-url";

type SocialLink = { label: string; href: string; icon: ReactNode };

/** Add real profile URLs here when available (do not use "#"). */
const socials: SocialLink[] = [];

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: VIRAL_APP_PLANS_URL },
      { label: "How It Works", href: "/#how-it-works" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg-footer">
      {/* Gradient glow at top */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2">
              <span className="text-lg font-bold text-text-primary">
                Viral<span className="text-accent">Thumblify</span>
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-dim">
              AI thumbnail studio for YouTube creators who want faster uploads
              and covers that still read on mobile.
            </p>

            {socials.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-dim transition-all hover:border-border-hover hover:text-text-primary"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-text-primary">
                {col.title}
              </h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((link, index) => (
                  <li key={`${link.label}-${link.href}-${index}`}>
                    <a
                      href={link.href}
                      className="text-sm text-text-dim transition-colors hover:text-text-muted"
                      {...(/^https?:\/\//i.test(link.href)
                        ? { rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-text-dim">
          &copy; {new Date().getFullYear()} ViralThumblify. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
