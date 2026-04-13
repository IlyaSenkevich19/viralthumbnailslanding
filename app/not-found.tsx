import { Zap, Home, ArrowRight } from "lucide-react";
import ThumbnailBackground from "@/components/ThumbnailBackground";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Floating thumbnails */}
      <ThumbnailBackground />

      {/* Radial glows */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-accent/[0.08] blur-[140px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[300px] w-[300px] -translate-x-32 translate-y-20 rounded-full bg-accent-amber/[0.06] blur-[110px]" />
      </div>

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div
          className="flex items-center justify-center"
          style={{ animation: "hero-fade-in 0.7s ease-out 0s both" }}
        >
          <Zap className="h-10 w-10 text-accent" />
        </div>

        <h1
          className="mt-6 text-8xl font-extrabold tracking-tighter sm:text-[10rem]"
          style={{ animation: "hero-fade-in 0.8s ease-out 0.15s both" }}
        >
          <span className="bg-gradient-to-r from-accent via-orange-400 to-accent-amber bg-[length:200%_200%] bg-clip-text text-transparent"
            style={{ animation: "gradient-shift 4s ease-in-out infinite" }}
          >
            404
          </span>
        </h1>

        <p
          className="mt-2 text-xl font-semibold text-text-primary sm:text-2xl"
          style={{ animation: "hero-fade-in 0.8s ease-out 0.3s both" }}
        >
          This page got lost
        </p>
        <p
          className="mx-auto mt-3 max-w-sm text-text-muted"
          style={{ animation: "hero-fade-in 0.8s ease-out 0.45s both" }}
        >
          Looks like this thumbnail doesn&apos;t exist. But yours can — in
          under 60 seconds.
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animation: "hero-fade-in 0.8s ease-out 0.6s both" }}
        >
          <Button variant="primary" size="lg" href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <Button variant="secondary" size="lg" href="/#pricing">
            Start Creating
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
