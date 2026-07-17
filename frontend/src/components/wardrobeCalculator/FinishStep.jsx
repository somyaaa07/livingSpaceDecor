// components/calculator/FinishStep.jsx

"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { finishes } from "@/data/wardrobeData";

export default function FinishStep({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  return (
    <section className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 bg-[#C8972B]/10 text-[#C8972B] px-4 py-2 rounded-full text-sm font-medium">
          Step 3 of 6
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-[#3D1F0D] mt-4 mb-4">
          Choose Finish Material
        </h2>

        <p className="text-[#6B6B6B] max-w-2xl mx-auto">
          Select a finish that matches your style, durability requirements,
          and budget.
        </p>
      </div>

      {/* Finish Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {finishes.map((item) => {
          const selected = formData.finish === item.title;

          return (
            <button
              key={item.title}
              onClick={() =>
                setFormData({
                  ...formData,
                  finish: item.title,
                })
              }
              className={`group overflow-hidden rounded-[30px] bg-white border text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
              
              ${
                selected
                  ? "border-[#C8972B] ring-2 ring-[#C8972B]/30"
                  : "border-[#F0E6D8]"
              }
              `}
            >
              {/* Image */}
              <div className="relative h-50 overflow-hidden">
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

                <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#C8972B]">
                    Select Finish
                  </span>

                  {selected && (
                    <span className="bg-[#3D1F0D] text-white text-xs px-3 py-1 rounded-full">
                      Selected
                    </span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

     

      {/* Navigation */}
      <div className="flex justify-between mt-12">
        <button
          onClick={prevStep}
          className="flex items-center gap-2 border border-[#3D1F0D] text-[#3D1F0D] px-6 py-3 rounded-md hover:bg-[#3D1F0D] hover:text-white transition-all"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          disabled={!formData.finish}
          onClick={nextStep}
          className={`flex items-center gap-2 px-8 py-3 rounded-md transition-all duration-300
          
          ${
            formData.finish
              ? "bg-[#3D1F0D] text-white hover:bg-[#C8972B]"
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