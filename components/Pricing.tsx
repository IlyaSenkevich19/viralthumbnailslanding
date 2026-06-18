import { Check, CreditCard } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import {
  VIRAL_APP_SIGNUP_URL,
  resolveAppCreditsUrl,
} from "@/lib/app-url";
import { visibleLandingPricingPlans } from "@/lib/pricing-plans";

const pricingGridClass =
  visibleLandingPricingPlans.length > 2
    ? "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
    : "mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2";

const guarantees = [
  {
    icon: <CreditCard className="h-5 w-5" />,
    text: "3 starter credits on signup — no card required",
  },
];

function resolvePlanButtonHref(planId: string): string {
  if (planId === "trial") return VIRAL_APP_SIGNUP_URL;
  return resolveAppCreditsUrl(planId);
}

function resolvePlanButtonLabel(planId: string, defaultLabel: string): string {
  if (planId === "trial") return defaultLabel;
  if (planId.startsWith("pack_")) {
    return "Sign in to buy credits";
  }
  return defaultLabel;
}

export default function Pricing() {
  return (
    <SectionWrapper id="pricing" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.03] blur-[120px]" />
      </div>

      <div className="relative">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Pricing
            </span>
            <h2 className="mt-3 text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
              Start free, top up when you need more
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              One-time credit packs — same pricing you see in the app after signup.
              No monthly subscription or hidden reset.
            </p>
          </div>
        </ScrollReveal>

        <div className={pricingGridClass}>
          {visibleLandingPricingPlans.map((plan, i) => (
            <ScrollReveal key={plan.id} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? "border-accent bg-bg-card shadow-lg shadow-accent/10 hover:shadow-xl hover:shadow-accent/15 lg:-mt-4 lg:mb-[-16px] lg:pb-10"
                    : "border-border bg-bg-card hover:border-border-hover hover:shadow-lg hover:shadow-accent/5"
                }`}
              >
                {(plan.badge ?? (plan.popular ? "Best value" : null)) && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-white">
                    {plan.badge ?? "Best value"}
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {plan.name}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-text-primary">
                      {plan.price}
                    </span>
                    <span className="rounded-full border border-border bg-bg-elevated px-2.5 py-0.5 text-xs font-semibold text-text-muted">
                      {plan.credits} credits
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-text-muted">
                    {plan.description}
                  </p>
                </div>

                <ul className="mb-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <span className="text-text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.ctaVariant}
                  size="md"
                  href={resolvePlanButtonHref(plan.id)}
                  className="w-full"
                >
                  {resolvePlanButtonLabel(plan.id, plan.ctaText)}
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2} className="mt-8">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            {guarantees.map((g) => (
              <div
                key={g.text}
                className="flex items-center gap-2 text-sm text-text-dim"
              >
                <span className="text-success">{g.icon}</span>
                <span>{g.text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
