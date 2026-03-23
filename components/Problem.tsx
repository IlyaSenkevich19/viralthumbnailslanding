import { Clock, DollarSign, TrendingDown } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

const painPoints = [
  {
    icon: <Clock className="h-8 w-8" />,
    stat: "2–3 hrs",
    title: "Wasted on Every Thumbnail",
    description:
      "You spend 2–3 hours per thumbnail in Canva or Photoshop. At 3 videos a week, that's 9 hours gone — every single week.",
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    stat: "$50–200",
    title: "Per Freelancer Thumbnail",
    description:
      "Hiring a designer costs $50–200 per thumbnail. At 3 videos a week, you're burning $600–2,400 every month.",
  },
  {
    icon: <TrendingDown className="h-8 w-8" />,
    stat: "<4% CTR",
    title: "Means Your Video Is Buried",
    description:
      "A generic thumbnail gets under 4% CTR. YouTube's algorithm buries it. Your revenue stays under $500/month.",
  },
];

export default function Problem() {
  return (
    <SectionWrapper id="problem" className="bg-bg-elevated">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
            Every Upload Costs You Time, Money, or Views
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {painPoints.map((point, i) => (
          <ScrollReveal key={i} delay={i * 0.12}>
            <div className="group rounded-2xl border border-border bg-bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:bg-bg-card-hover hover:shadow-lg hover:shadow-accent/5">
              <div className="text-accent transition-transform duration-300 group-hover:scale-110">
                {point.icon}
              </div>
              <div className="mt-4 text-3xl font-bold text-accent">
                {point.stat}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-text-primary">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {point.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
