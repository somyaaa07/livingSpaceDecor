"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative overflow-hidden rounded-none min-h-[500px]">
          {/* VIDEO BACKGROUND */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/bg_video.mp4" type="video/mp4" />
          </video>

          {/* OVERLAYS */}
          <div className="absolute inset-0 bg-black/40 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-[#C8972B]/20 z-[2]" />

          {/* CONTENT GRID */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] min-h-[500px]">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="px-6 sm:px-8 md:px-12 lg:px-14 py-10 md:py-14 lg:border-r border-white/10 flex flex-col justify-center"
            >
              <p className="flex items-center gap-3 text-[10px] sm:text-[11px] tracking-[.22em] uppercase text-[#C8972B] font-semibold mb-5">
                <span className="w-5 h-px bg-[#C8972B]" />
                Luxury Interior Calculator
              </p>

              <h2 className="font-[Cormorant_Garamond,serif] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-medium text-white leading-[1.05] mb-6">
                Calculate Your
                <br />
                <span className="text-[#C8972B]">Dream Home</span>
                <br />
                Interior Cost
              </h2>

              <p className="text-white/80 text-[14px] md:text-[15px] leading-[1.9] font-light max-w-[500px]">
                Get an instant estimate for your luxury interior project. Plan
                your dream home with elegant, modern, and premium interior
                solutions tailored to your vision.
              </p>
            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              className="
                flex flex-col items-center justify-center gap-4
                px-6 sm:px-8 md:px-14
                py-10
                mx-4 sm:mx-8 lg:mx-9
                my-6 lg:my-12
             
                w-auto
                lg:min-w-[360px]
                backdrop-blur-md
             
                bg-[#F5EBE0]
                rounded-tl-full
                rounded-tr-full
                rounded-bl-full
                rounded-br-none
                overflow-hidden
              "
            >
              <h3 className="text-[#3D1F0D] text-center text-lg sm:text-xl font-medium">
                Get Your Instant Quote
              </h3>

              <Link
                href="/cost-calculator"
                className="
                  group
                  flex items-center justify-center gap-3
                  w-full max-w-[320px]
                  bg-[#3D1F0D]
                  hover:bg-white
                  text-white
                  hover:text-[#3D1F0D]
                  px-6 py-4
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[.16em]
                  transition-all duration-300
                "
              >
                Calculate Now
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <p className="text-[11px] sm:text-[12px] text-[#3D1F0D] text-center leading-[1.8]">
                <span className="font-semibold">500+</span> luxury projects
                delivered
                <br />
                across Noida, Greater Noida & Ghaziabad
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
