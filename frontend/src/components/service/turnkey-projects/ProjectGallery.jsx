"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Luxury Villa",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600",
    height: "h-[520px]",
  },
  {
    title: " Bedroom",
    category: "Bedroom",
    image:
      "/image/bedroom_design3.webp",
    height: "h-[320px]",
  },
  {
    title: "Modern Kitchen",
    category: "Kitchen",
    image:
      "/image/kitchen_design7.webp",
    height: "h-[420px]",
  },
  {
    title: "Living Lounge",
    category: "Interior",
    image:
      "/image/living_room10.webp",
    height: "h-[380px]",
  },
  {
    title: "Office Space",
    category: "Commercial",
    image:
      "/image/office_design11.webp",
    height: "h-[520px]",
  },
  {
    title: "Dining Area",
    category: "Luxury",
    image:"/image/dining_room2.webp",
    height: "h-[320px]",
  },
];
export default function ProjectGallery() {
  return (
    <section className="bg-[#F5EBE0] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className=" font-heading uppercase tracking-[0.35em] text-xs text-[#C8972B]">
            Our Portfolio
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-serif text-[#3D1F0D]">
            Featured
            <span className="font-heading text-[#C8972B]"> Projects</span>
          </h2>

          <p className=" font-body max-w-2xl mx-auto mt-6 text-[#6B5A4A] leading-8">
            Explore our collection of bespoke interiors, luxury residences and
            turnkey transformations crafted with timeless elegance.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[28px] break-inside-avoid mb-8"
            >
              <div className={`relative w-full ${project.height}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Gold Border */}
                <div className="absolute inset-4 border border-[#C8972B]/0 group-hover:border-[#C8972B]/60 rounded-[22px] transition-all duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-[#C8972B] text-xs tracking-[0.3em] uppercase">
                    {project.category}
                  </span>

                  <div className="flex items-end justify-between mt-3">
                    <h3 className="text-white font-serif text-3xl leading-tight">
                      {project.title}
                    </h3>

                    <div className="w-12 h-12 rounded-full bg-[#C8972B] flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <ArrowUpRight size={20} className="text-[#3D1F0D]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-20">
          <Link href="/portfolio" className="bg-[#3D1F0D] text-white px-10 py-5 rounded-md uppercase tracking-[0.25em] text-sm hover:bg-[#C8972B] transition duration-300">
            View All Projects
          </Link>
        </div> */}
      </div>
    </section>
  );
}
