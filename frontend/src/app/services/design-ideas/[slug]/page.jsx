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

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const design = designIdeas.find((item) => item.slug === slug);

  if (!design) {
    return {
      title: "Design Ideas | Living Space Decor",
      description:
        "Explore premium interior design ideas by Living Space Decor.",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${design.title} | Living Space Decor`,
    description: design.description,

    keywords: [
      design.title,
      "Interior Design",
      "Home Interior",
      "Living Space Decor",
      "Interior Design Ideas",
    ],

    alternates: {
      canonical: `https://livingspacedecor.in/services/design-ideas/${slug}`,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
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
