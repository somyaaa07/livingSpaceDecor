import TurnkeyHero from "@/components/service/turnkey-projects/TurnkeyHero";
import ServicesIncluded from "@/components/service/turnkey-projects/ServicesIncluded";
import OurProcess from "@/components/service/turnkey-projects/OurProcess";
import ProjectGallery from "@/components/service/turnkey-projects/ProjectGallery";
import Pricing from "@/components/service/turnkey-projects/Pricing";
import FAQ from "@/components/service/turnkey-projects/FAQ";
import ServiceConsultation from "@/components/common/ServiceConsultation";

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
