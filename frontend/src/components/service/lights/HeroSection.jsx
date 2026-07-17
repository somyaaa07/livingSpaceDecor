// "use client";

// import Link from "next/link";

// export default function LightingHero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop')",
//         }}
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/65" />

//       {/* Glow Effects */}
//       <div className="absolute top-20 left-10 h-40 w-40 rounded-full bg-yellow-500/20 blur-3xl" />
//       <div className="absolute bottom-20 right-10 h-52 w-52 rounded-full bg-amber-400/20 blur-3xl" />

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-6 text-center">
//         {/* Badge */}
//         <div className="inline-flex items-center rounded-full border border-[#C8972B]/40 bg-[#C8972B]/10 px-5 py-2 text-sm font-medium text-[#F5D27A] backdrop-blur-sm">
//           ✨ Smart Lighting & Electrical Solutions
//         </div>

//         {/* Heading */}
//         <h1 className="mt-6 text-2xl font-bold leading-tight text-white md:text-4xl lg:text-4xl">
//           Illuminate Every Corner with
//           <span className="block text-[#C8972B]">
//             Thoughtfully Designed Lighting
//           </span>
//         </h1>

//         {/* Description */}
//         <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-sm">
//           From elegant cove and profile lighting to complete electrical
//           planning, we create lighting solutions that transform spaces,
//           improve comfort, and bring your interiors to life.
//         </p>

//         {/* Buttons */}
//         <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
//           <Link
//             href="/contact"
//             className="rounded-md bg-[#C8972B] px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#D6A93A]"
//           >
//             Get Free Consultation
//           </Link>

//           <Link
//             href="/portfolio"
//             className="rounded-md border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
//           >
//             View Our Projects
//           </Link>
//         </div>

        

       
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden flex items-center py-24 md:py-32 lg:py-40">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg"
          alt="Interior Light"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1F0E04]/60" />

      {/* Decorative Line */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-1/2 right-4 md:right-8 z-[4] hidden md:block w-[1px] h-24 lg:h-32 bg-gradient-to-b from-transparent via-[#C8972B] to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#C8972B] mb-6 md:mb-8"
          >
            <span>Service</span>
            <span className="text-white/40">/</span>
            <span className="text-white">Lights</span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="font-heading text-white leading-[1.05] tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="
                  block
                  text-[34px]
                  sm:text-[25px]
                  md:text-[40px]
                  lg:text-[52px]
                "
              >
                 Illuminate Every Corner with
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="
                  block
                  text-[#C8972B]
                  text-[30px]
                  sm:text-[22px]
                  md:text-[34px]
                  lg:text-[44px]
                  mt-2
                "
              >
               Thoughtfully Designed Lighting
              </motion.span>
            </h1>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mt-6 md:mt-8 origin-center"
          >
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-[#C8972B]" />

            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-[#C8972B] rounded-full"
            />

            <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-[#C8972B]" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="
              max-w-3xl
              mx-auto
              mt-6
              md:mt-8
              px-2
              text-sm
              sm:text-base
              md:text-lg
              leading-7
              md:leading-8
              text-[#D8D2CC]
              font-light
            "
          >
           From elegant cove and profile lighting to complete electrical
           planning..
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 pt-8 md:pt-10"
          >
            <Link href="/portfolio">
              <motion.button
                whileHover={{
                  scale: 1.04,
                  backgroundColor: "#B8852F",
                }}
                whileTap={{ scale: 0.98 }}
                className="
                    w-full sm:w-auto
                    px-8 md:px-10
                    py-3.5 md:py-4
                    bg-[#C8972B]
                    rounded-md
                    text-white
                    uppercase
                    tracking-[0.12em]
                    md:tracking-[0.15em]
                    text-xs md:text-sm
                    transition-all
                    duration-300
                  "
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Projects
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="
                    w-full sm:w-auto
                    px-8 md:px-10
                    py-3 md:py-3.5
                    border-2
                    border-[#C8972B]
                    rounded-md
                    text-[#C8972B]
                    uppercase
                    tracking-[0.12em]
                    md:tracking-[0.15em]
                    text-xs md:text-sm
                    hover:bg-[#C8972B]/10
                    transition-all
                    duration-300
                  "
              >
                Book Consultation
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-20 lg:mt-24 h-px bg-gradient-to-r from-transparent via-[#C8972B]/50 to-transparent origin-center"
        />
      </div>
    </section>
  );
}
