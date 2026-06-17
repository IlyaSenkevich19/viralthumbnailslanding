import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

const APP_SCREENSHOT_IMAGE_QUALITY = 92;
/** One ratio for all cards so paired columns align in the 2-col grid. */
const FEATURE_IMAGE_ASPECT = "aspect-[16/10]";

const features = [
  {
    title: "Templates from channels that already win clicks",
    description:
      "Start from presets modeled on high-performing layouts instead of a blank canvas.",
    image: "/feature-templates-grid.webp",
    alt: "ViralThumblify app — library of high-CTR thumbnail templates",
    bg: "from-amber-900/60 via-yellow-900/40 to-amber-950/60",
    borderColor: "border-amber-500/20",
  },
  {
    title: "Multiple variants per project",
    description:
      "Generate a small set of options, compare side by side, and pick the one that fits the title.",
    image: "/feature-variants-compare.webp",
    alt: "ViralThumblify app — multiple thumbnail variants in one project",
    bg: "from-emerald-900/60 via-green-900/40 to-emerald-950/60",
    borderColor: "border-emerald-500/20",
  },
  {
    title: "Your face, your text, your edits",
    description:
      "Add a face reference, adjust expression or outfit, and refine copy without leaving the workspace.",
    image: "/feature-refine-modal.webp",
    alt: "ViralThumblify app — refine a thumbnail variant with prompts and face controls",
    bg: "from-blue-900/60 via-indigo-900/40 to-blue-950/60",
    borderColor: "border-blue-500/20",
  },
  {
    title: "Face references that stay on-brand",
    description:
      "Save references once and reuse them across uploads so your channel looks consistent.",
    image: "/feature-faces-library.webp",
    alt: "ViralThumblify app — saved face references for consistent channel branding",
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

      <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-2">
        {features.map((f, i) => (
          <ScrollReveal key={i} delay={i * 0.1} className="h-full">
            <div
              className={`group relative flex h-full flex-col overflow-hidden rounded-lg border ${f.borderColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30`}
            >
              {/* Colored gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${f.bg}`}
              />

              {/* Image — shared aspect so text blocks start at the same row height */}
              <div
                className={`relative hidden w-full shrink-0 overflow-hidden md:block ${FEATURE_IMAGE_ASPECT}`}
              >
                <Image
                  src={f.image}
                  alt={f.alt}
                  fill
                  quality={APP_SCREENSHOT_IMAGE_QUALITY}
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 50vw, 560px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Text content */}
              <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="min-h-[4rem] text-xl font-bold leading-snug text-text-primary sm:min-h-[4.25rem]">
                  {f.title}
                </h3>
                <p className="mt-2 min-h-[3.25rem] text-sm leading-relaxed text-text-muted">
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
