"use client";

import { motion } from "framer-motion";

const stats = [
  {
    num: "500+",
    title: "Projects Delivered",
    desc: "Luxury homes & premium interiors completed across Noida and Delhi NCR.",
  },
  {
    num: "10 Yr",
    title: "Warranty Support",
    desc: "Long-term warranty coverage for modular kitchens and interiors.",
  },
  {
    num: "45",
    title: "Day Fast Delivery",
    desc: "Timely project execution with premium finishing and quality assurance.",
  },
  {
    num: "100%",
    title: "Client Satisfaction",
    desc: "Trusted by homeowners for elegant and functional luxury interiors.",
  },
];

export default function StatsMarquee() {
  return (
    <section className="bg-[#3D1F0D]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="
                relative
                flex
                flex-col
                items-center
                justify-center
                text-center
                px-4
                sm:px-6
                lg:px-8
                py-8
                sm:py-10
                lg:py-12
                min-h-[220px]
                sm:min-h-[250px]
                border-b
                lg:border-b-0
                border-white/10
                even:border-l
                lg:border-l
                lg:first:border-l-0
                border-white/10
                group
                overflow-hidden
              "
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-[#C8972B]/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Number */}
              <motion.h3
                className="
                  relative
                  z-10
                  font-[Cormorant_Garamond,serif]
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-medium
                  text-[#C8972B]
                  leading-none
                "
                whileHover={{ scale: 1.05 }}
              >
                {s.num}
              </motion.h3>

              {/* Title */}
              <p
                className="
                  relative
                  z-10
                  mt-3
                  mb-3
                  text-[10px]
                  sm:text-[11px]
                  md:text-xs
                  tracking-[0.2em]
                  uppercase
                  text-white
                "
              >
                {s.title}
              </p>

              {/* Divider */}
              <div className="relative z-10 w-10 h-px bg-[#C8972B]/40 mb-3" />

              {/* Description */}
              <p
                className="
                  relative
                  z-10
                  text-[11px]
                  sm:text-xs
                  md:text-sm
                  text-white/60
                  leading-relaxed
                  max-w-[220px]
                  mx-auto
                "
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
