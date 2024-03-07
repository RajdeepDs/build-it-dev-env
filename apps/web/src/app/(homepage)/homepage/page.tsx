import CTASection from "@/components/homepage/cta-section";
import FeaturesSection from "@/components/homepage/features-section";
import HeroSection from "@/components/homepage/hero-section";
import OpenSourceSection from "@/components/homepage/open-source-section";

export default function HomePage(): JSX.Element {
  return (
    <div className="hero flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <div className="border-grey/10 mt-52 border-y">
        <OpenSourceSection />
      </div>
      <div className="my-24">
        <CTASection />
      </div>
      <div className="border-grey/10 h-[1px] w-full border-b" />
    </div>
  );
}
