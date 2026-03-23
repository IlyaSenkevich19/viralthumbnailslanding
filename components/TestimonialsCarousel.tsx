import { Quote, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    quote:
      "I went from spending 3 hours per thumbnail to 10 minutes. My CTR jumped from 4% to 7.2% in the first month.",
    author: "Jake M.",
    channel: "Tech Tips Daily",
    result: "+80% CTR",
  },
  {
    quote:
      "The AI thumbnails look better than what my $150/thumbnail designer was making. Total game changer.",
    author: "Sarah K.",
    channel: "Fitness with Sarah",
    result: "+35% Views",
  },
  {
    quote:
      "I upload 5 videos a week. This tool literally saved my channel's budget and my sanity.",
    author: "Marcus T.",
    channel: "Daily Gaming",
    result: "10hrs Saved/Week",
  },
  {
    quote:
      "My food channel was stuck at 3K subs. After switching to AI thumbnails, I hit 15K in two months. The CTR boost is real.",
    author: "Emily R.",
    channel: "Cook with Emily",
    result: "+52% CTR",
  },
  {
    quote:
      "I was skeptical, but the A/B testing feature convinced me. I now know exactly which thumbnail will perform best before publishing.",
    author: "David L.",
    channel: "Code Academy",
    result: "3x More Clicks",
  },
  {
    quote:
      "Best ROI I've ever gotten from a tool. $49/month to replace a $600/month designer — and my views actually went up.",
    author: "Priya S.",
    channel: "Finance Decoded",
    result: "+41% Views",
  },
  {
    quote:
      "The template library is insane. I found a travel-vlog style that tripled my click-through rate overnight.",
    author: "Alex W.",
    channel: "Travel Diaries",
    result: "5hrs Saved/Week",
  },
  {
    quote:
      "I run a music production channel. The AI understands my style now — it generates on-brand thumbnails every single time.",
    author: "Jordan P.",
    channel: "Music Mastery",
    result: "+67% CTR",
  },
];

export default function TestimonialsCarousel() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <SectionWrapper id="testimonials">
      <ScrollReveal>
        <h3 className="text-center text-xl font-bold text-text-primary sm:text-2xl lg:text-3xl">
          What Creators Are Saying
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-center text-text-muted">
          Join thousands of YouTubers who boosted their CTR with AI thumbnails.
        </p>
      </ScrollReveal>

      <div className="relative mt-10">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-bg to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-bg to-transparent sm:w-20" />

        <div className="overflow-hidden">
          <div className="carousel-track flex gap-6">
            {doubled.map((t, i) => (
              <div
                key={i}
                className="w-[280px] shrink-0 rounded-2xl border border-border bg-bg-card p-5 sm:w-[320px]"
              >
                <Quote className="mb-2 h-6 w-6 text-border" />
                <p className="text-sm leading-relaxed text-text-muted">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <div>
                    <div className="text-sm font-semibold text-text-primary">
                      {t.author}
                    </div>
                    <div className="text-xs text-text-dim">{t.channel}</div>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-0.5 text-[11px] font-bold text-success">
                    <ArrowRight className="h-3 w-3" />
                    {t.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
