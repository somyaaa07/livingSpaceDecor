"use client";

import FaqItem from "./FaqItem";
import { faqs } from "@/data/interiorData";

export default function FAQ() {
  return (
    <section className="relative bg-[#FAF8F3] py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.45em] text-[#C5A05C] text-[10px] sm:text-xs">
            Got Questions
          </span>

          <h2 className="mt-4 md:mt-5 font-heading text-[34px] sm:text-[44px] md:text-[56px] lg:text-[62px] leading-none text-[#1D140F]">
            Frequently{" "}
            <span className="font-heading text-[#C5A05C]">Asked</span>
          </h2>

          <div className="flex justify-center items-center gap-3 md:gap-4 mt-6 md:mt-8">
            <div className="w-10 md:w-14 h-px bg-[#D9C8A4]" />
            <div className="w-2 h-2 rotate-45 bg-[#D9C8A4]" />
            <div className="w-10 md:w-14 h-px bg-[#D9C8A4]" />
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
