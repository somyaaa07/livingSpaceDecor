import KitchenHeroSection from "@/components/service/modular-kitchen/KitchenHeroSection";
import Slider from "@/components/service/modular-kitchen/Slider";
import KitchenBudgetCalculator from "@/components/service/modular-kitchen/KitchenBudgetCalculator";
import SurfaceDesign from "@/components/service/modular-kitchen/SurfaceDesign";
import ServiceConsultation from "@/components/common/ServiceConsultation";

export default function KitchenPage() {
  return (
    <>
      <KitchenHeroSection />
      <Slider />
      <KitchenBudgetCalculator />
      <SurfaceDesign />
      <ServiceConsultation />
    </>
  );
}
