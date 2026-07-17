"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Sliding Wardrobe",
    image:
      "/image/wardrobe_design9.webp",
  },
  {
    title: "Walk-in Closet",
    image:
      "/image/wardrobe_design17.webp",
  },
  {
    title: "Luxury Bedroom Wardrobe",
    image:
      "/image/wardrobe_design8.webp",
  },
  {
    title: "Glass Wardrobe",
    image:
      "/image/wardrobe_design.webp",
  },
  {
    title: "Modern White Wardrobe",
    image:
      "/image/wardrobe_design2.webp",
  },
];

export default function RecentProjects() {
  return (
    <section className="bg-[#F5EBE0] py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-serif text-[#3D1F0D]">
            Our Recent Projects
          </h2>

          <button className="flex items-center gap-2 text-[#B8851F] text-sm font-medium">
            View All Projects
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-white"
            >
              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}