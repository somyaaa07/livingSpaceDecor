//step3

"use client";

import Image from "next/image";

const styles = [
  {
    name: "Modern",
    image: "/image/living_room10.webp",
  },
  {
    name: "Contemporary",
    image: "/image/office_design5.webp",
  },
  {
    name: "Traditional",
    image: "/image/mandir_design3.webp",
  },
  {
    name: "Luxury",
    image: "/image/office_design.webp",
  },
];

export default function Step3Style({ formData, setFormData, next, back }) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12">
        <p className="uppercase tracking-[0.25em] text-[#C8972B] text-[10px] sm:text-xs mb-3">
          Cost Calculator
        </p>

       

        <p className="mt-3 text-sm md:text-base text-[#6E6258] max-w-xl mx-auto">
          Choose a style that best reflects your personality and lifestyle.
        </p>
      </div>

      {/* Style Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        {styles.map((style) => {
          const selected = formData.style === style.name;

          return (
            <button
              key={style.name}
              onClick={() =>
                setFormData({
                  ...formData,
                  style: style.name,
                })
              }
              className={`
                group
                overflow-hidden
                rounded-2xl
                border
                transition-all
                duration-300
                text-left

                ${
                  selected
                    ? "border-[#8B6B4A] ring-2 ring-[#8B6B4A]/20 shadow-lg"
                    : "border-[#E5D8C7] hover:border-[#C8972B]"
                }
              `}
            >
              {/* Image */}
              <div className="relative h-[320px] sm:h-[250px] md:h-[350px] overflow-hidden">
                <Image
                  src={style.image}
                  alt={style.name}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-fit transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    selected
                      ? "bg-[#8B6B4A]/20"
                      : "bg-black/10 group-hover:bg-black/20"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 bg-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-semibold text-[#2A1506]">
                    {style.name}
                  </h3>

                  {selected && (
                    <div className="w-3 h-3 rounded-full bg-[#8B6B4A]" />
                  )}
                </div>

                <p className="mt-2 text-sm text-[#6E6258]">
                  Elegant {style.name.toLowerCase()} interior design solutions.
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Style */}
      {formData.style && (
        <div className="mt-6 text-center">
          <span className="text-sm text-[#6E6258]">Selected Style:</span>

          <span className="ml-2 font-semibold text-[#C8972B]">
            {formData.style}
          </span>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 md:mt-12">
        <button
          onClick={back}
          className="
            w-full
            sm:w-auto
            min-w-[160px]
            border
            border-[#D8CFC4]
            text-[#6E6258]
            px-8
            py-3.5
            rounded-full
            text-sm
            font-medium
            transition-all
            duration-300
            hover:border-[#8B6B4A]
            hover:text-[#8B6B4A]
          "
        >
          ← Back
        </button>

        <button
          onClick={next}
          disabled={!formData.style}
          className={`
            w-full
            sm:w-auto
            min-w-[180px]
            px-8
            py-3.5
            rounded-full
            text-sm
            font-medium
            transition-all
            duration-300

            ${
              formData.style
                ? "bg-[#8B6B4A] text-white hover:bg-[#6F5439] hover:shadow-lg"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          Next Step →
        </button>
      </div>
    </div>
  );
}
