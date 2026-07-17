"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const categories = [
  {
    title: "Living Room",
    image: "/image/living_room8.webp",
    mobileImage: "/image/living_room8.webp",
    href: "/services/design-ideas/living-room-design",
    desc: "Where Luxury Meet Life Style.",
  },
  {
    title: "Modular Kitchen",
    image: "/image/9.webp",
    mobileImage: "/image/9.webp",
    href: "/kitchen-design",
    desc: "Crafted For Modern Homes.",
  },
  {
    title: "Modular Wardrobes",
    image: "/image/8.webp",
    mobileImage: "/image/8.webp",
    href: "/services/wardrobes",
    desc: "Style Meets Smart Storage.",
  },
];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = categories[activeIndex];

  return (
    <main className="overflow-x-hidden">
      <section className="relative  min-h-screen">
        {/* min-h-[700px] h-min */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="
            h-full
            [&_.swiper-pagination]:!bottom-8
            [&_.swiper-pagination-bullet]:bg-white/40
            [&_.swiper-pagination-bullet-active]:!bg-[#C8972B]
            [&_.swiper-pagination-bullet-active]:w-8
          "
        >
          {categories.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-screen min-h-[700px]">
                {/* Desktop & Tablet */}
                <div className="hidden md:block absolute inset-0 overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover zoom-image"
                  />
                </div>

                {/* Mobile */}
                <div className="block md:hidden absolute inset-0 overflow-hidden">
                  <Image
                    src={slide.mobileImage}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover zoom-image"
                  />
                </div>

                <div className="absolute inset-0 bg-[#000000]/40" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="max-w-4xl    mx-auto px-5 text-center">
            {/* Heading */}
            <h1
              className="
                  text-white
                  font-heading
                  font-medium
                  leading-[1.05]
                  mb-6
                  text-[28px]
                  sm:text-[18px]
                  md:text-[42px]
                  lg:text-[52px]
                  whitespace-nowrap
                  
                
                "
            >
              {activeSlide.title}
            </h1>
            {/* Tag */}
            <p className="text-[#ffffff] text-xs md:text-sm  tracking-[0.1em]  mb-5">
              {activeSlide.desc}
            </p>
            {/* Button */}
            <div className="flex justify-center">
              <Link
                href={activeSlide.href}
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-[#C8972B]
                  hover:bg-[#3D1F0D]
                  text-white
                  px-8
                  py-4
                  text-sm
                  tracking-[0.12em]
                  transition-all
                  duration-300
                "
              >
                Explore
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
