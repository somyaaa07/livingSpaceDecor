import KitchenCostCalculator from "@/components/kitchenCalculator/KitchenCostCalculator";

export const metadata = {
  title: "Modular Kitchen Cost Calculator-Living Space Decor",

  description:
    "Estimate the cost of your modular kitchen instantly with our Kitchen Cost Calculator. Get pricing based on kitchen size, layout, materials, and finishes for your dream kitchen.",

  alternates: {
    canonical: "/kitchen-calculator",
  },
};

export default function Page() {
  return <KitchenCostCalculator />;
}
