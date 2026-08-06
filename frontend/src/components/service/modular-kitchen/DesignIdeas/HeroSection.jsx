
"use client";

import Image from "next/image";
import { wardrobeTypes } from "@/data/wardrobeData";
import { ArrowRight, DoorClosed, Shirt } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const icons = [DoorClosed, DoorClosed, Shirt];
const kitchenTypes = [
  {
    title: "Straight Kitchen",
    image: "/Straight-shape.png",
  },
  {
    title: "L-Shaped Kitchen",
    image: "/L-shape.png",
  },
  {
    title: "U-Shaped Kitchen",
    image: "/image/u-kitchenDesign.webp",
  },
  {
    title: "Island Kitchen",
    image: "/image/island_kitchen.avif",
  },
];

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Hero Banner */}
      <div className="relative h-[750px] overflow-hidden">
        <Image
          src="/image/banner.webp"
          alt="Luxury Modular Kitchen"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0">
          <div className="container mx-auto flex h-full items-center justify-center px-4">
            <div className="max-w-2xl lg:-mt-56 text-center text-white">
              <span className="inline-block mb-5 whitespace-nowrap tracking-[2px] uppercase text-[#B8851F] text-sm">
                Beautiful. Functional. Timeless.
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
                Modular Kitchens
                <br />
                Designed For Modern Living
              </h1>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-3 mt-6 md:mt-8 origin-center"
              >
                <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-[#C8972B]" />

                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-[#C8972B] rounded-full"
                />

                <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-[#C8972B]" />
              </motion.div>

              <p className="mt-6 text-sm text-gray-200 max-w-xl leading-relaxed">
                Explore modern kitchen designs that blend functionality with
                aesthetics. Crafted with precision, built for everyday joy.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4 mb-4">
                <Link href="/portfolio">
                  <button className="rounded-md bg-[#B8851F] px-8 py-4 font-body text-white transition hover:opacity-90">
                    Explore Designs
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="rounded-md border border-[#B8851F] bg-white/10 px-8 py-4 font-body text-white backdrop-blur transition hover:bg-white/20">
                    Book Free Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <div className=" bg-[#F5EBE0] relative z-20 ">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 md:grid-cols-4">
            {kitchenTypes.map((item, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-[10px] -mt-6 bg-white shadow-md hover:shadow-2xl transition-shadow"
                >
                  <div className="relative h-[260px] ">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="relative px-4 pb-6 pt-6  text-center">
                    <h3 className="text-xl md:text-2xl font-serif text-[#3D1F0D]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm md:text-base text-gray-500 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
