import {
  Upload,
  LayoutTemplate,
  UserCircle,
  Sparkles,
  FolderDown,
} from "lucide-react";
import type { ReactNode } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    icon: <Upload className="h-6 w-6" />,
    title: "Add Your Video",
    description:
      "Paste a YouTube link, upload a video, or describe your idea in a prompt.",
    benefit: "2 minutes, not 2 hours",
  },
  {
    icon: <LayoutTemplate className="h-6 w-6" />,
    title: "Choose a Template",
    description:
      "Pick from proven high-CTR layouts or upload your own Canva-compatible design.",
    benefit: "100+ proven templates",
  },
  {
    icon: <UserCircle className="h-6 w-6" />,
    title: "Customize Your Look",
    description:
      "Select your face/avatar, add hooks, text overlays, and style instructions.",
    benefit: "Consistent branding",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Generate & A/B Test",
    description:
      "AI creates multiple variations — edit, compare, and pick the winner.",
    benefit: "Find the best performer",
  },
  {
    icon: <FolderDown className="h-6 w-6" />,
    title: "Export & Publish",
    description:
      "Save to your projects or download ready-to-upload thumbnails.",
    benefit: "One-click export",
  },
];

export default function WorkflowSteps() {
  return (
    <SectionWrapper id="how-it-works">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
            Your New Thumbnail Workflow
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            From video to viral thumbnail in minutes — not hours.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative mt-16">
        {/* Connecting line (desktop) */}
        <div className="absolute top-12 right-8 left-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <StepCard step={step} number={i + 1} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function StepCard({
  step,
  number,
}: {
  step: {
    icon: ReactNode;
    title: string;
    description: string;
    benefit: string;
  };
  number: number;
}) {
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-bg-card-hover hover:shadow-lg hover:shadow-accent/5">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
          {number}
        </span>
        <div className="text-text-muted transition-all duration-300 group-hover:scale-110 group-hover:text-accent">
          {step.icon}
        </div>
      </div>
      <h3 className="text-base font-semibold text-text-primary">
        {step.title}
      </h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-text-muted">
        {step.description}
      </p>
      <div className="mt-3 inline-flex self-start rounded-full bg-accent/5 px-3 py-1 text-[11px] font-medium text-accent">
        {step.benefit}
      </div>
    </div>
  );
}
