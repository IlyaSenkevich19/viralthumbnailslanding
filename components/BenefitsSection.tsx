import {
  CheckCircle,
  TrendingUp,
  Clock,
  DollarSign,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

const benefits = [
  "Stop paying $50–200 per thumbnail to freelancers",
  "Save 10+ hours every week — spend it creating, not designing",
  "Consistent branding across your entire channel",
  "Boost CTR and views with A/B-tested thumbnails",
];

const stats = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    value: "+35%",
    label: "Average CTR Increase",
    color: "text-accent",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    value: "10+ hrs",
    label: "Saved Per Week",
    color: "text-accent-amber",
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    value: "$600+",
    label: "Saved Per Month",
    color: "text-success",
  },
];

export default function BenefitsSection() {
  return (
    <SectionWrapper id="benefits" className="bg-bg-elevated">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
            Why Creators Switch to AI Thumbnails
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-muted">
            YouTubers with 5–30K subscribers are replacing expensive designers
            and hours in Canva with AI thumbnails that actually perform.
          </p>
        </div>
      </ScrollReveal>

      {/* Stats row */}
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {stats.map((s, i) => (
          <ScrollReveal key={i} delay={i * 0.12}>
            <div className="group rounded-2xl border border-border bg-bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:bg-bg-card-hover hover:shadow-lg hover:shadow-accent/5">
              <div
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-bg-elevated ${s.color} transition-transform duration-300 group-hover:scale-110`}
              >
                {s.icon}
              </div>
              <div
                className={`mt-4 text-4xl font-extrabold tracking-tight ${s.color} sm:text-5xl`}
              >
                {s.value}
              </div>
              <div className="mt-2 text-sm text-text-muted">{s.label}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Benefits list */}
      <ScrollReveal delay={0.3}>
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-border/50 bg-bg-card/50 px-5 py-4 transition-colors hover:border-border-hover"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span className="text-sm text-text-muted">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
