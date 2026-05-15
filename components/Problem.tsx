import Image from "next/image";
import { X } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

const painPoints = [
  {
    image: "/wastetime.webp",
    imageAlt: "DIY thumbnail design — hours lost on every upload",
    title: "DIY Thumbnails Steal Time",
    problems: [
      "Takes 2–3 hours per design",
      "No guarantee it actually works",
    ],
  },
  {
    image: "/freelancers.webp",
    imageAlt: "Freelance thumbnail design — high cost and slow delivery",
    title: "Freelancers Cost Too Much",
    problems: [
      "$50–200+ per thumbnail",
      "Long waits, little control",
    ],
  },
  {
    image: "/bigteams.webp",
    imageAlt: "Large YouTube channels with design teams and A/B testing at scale",
    title: "Big YouTubers Have Teams",
    problems: [
      "Hard to compete alone",
      "They test at massive scale",
    ],
  },
];

export default function Problem() {
  return (
    <SectionWrapper id="problem" className="bg-bg-elevated">
      <ScrollReveal>
        <div className="text-center">
          <span className="font-mono text-sm tracking-widest text-text-dim">
            Problem is...
          </span>
          <h2 className="mt-3 text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
            The Ugly Truth About YouTube Thumbnails
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            The most important part of your whole video is ALSO the most
            difficult to get right...
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {painPoints.map((point, i) => (
          <ScrollReveal key={i} delay={i * 0.12}>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5">
              {/* Image */}
              <div className="relative hidden aspect-[4/3] w-full overflow-hidden md:block">
                <Image
                  src={point.image}
                  alt={point.imageAlt}
                  fill
                  quality={70}
                  className="object-cover opacity-60 grayscale transition-all duration-500 group-hover:opacity-80 group-hover:grayscale-[50%]"
                  sizes="(max-width: 768px) 92vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-6 pt-1 pb-6">
                <h3 className="text-lg font-bold text-text-primary">
                  {point.title}
                </h3>

                <ul className="mt-3 space-y-2">
                  {point.problems.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm text-text-muted">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
