import { Check, Shield, CreditCard } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { VIRAL_APP_PLANS_URL } from "@/lib/app-url";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Try the studio before you commit.",
    features: [
      "10 thumbnails total",
      "Unused credits roll over — nothing resets at month-end",
      "5 basic templates",
      "Watermarked exports",
      "Community support",
    ],
    ctaText: "Start free",
    ctaVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    description: "For creators uploading 1–2 videos per week.",
    features: [
      "50 thumbnails / month",
      "Unused credits roll over — nothing resets at month-end",
      "All templates",
      "Canva import",
      "No watermark",
      "Email support",
    ],
    ctaText: "Get Starter",
    ctaVariant: "primary" as const,
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    description: "For serious creators who want max CTR.",
    features: [
      "200 thumbnails / month",
      "Unused credits roll over — nothing resets at month-end",
      "A/B testing",
      "Custom branding",
      "Priority support",
      "Advanced analytics",
      "No watermark",
    ],
    ctaText: "Get Pro",
    ctaVariant: "secondary" as const,
    popular: true,
  },
  {
    name: "Agency",
    price: "$99",
    period: "/mo",
    description: "For teams managing multiple channels.",
    features: [
      "Unlimited thumbnails",
      "Unused credits roll over — nothing resets at month-end",
      "Team access (5 seats)",
      "API access",
      "White-label exports",
      "Dedicated support",
      "All Pro features",
    ],
    ctaText: "Get Agency",
    ctaVariant: "primary" as const,
    popular: false,
  },
];

const guarantees = [
  {
    icon: <Shield className="h-5 w-5" />,
    text: "7-day money-back guarantee",
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    text: "No credit card required for the free tier",
  },
];

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
              Start free, upgrade when it sticks
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              Plans match what you saw in the app. Cancel anytime if the workflow
              does not fit your upload rhythm.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? "border-accent bg-bg-card shadow-lg shadow-accent/10 hover:shadow-xl hover:shadow-accent/15 lg:-mt-4 lg:mb-[-16px] lg:pb-10"
                    : "border-border bg-bg-card hover:border-border-hover hover:shadow-lg hover:shadow-accent/5"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-white">
                    Most Popular
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {plan.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-text-primary">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-text-dim">{plan.period}</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-text-muted">
                    {plan.description}
                  </p>
                </div>

                <ul className="mb-6 flex-1 space-y-3">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <span className="text-text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.ctaVariant}
                  size="md"
                  href={VIRAL_APP_PLANS_URL}
                  className="w-full"
                >
                  {plan.ctaText}
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-12">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            {guarantees.map((g, i) => (
              <div
                key={i}
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
