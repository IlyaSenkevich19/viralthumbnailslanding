import { Play, Clock, DollarSign, Paintbrush } from "lucide-react";
import Button from "@/components/ui/Button";
import ThumbnailBackground from "@/components/ThumbnailBackground";
import ThumbnailMarquee from "@/components/ThumbnailMarquee";

const featurePills = [
  {
    icon: <Clock className="h-4 w-4" />,
    label: "Save Time",
  },
  {
    icon: <DollarSign className="h-4 w-4" />,
    label: "Save Money",
  },
  {
    icon: <Paintbrush className="h-4 w-4" />,
    label: "No Design Skills Needed",
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
        {/* <div style={{ animation: "hero-fade-in 0.7s ease-out 0s both" }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent"
              style={{ animation: "badge-pulse 2s ease-in-out infinite" }}
            />
            AI-Powered Thumbnail Generator
          </span>
        </div> */}

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
            <span className="text-text-primary">with AI</span>
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg lg:text-xl"
          style={{ animation: "hero-fade-in 0.8s ease-out 0.35s both" }}
        >
          Stop wasting hours designing thumbnails. Generate high-CTR,
          creator-worthy designs in under 60 seconds. Built for YouTubers
          who upload weekly and want more views without the busywork.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animation: "hero-fade-in 0.8s ease-out 0.55s both" }}
        >
          <Button
            variant="secondary"
            size="lg"
            href="#pricing"
            className="animate-[pulse-glow_3s_ease-in-out_infinite]"
          >
            Get Started for Free!
          </Button>
          <Button variant="outline" size="lg" href="#how-it-works">
            <Play className="mr-2 h-4 w-4" />
            Watch Demo
          </Button>
        </div>

        {/* Feature pills */}
        <div
          className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-2 sm:gap-3"
          style={{ animation: "hero-fade-in 0.8s ease-out 0.7s both" }}
        >
          {featurePills.map((pill, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-[#1a1a1a] px-3.5 py-2 text-sm font-medium text-text-primary shadow-sm sm:px-4"
            >
              <span className="text-accent">{pill.icon}</span>
              <span>{pill.label}</span>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <p
          className="mt-6 text-sm text-text-dim"
          style={{ animation: "hero-fade-in 0.8s ease-out 0.85s both" }}
        >
         No credit card required.
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
