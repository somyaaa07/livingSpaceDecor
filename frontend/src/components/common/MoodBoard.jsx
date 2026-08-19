"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Converts "/image/living_room2.webp" -> "Living Room 2"
function titleFromSrc(src = "") {
  const filename = src.split("/").pop() || "";
  const nameOnly = filename.replace(/\.[^/.]+$/, ""); // strip extension
  const withSpaces = nameOnly
    .replace(/[_-]+/g, " ")
    .replace(/([a-zA-Z])(\d)/g, "$1 $2"); // "room2" -> "room 2"

  return withSpaces
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function DesignGallery({ data }) {
  const images = data?.moodboard || [];
  const heading = data?.heading || "Explore Our Design Collections";
  const description =
    data?.description ||
    "Discover stunning interior designs that blend elegance with functionality.";
  const buttonText = data?.buttonText || "Explore";
  const buttonLink = data?.buttonLink || "/portfolio";
  const hoverSubtitle = data?.subtitle; // e.g. "Timeless Elegance"

  const ImageCard = ({ src, title, subtitle, className, priority = false }) => (
    <div
      className={`relative overflow-hidden bg-white group cursor-pointer shadow-sm hover:shadow-lg transition-shadow ${className}`}
    >
      <Image
        src={src}
        alt={title || "Design"}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        priority={priority}
        className="object-cover transition-all duration-500 group-hover:scale-105"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Text on hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        {title && (
          <h3 className="text-white text-base md:text-lg font-serif leading-snug mb-1">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="text-[#ddd8ce] text-xs md:text-sm leading-relaxed line-clamp-2">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );

  // Layout configuration - specify heights and spans for each image
  const layoutConfig = [
    { cols: "col-span-1 md:col-span-1", height: "h-[260px] md:h-[300px]" },
    { cols: "col-span-1 md:col-span-1", height: "h-[260px] md:h-[300px]" },
    { cols: "col-span-1 md:col-span-1", height: "h-[260px] md:h-[300px]" },
    { cols: "col-span-1 md:col-span-1", height: "h-[260px] md:h-[300px]" },
    { cols: "col-span-1 md:col-span-1", height: "h-[260px] md:h-[300px]" },
    { cols: "col-span-1 md:col-span-1", height: "h-[260px] md:h-[300px]" },
    { cols: "col-span-1 md:col-span-1", height: "h-[260px] md:h-[300px]" },
    { cols: "col-span-1 md:col-span-1", height: "h-[260px] md:h-[300px]" },
  ];

  return (
    <section className="py-24 bg-[#3D1F0D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl sm:text-xl lg:text-5xl font-serif text-white leading-tight mb-4">
            {heading}
          </h2>

          <p className="text-sm text-[#ddd8ce] mb-8 max-w-xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Gallery Grid - 2 cols on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {images.map((image, index) => {
            const config = layoutConfig[index] || layoutConfig[0];

            // Support both plain string URLs and { src, title, description } objects
            const isObject = typeof image === "object" && image !== null;
            const src = isObject ? image.src : image;
            const title = isObject ? image.title : titleFromSrc(image);
            const subtitle = isObject ? image.description : hoverSubtitle;

            return (
              <div key={index} className={config.cols}>
                <ImageCard
                  src={src}
                  title={title}
                  subtitle={subtitle}
                  className={config.height}
                  priority={index < 4}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
