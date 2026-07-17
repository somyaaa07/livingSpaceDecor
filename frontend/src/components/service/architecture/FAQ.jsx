"use client";

import FaqItem from "./FaqItem";

const tags = ["Process", "Timelines", "Approvals"];

const faqs = [
  {
    q: "How long does an architecture project typically take?",
    a: "A residential project generally takes 12–18 months from concept to completion.",
    tags: ["Residential", "Commercial"],
  },
  {
    q: "Do you handle government approvals and permits?",
    a: "Yes. Our team manages the full statutory approval process.",
    tags: ["Approvals", "Legal"],
  },
  {
    q: "Can we be involved in the design process?",
    a: "Absolutely. We practice a deeply collaborative model.",
    tags: ["Collaboration", "Design"],
  },
  {
    q: "Do you take on projects outside major cities?",
    a: "Yes, we work across India and internationally.",
    tags: ["Location", "Remote"],
  },
  {
    q: "What sustainability practices do you follow?",
    a: "We prioritize passive cooling, natural lighting, locally sourced materials, and energy-efficient solutions.",
    tags: ["Sustainability", "Green Design"],
  },
  {
    q: "How do you ensure the quality of construction?",
    a: "We maintain strict quality control through inspections and detailed documentation.",
    tags: ["Quality", "Construction"],
  },
  {
    q: "Can you work within a specific budget?",
    a: "Yes, we tailor solutions to suit your budget while maintaining quality.",
    tags: ["Budget", "Cost Management"],
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#FAFAF8] py-16 md:py-20 lg:py-24 px-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-20">
        {/* Left Side */}
        <div className="lg:sticky lg:top-24 h-fit text-center lg:text-left">
          <span className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-[#B8882A]">
            Got Questions
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Frequently <br />
            <span className="font-heading text-[#B8882A]">Asked</span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#888] leading-7">
            Everything you need to know about working with us — from timelines
            to approvals.
          </p>

          <div className="mt-8 border border-[#B8882A]/20 bg-[#C9A96E]/10 p-5 sm:p-6">
            <div className="text-4xl sm:text-5xl text-[#B8882A]">7</div>

            <div className="mt-2 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#9a7840]">
              Common Questions
            </div>

            <div className="my-4 h-px bg-[#B8882A]/20" />

            <p className="text-sm text-[#9a7840] leading-7">
              Can't find an answer? Reach out directly — our team responds
              within one business day.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[#B4915A]/30 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[#9a7840]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              question={faq.q}
              answer={faq.a}
              tags={faq.tags}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
