import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import TrustStrip from "@/components/home/TrustStrip";
import CTASection from "@/components/home/CTASection";
import WhyChoose from "@/components/home/WhyChoose";
import UpcomingProjects from "@/components/home/UpcomingProjects";
import { getProjects } from "@/lib/serverApi";

export default async function Home() {

  const { data: projects } = await getProjects({
    page: 1,
    limit: 5,
  });
  return (
    <>
      <HeroSection />
      <Services />
      <UpcomingProjects/>
       <Portfolio portfolio={projects} />
      <WhyChoose />
      <TrustStrip />
      <CTASection />
      <Testimonials />
    </>
  );
}
