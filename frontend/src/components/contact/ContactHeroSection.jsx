"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactHeroSection() {
  return (
    <section
      className="
        relative
        min-h-[100svh]
        flex
        items-center
        justify-center
        overflow-hidden
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1920&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1F0E04]/70" />

     

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-8 lg:px-14 text-center">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center justify-center gap-2 sm:gap-3 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <motion.span
            className="block h-px w-6 md:w-8 bg-[#C8972B] origin-right"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />

          <p
            className="
              uppercase
              tracking-[0.18em]
              sm:tracking-[0.25em]
              md:tracking-[0.35em]
              text-[#C8972B]
              text-[10px]
              sm:text-xs
              font-heading
            "
          >
            Get In Touch
          </p>

          <motion.span
            className="block h-px w-6 md:w-8 bg-[#C8972B] origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="
            font-heading
            text-white
            leading-[1.05]
            font-medium
            text-[30px]
            sm:text-[44px]
            md:text-[50px]
            lg:text-[60px]
          "
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          Let's Create Your
          <br />
          <span className="text-[#C8972B] font-heading">Dream Space</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="mx-auto mt-5 md:mt-6 h-px bg-[#C8972B]"
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
        />

        {/* Description */}
        <motion.p
          className="
            max-w-2xl
            mx-auto
            mt-5
            md:mt-6
            text-white/75
            text-sm
            sm:text-base
            md:text-sm
            leading-7
            md:leading-8
            px-2
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
          }}
        >
          Whether you're planning a complete home transformation or looking for
          expert interior guidance, we're here to bring your vision to life.
        </motion.p>

        {/* Breadcrumb */}
        <motion.div
          className="
            flex
            items-center
            justify-center
            gap-2
            md:gap-3
            mt-7
            md:mt-8
            text-xs
            sm:text-sm
            text-white/60
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.1,
          }}
        >
          <Link href="/" className="hover:text-[#C8972B] transition-colors">
            Home
          </Link>

          <span>/</span>

          <span className="text-[#C8972B]">Contact</span>
        </motion.div>
      </div>
    </section>
  );
}
