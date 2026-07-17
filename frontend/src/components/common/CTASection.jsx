"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection({ data }) {
  return (
    <section className="bg-[#F5EBE0] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-[#B8851F] uppercase tracking-[4px] text-xs font-medium">
              Ready To Transform Your Space?
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl font-serif text-[#3D1F0D] leading-tight">
              Let's Create A Home That Reflects Your Lifestyle
            </h2>

            <p className="mt-6 text-sm md:text-base text-[#3D1F0D]/70 leading-relaxed max-w-lg">
              From concept to completion, our expert designers craft
              personalized interiors that combine elegance, functionality, and
              timeless beauty.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#B8851F] text-white text-sm md:text-base px-7 py-3 inline-flex items-center gap-2 hover:opacity-85 transition duration-300"
              >
                Book Consultation
                <ArrowRight size={16} />
              </Link>

              {/* <Link
                href="/portfolio"
                className="border border-[#3D1F0D] text-[#3D1F0D] text-sm md:text-base px-7 py-3 hover:bg-white/10 transition duration-300"
              >
                View Portfolio
              </Link> */}
            </div>
          </div>

          {/* Right Video with Frame */}
          <div className="relative">
            {/* Decorative frame background */}
            <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-[#B8851F]/20 to-transparent rounded-lg" />

            {/* Frame border */}
            <div className="relative bg-[#3D1F0D] p-4 md:p-6 border border-[#B8851F]/30">
              <div className="relative overflow-hidden bg-black aspect-video md:aspect-auto md:h-[450px]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src={data?.ctaVideo || "/videos/interior-showcase.mp4"}
                    type="video/mp4"
                  />
                </video>

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>

            {/* Accent corner elements */}
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#B8851F]/40" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#B8851F]/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
