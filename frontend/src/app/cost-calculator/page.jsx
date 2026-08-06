// app/cost-calculator/page.jsx

import CostCalculator from "@/components/calculator/CostCalculator";

export const metadata = {
  title: "Interior Cost Calculator | Living Space Decor",

  description:
    "Estimate your home interior design cost instantly with the Living Space Decor Interior Cost Calculator. Get approximate pricing for modular kitchens, wardrobes, living rooms, bedrooms, and complete home interiors in Noida, Greater Noida,& Ghaziabad.",

  keywords: [
    "Interior Cost Calculator",
    "Home Interior Cost",
    "Interior Design Cost",
    "Interior Designer in Noida",
    "Living Space Decor",
  ],

  alternates: {
    canonical: "https://livingspacedecor.in/cost-calculator",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <CostCalculator />;
}
