import Hero from "@/components/service/design-ideas/Hero";
import Services from "@/components/service/design-ideas/Services";
import Process from "@/components/service/design-ideas/Processe";
import CTA from "@/components/service/design-ideas/CTA";
import FAQ from "@/components/service/design-ideas/FAQ";

export const metadata = {
  title: "Design Ideas - Living Space Decor",

  description:
    "Explore modern interior design ideas for living rooms, bedrooms, kitchens, dining areas, home offices, and more. Get inspiration, expert tips, and stylish design solutions for your dream home.",

  alternates: {
    canonical: "/design-ideas",
  },
};

export default function InteriorPage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <CTA />
      <FAQ />
    </>
  );
}
