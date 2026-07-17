// components/calculator/DimensionStep.jsx

"use client";

import { ArrowLeft, ArrowRight, Ruler } from "lucide-react";
import { dimensions } from "@/data/wardrobeData";

export default function DimensionStep({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  return (
    <section className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 bg-[#C8972B]/10 text-[#C8972B] px-4 py-2 rounded-full text-sm font-medium">
          Step 2 of 6
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-[#3D1F0D] mt-4 mb-4">
          Select Wardrobe Size
        </h2>

        <p className="text-[#6B6B6B] max-w-2xl mx-auto">
          Choose the wardrobe dimensions that best fit your room layout and
          storage requirements.
        </p>
      </div>

      {/* Dimension Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {dimensions.map((size) => {
          const selected = formData.dimension === size;

          return (
            <button
              key={size}
              onClick={() =>
                setFormData({
                  ...formData,
                  dimension: size,
                })
              }
              className={`group rounded-2xl p-4 text-left transition-all duration-300 border hover:-translate-y-1
              
              ${
                selected
                  ? "bg-[#3D1F0D] border-[#3D1F0D] shadow-xl"
                  : "bg-white border-[#F0E6D8] hover:border-[#C8972B]"
              }
              `}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5
                  
                ${
                  selected
                    ? "bg-[#C8972B]"
                    : "bg-[#F5EBE0]"
                }
                `}
              >
                <Ruler
                  size={24}
                  className={
                    selected
                      ? "text-white"
                      : "text-[#3D1F0D]"
                  }
                />
              </div>

              <h3
                className={`text-2xl font-bold mb-2
                  
                ${
                  selected
                    ? "text-white"
                    : "text-[#3D1F0D]"
                }
                `}
              >
                {size}
              </h3>

              <p
                className={`text-sm
                  
                ${
                  selected
                    ? "text-gray-300"
                    : "text-[#6B6B6B]"
                }
                `}
              >
                Ideal for modern bedroom layouts.
              </p>
            </button>
          );
        })}
      </div> 

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12">
        <button
          onClick={prevStep}
          className="flex items-center gap-2 border border-[#3D1F0D] text-[#3D1F0D] px-6 py-3 rounded-md hover:bg-[#3D1F0D] hover:text-white transition-all"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          disabled={!formData.dimension}
          onClick={nextStep}
          className={`flex items-center gap-2 px-8 py-3 rounded-md transition-all duration-300
          
          ${
            formData.dimension
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