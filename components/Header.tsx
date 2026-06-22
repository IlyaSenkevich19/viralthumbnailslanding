import { AppLoginLink } from "@/components/AppLoginLink";
import AppCtaButton from "@/components/AppCtaButton";
import { VIRAL_APP_LOGIN_URL, VIRAL_APP_SIGNUP_URL } from "@/lib/app-url";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
];

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="relative z-10 flex items-center gap-2">
          <span className="text-lg font-bold text-text-primary">
            Viral<span className="text-accent">Thumblify</span>
          </span>
        </a>

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

        <div className="hidden items-center gap-3 lg:flex">
          <AppLoginLink
            appHref={VIRAL_APP_LOGIN_URL}
            className="text-sm text-text-muted transition-colors hover:text-text-primary"
          >
            Login
          </AppLoginLink>
          <AppCtaButton variant="primary" size="sm" appHref={VIRAL_APP_SIGNUP_URL}>
            Get started
          </AppCtaButton>
        </div>

        <details className="group lg:hidden">
          <summary
            className="relative z-10 flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg transition-colors hover:bg-bg-card"
            aria-label="Toggle menu"
          >
            <span className="flex w-5 flex-col items-end gap-[5px]">
              <span className="block h-[2px] w-5 rounded-full bg-text-primary transition-transform duration-200 group-open:translate-y-[7px] group-open:rotate-45" />
              <span className="block h-[2px] w-3.5 rounded-full bg-text-primary transition-opacity duration-200 group-open:opacity-0" />
              <span className="block h-[2px] w-5 rounded-full bg-text-primary transition-transform duration-200 group-open:-translate-y-[7px] group-open:-rotate-45" />
            </span>
          </summary>
          <div className="absolute top-16 right-0 left-0 border-t border-border/50 bg-bg/95 backdrop-blur-xl">
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-lg font-medium text-text-muted hover:bg-accent/10 hover:text-text-primary"
                >
                  {link.label}
                </a>
              ))}
              <AppLoginLink
                appHref={VIRAL_APP_LOGIN_URL}
                className="rounded-lg px-4 py-3 text-lg font-medium text-text-muted hover:bg-accent/10 hover:text-text-primary"
              >
                Login
              </AppLoginLink>
              <div className="mt-3 px-4">
                <AppCtaButton
                  variant="primary"
                  size="md"
                  appHref={VIRAL_APP_SIGNUP_URL}
                  className="w-full"
                >
                  Get started
                </AppCtaButton>
              </div>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
