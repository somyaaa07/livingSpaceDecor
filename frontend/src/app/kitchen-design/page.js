import KitchenHero from "@/components/service/modular-kitchen/DesignIdeas/HeroSection";
import DesignIdeas from "@/components/service/modular-kitchen/DesignIdeas/DesignIdeas";
import SmartFeatures from "@/components/service/modular-kitchen/DesignIdeas/SmartFeatures";
import ColorPalette from "@/components/service/modular-kitchen/DesignIdeas/ColorPalette";
import MaterialsFinishes from "@/components/service/modular-kitchen/DesignIdeas/MaterialsFinishes";
import AccessoriesStorage from "@/components/service/modular-kitchen/DesignIdeas/AccessoriesStorage";
import RecentProjects from "@/components/service/modular-kitchen/DesignIdeas/RecentProjects";
import KitchenCTA from "@/components/service/modular-kitchen/DesignIdeas/KitchenCTA";
import FAQSection from "@/components/service/modular-kitchen/DesignIdeas/FAQSection";
import KitchenBudgetCalculator from "@/components/service/modular-kitchen/KitchenBudgetCalculator";



export default function KitchenPage() {
  return (
    <>
      <KitchenHero />
      <DesignIdeas />
      <SmartFeatures />
      <ColorPalette />
      <MaterialsFinishes />
      <AccessoriesStorage />
      <RecentProjects />
       <KitchenBudgetCalculator />
      <KitchenCTA />
      <FAQSection />
    </>
  );
}
