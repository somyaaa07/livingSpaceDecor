// app/cost-calculator/page.jsx

import CostCalculator from "@/components/calculator/CostCalculator";

export const metadata = {
  title: " Cost Calculator-Living Space Decor",

  description:
    "Estimate your home interior design cost instantly with our Interior Cost Calculator. Get approximate pricing for modular kitchens, wardrobes, living rooms, bedrooms, and complete home interiors in Noida.",
}

export default function Page() {
  return (
    <CostCalculator />
  )
}