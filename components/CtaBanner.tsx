import Button from "@/components/ui/Button";
import { VIRAL_APP_SIGNUP_URL } from "@/lib/app-url";
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
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Ready when you are
          </span>
          <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
            Open the same studio you saw on this page
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-muted">
            Ten free thumbnails. No card. If the workflow clicks, pick a plan
            later — if not, you still saved a few hours in Canva.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="secondary"
              size="lg"
              href={VIRAL_APP_SIGNUP_URL}
            >
              Get Started for Free!
            </Button>
            <Button variant="outline" size="lg" href="/#how-it-works">
              Review the workflow
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
