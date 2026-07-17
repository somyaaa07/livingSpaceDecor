

import Hero from "@/components/service/furnitures/HeroSection";
import Categories from "@/components/service/furnitures/Categories";
import FurnitureTypes from "@/components/service/furnitures/FurnitureTypes";
import FAQSection from "@/components/service/furnitures/FAQSection";
import MaterialTypes from "@/components/service/furnitures/MaterialTypes";

export default function InteriorPage() {
  return (
    <>
      <Hero/>
      <Categories/>
      <FurnitureTypes/>
      <MaterialTypes/>
      <FAQSection/>
    </>
  );
}