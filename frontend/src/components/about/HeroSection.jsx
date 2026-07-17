"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection({
  // ── props so you can reuse on any page ──
  eyebrow = "Luxury Interior Studio",
  title = "About",
  highlight = "Us",
  subtitle = "Creating timeless interiors that combine elegance, functionality, and exceptional craftsmanship since 2012.",
  image = "/banner/3.webp",
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Us", href: null },
  ],
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[70vh] min-h-[550px] flex items-center justify-center overflow-hidden"
    >
      {/* ── Parallax Image ── */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: imageY }}>
        <Image
          src={image}
          alt={`${title} ${highlight}`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-[#1F0E04]/60" />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" /> */}

      {/* ── Animated particles / decorative lines ── */}
      <motion.div
        className="absolute left-8 top-0 bottom-0 w-px bg-white/10"
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
      />
      <motion.div
        className="absolute right-8 top-0 bottom-0 w-px bg-white/10"
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
      />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ y: textY, opacity }}
      >
        {/* Eyebrow + line */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8 -mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.span
            className="block h-px w-8 bg-[#C8972B] origin-right"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
          <p className="uppercase tracking-[0.35em] text-[#C8972B] text-xs">
            {eyebrow}
          </p>
          <motion.span
            className="block h-px w-8 bg-[#C8972B] origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="font-heading text-5xl md:text-8xl font-medium text-white leading-tight"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {title} <span className="text-[#C8972B]">{highlight}</span>
          </motion.h1>
        </div>

        {/* Gold divider */}
        <motion.div
          className="mx-auto h-px bg-[#C8972B] mt-4 mb-0"
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 0.9, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-white/80 text-lg max-w-2xl mx-auto leading-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          {subtitle}
        </motion.p>

        {/* Breadcrumb */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-8 text-sm text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-3">
              {i > 0 && <span className="text-white/30">/</span>}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-[#C8972B] transition-colors duration-300"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#C8972B]">{crumb.label}</span>
              )}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}


