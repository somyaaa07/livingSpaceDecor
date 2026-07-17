"use client";

import { Palette, Zap, Home, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Palette,
    title: "End-to-End Interior Solutions",
    description:
      "Everything from design planning to execution handled by one dedicated team, ensuring seamless coordination and exceptional quality.",
  },
  {
    icon: Zap,
    title: "Design to Handover in 45 Days",
    description:
      "Fast-track project management with transparent milestones, efficient workflows, and timely delivery without compromising quality.",
  },
  {
    icon: Home,
    title: "Move-In Ready Homes",
    description:
      "Fully furnished and functional homes delivered with every detail completed, allowing you to move in without any hassle.",
  },
];

export default function TurnkeyBenefits() {
  return (
    <section className="bg-[#F5EBE0] py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center rounded-full bg-[#C8972B]/10 px-4 py-2 text-sm font-semibold text-[#C8972B] mb-4">
            Why Choose Turnkey Interiors
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#3D1F0D] mb-5">
            Three Key Benefits
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Experience a hassle-free interior journey with complete project
            ownership, guaranteed timelines, and move-in-ready spaces.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-[#C8972B] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>

                {/* Icon */}
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C8972B]/10 transition-all duration-500 group-hover:bg-[#C8972B]">
                  <Icon
                    size={32}
                    className="text-[#C8972B] transition-all duration-500 group-hover:text-white"
                  />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-xl font-bold text-[#3D1F0D]">
                  {benefit.title}
                </h3>

                <p className="mb-8 text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>

              

                {/* Decorative Background */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#C8972B]/5 transition-all duration-500 group-hover:scale-150"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
