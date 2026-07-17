"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const finishes = {
  Acrylic: [
    {
      id: 1,
      title: "Revival Green",
      subtitle: "Acrylic Solid",
      color: "#A9B3AF",
      image:
        "https://images.pexels.com/photos/9209432/pexels-photo-9209432.jpeg",
    },
    {
      id: 2,
      title: "Slate Grey",
      subtitle: "Acrylic Solid",
      color: "#C1BDB8",
      image:
        "/image/kitchen_design1.jpeg",
    },
    {
      id: 3,
      title: "Pearl White",
      subtitle: "Acrylic Solid",
      color: "#D5D5D7",
      image:
        "https://images.pexels.com/photos/19966809/pexels-photo-19966809.jpeg",
    },
    {
      id: 4,
      title: "Warm Beige",
      subtitle: "Acrylic Solid",
      color: "#D9CEC2",
      image:
        "https://images.pexels.com/photos/7018399/pexels-photo-7018399.jpeg",
    },
    {
      id: 5,
      title: "Champagne",
      subtitle: "Acrylic Solid",
      color: "#B59F92",
      image:
        "https://images.pexels.com/photos/7166563/pexels-photo-7166563.jpeg",
    },
  ],
  Laminate: [
    {
      id: 1,
      title: "Sage Green",
      subtitle: "Matt Laminate",
      color: "#9DA19A",
      image:
        "https://images.pexels.com/photos/20653872/pexels-photo-20653872.jpeg",
    },
    {
      id: 2,
      title: "Ocean Blue",
      subtitle: "High Gloss Laminate",
      color: "#A6B9CD",
      image:
        "https://images.pexels.com/photos/7587864/pexels-photo-7587864.jpeg",
    },
    {
      id: 3,
      title: "Arctic White",
      subtitle: "High Gloss Laminate",
      color: "#E8E8EA",
      image:
        "https://images.pexels.com/photos/7535073/pexels-photo-7535073.jpeg",
    },
    {
      id: 4,
      title: "Warm Sand",
      subtitle: "High Gloss Laminate",
      color: "#C9B99A",
      image:
        "https://images.pexels.com/photos/7018399/pexels-photo-7018399.jpeg",
    },
  ],
  Acrishine: [
    {
      id: 1,
      title: "Ivory Cream",
      subtitle: "Acrishine",
      color: "#D7CEC4",
      image:
        "https://images.pexels.com/photos/7533763/pexels-photo-7533763.jpeg",
    },
    {
      id: 2,
      title: "Bright White",
      subtitle: "Acrishine",
      color: "#ECECEC",
      image:
        "https://images.pexels.com/photos/6523300/pexels-photo-6523300.jpeg",
    },
    {
      id: 3,
      title: "Forest Green",
      subtitle: "Acrishine",
      color: "#9DA19A",
      image:
        "https://images.pexels.com/photos/7535019/pexels-photo-7535019.jpeg",
    },
  ],
  PU: [
    {
      id: 1,
      title: "Snow White",
      subtitle: "PU Finish",
      color: "#ECECEC",
      image:
        "https://images.pexels.com/photos/19966809/pexels-photo-19966809.jpeg",
    },
    {
      id: 2,
      title: "Storm Grey",
      subtitle: "PU Finish",
      color: "#C1BDB8",
      image:
        "https://images.pexels.com/photos/7166645/pexels-photo-7166645.jpeg",
    },
    {
      id: 3,
      title: "Moss Green",
      subtitle: "PU Gross",
      color: "#9DA19A",
      image:
        "https://images.pexels.com/photos/9209432/pexels-photo-9209432.jpeg",
    },
  ],
};

const TABS = Object.keys(finishes);

