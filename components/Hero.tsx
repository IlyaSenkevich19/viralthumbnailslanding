import { Users } from "lucide-react";
import Button from "@/components/ui/Button";
import { VIRAL_APP_SIGNUP_URL } from "@/lib/app-url";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[300px] w-[300px] translate-x-32 rounded-full bg-accent-amber/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-text-primary sm:text-4xl md:text-5xl lg:text-6xl">
          Stop Losing Views to{" "}
          <span className="bg-gradient-to-r from-accent to-accent-amber bg-clip-text text-transparent">
            Bad Thumbnails
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg lg:text-xl">
          AI-powered thumbnails that boost your CTR — built for YouTubers who upload weekly and want more views, more revenue, less
          busywork.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="secondary" size="lg" href={VIRAL_APP_SIGNUP_URL}>
            Get 10 Free Thumbnails
          </Button>
          <Button variant="outline" size="lg" href="#how-it-works">
            See How It Works
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-text-dim">
          <Users className="h-4 w-4" />
          <span>Trusted by 2,500+ creators</span>
        </div>
      </div>
    </section>
  );
}
