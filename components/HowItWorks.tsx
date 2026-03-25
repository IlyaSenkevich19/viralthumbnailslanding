import Image from "next/image";
import {
  CheckCircle2,
  TrendingUp,
  Eye,
  Flame,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: 1,
    title: "Drop Your Video Link",
    description:
      "Paste any YouTube URL and our AI instantly analyzes the content, title, and niche to create a thumbnail that matches your video.",
    bullets: [
      "Works with any YouTube video",
      "AI analyzes content automatically",
      "Filter by niche and topic",
    ],
    image: "/thumb_1.jpg",
    imageAlt:
      "ViralThumbnails app — paste your YouTube link to generate a thumbnail",
  },
  {
    number: 2,
    title: "Choose a Preset & Add Your Face",
    description:
      "Pick from 100+ winning presets modeled after top YouTubers, or upload a reference thumbnail. Add your face for AI cloning or go faceless.",
    bullets: [
      "Select a winning preset",
      "Or upload a reference thumbnail",
      "Add your face or go faceless",
    ],
    image: "/thumb_5.jpg",
    imageAlt:
      "Choose from 100+ thumbnail presets and add your face with AI cloning",
  },
  {
    number: 3,
    title: "Export & Publish in 1 Click",
    description:
      "AI generates multiple variations. Compare, A/B test, edit, and export the winner — ready to upload to YouTube in seconds.",
    bullets: [
      "Multiple AI-generated variations",
      "Built-in A/B testing",
      "One-click export to YouTube",
    ],
    image: "/thumb_3.jpg",
    imageAlt:
      "Export your AI-generated thumbnail and publish directly to YouTube",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
            More YouTube Views{" "}
            <span className="italic text-accent">in 3</span> Simple Steps
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            From video to viral thumbnail in under 60 seconds — not hours.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-16 space-y-20 lg:space-y-28">
        {steps.map((step, i) => {
          const imageFirst = i % 2 === 1;
          return (
            <ScrollReveal key={step.number} delay={0.1}>
              <div
                className={`flex flex-col items-center gap-10 lg:gap-16 ${
                  imageFirst ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Text side */}
                <div className="flex-1">
                  <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold tracking-wide text-accent">
                    Step #{step.number}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-text-primary sm:text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-text-muted">
                    {step.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                        <span className="text-sm text-text-muted">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image side */}
                <div className="w-full flex-1">
                  <div className="group relative overflow-hidden rounded-2xl border border-border bg-bg-card shadow-2xl shadow-black/30">
                    {/* Glow */}
                    <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-accent-amber/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Step number overlay */}
                    <div className="absolute top-4 left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-accent/90 text-sm font-bold text-white shadow-lg">
                      {step.number}
                    </div>

                    <div className="relative aspect-video">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-card/40 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Before / After */}
      <ScrollReveal className="mt-24">
        <h3 className="text-center text-xl font-bold text-text-primary sm:text-2xl">
          The Difference Is Clear
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-center text-text-muted">
          Generic vs. AI-optimized — same video, dramatically different results.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.15} className="mt-10">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {/* Before */}
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <div className="absolute top-4 left-4 z-10 rounded-full bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm">
              Before
            </div>
            <div className="relative aspect-video">
              <Image
                src="/before.png"
                alt="YouTube thumbnail before AI optimization — generic, low-CTR design"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* After */}
          <div className="relative overflow-hidden rounded-2xl border border-accent/30">
            <div className="absolute top-4 left-4 z-10 rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm">
              After — AI Optimized
            </div>
            <div className="relative aspect-video">
              <Image
                src="/thumb_1.jpg"
                alt="YouTube thumbnail after AI optimization — vibrant, high-CTR design by ViralThumbnails"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats below */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          <StatBadge
            icon={<TrendingUp className="h-4 w-4" />}
            text="4.2% → 8.7% CTR"
          />
          <StatBadge
            icon={<Eye className="h-4 w-4" />}
            text="+107% more clicks"
          />
          <StatBadge
            icon={<Flame className="h-4 w-4" />}
            text="Same video, better result"
          />
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}

function StatBadge({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-2 text-xs font-medium text-text-muted">
      <span className="text-success">{icon}</span>
      {text}
    </div>
  );
}
