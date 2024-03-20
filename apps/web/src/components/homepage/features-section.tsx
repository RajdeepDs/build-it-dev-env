import BentoFeatures from "./bento-features";
import DashboardSection from "./dashboard-section";
import DevelopmentEnvironment from "./development-env-section";

export default function FeaturesSection(): JSX.Element {
  return (
    <>
      <DashboardSection />
      <DevelopmentEnvironment />
      <BentoFeatures />
    </>
  );
}
