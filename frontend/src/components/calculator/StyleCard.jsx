import Image from "next/image";
import { Check } from "lucide-react";

export default function StyleCard({ item, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        group
        relative
        w-full
        overflow-hidden
        rounded-3xl
        bg-white
        text-left
        transition-all
        duration-500

        ${
          selected
            ? "border-2 border-[#8B6B4A] shadow-xl shadow-[#8B6B4A]/20"
            : "border border-[#E7DCCB] hover:border-[#C8972B] hover:shadow-lg"
        }
      `}
    >
      {/* Image Section */}
      <div className="relative h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div
          className={`
            absolute
            inset-0
            transition-all
            duration-500

            ${
              selected
                ? "bg-[#8B6B4A]/25"
                : "bg-gradient-to-t from-black/40 via-black/10 to-transparent"
            }
          `}
        />

        {/* Selected Badge */}
        {selected && (
          <div className="absolute top-4 right-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#8B6B4A] text-white shadow-lg">
              <Check size={18} />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#2A1506]">
            {item.name}
          </h3>

          {!selected && <div className="w-3 h-3 rounded-full bg-[#E7DCCB]" />}
        </div>

        <p className="mt-3 text-sm md:text-base text-[#6E6258] leading-relaxed">
          Discover elegant {item.name.toLowerCase()} interiors crafted with
          premium materials, timeless aesthetics, and exceptional attention to
          detail.
        </p>

        {/* Bottom Accent Line */}
        <div
          className={`
            mt-5
            h-[2px]
            transition-all
            duration-500

            ${
              selected
                ? "w-full bg-[#8B6B4A]"
                : "w-12 bg-[#C8972B] group-hover:w-full"
            }
          `}
        />
      </div>
    </button>
  );
}
