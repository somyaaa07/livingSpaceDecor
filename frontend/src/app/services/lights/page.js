import HeroSection from "@/components/service/lights/HeroSection";

import WhyLightMatter from "@/components/service/lights/WhyLightMatter";
import LightType from "@/components/service/lights/LightType";
import ElectricWork from "@/components/service/lights/ElectricWork";
import FAQ from "@/components/service/lights/FAQ"

export default function LightPage() {
  return (
    <>
      <HeroSection />
      <WhyLightMatter/>
      <LightType/>
      <ElectricWork/>
      <FAQ/>
    </>
  );
}
