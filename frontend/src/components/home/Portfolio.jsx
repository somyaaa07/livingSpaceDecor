"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const portfolio = [
  {
    id: 1,
    title: "Luxury Living Room",
    image: "/image/living_room8.webp",
    featured: true,
  },
  {
    id: 2,
    title: "Modern Bedroom ",
    image: "/image/bedroom_design12.webp",
  },
  {
    id: 3,
    title: "Premium Kitchen",
    image: "/image/kitchen_design1.webp",
  },
  {
    id: 4,
    title: "Kids Room",
    image: "/image/kids_room4.webp",
  },
  {
    id: 5,
    title: "Contemporary Dining",
    image: "/image/dining_room2.webp",
  },
];

export default function LatestProjectsPremium() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="px-6 lg:px-14 py-32 bg-gradient-to-b from-[#F5EBE0]/20 to-transparent">
      {/* Header */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="flex items-center gap-3 text-[10px] tracking-[.28em] uppercase text-[#C8972B] font-medium mb-4">
          <span className="w-8 h-px bg-gradient-to-r from-[#C8972B] to-transparent" />
          Portfolio Selection
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <h2 className="font-[Cormorant_Garamond,serif] text-4xl md:text-[56px] font-medium leading-[1.15] text-[#2A1506]">
            Transforming Spaces Into Legacies
          </h2>
          <p className="text-[#3D1F0D]/70 text-sm leading-relaxed">
            Each project represents our commitment to blending timeless elegance
            with contemporary sophistication, creating interiors that tell your
            story.
          </p>
        </div>
      </motion.div>

      {/* Two Column Layout with Alternating */}
      <div className="space-y-6">
        {/* Featured Large Image - Row 1 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left - Large Featured Image */}
          <motion.div
            className="group relative overflow-hidden rounded-lg h-[380px] md:h-[440px] cursor-pointer md:col-span-2 md:row-span-1"
            onMouseEnter={() => setHoveredId(portfolio[0].id)}
            onMouseLeave={() => setHoveredId(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/portfolio" className="block h-full">
              <Image
                src={portfolio[0].image}
                alt={portfolio[0].title}
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* gradient overlay - always visible so text stays readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#140802]/80 via-[#140802]/30 to-transparent" />

              {/* text - always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1.5 bg-[#C8972B] text-white text-[9px] uppercase tracking-[.2em] font-semibold rounded-full mb-4">
                    Featured
                  </span>
                  <p className="font-heading text-[32px] md:text-[40px] font-medium text-white mb-2">
                    {portfolio[0].title}
                  </p>
                </div>
                <motion.div
                  animate={{
                    scale: hoveredId === portfolio[0].id ? 1.1 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 rounded-full bg-[#C8972B] flex items-center justify-center flex-shrink-0 ml-4"
                >
                  <ArrowUpRight size={18} className="text-white" />
                </motion.div>
              </div>

              <div className="absolute top-6 right-6">
                <div className="w-16 h-16 rounded-full border-2 border-[#C8972B] flex items-center justify-center">
                  <span className="font-heading text-[#C8972B] text-2xl font-semibold">
                    01
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Remaining 4 Images in 2x2 Grid */}
        <motion.div
          className="grid grid-cols-2  md:grid-cols-2  lg:grid-cols-2  gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {portfolio.slice(1, 5).map((p, i) => (
            <motion.div
              key={p.id}
              className="group relative overflow-hidden rounded-lg h-[320px] cursor-pointer"
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Link href="/portfolio" className="block h-full">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* gradient overlay - always visible so text stays readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#140802]/80 via-[#140802]/20 to-transparent" />

                {/* text - always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <div className="flex-1">
                    <p className="font-heading text-[22px] font-medium text-white mb-1">
                      {p.title}
                    </p>
                  </div>
                  <motion.div
                    animate={{
                      x: hoveredId === p.id ? 5 : 0,
                    }}
                    className="flex-shrink-0"
                  >
                    <ArrowUpRight size={14} className="text-white" />
                  </motion.div>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#C8972B] flex items-center justify-center text-white font-semibold text-sm">
                  {String(p.id).padStart(2, "0")}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="mt-20 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link
          href="/portfolio"
          className="group relative overflow-hidden  px-10 py-4 bg-[#3D1F0D] text-white uppercase tracking-[0.18em] text-xs font-semibold flex items-center gap-3 shadow-[0_10px_30px_rgba(61,31,13,0.25)]"
        >
         
          {/* Text */}
          <span className="relative z-10 group-hover:tracking-[0.22em] transition-all duration-300">
            Explore Full Portfolio
          </span>

          {/* Icon */}
          <motion.div
            className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#C8972B] text-[#3D1F0D]"
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight size={16} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
