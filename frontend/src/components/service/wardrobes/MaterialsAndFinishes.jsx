"use client";

import { useState } from "react";
import Image from "next/image";

export default function MaterialsAndFinishes() {
  const [selected, setSelected] = useState(0);

  const finishes = [
    {
      name: "Laminate",
      image:
        "/wardrobe-material/Laminate.webp",
    },
    {
      name: "Mirror Finish",
      image:
        "/wardrobe-material/Mirror.webp",
    },
    {
      name: "Acrylic",
      image:
        "/wardrobe-material/Acrylic.webp",
    },
    
    {
      name: "Fluted Panels",
      image:
        "/wardrobe-material/Fluted.webp",
    },
    {
      name: "Veneer",
      image:
        "/wardrobe-material/Veneer.webp",
    },
    {
      name: "PU Finish",
      image:
        "/wardrobe-material/PU.webp",
    },
    
    
    {
      name: "Glass",
      image:
        "/wardrobe-material/Glass.webp",
    },
    {
      name: "Leather Panels",
      image:
        "/wardrobe-material/Leather Panels.webp",
    },
  ];

  const colors = [
    "#F8F5F0",
    "#D8D0C3",
    "#5B4A3D",
    "#8C7355",
    "#A89C73",
    "#66705B",
    "#2E3A59",
    "#9AA5B1",
  ];

  return (
    <section className="py-20 bg-[#F5EBE0]">
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* Materials */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r">

              <h2 className="text-3xl font-bold text-[#3D1F0D] mb-8">
                Materials & Finishes
              </h2>

              <div className="flex flex-wrap gap-2">
                {finishes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelected(index)}
                    className="flex flex-col items-center"
                  >
                    <div
                      className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all ${
                        selected === index
                          ? "border-[#B8851F]"
                          : "border-transparent"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <span className="text-[12px] mt-2 text-[#3D1F0D]">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="p-8">

              <h2 className="text-3xl font-bold text-[#3D1F0D] mb-8">
                Color Collection
              </h2>

              <div className="flex flex-wrap gap-4">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-full border-2 border-gray-200 cursor-pointer hover:scale-110 transition"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              <p className="mt-6 text-[12px] text-gray-600">
                Choose from premium wood grains, matte finishes,
                textured laminates, acrylics and luxury color palettes
                to match your interior style.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}