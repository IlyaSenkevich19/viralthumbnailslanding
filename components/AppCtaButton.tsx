"use client";

import Button from "@/components/ui/Button";
import { useAttributedAppUrl } from "@/lib/use-attributed-app-url";
import type { ComponentProps } from "react";

type AppCtaButtonProps = Omit<ComponentProps<typeof Button>, "href"> & {
  appHref: string;
};

/** App CTA with landing UTM / gclid forwarded in the query string. */
export default function AppCtaButton({ appHref, ...props }: AppCtaButtonProps) {
  const href = useAttributedAppUrl(appHref);
  return <Button {...props} href={href} />;
}
