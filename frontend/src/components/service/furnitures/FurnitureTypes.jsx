"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  "All Rooms",
  "Living Room",
  "Bedroom",
  "Dining Room",
  "Home Office",
];

const images = [
  {
    category: "Living Room",
    image:
      "/image/living_room2.webp",
  },
  {
    category: "Home Office",
    image:
      "/image/office_design4.webp",
  },

  {
    category: "Bedroom",
    image:
      "/image/bedroom_design2.webp",
  },
  {
    category: "Living Room",
    image:
      "/image/living_room1.webp",
  },

  {
    category: "Bedroom",
    image:
      "/image/bedroom_design3.webp",
  },

  {
    category: "Dining Room",
    image:
      "/image/dining_room2.webp",
  },
  {
    category: "Bedroom",
    image:
      "/image/bedroom_design6.webp",
  },

  {
    category: "Dining Room",
    image:
      "/image/dining_room3.webp",
  },
  {
    category: "Living Room",
    image:
      "/image/living_room5.webp",
  },
  {
    category: "Home Office",
    image:
      "/image/office_design5.webp",
  },

  {
    category: "Dining Room",
    image:
      "/image/dining_room5.webp",
  },
  {
    category: "Living Room",
    image:
      "/image/living_room13.webp",
  },

  {
    category: "Bedroom",
    image:
      "/image/bedroom_design7.webp",
  },
  {
    category: "Home Office",
    image:
      "/image/office_design6.webp",
  },
  {
    category: "Dining Room",
    image:
      "/image/dining_room6.webp",
  },

  {
    category: "Home Office",
    image:
      "/image/office_design8.webp",
  },
];

export default function InspirationGallery() {
  const [activeTab, setActiveTab] = useState("All Rooms");

  const filteredImages =
    activeTab === "All Rooms"
      ? images
      : images.filter((item) => item.category === activeTab);

  return (
    <section className="bg-[#F8F4EE] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="uppercase tracking-[4px] text-xs text-[#B88A5A] mb-2">
            Get Inspired
          </p>

          <h2 className="text-4xl font-serif text-[#3D1F0D]">
            Explore Furniture in Real Spaces
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md text-sm transition-all duration-300
              ${
                activeTab === tab
                  ? "bg-[#3D1F0D] text-white"
                  : "bg-white text-[#3D1F0D] border border-[#E5D6C5]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {filteredImages.map((item, index) => (
            <div
              key={index}
              className="relative h-[280px] overflow-hidden group"
            >
              <Image
                src={item.image}
                alt={item.category}
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />

              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-lg font-medium">
                  {item.category}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
