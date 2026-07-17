"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="bg-[#F6F0E8] py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-14">
        <div className="grid lg:grid-cols-2  gap-12 lg:gap-20 items-center">
          {/* IMAGE SIDE */}
          <motion.div
            className="
    order-2
    lg:order-1
    relative
    w-full
    max-w-[280px]
    sm:max-w-[360px]
    md:max-w-[420px]
    h-[340px]
    sm:h-[420px]
    md:h-[520px]
    mx-auto
  "
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Back outline */}
            <motion.div
              className="absolute top-4 left-4 md:top-6 md:left-6 w-full h-full border-2 border-[#3D1F0D] lg:rounded-t-full lg:rounded-br-full lg:rounded-bl-none rounded-t-[50px]
          rounded-bl-[50px]
          rounded-br-none
          rounded-tr-[50px]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />

            {/* Image */}
            <div className="relative w-full h-full overflow-hidden lg:rounded-t-full lg:rounded-br-full lg:rounded-bl-none rounded-t-[50px]
              rounded-bl-[50px]
              rounded-br-none
              rounded-tr-[50px]">
              <Image
                src="/lsd_images/29.jpg"
                alt="Luxury Interior"
                fill
                sizes="(max-width: 868px) 100vw, 520px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#3D1F0D]/5" />
            </div>

            {/* Decorative Stars */}
            <motion.div
              className="absolute -right-10 top-20 text-[#3D1F0D] text-5xl hidden lg:block select-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              animate={{ rotate: 360 }}
              style={{
                animationDuration: "10s",
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
              }}
            >
              ✦
            </motion.div>

            <motion.div
              className="absolute -right-5 top-36 text-[#3D1F0D] text-xl hidden lg:block select-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              ✦
            </motion.div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            className="order-1 lg:order-2 text-center lg:text-left"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.p
              className="uppercase tracking-[0.3em] text-[#B68D40] text-[11px] md:text-xs mb-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Story
            </motion.p>

            <motion.h2
              className="
                font-[Cormorant_Garamond,serif]
                text-[38px]
                sm:text-[48px]
                md:text-[56px]
                lg:text-6xl
                text-[#2A1506]
                leading-tight
              "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Design With
              <span className="text-[#B68D40]"> Purpose</span>
            </motion.h2>

            <motion.div
              className=" h-px bg-[#B68D40] mt-6 mx-auto lg:mx-0 origin-center lg:origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ width: "48px" }}
            />

            <motion.p
              className="
  mt-8
  text-[#5E5347]
  leading-7
  md:leading-8
  max-w-xl
  mx-auto
  lg:mx-0
  text-sm
  md:text-base
"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              Since 2012, Living Space Decor has transformed luxury homes into
              timeless masterpieces. We combine premium craftsmanship,
              thoughtful planning, and elegant aesthetics to create interiors
              that reflect your lifestyle.
            </motion.p>

            <motion.p
              className="mt-4 text-[#5E5347] leading-7 md:leading-8 max-w-xl text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              Every project is approached with attention to detail, ensuring
              functionality and beauty coexist seamlessly.
            </motion.p>

            {/* Feature points */}
            <div className="mt-6 space-y-3">
              {[
                "Bespoke designs tailored to your lifestyle",
                "Premium materials sourced globally",
                "On-time delivery with zero compromise",
              ].map((point, i) => (
                <motion.div
                  key={point}
                  className="
                    flex
                    items-center
                    justify-center
                    lg:justify-start
                    gap-3
                  "
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.65 + i * 0.1 }}
                >
                  <span className="w-4 h-px bg-[#B68D40] flex-shrink-0" />
                  <span className="text-[#5E5347] text-sm">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 mt-10 bg-[#6B3413] text-white px-6 md:px-8 py-3 md:py-4 uppercase tracking-[0.15em] text-xs md:text-sm hover:bg-[#B68D40] transition-colors duration-300"
              >
                Free Consultation
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
