import HeroSection from "@/components/about/HeroSection";
import TeamSection from "@/components/about/TeamSection";
import AwardsSection from "@/components/about/AwardsSection";
import AchievementStats from "@/components/about/AchievementStats";
import OurStory from "@/components/about/OurStory";

export const metadata = {
  title: "About Us | Living Space Decor",

  description:
    "Learn about Living Space Decor, a trusted interior designer company in Noida specializing in modular kitchens, wardrobes, luxury home interiors, and turnkey interior solutions.",

  keywords: [
    "About Living Space Decor",
    "Interior Designer in Noida",
    "Interior Design Company",
    "Home Interior",
    "Modular Kitchen",
    "Wardrobe Design",
    "Turnkey Interior",
  ],

  alternates: {
    canonical: "https://livingspacedecor.in/about",
  },

  robots: {
    index: true,
    follow: true,
  },
};

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