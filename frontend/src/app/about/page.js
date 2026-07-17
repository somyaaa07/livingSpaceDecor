import HeroSection from "@/components/about/HeroSection";
import TeamSection from "@/components/about/TeamSection";
import AwardsSection from "@/components/about/AwardsSection";
import AchievementStats from "@/components/about/AchievementStats";
import OurStory from "@/components/about/OurStory";

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <OurStory/>
      <AchievementStats/>
      <TeamSection />
      <AwardsSection />
    </>
  );
}