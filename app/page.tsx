import Header from "@/components/Header";
import HeroAnimated from "@/components/HeroAnimated";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import FeaturesGrid from "@/components/FeaturesGrid";
import BenefitsSection from "@/components/BenefitsSection";
import Pricing from "@/components/Pricing";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <HeroAnimated />
        <Problem />
        <HowItWorks />
        <FeaturesGrid />
        <BenefitsSection />
        <Pricing />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
