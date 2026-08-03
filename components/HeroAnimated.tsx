/* eslint-disable @next/next/no-img-element */
import { Play, Clock, DollarSign, Paintbrush } from "lucide-react";
import Button from "@/components/ui/Button";
import AppCtaButton from "@/components/AppCtaButton";
import { VIRAL_APP_SIGNUP_URL } from "@/lib/app-url";
import ThumbnailBackground from "@/components/ThumbnailBackground";
import ThumbnailMarquee from "@/components/ThumbnailMarquee";
import { MARQUEE_ROW_LEFT, thumbSrc } from "@/lib/thumbnail-assets";

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

/** Compact mobile proof — first six marquee thumbs. */
const MOBILE_PROOF_THUMBS = MARQUEE_ROW_LEFT.slice(0, 6);

export default function HeroAnimated() {
  return (
    <section
      id="hero"
      className="relative overflow-x-hidden pt-24 pb-8 md:pt-36 md:pb-12"
    >
      {/* Floating thumbnail grid (background) */}
      <ThumbnailBackground />

      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-[0.03] sm:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
          YouTube thumbnail studio
        </p>

        <h1 className="mt-4 w-full text-center text-3xl leading-tight font-extrabold tracking-tight text-text-primary sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="block">Create Thumbnails That Go</span>
          <span className="mt-1 block sm:mt-2">
            <span className="bg-gradient-to-r from-accent via-orange-400 to-accent-amber bg-clip-text text-transparent">
              Viral in Seconds
            </span>{" "}
            <span className="text-text-primary">with AI</span>
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-muted md:mt-6 md:text-lg lg:text-xl">
          Stop wasting hours designing thumbnails. Generate high-CTR,
          creator-worthy designs in under 60 seconds. Built for YouTubers
          who upload weekly and want more views without the busywork.
        </p>

        {/* CTAs */}
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <AppCtaButton
            variant="secondary"
            size="lg"
            appHref={VIRAL_APP_SIGNUP_URL}
          >
            Get Started for Free!
          </AppCtaButton>
          <Button variant="outline" size="lg" href="#how-it-works">
            <Play className="mr-2 h-4 w-4" />
            See how it works
          </Button>
        </div>

        {/* Mobile product proof — desktop uses dual-row marquee below */}
        <div
          className="relative mt-6 overflow-hidden md:hidden"
          aria-hidden="true"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-bg to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-bg to-transparent" />
          <div className="flex gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {MOBILE_PROOF_THUMBS.map((n, i) => (
              <img
                key={n}
                src={thumbSrc(n)}
                alt=""
                width={160}
                height={90}
                loading={i < 2 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={i < 2 ? "low" : undefined}
                className="h-[72px] w-[128px] shrink-0 rounded-lg object-cover ring-1 ring-white/10"
              />
            ))}
          </div>
        </div>

        {/* Feature pills */}
        <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-3">
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
        <p className="mt-4 text-sm text-text-dim md:mt-6">
          3 free starter credits · no credit card required.
        </p>
      </div>

      {/* Thumbnail marquee — two scrolling rows; clip X only so rows are not vertically cropped */}
      <div className="relative z-10 hidden overflow-x-hidden md:block">
        <ThumbnailMarquee />
      </div>

      {/* Soft fade into the next section — sits behind marquee (z-0) */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-0 h-20 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
    </section>
  );
}
