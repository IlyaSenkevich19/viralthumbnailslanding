import { Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CtaBanner() {
  return (
    <section id="cta" className="relative overflow-hidden py-20 sm:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[140px]" />
      </div>

      <ScrollReveal>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Sparkles className="mx-auto h-10 w-10 text-accent-amber" />

          <h2 className="mt-6 text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
            Ready to Make Click-Boosting Thumbnails?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg text-text-muted">
            Join 2,500+ creators who already save 10+ hours a week and get 2×
            more clicks. Start free — no credit card, no design skills needed.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="secondary"
              size="lg"
              href="#lead-form"
              className="animate-[pulse-glow_3s_ease-in-out_infinite]"
            >
              Get Started for Free!
            </Button>
            <Button variant="outline" size="lg" href="#how-it-works">
              Watch Demo
            </Button>
          </div>

          <p className="mt-6 text-sm text-text-dim">
            No tech or design skills needed.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
