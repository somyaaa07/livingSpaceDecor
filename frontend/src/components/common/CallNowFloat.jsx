"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CallNowFloat() {
  const phoneNumber = "918826606869";

  return (
    <motion.a
      href={`tel:+${phoneNumber}`}
      aria-label="Call Now"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 1.2,
        type: "spring",
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="
        fixed
        bottom-[88px]
        right-4
        sm:bottom-[96px]
        sm:right-5
        md:bottom-[108px]
        md:right-5
        lg:bottom-[120px]
        lg:right-8
        z-[999]
        group
      "
    >
      {/* Ripple Animation */}
      <span className="absolute inset-0 rounded-full bg-[#b11406] animate-ping opacity-20" />

      {/* Main Button */}
      <div
        className="
          relative
          flex
          items-center
          justify-center
          w-14 h-14
          sm:w-16 sm:h-16
          md:w-[72px] md:h-[72px]
          lg:w-[72px] lg:h-[72px]
          rounded-full
          bg-[#b11406]
          text-white
          shadow-[0_15px_40px_rgba(177,20,6,0.45)]
        "
      >
        <FaPhoneAlt
          className="
            w-6 h-6
            sm:w-7 sm:h-7
            md:w-8 md:h-8
            lg:w-9 lg:h-9
          "
        />
      </div>

      {/* Tooltip */}
      <div
        className="
          hidden
          md:block
          absolute
          right-20
          lg:right-24
          top-1/2
          -translate-y-1/2
          whitespace-nowrap
          bg-[#C8972B]
          text-white
          text-xs
          lg:text-sm
          px-4
          py-2
          rounded-lg
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-300
          pointer-events-none
          shadow-xl
        "
      >
        Call Now
      </div>
    </motion.a>
  );
}