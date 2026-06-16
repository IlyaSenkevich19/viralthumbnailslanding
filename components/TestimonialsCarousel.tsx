import { Star, ArrowRight } from "lucide-react";
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
      "Best ROI I've gotten from a tool. A $49 credit pack replaced a $600/month designer — and my views actually went up.",
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

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5 fill-accent-amber text-accent-amber"
        />
      ))}
    </div>
  );
}

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-border/50 text-sm font-bold text-text-muted">
      {initials}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <SectionWrapper id="testimonials">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
            What Creators Are Saying
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-muted">
            Join thousands of YouTubers who boosted their CTR with AI
            thumbnails.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative mt-12">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-28" />

        <div className="overflow-hidden py-2">
          <div className="carousel-track flex gap-5">
            {doubled.map((t, i) => (
              <div
                key={i}
                className="group w-[300px] shrink-0 rounded-2xl border border-border bg-bg-card transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-lg hover:shadow-black/20 sm:w-[340px]"
              >
                <div className="flex h-full flex-col p-6">
                  <Stars />

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="mt-5 flex items-center gap-3 border-t border-border/50 pt-4">
                    <Initials name={t.author} />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold text-text-primary">
                        {t.author}
                      </div>
                      <div className="truncate text-xs text-text-dim">
                        {t.channel}
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-1 rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-bold text-success">
                      <ArrowRight className="h-3 w-3" />
                      {t.result}
                    </div>
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
