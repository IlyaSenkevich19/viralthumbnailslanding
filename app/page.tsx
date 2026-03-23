import Header from "@/components/Header";
import HeroAnimated from "@/components/HeroAnimated";
import Problem from "@/components/Problem";
import WorkflowSteps from "@/components/WorkflowSteps";
import FeaturesGrid from "@/components/FeaturesGrid";
import VisualDemo from "@/components/VisualDemo";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Pricing from "@/components/Pricing";
import LeadForm from "@/components/LeadForm";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroAnimated />
        <Problem />
        <WorkflowSteps />
        <FeaturesGrid />
        <VisualDemo />
        <BenefitsSection />
        <TestimonialsCarousel />
        <Pricing />
        <LeadForm />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
