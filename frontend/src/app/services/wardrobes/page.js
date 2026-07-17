// "use client";

import HeroSection from "@/components/service/wardrobes/HeroSection";
import WardrobeShowcaseSection from "@/components/service/wardrobes/WardrobeShowcaseSection";
import DesignVariations from "@/components/service/wardrobes/Accessories";
import MaterialsAndFinishes from "@/components/service/wardrobes/MaterialsAndFinishes";
import OurProject from "@/components/service/wardrobes/OurProject";
import CTASection from "@/components/service/wardrobes/CTASection";
import Accessories from "@/components/service/wardrobes/Accessories";
import FAQSection from "@/components/service/wardrobes/FAQSection";
import Details from "@/components/service/wardrobes/Details";

export const metadata = {
  title: "Wardrobe Design Solutions - Living Space Decor",

  description:
    "Explore modern wardrobe designs with premium materials, finishes, smart storage accessories, sliding wardrobes, walk-in wardrobes, and custom wardrobe solutions for every.",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WardrobeShowcaseSection />
      <MaterialsAndFinishes />
      <Accessories />
      <OurProject />
      <Details />
      <CTASection />
      <FAQSection />
    </main>
  );
}
