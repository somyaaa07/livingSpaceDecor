"use client";

import { motion } from "framer-motion";
import ProcessCard from "./ProcessCard";
import { steps } from "@/data/interiorData";

export default function Process() {
  // Stagger animation for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className=" font-heading text-xs tracking-widest text-[#C8972B] font-medium mb-6"
          >
            HOW WE WORK
          </motion.div>

          {/* Main Title */}
          <div className="max-w-3xl mx-auto">
            <h2 className=" font-heading text-5xl md:text-7xl lg:text-6xl font-light text-black mb-8 tracking-tight">
              Our Design{" "}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-heading text-[#C8972B] font-light"
              >
                Process
              </motion.span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mt-10 origin-center"
          >
            <motion.div
              className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-300/50"
              style={{ maxWidth: "60px" }}
            />
            <motion.div
              className="w-2 h-2 rotate-45 bg-[#C8972B]"
              whileInView={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            />
            <motion.div
              className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-300/50"
              style={{ maxWidth: "60px" }}
            />
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className=" font-heading grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
        >
          {steps.map((step, i) => (
            <motion.div key={step.num} variants={itemVariants}>
              <ProcessCard {...step} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
