import CTASection from "@/components/homepage/cta-section";
import FeaturesSection from "@/components/homepage/features-section";
import HeroSection from "@/components/homepage/hero-section";
import OpenSourceSection from "@/components/homepage/open-source-section";

export default function HomePage(): JSX.Element {
  return (
    <div className="mt-[75px] flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <div className="border-grey/10 border-y bg-white py-[113px] text-black">
        <OpenSourceSection />
        <CTASection />
      </div>
    </div>
  );
}
