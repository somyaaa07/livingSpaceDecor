

"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: "01",
    title: "Living Spaces",
    image:
      "/image/living_room1.webp",
    description:
      "Curated living rooms blending comfort with timeless elegance, tailored to your lifestyle.",
  },
  {
    id: "02",
    title: "Bedroom Sanctuaries",
    image:
      "/image/bedroom_design7.webp",
    description:
      "Restful retreats designed with layered textures, ambient lighting, and bespoke furniture.",
  },
  {
    id: "03",
    title: "Kitchen & Dining",
    image:
      "/image/kitchen_design13.webp",
    description:
      "Functional yet stunning culinary spaces that become the heart of your home.",
  },
  {
    id: "04",
    title: "Bespoke Furniture",
    image:
      "/lsd_images/45.jpg",
    description:
      "Custom-crafted pieces designed exclusively for your space and sensibilities.",
  },
  {
    id: "05",
    title: "Lighting Design",
    image: "/lsd_images/2.jpg",
    description:
      "Atmospheric lighting schemes that sculpt mood and highlight architectural features.",
  },
  {
    id: "06",
    title: "Material Sourcing",
    image:
      "/lsd_images/32.jpg",
    description:
      "Premium materials sourced globally to elevate every surface in your home.",
  },
  {
    id: "07",
    title: "Space Planning",
    image:
      "/lsd_images/42.jpg",
    description:
      "Intelligent layouts that optimize flow and functionality without sacrificing style.",
  },
  {
    id: "08",
    title: "Color Consultation",
    image: "/image/color_consultation.webp",
    description:
      "Harmonious palettes that reflect your personality and enhance your space.",
  },
];

export default function Services() {
  return (
    <section className=" overflow-x-hidden bg-gradient-to-b from-stone-50 to-white py-16 sm:py-20 md:py-24 lg:py-32">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-[#C8972B] text-xs sm:text-xs font-medium mb-4 sm:mb-6"
          >
            What We Offer
          </motion.p>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-stone-950 leading-tight px-2">
              Our Design{" "}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-heading text-[#C8972B] block md:inline"
              >
                Services
              </motion.span>
            </h2>
          </motion.div>

          {/* Decorative Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 sm:gap-4 mt-6 sm:mt-8 lg:mt-10 origin-center"
          >
            <motion.div
              className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-300/50"
              style={{ maxWidth: "40px", minWidth: "20px" }}
            />
            <motion.div
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-[#C8972B] flex-shrink-0"
              whileInView={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            />
            <motion.div
              className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-300/50"
              style={{ maxWidth: "40px", minWidth: "20px" }}
            />
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-8 xl:gap-12"
        >
          {services.map((item, index) => (
            <ServiceCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"
        />
      </div>
    </section>
  );
}
