"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  {
    title: "Vertical Designs for Shorts",
    description:
      "Create engaging thumbnails for your YouTube Shorts and Instagram stories. Optimized vertical layouts that stop the scroll.",
    image: "/thumb_1.jpg",
    alt: "Vertical AI thumbnail design for YouTube Shorts and Instagram stories",
    gradient: "from-amber-500 via-yellow-400 to-amber-600",
    glow: "shadow-amber-500/20",
  },
  {
    title: "Winning Designs",
    description:
      "Choose from 100+ proven presets modeled after the most successful YouTubers' thumbnails that have gotten millions of views.",
    image: "/thumb_5.jpg",
    alt: "High-CTR YouTube thumbnail template — proven winning design preset",
    gradient: "from-slate-300 via-white to-slate-400",
    glow: "shadow-white/10",
  },
  {
    title: "A.I. Face Cloning",
    description:
      "Generate realistic face clones of yourself in any expression, change clothing and locations — download with a transparent background to drop into any design.",
    image: "/thumb_3.jpg",
    alt: "AI face cloning for YouTube thumbnails — realistic expressions and outfits",
    gradient: "from-red-500 via-accent to-red-600",
    glow: "shadow-red-500/20",
  },
];

export default function FeaturesGrid() {
  return (
    <SectionWrapper id="features">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
            Winning Thumbnails — Just 3 Clicks Away
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            Three core features that replace your designer, your editor, and
            your guesswork.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <ScrollReveal key={i} delay={i * 0.12}>
            <div
              className={`group relative h-full overflow-hidden rounded-2xl p-[1px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${f.glow}`}
            >
              {/* Gradient border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${f.gradient} opacity-40 transition-opacity duration-300 group-hover:opacity-70`}
              />

              {/* Card interior */}
              <div className="relative flex h-full flex-col rounded-[15px] bg-bg-card">
                {/* Text content */}
                <div className="p-6 pb-4">
                  <h3 className="text-xl font-bold text-text-primary">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {f.description}
                  </p>
                </div>

                {/* Image */}
                <div className="relative mt-auto aspect-[4/3] w-full overflow-hidden rounded-b-[15px]">
                  <Image
                    src={f.image}
                    alt={f.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
