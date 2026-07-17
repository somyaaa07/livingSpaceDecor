"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function DesignGallery({ data }) {
  const leftRef = useRef(null);
  const centerRef = useRef(null);
  const rightRef = useRef(null);

  const leftInView = useInView(leftRef, { once: true, margin: "-100px" });
  const centerInView = useInView(centerRef, { once: true, margin: "-100px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-100px" });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#F5EBE0] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-10 items-center">
          {/* Left Image */}
          <motion.div
            ref={leftRef}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
            variants={imageVariants}
            className="relative h-[380px] md:h-[480px] group"
          >
            {/* Main border frame */}
            <div className="absolute inset-0 border border-[#C8972B]/20 pointer-events-none z-10" />
            
            {/* Left side accent border */}
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C8972B]/30 via-[#C8972B]/60 to-[#C8972B]/30" />
            
            {/* Right side accent border */}
            <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C8972B]/30 via-[#C8972B]/60 to-[#C8972B]/30" />

            <Image
              src={data.leftImage}
              alt={data.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Center Content */}
          <motion.div
            ref={centerRef}
            initial="hidden"
            animate={centerInView ? "visible" : "hidden"}
            variants={contentVariants}
            className="text-center px-2"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={centerInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#B8851F] uppercase tracking-[2px] text-[10px] font-medium"
            >
              About The Design
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={centerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-[#3D1F0D] text-3xl md:text-4xl font-serif leading-tight tracking-tight"
            >
              {data.galleryTitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={centerInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-xs md:text-sm text-[#6B6B6B] leading-7 max-w-sm mx-auto font-light"
            >
              {data.galleryDescription}
            </motion.p>

            
          </motion.div>

          {/* Right Image */}
          <motion.div
            ref={rightRef}
            initial="hidden"
            animate={rightInView ? "visible" : "hidden"}
            variants={imageVariants}
            className="relative h-[380px] md:h-[480px] group"
          >
            {/* Main border frame */}
            <div className="absolute inset-0 border border-[#C8972B]/20 pointer-events-none z-10" />
            
            {/* Left side accent border */}
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C8972B]/30 via-[#C8972B]/60 to-[#C8972B]/30" />
            
            {/* Right side accent border */}
            <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C8972B]/30 via-[#C8972B]/60 to-[#C8972B]/30" />

            <Image
              src={data.rightImage}
              alt={data.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}