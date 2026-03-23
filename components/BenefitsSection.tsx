import { CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

const benefits = [
  "Stop paying $50–200 per thumbnail to freelancers",
  "Save 10+ hours every week — spend it creating, not designing",
  "Consistent branding across your entire channel",
  "Boost CTR and views with A/B-tested thumbnails",
];

export default function BenefitsSection() {
  return (
    <SectionWrapper id="how-it-works" className="bg-bg-elevated">
      <ScrollReveal>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-text-primary sm:text-2xl lg:text-3xl">
              Why Creators Switch to AI Thumbnails
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-text-muted">
              YouTubers with 5–30K subscribers are replacing expensive designers
              and hours in Canva with AI-generated thumbnails that actually
              perform.
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                  <span className="text-text-muted">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-bg-card p-8">
            <div className="text-center text-5xl font-extrabold text-accent">
              +35%
            </div>
            <div className="mt-1 text-center text-sm text-text-muted">
              Average CTR Increase
            </div>
            <div className="mx-auto mt-4 h-px w-16 bg-border" />
            <div className="mt-4 text-center text-3xl font-extrabold text-accent-amber">
              10+ hrs
            </div>
            <div className="mt-1 text-center text-sm text-text-muted">
              Saved Per Week
            </div>
            <div className="mx-auto mt-4 h-px w-16 bg-border" />
            <div className="mt-4 text-center text-3xl font-extrabold text-success">
              $600+
            </div>
            <div className="mt-1 text-center text-sm text-text-muted">
              Saved Per Month vs. Freelancers
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
