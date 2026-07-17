import TurnkeyHero from "@/components/service/turnkey-projects/TurnkeyHero";
import ServicesIncluded from "@/components/service/turnkey-projects/ServicesIncluded";
import OurProcess from "@/components/service/turnkey-projects/OurProcess";
import ProjectGallery from "@/components/service/turnkey-projects/ProjectGallery";
import Pricing from "@/components/service/turnkey-projects/Pricing";
import FAQ from "@/components/service/turnkey-projects/FAQ";
import ServiceConsultation from "@/components/common/ServiceConsultation";

export const metadata = {
  title: "Turnkey Interior Designer & Execution Services - Living Space Decor",

  description:
    "Get end-to-end turnkey interior solutions for homes, apartments, villas, and offices. From design and planning to execution, furniture, false ceilings, electrical work, and final handover, we manage everything under one roof.",

  alternates: {
    canonical: "/turnkey-projects",
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
