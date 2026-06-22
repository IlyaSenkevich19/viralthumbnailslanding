"use client";

import { useAttributedAppUrl } from "@/lib/use-attributed-app-url";

type AppLoginLinkProps = {
  appHref: string;
  className?: string;
  children: React.ReactNode;
};

export function AppLoginLink({ appHref, className, children }: AppLoginLinkProps) {
  const href = useAttributedAppUrl(appHref);
  return (
    <a href={href} rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
