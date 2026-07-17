"use client";

import ServiceCard from "./ServiceCard";

import {
  MdArchitecture,
} from "react-icons/md";

import {
  FaBuilding,
} from "react-icons/fa";

import {
  GiHouse,
  GiCrane,
} from "react-icons/gi";

const services = [
  {
    title: "Architecture & Planning",
    desc: "Strategic planning and architectural solutions that balance aesthetics, functionality, and sustainability.",
    image: "https://i.pinimg.com/736x/49/38/7a/49387af31bb13a81d9b8bf20b2383457.jpg",
    icon: MdArchitecture,
  },
  {
    title: "Elevation Design",
    desc: "Modern and elegant elevation concepts that enhance the visual identity of your property.",
    image: "https://i.pinimg.com/webp/736x/6e/5e/5d/6e5e5d2a676a699e5800ebc4cc7193f7.webp",
    icon: FaBuilding,
  },
  {
    title: "Residential Design",
    desc: "Personalized residential spaces crafted for comfort, luxury, and everyday living.",
    image: "https://i.pinimg.com/webp/1200x/21/5b/2b/215b2bc56b1c175050c79a33d242a656.webp",
    icon: GiHouse,
  },
  {
    title: "Civil Work",
    desc: "Reliable construction and structural solutions delivered with precision and quality.",
    image: "https://i.pinimg.com/736x/a9/e0/37/a9e0372548a1930abe384fd79ee13fe9.jpg",
    icon: GiCrane,
  },
];

export default function ArchitectureServices() {
  return (
    <section className="bg-[#F8F5F0] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[8px] text-[#C8972B] text-sm">
            What We Build
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-serif text-[#2D1A0B]">
            Architecture Services
          </h2>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-[1px] bg-[#C8972B]" />
            <div className="w-3 h-3 border border-[#C8972B] rotate-45" />
            <div className="w-16 h-[1px] bg-[#C8972B]" />
          </div>

          <p className="mt-8 text-[#6B6B6B] leading-8">
            We create exceptional spaces through innovative design,
            meticulous planning, and flawless execution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              desc={service.desc}
              image={service.image}
              Icon={service.icon}
            />
          ))}
        </div>

        
      </div>
    </section>
  );
}