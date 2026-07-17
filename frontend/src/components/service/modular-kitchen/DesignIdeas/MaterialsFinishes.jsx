"use client";

import { ArrowRight } from "lucide-react";

const materials = [
  {
    title: "Acrylic Finish Kitchen",
    description:
      "High-gloss premium finish with a seamless modern appearance and luxurious shine.",
    image:
      "/kitchen/Acrylic.avif",
  },
  {
    title: "Laminate Finish Kitchen",
    description:
      "Durable, stylish and available in hundreds of colors, textures and patterns.",
    image:
      "/kitchen/Laminate.avif",
  },
  {
    title: "PU Finish Kitchen",
    description:
      "Smooth painted finish offering elegance, durability and timeless beauty.",
    image:
      "/image/kitchen_design6.webp",
  },
  {
    title: "Wood Veneer Kitchen",
    description:
      "Natural wood grains that bring warmth and sophistication to interiors.",
    image:
      "/kitchen/Veneer.avif",
  },
  {
    title: "Glass Finish Kitchen",
    description:
      "Reflective modern surfaces perfect for contemporary luxury spaces.",
    image:
      "/image/kitchen_design7.webp",
  },
  {
    title: "Membrane Finish Kitchen",
    description:
      "Flexible and stylish finish with seamless edges and rich aesthetics.",
    image:
      "/kitchen/Membrane.avif",
  },
];

export default function MaterialsFinishes() {
  return (
    <section className="py-24 bg-[#F5EBE0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[#B8851F] uppercase tracking-[4px] text-sm font-medium">
            Premium Collection
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#3D1F0D]">
            Materials & Finishes
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Explore luxury materials crafted to elevate your kitchen,
            wardrobe and furniture interiors.
          </p>
        </div>

        {/* Desktop Gallery */}
        <div className="hidden lg:flex h-[500px] gap-4">
          {materials.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                flex-1
                hover:flex-[4]
                transition-all
                duration-700
                ease-in-out
                rounded-[22px]
                overflow-hidden
                cursor-pointer
                
              "
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Large Number */}
              <div className="absolute top-8 left-8 text-white/20 text-6xl font-bold">
                0{index + 1}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white font-heading text-md lg:text-xl transition-all">
                  {item.title}
                </h3>

                <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500">
                  <p className="mt-4 text-white/80 leading-relaxed max-w-sm">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#B8851F] rounded-[32px] transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="grid lg:hidden gap-6">
          {materials.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-lg"
            >
              <div className="relative h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <h3 className="absolute bottom-5 left-5 text-white text-xl font-semibold">
                  {item.title}
                </h3>
              </div>

              <div className="p-6">
                <p className=" text-[12px] text-gray-600">
                  {item.description}
                </p>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}