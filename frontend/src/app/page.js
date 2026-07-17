import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import TrustStrip from "@/components/home/TrustStrip";
import CTASection from "@/components/home/CTASection";
import WhyChoose from "@/components/home/WhyChoose";
import UpcomingProjects from "@/components/home/UpcomingProjects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <UpcomingProjects/>
      <Portfolio />
      <WhyChoose />
      <TrustStrip />
      <CTASection />
      <Testimonials />
    </>
  );
}
