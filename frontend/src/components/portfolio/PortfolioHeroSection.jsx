"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function PortfolioHeroSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="
        relative
        min-h-[100svh]
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Background Image */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: imageY }}>
        <Image
          src="/banner/12.png"
          alt="Portfolio hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1F0E04]/70" />

      {/* Content */}
      <motion.div
        className="
          relative
          z-10
          text-center
          px-5
          sm:px-6
          max-w-4xl
          mx-auto
        "
        style={{ y: textY }}
      >
        {/* Eyebrow */}
        <motion.div
          className="
            flex
            items-center
            justify-center
            gap-3
            mb-6
            md:mb-8
          "
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
            "
          >
            Luxury Interior Studio
          </p>

          <motion.span
            className="block h-px w-6 md:w-8 bg-[#C8972B] origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden">
          <motion.h1
            className="
              font-[Cormorant_Garamond,serif]
              font-medium
              text-white
              leading-tight
              text-[42px]
              sm:text-[56px]
              md:text-[72px]
            "
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Our <span className="text-[#C8972B]">Portfolio</span>
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          className="mx-auto mt-5 md:mt-6 h-px bg-[#C8972B] origin-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1,
            delay: 0.9,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{ width: "60px" }}
        />

        {/* Subtitle */}
        <motion.p
          className="
            mt-5
            md:mt-6
            text-white/80
            text-sm
            sm:text-base
            md:text-lg
            max-w-2xl
            mx-auto
            leading-7
            md:leading-8
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: "easeOut",
          }}
        >
          Explore our finest work — spaces designed with purpose, crafted with
          passion, and built to inspire.
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
            md:text-sm
            text-white/70
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
        >
          <Link href="/" className="hover:text-[#C8972B] transition">
            Home
          </Link>

          <span>/</span>

          <span className="text-[#C8972B]">Portfolio</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
