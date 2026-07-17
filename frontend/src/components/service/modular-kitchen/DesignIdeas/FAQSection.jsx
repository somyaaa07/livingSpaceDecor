"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";


const faqs = [
  {
    question: "How much does a modular kitchen cost?",
    answer:
      "The cost depends on kitchen size, layout, materials, finishes, and accessories. Our kitchens are customized to suit different budgets and requirements.",
  },
  {
    question: "How long does it take to complete a kitchen project?",
    answer:
      "Typically, a modular kitchen can be completed within 30–45 days from design approval to installation.",
  },
  {
    question: "What materials do you use for modular kitchens?",
    answer:
      "We offer Acrylic, Laminate, PU, Veneer, Glass, and Membrane finishes along with premium hardware and accessories.",
  },
  {
    question: "Do you provide a warranty?",
    answer:
      "Yes, we provide warranty coverage on materials, hardware, and workmanship depending on the selected package.",
  },
  {
    question: "Can I customize my kitchen layout?",
    answer:
      "Absolutely. Every kitchen is designed according to your space, lifestyle, storage needs, and design preferences.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState();

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Side */}
          <div className="lg:col-span-4">
            <span className="inline-block text-[#B8851F] uppercase tracking-[3px] text-sm font-medium">
              FAQ
            </span>

            <h2 className="mt-4 text-3xl lg:text-4xl font-serif text-[#3D1F0D] leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Everything you need to know about modular kitchens, materials,
              pricing, installation timelines and warranties.
            </p>

            <div className="mt-8 rounded-2xl bg-[#F5EBE0] p-6">
              <h3 className="text-base font-semibold text-[#3D1F0D]">
                Need More Help?
              </h3>

              <p className="mt-3 text-gray-600">
                Our kitchen experts are ready to answer all your questions.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-block rounded-md bg-[#B8851F] px-6 py-3 text-white hover:bg-[#9a6f18] transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Side FAQ */}
          <div className="lg:col-span-8">
            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    active === index
                      ? "border-[#B8851F] bg-[#FDF9F2]"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between px-7 py-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[#B8851F] font-semibold">
                        0{index + 1}
                      </span>

                      <h3 className="text-md font-semibold text-[#3D1F0D]">
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
                        active === index
                          ? "bg-[#B8851F] text-white"
                          : "bg-[#F5EBE0] text-[#B8851F]"
                      }`}
                    >
                      {active === index ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      active === index
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-16 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
