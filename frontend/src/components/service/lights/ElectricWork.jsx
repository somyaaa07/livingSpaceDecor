"use client";

import { ArrowRight } from "lucide-react";

export default function LightingShowcase() {
  return (
    <section className="bg-[#F5EBE0] py-15">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="ml-[40px]">
            <span className="text-[#B8893D] uppercase tracking-[0.3em] text-sm font-medium">
             Lighting
            </span>

            <h2 className="mt-4 text-xl sm:text-2xl lg:text-5xl font-heading text-[#3D1F0D] leading-tight">
              We Provide Complete
              <span className="block font-heading">Electric Work</span>
            </h2>

            

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#B8893D]" />
                Seamless Architectural Finish
              </div>

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#B8893D]" />
                Energy Efficient LED Technology
              </div>

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#B8893D]" />
                Elegant Contemporary Appearance
              </div>
            </div>

            <button className="mt-10 flex items-center gap-3 text-[#B8893D] font-medium group">
              Explore Design
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
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
                    src= "https://www.pexels.com/download/video/17211925/"
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
