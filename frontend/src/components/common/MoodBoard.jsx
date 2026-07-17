

"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DesignGallery({ data }) {
  const images = data?.moodboard || [];
  const heading = data?.heading || "Explore Our Design Collections";
  const description =
    data?.description ||
    "Discover stunning interior designs that blend elegance with functionality.";
  const buttonText = data?.buttonText || "Explore";
  const buttonLink = data?.buttonLink || "/portfolio";

  const ImageCard = ({ src, className, priority = false }) => (
    <div
      className={`relative overflow-hidden bg-white group cursor-pointer shadow-sm hover:shadow-lg transition-shadow ${className}`}
    >
      <Image
        src={src}
        alt="Design"
        fill
        priority={priority}
        className="object-cover transition-all duration-500 group-hover:scale-105"
      />
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
            return (
              <div key={index} className={config.cols}>
                <ImageCard
                  src={image}
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