"use client";

import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Modern White Kitchen",
    location: "Noida",
    image: "/kitchen/kitchen-video1.mp4",
  },
  {
    title: "Luxury Island Kitchen",
    location: "Delhi",
    image: "/kitchen/kitchen-video2.mp4",
  },
  {
    title: "Contemporary L-Shaped Kitchen",
    location: "Gurugram",
    image: "/kitchen/kitchen-video3.mp4",
  },
  {
    title: "Premium Wooden Kitchen",
    location: "Greater Noida",
    image: "/kitchen/kitchen-video4.mp4",
  },
];

export default function RecentProjects() {
  return (
    <section className="bg-[#F5EBE0] py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[#B8851F] uppercase tracking-[3px] text-sm font-medium">
              Portfolio
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-[#3D1F0D]">
              Recent Kitchen Projects
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              Explore some of our recently completed modular kitchen projects
              crafted with premium materials and modern designs.
            </p>
          </div>

          <Link href="/portfolio" className="mt-6 md:mt-0 flex items-center gap-2 text-[#B8851F] font-medium">
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-[350px] overflow-hidden">
                <video
                  src={project.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Featured Project */}
        {/* <div className="mt-20 overflow-hidden rounded-[40px] bg-[#3D1F0D]">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-[400px] lg:h-auto">
              <Image
                src="/image/kitchen_design9.webp"
                alt="Featured Kitchen"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-10 lg:p-16">
              <span className="text-[#B8851F] uppercase tracking-[3px] text-sm">
                Featured Project
              </span>

              <h3 className="mt-4 text-3xl md:text-4xl font-semibold text-white">
                Luxury  Kitchen
              </h3>

              <p className="mt-5 text-gray-300 leading-relaxed">
                A premium island kitchen designed with acrylic finishes, smart
                storage solutions, concealed lighting, and imported hardware to
                create a sophisticated cooking experience.
              </p>

              <button className="mt-8 w-fit rounded-xl bg-[#B8851F] px-8 py-4 text-white font-medium">
                Explore Project
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
