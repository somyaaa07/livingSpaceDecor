"use client";

import { useState } from "react";

export default function FaqItem({ question, answer, tags, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#EDE9E0]">
      <button
        onClick={() => setOpen(!open)}
        className={`
          group
          relative
          flex
          items-center
          gap-3 sm:gap-5
          w-full
          text-left
          py-5 sm:py-6
          px-0 sm:px-2
          transition-all
          duration-300
          ${open ? "bg-[#B8882A] px-4 sm:px-6" : ""}
        `}
      >
        <span
          className={`
            flex-shrink-0
            text-xs sm:text-sm
            font-body
            transition
            ${open ? "text-white" : "text-[#B8882A]"}
          `}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={`
            flex-1
            text-sm
            sm:text-base
            md:text-lg
            leading-relaxed
            transition
            ${open ? "text-white" : "text-[#1a1a1a]"}
          `}
        >
          {question}
        </span>

        <div
          className={`
            w-8 h-8 sm:w-10 sm:h-10
            rounded-full
            border
            flex
            items-center
            justify-center
            flex-shrink-0
            transition
            ${
              open
                ? "border-white bg-white/20 text-white"
                : "border-[#B8882A]/40 text-[#B8882A]"
            }
          `}
        >
          <span className="text-lg">{open ? "−" : "+"}</span>
        </div>
      </button>

      <div
        className={`
          overflow-hidden
          transition-all
          duration-500
          ${open ? "max-h-[500px]" : "max-h-0"}
        `}
      >
        <div className="flex gap-4 pl-4 sm:pl-8 pb-6">
          <div className="w-[2px] bg-gradient-to-b from-[#B8882A] to-transparent" />

          <div>
            <p className="text-sm sm:text-base text-[#888] leading-7 sm:leading-8">
              {answer}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags?.map((tag, i) => (
                <span
                  key={i}
                  className="border border-[#B8882A]/30 px-3 py-1 text-[10px] uppercase tracking-widest text-[#9a7840]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
