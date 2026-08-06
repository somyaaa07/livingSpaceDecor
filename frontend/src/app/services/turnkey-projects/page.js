import TurnkeyHero from "@/components/service/turnkey-projects/TurnkeyHero";
import ServicesIncluded from "@/components/service/turnkey-projects/ServicesIncluded";
import OurProcess from "@/components/service/turnkey-projects/OurProcess";
import ProjectGallery from "@/components/service/turnkey-projects/ProjectGallery";
import Pricing from "@/components/service/turnkey-projects/Pricing";
import FAQ from "@/components/service/turnkey-projects/FAQ";
import ServiceConsultation from "@/components/common/ServiceConsultation";

export const metadata = {
  title: "Turnkey Interior Design Services | Living Space Decor",

  description:
    "Living Space Decor offers complete turnkey interior design services for homes, apartments, villas, and offices. From design and planning to execution, furniture, false ceilings, electrical work, painting, and final handover, we manage every aspect of your interior project.",

  keywords: [
    "Turnkey Interior Design",
    "Turnkey Interior Services",
    "Interior Contractor",
    "Office Interior",
    "Interior Designer in Noida",
    "Complete Home Interior",
    "Living Space Decor",
  ],

  alternates: {
    canonical: "/turnkey-projects",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function TurnkeyPage() {
  return (
    <>
      <TurnkeyHero />
      <OurProcess />
      <ServicesIncluded />
      <Pricing />
      <ProjectGallery />

      <FAQ />
      <ServiceConsultation />
    </>
  );
}
