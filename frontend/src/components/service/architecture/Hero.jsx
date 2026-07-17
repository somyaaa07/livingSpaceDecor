"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ArchitectureHero() {
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
    <section
      className="
        relative
        min-h-[100svh]
        lg:min-h-screen
        overflow-hidden
        flex
        items-center
        justify-center
        py-28
        sm:py-32
        lg:py-40
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000"
          alt="Luxury Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1F0E04]/70" />

      {/* Decorative Vertical Line */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="
          hidden lg:block
          absolute
          top-1/2
          right-10
          -translate-y-1/2
          z-10
          w-px
          h-40
          bg-gradient-to-b
          from-transparent
          via-[#C8972B]
          to-transparent
        "
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
            font heading
              flex
              items-center
              justify-center
              gap-2
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.25em]
              text-[#C8972B]
              mb-6
              -mt-20
            "
          >
            <span>Service</span>
            <span className="text-white/40">/</span>
            <span className="text-white">Architecture</span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants}>
            <h1
              className="
                font-heading
                text-white
                leading-[1.1]
                tracking-tight

                text-[22px]
                sm:text-[30px]
                md:text-[42px]
                lg:text-[48px]
              "
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block"
              >
                Building Legacies
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block text-[#C8972B]"
              >
                Design In Noida
              </motion.span>
            </h1>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-3 mt-8"
          >
            <div className="h-px w-10 sm:w-14 bg-gradient-to-r from-transparent to-[#C8972B]" />

            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="w-2 h-2 rounded-full bg-[#C8972B]"
            />

            <div className="h-px w-10 sm:w-14 bg-gradient-to-l from-transparent to-[#C8972B]" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="
              max-w-2xl
              mx-auto
              mt-8

              text-sm
              sm:text-base
              md:text-md

              leading-relaxed
              text-white/75
              font-light
              px-2
            "
          >
            Shaped by a legacy of excellence in thoughtful design, we create
            timeless architectural spaces that balance functionality,
            aesthetics, and innovation.
          </motion.p>

          {/* Buttons */}
          {/* <motion.div
            variants={itemVariants}
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-4
              sm:gap-5
              mt-10
            "
          >
            <motion.button
              whileHover={{
                scale: 1.04,
                backgroundColor: "#B8852F",
              }}
              whileTap={{ scale: 0.98 }}
              className="
                w-full
                sm:w-auto

                px-8
                sm:px-10

                py-4

                bg-[#C8972B]
                text-white

                rounded-md

                uppercase
                tracking-[0.15em]
                text-xs
                sm:text-sm

                transition-all
                duration-300
              "
            >
              <span className="flex items-center justify-center gap-2">
                Our Services
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

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="
                w-full
                sm:w-auto

                px-8
                sm:px-10

                py-4

                border-2
                border-[#C8972B]

                text-[#C8972B]

                rounded-md

                uppercase
                tracking-[0.15em]
                text-xs
                sm:text-sm

                hover:bg-[#C8972B]/10
                transition-all
                duration-300
              "
            >
              View Projects
            </motion.button>
          </motion.div> */}

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
                   View Projects
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
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="
            mt-16
            sm:mt-20
            lg:mt-24

            h-px
            bg-gradient-to-r
            from-transparent
            via-[#C8972B]/50
            to-transparent
            origin-center
          "
        />
      </div>
    </section>
  );
}
