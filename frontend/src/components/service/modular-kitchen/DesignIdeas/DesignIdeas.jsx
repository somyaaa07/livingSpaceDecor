"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const kitchenIdeas = [
  {
    title: "Modern Kitchens",
    description: "Clean lines & minimal aesthetics",
    image: "/image/kitchen_design11.webp",
  },
  {
    title: "Contemporary Kitchens",
    description: "Elegant & functional designs",
    image: "/image/kitchen_design4.webp",
  },
  {
    title: "Luxury Kitchens",
    description: "Premium finishes & high-end fittings",
    image: "/image/kitchen_design8.webp",
  },
  {
    title: "Classic Kitchens",
    description: "Timeless designs that never age",
    image: "/image/kitchen_design15.webp",
  },
];

export default function DesignIdeas() {
  return (
    <section className="bg-[#F5EBE0] py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <span className="text-[#B8851F] uppercase tracking-[3px] text-sm font-medium">
              Inspiration Gallery
            </span>

            <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-[#3D1F0D]">
              Kitchen Design Ideas
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {kitchenIdeas.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#3D1F0D]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>

                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
