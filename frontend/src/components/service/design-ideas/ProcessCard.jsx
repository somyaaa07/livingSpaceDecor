"use client";

import { motion } from "framer-motion";

export default function ProcessCard({ num, title, desc, img }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group"
    >
      {/* Image Frame */}
      <div className="relative mb-6 sm:mb-8 overflow-hidden bg-white rounded-2xl">
        {/* Image */}
        <motion.img
          src={img}
          alt={title}
          className="
            w-full
            h-56
            sm:h-64
            md:h-72
            object-cover

            grayscale-0
            lg:grayscale

            lg:group-hover:grayscale-0

            transition-all
            duration-700
          "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />

        {/* Border Frame */}
        <div className="absolute inset-0 border border-neutral-200 rounded-2xl pointer-events-none" />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/30
            to-transparent
            opacity-100
            lg:opacity-0
            lg:group-hover:opacity-100
            transition-all
            duration-500
          "
        />

      
        {/* Explore Text - Desktop Only */}
        {/* <div
          className="
    hidden
    lg:flex
    absolute
    inset-0
    items-center
    justify-center

    opacity-0
    group-hover:opacity-100

    transition-all
    duration-500
  "
        >
          <span
            className="
      px-5
      py-2
      rounded-full
      bg-white/10
      backdrop-blur-md
      border
      border-white/20
      text-white
      uppercase
      tracking-[0.25em]
      text-xs
    "
          >
            Explore →
          </span>
        </div> */}

        {/* Step Number */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="
            absolute
            bottom-4
            right-4
            sm:bottom-5
            sm:right-5
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-light
            text-[#C8972B]
            opacity-20
          "
        >
          {num}
        </motion.div>
      </div>

      {/* Badge */}
      <div className="flex items-center gap-3 mb-4 sm:mb-5">
        <div className="w-2 h-2 bg-[#C8972B]" />

        <span
          className="
            text-[10px]
            sm:text-xs
            tracking-[0.25em]
            text-[#C8972B]
            font-medium
          "
        >
          STEP {num}
        </span>
      </div>

      {/* Title */}
      <h3
        className="
          text-xl
          sm:text-2xl
          md:text-3xl
          font-light
          text-black
          mb-3
          sm:mb-4
          tracking-tight
          transition-colors
          duration-300
          group-hover:text-[#C8972B]
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          text-sm
          sm:text-base
          text-neutral-600
          leading-relaxed
          font-light
        "
      >
        {desc}
      </p>

      {/* Accent Line */}
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: 50 }}
        whileTap={{ width: 50 }}
        transition={{ duration: 0.4 }}
        className="
          mt-5
          sm:mt-6
          h-px
          bg-gradient-to-r
          from-[#C8972B]
          to-transparent
        "
      />
    </motion.div>
  );
}
