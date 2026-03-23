import Image from "next/image";
import {
  MessageSquare,
  Sparkles,
  Image as ImageIcon,
  ArrowRight,
  GripVertical,
  TrendingUp,
  Eye,
  Flame,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

const pipelineSteps = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Describe Your Video",
    color: "text-blue-400",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI Processes",
    color: "text-accent",
  },
  {
    icon: <ImageIcon className="h-6 w-6" />,
    title: "Get Your Thumbnail",
    color: "text-accent-amber",
  },
];

export default function VisualDemo() {
  return (
    <SectionWrapper id="visual-demo">
      {/* ── AI Pipeline ── */}
      <ScrollReveal>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
            Watch AI Create Your Thumbnail
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            From idea to click-worthy thumbnail in seconds.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-14 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
        {pipelineSteps.map((step, i) => (
          <PipelineGroup
            key={i}
            step={step}
            index={i}
            isLast={i === pipelineSteps.length - 1}
          />
        ))}
      </div>

      {/* ── Before / After ── */}
      <ScrollReveal className="mt-24">
        <h3 className="text-center text-xl font-bold text-text-primary sm:text-2xl">
          The Difference Is Clear
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-center text-text-muted">
          Generic vs. AI-optimized — same video, dramatically different results.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.15} className="mt-10">
        <div
          className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border"
          style={{ aspectRatio: "16 / 9" }}
        >
          {/* Before layer */}
          <div className="absolute inset-0">
            <Image
              src="/thumb_1.jpg"
              alt="YouTube thumbnail before AI optimization — desaturated, low-CTR generic design"
              fill
              className="object-cover"
              style={{ filter: "grayscale(100%) brightness(0.45)" }}
            />
            <div className="absolute inset-0 bg-zinc-900/20" />
          </div>

          {/* After layer (clips from left) */}
          <div
            className="slider-clip absolute inset-0"
            style={{
              animation: "clip-reveal 8s ease-in-out infinite",
              willChange: "clip-path",
            }}
          >
            <Image
              src="/thumb_1.jpg"
              alt="YouTube thumbnail after AI optimization — vibrant, high-CTR design by ViralThumbnails"
              fill
              className="object-cover"
            />
          </div>

          {/* Divider line */}
          <div
            className="slider-divider absolute top-0 bottom-0 z-20 w-0.5 bg-white/80"
            style={{ animation: "divider-pos 8s ease-in-out infinite" }}
          >
            <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
              <GripVertical className="h-4 w-4 text-white" />
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 z-30 rounded-full bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm">
            Before
          </div>
          <div className="absolute top-4 right-4 z-30 rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm">
            After — AI Optimized
          </div>
        </div>

        {/* Stats below */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          <StatBadge
            icon={<TrendingUp className="h-4 w-4" />}
            text="4.2% → 8.7% CTR"
          />
          <StatBadge
            icon={<Eye className="h-4 w-4" />}
            text="+107% more clicks"
          />
          <StatBadge
            icon={<Flame className="h-4 w-4" />}
            text="Same video, better result"
          />
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}

/* ── Sub-components ── */

function PipelineGroup({
  step,
  index,
  isLast,
}: {
  step: (typeof pipelineSteps)[number];
  index: number;
  isLast: boolean;
}) {
  return (
    <>
      <ScrollReveal delay={index * 0.15}>
        <div
          className="rounded-2xl border border-border bg-bg-card p-6 transition-all duration-500"
          style={{
            animation: `pipeline-pulse 6s ease-in-out infinite`,
            animationDelay: `${index * 2}s`,
          }}
        >
          <div className={`mb-3 ${step.color}`}>{step.icon}</div>
          <h4 className="text-sm font-semibold text-text-primary">
            {step.title}
          </h4>
          <div className="mt-3">
            {index === 0 && <PromptPreview />}
            {index === 1 && <ProcessingPreview />}
            {index === 2 && <ResultPreview />}
          </div>
        </div>
      </ScrollReveal>
      {!isLast && (
        <div className="hidden items-center justify-center text-text-dim md:flex">
          <ArrowRight className="h-5 w-5" />
        </div>
      )}
    </>
  );
}

function PromptPreview() {
  return (
    <div className="rounded-lg bg-bg/60 p-3">
      <p className="text-xs leading-relaxed text-text-dim">
        &quot;Make a thumbnail for my Minecraft survival ep. 47 where I find
        diamonds...&quot;
        <span
          className="ml-0.5 inline-block h-3.5 w-0.5 bg-accent align-middle"
          style={{ animation: "blink 1s step-end infinite" }}
        />
      </p>
    </div>
  );
}

function ProcessingPreview() {
  return (
    <div className="space-y-2">
      {[75, 55, 90].map((w, i) => (
        <div
          key={i}
          className="h-2 rounded-full"
          style={{
            width: `${w}%`,
            background:
              "linear-gradient(90deg, var(--color-border) 25%, var(--color-border-hover) 50%, var(--color-border) 75%)",
            backgroundSize: "200% 100%",
            animation: `shimmer 1.8s linear infinite`,
            animationDelay: `${i * 0.25}s`,
          }}
        />
      ))}
      <p className="pt-1 text-xs text-text-dim">
        Analyzing style, generating&nbsp;variations...
      </p>
    </div>
  );
}

function ResultPreview() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-14 w-24 shrink-0 overflow-hidden rounded-lg shadow-lg shadow-accent/20">
        <Image
          src="/thumb_3.jpg"
          alt="AI-generated YouTube thumbnail example — programming tutorial"
          fill
          className="object-cover"
        />
      </div>
      <p className="text-xs text-text-dim">
        Ready in <span className="font-semibold text-success">seconds</span>
      </p>
    </div>
  );
}

function StatBadge({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-2 text-xs font-medium text-text-muted">
      <span className="text-success">{icon}</span>
      {text}
    </div>
  );
}
