import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  {
    title: "100+ Winning Thumbnail Templates",
    description:
      "Choose from our massive library of proven presets and work backwards from success.",
    image: "/thumb_5.jpg",
    alt: "Library of 100+ proven high-CTR YouTube thumbnail templates",
    bg: "from-amber-900/60 via-yellow-900/40 to-amber-950/60",
    borderColor: "border-amber-500/20",
  },
  {
    title: "3x Variations for Every Design",
    description:
      "So you never run out of options and can always find the perfect fit for your video.",
    image: "/thumb_1.jpg",
    alt: "Multiple AI-generated thumbnail variations to A/B test",
    bg: "from-emerald-900/60 via-green-900/40 to-emerald-950/60",
    borderColor: "border-emerald-500/20",
  },
  {
    title: "Add Yourself & Edit Freely",
    description:
      "Clone your face with AI, change expressions and outfits, add text — full creative control.",
    image: "/thumb_3.jpg",
    alt: "AI face cloning and text editing for YouTube thumbnails",
    bg: "from-blue-900/60 via-indigo-900/40 to-blue-950/60",
    borderColor: "border-blue-500/20",
  },
  {
    title: "A.I. Face Cloning Technology",
    description:
      "Generate realistic clones of yourself in any pose, expression, or outfit — with transparent backgrounds.",
    image: "/thumb_7.jpg",
    alt: "AI face cloning — realistic expressions and outfits for thumbnails",
    bg: "from-purple-900/60 via-fuchsia-900/40 to-purple-950/60",
    borderColor: "border-purple-500/20",
  },
];

export default function FeaturesGrid() {
  return (
    <SectionWrapper id="features" className="bg-bg-elevated">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
            Everything You Need to Win Clicks
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            Four powerful features that replace your designer, your editor, and
            your guesswork.
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
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={f.image}
                  alt={f.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
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
