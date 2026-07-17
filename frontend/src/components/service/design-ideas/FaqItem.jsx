"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`
        rounded-xl
        border
        transition-all
        duration-500
        cursor-pointer
        ${open ? "bg-[#C59A43] border-[#C59A43]" : "bg-white border-[#ECE3D1]"}
      `}
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex
          items-start
          justify-between
          gap-3
          sm:gap-4
          px-4
          sm:px-5
          py-4
          text-left
        "
      >
        {/* Left Content */}
        <div className="flex items-start gap-3 sm:gap-5 flex-1 min-w-0">
          {/* Number */}
          <div
            className={`
              w-10 h-10
              sm:w-11 sm:h-11
              rounded-xl
              border
              flex
              items-center
              justify-center
              text-xs
              sm:text-sm
              flex-shrink-0
              ${
                open
                  ? "border-white/30 text-white"
                  : "border-[#E6D9BF] text-[#C59A43]"
              }
            `}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Question */}
          <h3
            className={`
              font-body
              text-sm
              sm:text-[15px]
              leading-snug
              break-words
              ${open ? "text-white" : "text-[#231A14]"}
            `}
          >
            {question}
          </h3>
        </div>

        {/* Icon */}
        <div
          className={`
            w-10 h-10
            sm:w-12 sm:h-12
            rounded-full
            border
            flex
            items-center
            justify-center
            transition-all
            duration-300
            flex-shrink-0
            ${
              open
                ? "border-white/40 text-white rotate-180"
                : "border-[#D8C5A0] text-[#B8954A]"
            }
          `}
        >
          <ChevronDown size={18} />
        </div>
      </button>

      {/* Answer */}
      <div
        className={`
          overflow-hidden
          transition-all
          duration-500
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className={`
            px-4
            sm:px-6
            md:px-8
            lg:pl-[76px]
            pb-5
            sm:pb-6
            md:pb-8
            text-sm
            leading-7
            sm:leading-8
            ${open ? "text-white/90" : "text-[#7B6D5D]"}
          `}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}
