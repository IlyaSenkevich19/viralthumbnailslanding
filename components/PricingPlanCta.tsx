"use client";

import Button from "@/components/ui/Button";
import { useAttributedAppUrl } from "@/lib/use-attributed-app-url";
import {
  VIRAL_APP_SIGNUP_URL,
  resolveAppCreditsUrl,
} from "@/lib/app-url";

type PricingPlanCtaProps = {
  planId: string;
  variant: "primary" | "secondary" | "outline" | "ghost";
  label: string;
};

export function PricingPlanCta({ planId, variant, label }: PricingPlanCtaProps) {
  const baseHref = planId === "trial" ? VIRAL_APP_SIGNUP_URL : resolveAppCreditsUrl(planId);
  const href = useAttributedAppUrl(baseHref);
  return (
    <Button variant={variant} size="md" href={href} className="w-full">
      {label}
    </Button>
  );
}
