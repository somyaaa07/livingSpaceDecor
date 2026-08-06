import Hero from "@/components/service/architecture/Hero";
import Services from "@/components/service/architecture/Services";
import HowWeHelp from "@/components/service/architecture/HowWeHelp";
import CTA from "@/components/service/architecture/CTA";
import FAQ from "@/components/service/architecture/FAQ";

export const metadata = {
  title: "Architecture Design Services | Living Space Decor",

  description:
    "Living Space Decor offers professional architecture design services for homes and commercial spaces, including planning, elevations, and construction drawings in Noida and Greater Noida.",
  keywords: [
    "Architecture Design",
    "Architectural Services",
    "Residential Architecture",
    "Commercial Architecture",
    "House Planning",
    "Architect in Noida",
    "Living Space Decor",
  ],

  alternates: {
    canonical: "/architecture",
  },

  robots: {
    index: true,
    follow: true,
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
