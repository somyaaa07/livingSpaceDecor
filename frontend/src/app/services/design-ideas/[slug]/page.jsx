import { designIdeas } from "@/data/designIdeas";
import { notFound } from "next/navigation";
import DesignHero from "@/components/common/DesignHero";
import MoodBoard from "@/components/common/MoodBoard";
import DesignGallery from "@/components/common/DesignGallery";
import FAQ from "@/components/common/FAQ";
import CTASection from "@/components/common/CTASection";
import Details from "@/components/common/Details";

export function generateStaticParams() {
  return designIdeas.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  const design = designIdeas.find((item) => item.slug === slug);

  if (!design) {
    notFound();
  }

  const detailTypeMap = {
    "living-room-design": "livingRoom",
    "bedroom-design": "bedroom",
    "bathroom-design":"bathroom",
    "dining-room-design":"diningRoom",
    "home-office-design":"homeOffice",
    "kids-room-design":"kidsRoom",
    "mandir-design":"mandir",
    "balcony-terrace-design":"balconyTerrace",
    "kitchen-design-ideas":"modularKitchen",
  };




  return (
    <>
      <DesignHero data={design} />
      <DesignGallery data={design}/>
      <MoodBoard data={design} />
      <Details type={detailTypeMap[slug]} />
      <FAQ data={design}/>
      <CTASection data={design}/>
      
    </>
  );
}
