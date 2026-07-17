"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Users, Award, Star } from "lucide-react";

const stats = [
  { icon: Building2, number: 500, suffix: "+", label: "Projects Completed" },
  { icon: Users, number: 500, suffix: "+", label: "Happy Clients" },
  { icon: Award, number: 10, suffix: "+", label: "Years Experience" },
  { icon: Star, number: 100, suffix: "%", label: "Client Satisfaction" },
];

/* Count-up hook */
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    const step = (ts) => {
      if (!startTime) startTime = ts;

      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * target));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatCard({ stat, index }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const count = useCounter(stat.number, 2000, inView);

  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      className="
        bg-white/5
        border
        border-[#C8972B]/20
        rounded-t-[50px]
          rounded-bl-[50px]
          rounded-br-none
          rounded-tr-[50px]
        
        
        lg:rounded-tl-full
        lg:rounded-tr-full
        lg:rounded-br-none
        lg:rounded-bl-full
        p-6
        sm:p-8
        md:p-10
        lg:p-12
        text-center
        group
        cursor-default
      "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        y: -8,
        borderColor: "rgba(200,151,43,0.55)",
        backgroundColor: "rgba(255,255,255,0.08)",
        transition: { duration: 0.3 },
      }}
    >
      {/* Icon */}
      <motion.div
        className="flex justify-center mb-4 sm:mb-5"
        initial={{ scale: 0, rotate: -20 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 200,
          delay: index * 0.15 + 0.25,
        }}
      >
        <motion.div
          className="
            w-12 h-12
            sm:w-14 sm:h-14
            rounded-full
            bg-[#C8972B]/10
            flex
            items-center
            justify-center
          "
          whileHover={{
            backgroundColor: "rgba(200,151,43,0.25)",
            scale: 1.1,
          }}
          transition={{ duration: 0.3 }}
        >
          
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#C8972B]"
           />
        </motion.div>
      </motion.div>

      {/* Counter */}
      <h3
        className="
          font-[Cormorant_Garamond,serif]
          text-3xl
          sm:text-4xl
          lg:text-5xl
          text-white
          mb-1
        "
      >
        {count}
        {stat.suffix}
      </h3>

      {/* Gold underline */}
      <motion.div
        className="h-px bg-[#C8972B]/40 mx-auto mb-3"
        initial={{ width: 0 }}
        whileInView={{ width: 36 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: index * 0.15 + 0.5,
        }}
      />

      <p
        className="
          text-[#EDE0D0]/70
          text-xs
          sm:text-sm
          tracking-wide
        "
      >
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function AchievementStats({
  eyebrow = "Our Achievements",
  title = "Numbers That Reflect",
  highlight = "Excellence",
  items = stats,
}) {
  return (
    <section className="bg-[#3D1F0D] py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-14">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            className="
              uppercase
              tracking-[0.3em]
              text-[#C8972B]
              text-[11px]
              md:text-xs
              mb-4
            "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {eyebrow}
          </motion.p>

          <motion.h2
            className="
              font-[Cormorant_Garamond,serif]
              text-[34px]
              sm:text-[42px]
              md:text-5xl
              text-white
              leading-tight
            "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {title}
            <span className="text-[#C8972B]"> {highlight}</span>
          </motion.h2>

          <motion.div
            className="h-px bg-[#C8972B]/30 mx-auto mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
