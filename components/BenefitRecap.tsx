import {
  Image as ImageIcon,
  Clock,
  DollarSign,
  TrendingUp,
  Paintbrush,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

const benefits = [
  {
    icon: <ImageIcon className="h-5 w-5" />,
    text: "AI-generated thumbnails in under 60 seconds",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    text: "No more wasting 2–3 hours per thumbnail",
  },
  {
    icon: <DollarSign className="h-5 w-5" />,
    text: "No more paying $50–200 per thumbnail",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    text: "Higher CTR → more views → more income",
  },
  {
    icon: <Paintbrush className="h-5 w-5" />,
    text: "No design skills required — ever",
  },
];

export default function BenefitRecap() {
  return (
    <SectionWrapper className="bg-bg-elevated">
      <ScrollReveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
            Everything You Need to Go Viral
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-muted">
            Before you pick a plan, here&apos;s what you&apos;re getting.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex items-center gap-2.5 rounded-full border border-border bg-bg-card px-5 py-3 text-sm font-medium text-text-primary transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                  <span className="text-accent">{b.icon}</span>
                  <span>{b.text}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
