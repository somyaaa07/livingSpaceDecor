"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is the cost of a custom wardrobe?",
    answer:
      "The cost depends on the wardrobe size, materials, finishes, accessories, and level of customization. We offer solutions for a wide range of budgets.",
  },
  {
    question: "Which wardrobe type is best for small bedrooms?",
    answer:
      "Sliding wardrobes are ideal for compact spaces as they require no door swing area and maximize storage while maintaining a clean modern look.",
  },
  {
    question: "Can wardrobes be customized according to my room size?",
    answer:
      "Yes. All our wardrobes are fully customized to fit your room dimensions, storage needs, lifestyle, and design preferences.",
  },
  {
    question: "What materials and finishes do you offer?",
    answer:
      "We offer laminate, acrylic, glass, mirror, veneer, PU, and matte finishes along with premium hardware and accessories.",
  },
  {
    question: "How long does wardrobe installation take?",
    answer:
      "Most wardrobe projects are completed within 2–4 weeks depending on the design complexity, size, and customization requirements.",
  },
  {
    question: "Do you provide warranty on wardrobes?",
    answer:
      "Yes. We provide warranty coverage on materials, hardware, fittings, and workmanship depending on the selected package.",
  },
  
  
];

function FAQItem({ faq, index, openIndex, toggleFAQ }) {
  const isOpen = openIndex === index;

  return (
    <div className="border border-[#C8972B]/15 bg-white overflow-hidden group hover:border-[#C8972B]/40 transition-colors duration-300">
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full flex items-start justify-between p-4 sm:p-5 lg:p-6 text-left gap-3 sm:gap-4"
      >
        {/* Number + Question */}
        <div className="flex items-start gap-3 sm:gap-4 flex-1">
          <span className="text-[#C8972B]/40 text-[10px] sm:text-xs tracking-widest font-light mt-1 flex-shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="font-medium text-[#2A1506] text-sm sm:text-sm leading-snug group-hover:text-[#C8972B] transition-colors duration-300">
            {faq.question}
          </span>
        </div>

        {/* Icon */}
        <div
          className={`
            flex-shrink-0
            w-7 h-7
            rounded-full
            border
            flex
            items-center
            justify-center
            transition-all
            duration-300
            mt-0.5
            ${isOpen ? "bg-[#C8972B] border-[#C8972B]" : "border-[#C8972B]/30"}
          `}
        >
          {isOpen ? (
            <Minus size={13} className="text-white" />
          ) : (
            <Plus size={13} className="text-[#C8972B]" />
          )}
        </div>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-48" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-6 pb-5 sm:pb-6 pl-10 sm:pl-14 text-[#6E6258] leading-7 sm:leading-8 text-sm border-t border-[#C8972B]/10 pt-4">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#F7F2EB]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-14">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#C8972B] text-[11px] sm:text-xs mb-4">
            Frequently Asked Questions
          </p>

          <h2 className="font-[Playfair,serif] text-[36px] sm:text-[44px] md:text-5xl text-[#2A1506] leading-tight">
            Got Questions?
          </h2>

          <div className="w-12 h-px bg-[#C8972B] mx-auto mt-5 md:mt-6 mb-5 md:mb-6" />

          <p className="text-[#6E6258] max-w-xl mx-auto leading-7 sm:leading-8 text-sm px-2">
            Find answers to the most common questions about wardrobe designs,
            materials, customization options, installation timelines, and
            warranty..
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {leftFaqs.map((faq) => {
              const originalIndex = faqs.indexOf(faq);

              return (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  index={originalIndex}
                  openIndex={openIndex}
                  toggleFAQ={toggleFAQ}
                />
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightFaqs.map((faq) => {
              const originalIndex = faqs.indexOf(faq);

              return (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  index={originalIndex}
                  openIndex={openIndex}
                  toggleFAQ={toggleFAQ}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
