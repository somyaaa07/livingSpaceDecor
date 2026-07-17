"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

// Google Fonts Config for your layout.js / global.css:
// Marcellus: serif
// Poppins: sans-serif

const BRAND_STATS = [
  {
    number: "2014",
    label: "The Foundation",
    title: "A Decade of Spatial Mastery",
    description:
      "Living Space Decor operates as an uncompromising, full-service interior architectural firm, commanding transformations from blueprints to bespoke styling.",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
  },
  {
    number: "10+",
    label: "Refining the Craft",
    title: "Years of Living Innovation",
    description:
      "Ten years spent meticulously tailoring private residences, kitchens, and architectural suites, balancing strict geometry with soft livability.",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
  },
  {
    number: "35+",
    label: "The Collective",
    title: "Master Craftsmen & Artisans",
    description:
      "An elite, highly collaborative ecosystem of interior architects, project leaders, and artisan furniture makers refining every surface.",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop",
  },
  {
    number: "18",
    label: "Distinctions",
    title: "Recognitions for Excellence",
    description:
      "Eighteen regional accolades celebrating groundbreaking structural planning, ambient lighting integration, and premium material curation.",
    img: "/image/living_room13.webp",
  },
];

function FeatureCard({ stat, index }) {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      className="group relative flex flex-col justify-between bg-[#FCFAF7] border border-[#3D1F0D]/5 p-6 md:p-8 rounded-none transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-[#3D1F0D]/5"
    >
      {/* Top Meta Line */}
      <div className="flex items-center justify-between border-b border-[#3D1F0D]/5 pb-4 mb-6">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8972B] font-medium">
          {stat.label}
        </span>
        <span className="font-mono text-[11px] text-[#A89A90]">0{index + 1}</span>
      </div>

      {/* Asymmetrical Layout: Text & Image Interlocking */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center ">
        {/* Left Side: Editorial Content */}
        <div className="sm:col-span-7 order-2 sm:order-1 space-y-3">
          <div className="flex items-baseline gap-2">
            <h3 
              className="text-4xl sm:text-5xl font-normal text-[#2A1B12] leading-none"
              style={{ fontFamily: "'Marcellus', serif" }}
            >
              {stat.number}
            </h3>
            <span className="h-1 w-1 rounded-full bg-[#C8972B]" />
          </div>

          <h4 
            className="text-lg font-normal text-[#2A1B12] tracking-tight leading-snug"
            style={{ fontFamily: "'Marcellus', serif" }}
          >
            {stat.title}
          </h4>

          <p className="text-[13px] leading-relaxed text-[#6E5E54] font-light">
            {stat.description}
          </p>
        </div>

        {/* Right Side: Elegant Framed Image */}
        <div className="sm:col-span-5 order-1 sm:order-2">
          <div className="relative aspect-[16/11] sm:aspect-square w-full overflow-hidden bg-[#EADCC9] grayscale-[20%] sepia-[10%] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700">
            <Image
              src={stat.img}
              alt={stat.title}
              fill
              sizes="(max-width: 640px) 100vw, 200px"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            {/* Soft Warm Filter Overlay */}
            <div className="absolute inset-0 bg-[#3D1F0D]/5 mix-blend-multiply pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Bottom Minimal Action Trigger */}
      {/* <div className="mt-6 pt-4 border-t border-[#3D1F0D]/5 flex items-center justify-between text-[11px] font-medium tracking-widest uppercase text-[#2A1B12] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
        <span>View Details</span>
        <ArrowUpRight size={14} className="text-[#C8972B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div> */}
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#F7F4F0] py-20 lg:py-24 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }} // Base font for clean reading
    >
      {/* Subtle Luxury Watermark Lines */}
      <div className="absolute inset-y-0 left-8 lg:left-16 w-px bg-[#3D1F0D]/[0.02] pointer-events-none" />
      <div className="absolute inset-y-0 right-8 lg:right-16 w-px bg-[#3D1F0D]/[0.02] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ─── LUXURY MINIMALIST HEADER ─── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-[#C8972B]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C8972B]">
              Studio Credentials
            </span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2A1B12] leading-[1.2] tracking-tight"
            style={{ fontFamily: "'Marcellus', serif" }}
          >
            Design that lives <span className=" text-[#C8972B] font-light">with you</span>, not just in it.
          </h2>
          
          <div className="h-[1px] w-12 bg-[#C8972B]/50 mx-auto pt-1" />
        </motion.div>

        {/* ─── PRESTIGE LOOKBOOK GRID ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 ">
          {BRAND_STATS.map((stat, i) => (
            <FeatureCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}