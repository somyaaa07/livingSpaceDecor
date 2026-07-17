"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { wardrobeType } from "@/data/wardrobeData";

export default function WardrobeTypeStep({
  formData,
  setFormData,
  nextStep,
}) {
  return (
    <section className="py-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-block bg-[#C8972B]/10 text-[#C8972B] px-4 py-2 rounded-full text-sm font-medium mb-4">
          Wardrobe Cost Calculator
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-[#3D1F0D] mb-4">
          Choose Your Wardrobe Style
        </h1>

        <p className="text-[#6B6B6B] text-lg">
          Select the wardrobe type that best suits your space and lifestyle.
          Get an instant estimate in just a few steps.
        </p>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-3 gap-8">
        {wardrobeType.map((item) => {
          const selected = formData.type === item.id;

          return (
            <button
              key={item.id}
              onClick={() =>
                setFormData({
                  ...formData,
                  type: item.id,
                })
              }
              className={`group text-left overflow-hidden rounded-[30px] bg-white border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
              
              ${
                selected
                  ? "border-[#C8972B] ring-2 ring-[#C8972B]/30"
                  : "border-[#F0E6D8]"
              }
              `}
            >
              {/* Image */}
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

               
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#3D1F0D] mb-3">
                  {item.title}
                </h3>

                <p className="text-[#6B6B6B] leading-relaxed mb-5">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[#C8972B] font-semibold">
                    Select Style
                  </span>

                  <ArrowRight
                    size={20}
                    className="text-[#C8972B] transition-transform duration-300 group-hover:translate-x-2"
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Continue Button */}
      <div className="flex justify-center mt-14">
        <button
          disabled={!formData.type}
          onClick={nextStep}
          className={`px-10 py-4 rounded-md font-semibold transition-all duration-300 flex items-center gap-3
          
          ${
            formData.type
              ? "bg-[#3D1F0D] hover:bg-[#C8972B] text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }
          `}
        >
          Continue
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}