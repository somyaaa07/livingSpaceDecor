"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const lightingTypes = [
  {
    title: "Profile Lighting",
    description:
      "Modern linear lighting solutions creating clean architectural lines.",
    images: [
      "/Light/profile1.avif",
      "/Light/profile2.avif",
      "/Light/profile3.avif",
    ],
  },
  {
    title: "Cove Lighting",
    description: "Hidden lighting that delivers warm ambient illumination.",
    images: [
      "/Light/cove1.avif",
      "/Light/cove2.avif",
      "/Light/cove3.avif",
    ],
  },
  {
    title: "Accent Lighting",
    description: "Focused lighting to highlight walls, décor and artwork.",
    images: [
      "/Light/accent1.avif",
      "/Light/accent2.avif",
      "/Light/accent3.avif",
    ],
  },
];

export default function LightingTypes() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#F5EBE0] py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full border border-[#C8972B]/30 bg-[#C8972B]/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-[#C8972B]">
            Lighting Solutions
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-heading text-[#3D1F0D]">
            Types of Lighting We Design
          </h2>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-5">
            {lightingTypes.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`group w-full text-left rounded-md border p-6 transition-all duration-500 ${
                  active === index
                    ? "bg-[#3D1F0D] border-[#3D1F0D] text-white"
                    : "bg-white border-gray-200 text-[#3D1F0D] hover:border-[#C8972B]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-heading">{item.title}</h3>

                  <ArrowRight
                    className={`transition-transform duration-300 ${
                      active === index
                        ? "translate-x-1"
                        : "group-hover:translate-x-1"
                    }`}
                  />
                </div>

                <p
                  className={`mt-4 text-[12px] ${
                    active === index ? "text-gray-300" : "text-gray-400"
                  }`}
                >
                  {item.description}
                </p>
              </button>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div>
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[32px]">
              <Image
                src={lightingTypes[active].images[0]}
                alt={lightingTypes[active].title}
                width={1200}
                height={800}
                className="h-[550px] w-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="mt-6 grid grid-cols-3 gap-5">
              {lightingTypes[active].images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-2xl">
                  <Image
                    src={image}
                    alt=""
                    width={400}
                    height={300}
                    className="h-44 w-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
