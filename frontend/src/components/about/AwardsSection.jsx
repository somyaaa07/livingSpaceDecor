"use client";

import { Award, Trophy, Medal, Star } from "lucide-react";

const awards = [
  {
    year: "2024",
    title: "Best Luxury Interior Studio",
    organization: "India Design Awards",
    icon: Trophy,
  },
  {
    year: "2023",
    title: "Excellence In Architecture",
    organization: "National Design Council",
    icon: Award,
  },
  {
    year: "2022",
    title: "Top Residential Design Firm",
    organization: "Interior Excellence Awards",
    icon: Medal,
  },
  {
    year: "2021",
    title: "Customer Choice Award",
    organization: "Home Design Association",
    icon: Star,
  },
];

export default function AwardsSection() {
  return (
    <section className="bg-[#F7F2EB] py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-14">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-[#C8972B] text-xs mb-4">
            Awards & Recognition
          </p>

          <h2 className="font-[Cormorant_Garamond,serif] text-5xl text-[#2A1506] leading-tight">
            Celebrating
            <span className="text-[#C8972B]"> Excellence</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-[#6E6258] leading-8">
            Our commitment to exceptional design and customer satisfaction has
            earned recognition from leading industry organizations.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award) => {
            const Icon = award.icon;

            return (
              <div
                key={award.title}
                className="
                  bg-white
                  border
                  border-[#C8972B]/15
                  p-8
                  lg:rounded-tl-full lg:rounded-tr-full lg:rounded-br-none lg:rounded-bl-full
                  rounded-t-[50px]
          rounded-bl-[50px]
          rounded-br-none
          rounded-tr-[50px]
                  text-center
                  group
                  hover:border-[#C8972B]/50
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#C8972B]/10 flex items-center justify-center">
                    <Icon size={30} className="text-[#C8972B]" />
                  </div>
                </div>

                <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#C8972B] mb-3">
                  {award.year}
                </span>

                <h3 className="font-semibold text-[#2A1506] text-lg leading-7">
                  {award.title}
                </h3>

                <p className="text-[#7A726A] text-sm mt-3">
                  {award.organization}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
