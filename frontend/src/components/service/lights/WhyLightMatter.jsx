"use client";

import Image from "next/image";
import { Lightbulb, Zap, Target, Smartphone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Lightbulb,
    title: "Better Ambience",
    description:
      "Create warm, inviting spaces with layered lighting that enhances mood, comfort, and visual appeal.",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description:
      "Reduce energy consumption with modern LED solutions designed for long-term performance and savings.",
  },
  {
    icon: Target,
    title: "Improved Functionality",
    description:
      "Strategically placed lighting improves usability in kitchens, workspaces, wardrobes, and living areas.",
  },
  {
    icon: Smartphone,
    title: "Smart Control Ready",
    description:
      "Manage brightness, schedules, and scenes effortlessly through mobile apps and automation systems.",
  },
];

export default function WhyLightingMatters() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative  overflow-hidden bg-[#F5EBE0] py-16 sm:py-24 lg:py-32">
      {/* Glow Effects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#C8972B]/12 blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-[#C8972B]/12 blur-[120px]"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-20"
        >
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex rounded-full border border-[#C8972B]/25 bg-[#C8972B]/8 px-4 py-2.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#C8972B]">
                ✨ Why Lighting Matters
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="mt-2 sm:mt-8 text-3xl sm:text-xl lg:text-4xl font-heading leading-tight text-[#3D1F0D]"
            >
              Lighting is More Than
              <span className="block text-[#C8972B] mt-2">Illumination</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-2 sm:mt-6 text-[#3D1F0D]/70 text-sm sm:text-sm leading-relaxed max-w-sm"
            >
              Transform your spaces with strategic lighting design that combines aesthetics, functionality, and innovation.
            </motion.p>

            {/* Feature Cards */}
            <motion.div
              variants={containerVariants}
              className="mt-10 sm:mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2"
            >
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    className="group relative rounded-lg sm:rounded-xl border border-[#C8972B]/15 bg-white/40 backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C8972B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon Container */}
                      <motion.div
                        whileHover={{ scale: 1.12, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#C8972B]/12 text-[#C8972B] group-hover:bg-[#C8972B]/20 transition-colors duration-300"
                      >
                        <Icon size={20} strokeWidth={1.8} />
                      </motion.div>

                      {/* Title */}
                      <h3 className="mb-3 text-sm sm:text-sm font-heading text-[#3D1F0D]">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs font-body sm:text-sm leading-relaxed text-[#3D1F0D]/65">
                        {item.description}
                      </p>
                    </div>

                    {/* Border Animation on Hover */}
                    <div className="absolute inset-0 rounded-lg sm:rounded-xl border border-[#C8972B]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="mt-10 sm:mt-12">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2.5 rounded-md bg-[#3D1F0D] hover:bg-[#3D1F0D] text-white font-body text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Lighting Solutions
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <ArrowRight size={16} />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            className="relative h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]"
          >
            {/* Decorative Corner Elements */}
            <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-[#C8972B]/10 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[#C8972B]/8 blur-3xl" />

            {/* Image Container */}
            <div className="relative h-[500px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="relative h-full w-full"
              >
                <Image
                  src="/Light/light1.avif"
                  alt="Luxury Lighting Design"
                  width={900}
                  height={100}
                  className="h-full w-full object-cover"
                  priority
                />
              </motion.div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />

              {/* Accent Border */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-[#C8972B]/20 pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}