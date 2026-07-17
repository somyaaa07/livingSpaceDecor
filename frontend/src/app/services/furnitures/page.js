

import Hero from "@/components/service/furnitures/HeroSection";
import Categories from "@/components/service/furnitures/Categories";
import FurnitureTypes from "@/components/service/furnitures/FurnitureTypes";
import FAQSection from "@/components/service/furnitures/FAQSection";
import MaterialTypes from "@/components/service/furnitures/MaterialTypes";

export const metadata = {
  title: " Furniture Designer - Living Space Decor ",

  description:
    "Discover premium custom furniture solutions for homes and offices. Explore sofas, beds, wardrobes, dining tables,, storage furniture, and furniture materials crafted for style, comfort, and durability.",
alternates: {
    canonical: "/furnitures",
  },
}


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