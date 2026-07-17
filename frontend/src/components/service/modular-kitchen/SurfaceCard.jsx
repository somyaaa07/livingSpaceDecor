"use client";

import Image from "next/image";

export default function SurfaceCard({ item }) {
  return (
    <div className="w-full">
      {/* Card */}
      <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer aspect-[4/5] sm:aspect-[4/4.5] md:aspect-[4/4]">
        {/* Color Layer */}
        <div
          className="absolute inset-0 transition-all duration-500 group-hover:opacity-0"
          style={{ backgroundColor: item.color }}
        />

        {/* Image Layer */}
        {item.image && (
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              33vw
            "
            className="
              object-cover
              opacity-0
              scale-110
              transition-all
              duration-700
              ease-out
              group-hover:opacity-100
              group-hover:scale-100
            "
          />
        )}

        {/* Luxury Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#3D1F0D]/30
            via-transparent
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
          "
        />

        {/* Subtitle */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 z-10">
          <span
            className="
              text-[10px]
              sm:text-xs
              md:text-sm
              font-body
              text-black/50
              bg-white/60
              backdrop-blur-sm
              px-2
              py-1
              rounded-full
              whitespace-nowrap
            "
          >
            {item.subtitle}
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="mt-3 md:mt-4">
        <h3
          className="
            text-base
            sm:text-lg
            md:text-xl
            lg:text-2xl
            font-medium
            text-[#2A1506]
            leading-tight
            transition-colors
            duration-300
            group-hover:text-[#C8972B]
          "
          style={{
            fontFamily: "'Marcellus', poppins",
          }}
        >
          {item.title}
        </h3>
      </div>
    </div>
  );
}
