import CTASection from "@/components/homepage/cta-section";
import FeaturesSection from "@/components/homepage/features-section";
import HeroSection from "@/components/homepage/hero-section";
import OpenSourceSection from "@/components/homepage/open-source-section";

export default function HomePage(): JSX.Element {
  return (
    <div className="mt-[75px] flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <div className="bg-white pt-[113px] text-black">
        <OpenSourceSection />
      </div>
      <div className="md:bg-cta bg-white pt-24 text-black">
        <CTASection />
      </div>
    </div>
  );
}
