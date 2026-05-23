import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  {
    title: "Templates from channels that already win clicks",
    description:
      "Start from presets modeled on high-performing layouts instead of a blank canvas.",
    image: "/templates.webp",
    alt: "Library of proven high-CTR YouTube thumbnail templates",
    bg: "from-amber-900/60 via-yellow-900/40 to-amber-950/60",
    borderColor: "border-amber-500/20",
  },
  {
    title: "Multiple variants per project",
    description:
      "Generate a small set of options, compare side by side, and pick the one that fits the title.",
    image: "/thumb_1.webp",
    alt: "Multiple AI-generated thumbnail variations to compare",
    bg: "from-emerald-900/60 via-green-900/40 to-emerald-950/60",
    borderColor: "border-emerald-500/20",
  },
  {
    title: "Your face, your text, your edits",
    description:
      "Add a face reference, adjust expression or outfit, and refine copy without leaving the workspace.",
    image: "/thumb_3.webp",
    alt: "Face reference and text editing for YouTube thumbnails",
    bg: "from-blue-900/60 via-indigo-900/40 to-blue-950/60",
    borderColor: "border-blue-500/20",
  },
  {
    title: "Face references that stay on-brand",
    description:
      "Save references once and reuse them across uploads so your channel looks consistent.",
    image: "/ai-technolochy.webp",
    alt: "Saved face references for consistent YouTube thumbnail branding",
    bg: "from-purple-900/60 via-fuchsia-900/40 to-purple-950/60",
    borderColor: "border-purple-500/20",
  },
];

export default function FeaturesGrid() {
  return (
    <SectionWrapper id="features" className="bg-bg-elevated">
      <ScrollReveal>
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Inside the studio
          </span>
          <h2 className="mt-3 text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
            What you get after signup
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            The landing page shows the output. The app is where presets, face
            refs, variants, and exports live in one place.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {features.map((f, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div
              className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border ${f.borderColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30`}
            >
              {/* Colored gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${f.bg}`}
              />

              {/* Image */}
              <div className="relative hidden aspect-[16/10] w-full overflow-hidden md:block">
                <Image
                  src={f.image}
                  alt={f.alt}
                  fill
                  quality={70}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 92vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* Text content */}
              <div className="relative flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-text-primary">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {f.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