function FinishCard({ item, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer group"
      style={{ borderRadius: "0px" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-[200px] sm:h-[240px] md:h-[260px] lg:h-[280px] overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{ background: item.color || "#E0D8D0" }}
          />
        )}

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E05]/80 via-transparent to-transparent" />

        {/* hover overlay */}
        <motion.div
          className="absolute inset-0 bg-[#C8972B]/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* arrow icon top right */}
        <motion.div
          className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 lg:top-4 lg:right-4 w-7 h-7 sm:w-7.5 sm:h-7.5 md:w-8 md:h-8 lg:w-8 lg:h-8 bg-[#C8972B] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.25 }}
        >
          <ArrowUpRight
            size={13}
            className="text-white sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-3.5 lg:h-3.5"
          />
        </motion.div>

        {/* color swatch bottom right */}
        <div
          className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 lg:bottom-4 lg:right-4 w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 lg:w-6 lg:h-6 rounded-full border-2 border-white/50 shadow-lg"
          style={{ background: item.color || "#C8972B" }}
        />
      </div>

      {/* Info */}
      <div className="bg-white px-3 sm:px-3.5 md:px-4 lg:px-4 py-2.5 sm:py-3 md:py-4 lg:py-4 border-b border-[#E8E0D6] group-hover:border-[#C8972B]/40 transition-colors duration-300">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p
              className="text-[#2A1506] font-medium text-xs sm:text-xs md:text-sm lg:text-sm group-hover:text-[#C8972B] transition-colors duration-300 truncate"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {item.title}
            </p>
            <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[10px] tracking-[0.2em] uppercase text-[#9E8E7E] mt-0.5 truncate">
              {item.subtitle}
            </p>
          </div>
          <motion.div
            className="w-px h-6 sm:h-6 md:h-8 lg:h-8 bg-[#C8972B]/30 mt-0.5 flex-shrink-0"
            animate={{ scaleY: hovered ? 1 : 0.3, opacity: hovered ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function FinishSelector() {
  const [activeTab, setActiveTab] = useState("Acrylic");
  const [tabIndex, setTabIndex] = useState(0);
  const scrollRef = useRef(null);

  const currentItems = finishes[activeTab];

  const handleTab = (tab, i) => {
    setActiveTab(tab);
    setTabIndex(i);
  };

  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-[#F7F2EB] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-6 lg:px-14">
        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10 md:mb-12 lg:mb-14 gap-4 sm:gap-6">
          <div className="flex-1">
            <motion.p
              className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[10px] tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] lg:tracking-[0.4em] uppercase text-[#C8972B] mb-2 sm:mb-3 md:mb-4 lg:mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Surface Finishes
            </motion.p>
            <motion.h2
              className="text-2xl sm:text-2.5xl md:text-3.5xl lg:text-4xl xl:text-5xl text-[#2A1506] font-medium leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              Finishes That
              <span className="text-[#C8972B]"> Set the Tone</span>
            </motion.h2>
            <motion.p
              className="text-[#6E5E4E] mt-2 sm:mt-2.5 md:mt-3 lg:mt-3 text-xs sm:text-xs md:text-sm lg:text-base max-w-md leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Choose surfaces that lift the light, calm the space, or add depth.
            </motion.p>
          </div>

          {/* nav arrows - hidden on mobile/tablet */}
          <div className="hidden lg:flex gap-3">
            <motion.button
              onClick={scrollLeft}
              className="w-12 h-12 border border-[#2A1506]/20 flex items-center justify-center text-[#2A1506]/50 hover:border-[#C8972B] hover:text-[#C8972B] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={scrollRight}
              className="w-12 h-12 border border-[#2A1506]/20 flex items-center justify-center text-[#2A1506]/50 hover:border-[#C8972B] hover:text-[#C8972B] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* ── Layout ── */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-start">
          {/* Left: vertical tabs - mobile horizontal scroll, lg vertical */}
          <div className="w-full lg:w-[180px] flex-shrink-0">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-1.5 sm:gap-2 md:gap-2 lg:gap-1 pb-2 lg:pb-0">
              {TABS.map((tab, i) => (
                <motion.button
                  key={tab}
                  onClick={() => handleTab(tab, i)}
                  className={`flex-shrink-0 lg:w-full text-left px-3 sm:px-4 md:px-4 lg:px-5 py-2 sm:py-3 md:py-3.5 lg:py-4 text-xs sm:text-xs md:text-sm lg:text-sm transition-all duration-300 relative overflow-hidden whitespace-nowrap lg:whitespace-normal border lg:border-0 rounded-md lg:rounded-none ${
                    activeTab === tab
                      ? "text-[#2A1506] font-medium bg-white lg:bg-transparent border-[#C8972B]/30 lg:border-0"
                      : "text-[#9E8E7E] hover:text-[#2A1506] bg-white/50 lg:bg-transparent border-transparent lg:border-0"
                  }`}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* active indicator */}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 top-0 bottom-0 w-0.5 lg:w-0.5 bg-[#C8972B]"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span className="relative pl-2.5 lg:pl-3">
                    {activeTab === tab && (
                      <span className="text-[#C8972B] mr-1 text-xs lg:text-xs">
                        ✦
                      </span>
                    )}
                    {tab}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* gold divider - visible below tabs on mobile/tablet, inline on desktop */}
            <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-6 pt-4 sm:pt-5 md:pt-5 lg:pt-6 border-t border-[#C8972B]/20 px-3 sm:px-4 md:px-4 lg:px-5 lg:block hidden lg:block">
              <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[10px] tracking-[0.2em] uppercase text-[#9E8E7E] mb-1.5 sm:mb-2 lg:mb-2">
                Selected
              </p>
              <p
                className="text-sm sm:text-sm md:text-base lg:text-base text-[#2A1506] font-medium"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {activeTab}
              </p>
              <p className="text-[10px] sm:text-[10px] md:text-xs lg:text-xs text-[#9E8E7E] mt-0.5 sm:mt-1 lg:mt-1">
                {currentItems.length} options
              </p>
            </div>
          </div>

          {/* Right: scrollable cards */}
          <div className="flex-1 w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                ref={scrollRef}
                className="flex gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 overflow-x-auto pb-2 sm:pb-3 lg:pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {currentItems.map((item, i) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 w-[calc(50vw-12px)] sm:w-[220px] md:w-[240px] lg:w-[260px] xl:w-[280px]"
                  >
                    <FinishCard item={item} index={i} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* scroll hint */}
            <div className="flex items-center gap-1.5 sm:gap-2 mt-3 sm:mt-4 lg:mt-4">
              {currentItems.map((_, i) => (
                <div
                  key={i}
                  className="h-px bg-[#C8972B]/30 transition-all duration-300"
                  style={{ width: i === 0 ? "20px" : "6px" }}
                />
              ))}
              <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[10px] text-[#9E8E7E] tracking-widest uppercase ml-1.5 sm:ml-2">
                Scroll to explore
              </span>
            </div>
          </div>
        </div>

        {/* Selected Info Card - Mobile/Tablet only */}
        <motion.div
          className="lg:hidden mt-6 sm:mt-8 md:mt-8 bg-white border border-[#E8E0D6] rounded-lg px-4 sm:px-5 md:px-5 py-4 sm:py-5 md:py-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#9E8E7E] mb-1 sm:mb-1.5">
                Selected Material
              </p>
              <p
                className="text-base sm:text-lg md:text-xl text-[#2A1506] font-medium"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {activeTab}
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl sm:text-2.5xl md:text-3xl font-medium text-[#C8972B]">
                {currentItems.length}
              </p>
              <p className="text-[8px] sm:text-[9px] md:text-[10px] text-[#9E8E7E] tracking-widest uppercase">
                Options
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
