"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { wardrobeData } from "@/data/wardrobeData";

export default function WardrobeShowcase() {
  return (
    <section className="bg-[#F5EBE0] py-8 lg:py-18">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {wardrobeData.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-[28px] bg-white border border-[#e8dfd5]"
            >
              <div className="grid lg:grid-cols-[280px_1fr_320px]">
                {/* Left Content */}
                <div className="p-8 lg:p-10">
                  <span className="text-sm text-[#B8851F]">{item.id}</span>

                  <h2 className="mt-3 text-4xl font-serif text-[#3D1F0D]">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {item.features?.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-sm text-[#3D1F0D]"
                      >
                        <Check size={16} className="text-[#B8851F]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Main Image */}
                <div className="relative min-h-[350px] lg:min-h-[420px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right Side */}
                <div className="p-6">
                  {/* Sliding Wardrobe */}
                  {item.sectionType === "variations" && (
                    <>
                      <h3 className="mb-5 text-lg font-semibold text-[#3D1F0D]">
                        Design Variations
                      </h3>

                      <div className="grid grid-cols-2 gap-4">
                        {item.variations?.map((variation, index) => (
                          <div key={index}>
                            <div className="relative h-24 overflow-hidden rounded-xl">
                              <Image
                                src={variation.image}
                                alt={variation.title}
                                fill
                                className="object-cover"
                              />
                            </div>

                            <p className="mt-2 text-center text-xs text-gray-600">
                              {variation.title}
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Hinged Wardrobe */}
                  {item.sectionType === "accessories" && (
                    <>
                      <h3 className="mb-5 text-lg font-semibold text-[#3D1F0D]">
                        Interior Accessories
                      </h3>

                      <div className="grid grid-cols-2 gap-4">
                        {item.accessories?.map((acc, index) => (
                          <div
                            key={index}
                            className="rounded-xl border border-gray-200 p-4 text-center"
                          >
                            <div className="mb-3 flex justify-center">
                              <Image
                                src={acc.icon}
                                alt={acc.title}
                                width={50}
                                height={50}
                              />
                            </div>

                            <p className="text-xs text-[#3D1F0D]">
                              {acc.title}
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Walk-in Wardrobe */}
                  {item.sectionType === "gallery" && (
                    <>
                      <h3 className="mb-5 text-lg font-semibold text-[#3D1F0D]">
                        Luxury Gallery
                      </h3>

                      <div className="space-y-4">
                        {item.gallery?.map((img, index) => (
                          <div
                            key={index}
                            className="relative h-34 overflow-hidden rounded-xl"
                          >
                            <Image
                              src={img.image}
                              alt="Wardrobe Gallery"
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
