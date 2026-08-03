import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

/** Next/Image tuning for full-width app UI captures (already WebP in /public). */
const APP_SCREENSHOT_IMAGE_QUALITY = 92;

const steps = [
  {
    number: 1,
    title: "Drop your video link",
    description:
      "Paste a YouTube URL. We read the title and topic so the thumbnail direction matches the upload.",
    bullets: [
      "Works with public YouTube videos",
      "Niche and topic inform the layout",
      "No manual brief required to start",
    ],
    image: "/how-step-1-create-youtube.webp",
    imageAlt: "ViralThumblify app — paste a YouTube URL on the Generate screen",
    imageAspect: "aspect-[1680/810]",
  },
  {
    number: 2,
    title: "Pick a preset and add your face",
    description:
      "Choose a winning layout, upload a reference if you have one, and attach a saved face when you want to appear on the cover.",
    bullets: [
      "Preset library based on proven layouts",
      "Optional reference thumbnail upload",
      "Faceless covers still supported",
    ],
    image: "/how-step-2-template-face.webp",
    imageAlt: "ViralThumblify app — pick a template preset and attach a face reference",
    imageAspect: "aspect-[1198/1402]",
  },
  {
    number: 3,
    title: "Compare variants and export",
    description:
      "Review a small batch, keep the strongest option, and download a file ready for YouTube.",
    bullets: [
      "Multiple variants per run",
      "Light edits before export",
      "Download when you are happy with one",
    ],
    image: "/how-step-3-variants-export.webp",
    imageAlt: "ViralThumblify app — compare thumbnail variants and export",
    imageAspect: "aspect-[1686/1454]",
  },
] as const;

const comparisonNotes = [
  "Stronger subject separation at small size",
  "Higher contrast between face and background",
  "Copy that reads in the feed, not only on desktop",
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <ScrollReveal>
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Workflow
          </span>
          <h2 className="mt-3 text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
            From link to export in three steps
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            The flow mirrors what you see in the app: fewer tabs, fewer tools,
            more time spent choosing the cover that fits the video.
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
                <div className="flex-1">
                  <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold tracking-wide text-accent">
                    Step {step.number}
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

                <div className="w-full flex-1">
                  <div className="group relative overflow-hidden rounded-lg border border-border/90 bg-bg-elevated shadow-[0_24px_80px_-40px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.06]">
                    <div className="absolute top-3 left-3 z-10 flex h-7 w-7 items-center justify-center rounded-md bg-accent text-xs font-bold text-white shadow-md">
                      {step.number}
                    </div>

                    <div className={`relative w-full ${step.imageAspect}`}>
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        quality={APP_SCREENSHOT_IMAGE_QUALITY}
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                        sizes="(max-width: 1024px) 92vw, (max-width: 1536px) 50vw, 720px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal className="mt-20">
        <div className="max-w-2xl">
          <h3 className="text-xl font-semibold tracking-tight text-text-primary sm:text-2xl">
            What changes when the layout is built for clicks
          </h3>
          <p className="mt-3 max-w-xl text-text-muted">
            Same video, different cover. The goal is not a prettier image — it
            is a thumbnail that still reads when YouTube shrinks it on mobile.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.12} className="mt-8">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-border bg-bg-card ring-1 ring-white/[0.08]">
          <div className="grid divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0">
            <div className="relative aspect-video">
              <Image
                src="/before.webp"
                alt="YouTube thumbnail before optimization — low contrast at small size"
                fill
                quality={70}
                sizes="(max-width: 640px) 92vw, 50vw"
                className="object-cover"
              />
              <span className="absolute top-3 left-3 rounded-md border border-border bg-bg/85 px-2.5 py-1 text-xs font-medium text-text-dim backdrop-blur-sm">
                Generic cover
              </span>
            </div>

            <div className="relative aspect-video">
              <Image
                src="/thumb_1.webp"
                alt="YouTube thumbnail with stronger subject focus and contrast"
                fill
                quality={70}
                sizes="(max-width: 640px) 92vw, 50vw"
                className="object-cover"
              />
              <span className="absolute top-3 left-3 rounded-md border border-accent/30 bg-bg/85 px-2.5 py-1 text-xs font-medium text-text-primary backdrop-blur-sm">
                Layout tuned for the feed
              </span>
            </div>
          </div>

          <div className="border-t border-border bg-bg-elevated/35 px-5 py-5 sm:px-6">
            <ul className="grid gap-4 sm:grid-cols-3">
              {comparisonNotes.map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-text-muted"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
