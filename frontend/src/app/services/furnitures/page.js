

import Hero from "@/components/service/furnitures/HeroSection";
import Categories from "@/components/service/furnitures/Categories";
import FurnitureTypes from "@/components/service/furnitures/FurnitureTypes";
import FAQSection from "@/components/service/furnitures/FAQSection";
import MaterialTypes from "@/components/service/furnitures/MaterialTypes";

export const metadata = {
  title: "Custom Furniture Design Services | Living Space Decor",

description:
  "Discover custom furniture design services by Living Space Decor. Explore sofas, beds, wardrobes, dining tables, and storage solutions in Noida and Greater Noida.",
  keywords: [
    "Custom Furniture",
    "Furniture Design",
    "Furniture Designer",
    "Home Furniture",
    "Office Furniture",
    "Wardrobe Design",
    "Dining Table Design",
    "Furniture in Noida",
    "Living Space Decor",
  ],

  alternates: {
    canonical: "/furnitures",
  },

  robots: {
    index: true,
    follow: true,
  },
};


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