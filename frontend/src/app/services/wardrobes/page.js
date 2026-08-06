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
  title: "Wardrobe Design Services | Living Space Decor",

description:
  "Discover custom wardrobe design services by Living Space Decor. Explore sliding, walk-in, hinged, and modular wardrobes with smart storage solutions in Noida and Greater Noida.",
  keywords: [
    "Wardrobe Design",
    "Custom Wardrobe",
    "Sliding Wardrobe",
    "Walk-in Wardrobe",
    "Modular Wardrobe",
    "Wardrobe Interior",
    "Bedroom Wardrobe",
    "Wardrobe Designer",
    "Wardrobe Design in Noida",
    "Living Space Decor",
  ],

  alternates: {
    canonical: "/wardrobes",
  },

  robots: {
    index: true,
    follow: true,
  },
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
