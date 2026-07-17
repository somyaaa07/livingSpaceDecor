"use client";

import {
  Move,
  Package,
  DoorClosed,
  Wrench,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

const features = [
  {
    icon: Move,
    title: "Ergonomic Design",
    description: "Comfort in every move",
  },
  {
    icon: Package,
    title: "Ample Storage",
    description: "Organized & clutter-free",
  },
  {
    icon: DoorClosed,
    title: "Soft Closing",
    description: "Silent & smooth operation",
  },
  {
    icon: Wrench,
    title: "Premium Hardware",
    description: "Built to last longer",
  },
  {
    icon: ShieldCheck,
    title: "Easy Maintenance",
    description: "Designed for everyday ease",
  },
  {
    icon: Lightbulb,
    title: "Smart Lighting",
    description: "Perfect ambiance always",
  },
];

export default function SmartFeatures() {
  return (
    <section className="bg-[#F5EBE0] py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[#B8851F] uppercase tracking-[3px] text-sm font-medium">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#3D1F0D]">
            Smart Features for a Better Kitchen
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Thoughtfully designed kitchens with intelligent storage,
            premium materials, and modern functionality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-xl bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F5EBE0] text-[#B8851F] transition-all duration-300 group-hover:bg-[#B8851F] group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-md font-semibold text-[#3D1F0D]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}