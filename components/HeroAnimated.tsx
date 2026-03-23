import { Play, Zap, UserCircle, MousePointerClick } from "lucide-react";
import Button from "@/components/ui/Button";
import ThumbnailBackground from "@/components/ThumbnailBackground";
import ThumbnailMarquee from "@/components/ThumbnailMarquee";

const quickBullets = [
  {
    icon: <Zap className="h-4 w-4" />,
    text: "Generate in under 60 seconds",
  },
  {
    icon: <UserCircle className="h-4 w-4" />,
    text: "A.I. Face Cloning — your face, any style",
  },
  {
    icon: <MousePointerClick className="h-4 w-4" />,
    text: "No Photoshop. No designers. Just 3 clicks.",
  },
];

export default function HeroAnimated() {
  return (
    <section className="relative overflow-hidden pt-28 pb-4 md:pt-36">
      {/* Floating thumbnail grid (background) */}
      <ThumbnailBackground />

      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-accent/[0.08] blur-[140px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[350px] w-[350px] translate-x-40 rounded-full bg-accent-amber/[0.06] blur-[110px]" />
      </div>

      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div style={{ animation: "hero-fade-in 0.7s ease-out 0s both" }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent"
              style={{ animation: "badge-pulse 2s ease-in-out infinite" }}
            />
            AI-Powered Thumbnail Generator
          </span>
        </div>

        {/* Headline */}
        <h1
          className="mt-6 text-3xl leading-tight font-extrabold tracking-tight text-text-primary sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ animation: "hero-fade-in 0.8s ease-out 0.15s both" }}
        >
          <span className="block">Create Viral Thumbnails</span>
          <span className="mt-1 block sm:mt-2">
            <span
              className="bg-gradient-to-r from-accent via-orange-400 to-accent-amber bg-[length:200%_200%] bg-clip-text text-transparent"
              style={{ animation: "gradient-shift 4s ease-in-out infinite" }}
            >
              in Seconds
            </span>{" "}
            <span className="text-text-primary">with A.I.</span>
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg lg:text-xl"
          style={{ animation: "hero-fade-in 0.8s ease-out 0.35s both" }}
        >
          Stop wasting hours designing thumbnails. Generate high-CTR,
          creator-worthy designs in under 60 seconds. Built for YouTubers
          with 5–30K subs who upload weekly and want more views without the busywork.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animation: "hero-fade-in 0.8s ease-out 0.55s both" }}
        >
          <Button
            variant="secondary"
            size="lg"
            href="#lead-form"
            className="animate-[pulse-glow_3s_ease-in-out_infinite]"
          >
            Get Started Today!
          </Button>
          <Button variant="outline" size="lg" href="#demo">
            <Play className="mr-2 h-4 w-4" />
            Watch Demo
          </Button>
        </div>

        {/* Quick bullets */}
        <div
          className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
          style={{ animation: "hero-fade-in 0.8s ease-out 0.7s both" }}
        >
          {quickBullets.map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-text-dim"
            >
              <span className="text-accent">{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <p
          className="mt-6 text-sm text-text-dim"
          style={{ animation: "hero-fade-in 0.8s ease-out 0.85s both" }}
        >
          No design skills needed. No credit card required.
        </p>
      </div>

      {/* Thumbnail marquee — two scrolling rows */}
      <div
        className="relative z-10"
        style={{ animation: "hero-fade-in 1s ease-out 0.95s both" }}
      >
        <ThumbnailMarquee />
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-bg to-transparent" />
    </section>
  );
}
