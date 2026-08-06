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

export const metadata = {
  title: "Modern Modular Kitchen Design Ideas | Living Space Decor",

  description:
    "Explore modern modular kitchen design ideas by Living Space Decor. Discover L-shaped, U-shaped, parallel, straight, and island kitchen layouts with smart storage solutions, premium materials, finishes, and color combinations.",

  keywords: [
    "Modular Kitchen Design",
    "Modern Kitchen Design",
    "Kitchen Design Ideas",
    "L Shaped Kitchen",
    "U Shaped Kitchen",
    "Parallel Kitchen",
    "Island Kitchen",
    "Straight Kitchen",
    "Kitchen Interior Design",
    "Modular Kitchen in  Greater Noida",
    "Living Space Decor",
  ],

  alternates: {
    canonical: "/kitchen-design",
  },

  robots: {
    index: true,
    follow: true,
  },
};

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
