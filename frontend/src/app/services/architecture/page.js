import Hero from "@/components/service/architecture/Hero";
import Services from "@/components/service/architecture/Services";
import HowWeHelp from "@/components/service/architecture/HowWeHelp";
import CTA from "@/components/service/architecture/CTA";
import FAQ from "@/components/service/architecture/FAQ";

export const metadata = {
  title: "Architecture Design Services - Living Space Decor",

  description:
    "Professional architecture design services for residential and commercial projects. We provide architectural planning, space optimization, 3D visualization, elevation design, and construction-ready drawings.",
  alternates: {
    canonical: "/architecture",
  },
};

export default function ArchitecturePage() {
  return (
    <>
      <Hero />
      <Services />
      <HowWeHelp />
      <CTA />
      <FAQ />
    </>
  );
}
