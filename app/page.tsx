import Header from "@/components/Header";
import HeroAnimated from "@/components/HeroAnimated";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import FeaturesGrid from "@/components/FeaturesGrid";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import BenefitRecap from "@/components/BenefitRecap";
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
        <HowItWorks />
        <FeaturesGrid />
        <BenefitsSection />
        <TestimonialsCarousel />
        <BenefitRecap />
        <Pricing />
        <LeadForm />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
