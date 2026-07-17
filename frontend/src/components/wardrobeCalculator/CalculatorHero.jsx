"use client";

import Image from "next/image";

export default function CalculatorHero() {
  return (
    <section className="relative overflow-hidden bg-[#F5EBE0] py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <span className="inline-block bg-[#C8972B]/10 text-[#C8972B] px-4 py-2 rounded-full text-sm font-medium mb-6">
              Free Wardrobe Cost Calculator
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-[#3D1F0D] leading-tight mb-6">
              Design Your Dream
              <span className="text-[#C8972B] block">
                Wardrobe
              </span>
            </h1>

            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-8 max-w-xl">
              Get an instant estimate for your custom wardrobe. Choose your
              wardrobe type, size, finishes, and accessories in just a few
              simple steps.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white rounded-2xl px-5 py-4 shadow-sm">
                <h4 className="font-bold text-[#3D1F0D]">
                  500+
                </h4>
                <p className="text-sm text-[#6B6B6B]">
                  Projects Delivered
                </p>
              </div>

              <div className="bg-white rounded-2xl px-5 py-4 shadow-sm">
                <h4 className="font-bold text-[#3D1F0D]">
                  10 Year
                </h4>
                <p className="text-sm text-[#6B6B6B]">
                  Warranty
                </p>
              </div>

              <div className="bg-white rounded-2xl px-5 py-4 shadow-sm">
                <h4 className="font-bold text-[#3D1F0D]">
                  Free
                </h4>
                <p className="text-sm text-[#6B6B6B]">
                  Design Consultation
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/images/wardrobe-hero.jpg"
                alt="Luxury Wardrobe"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-xl">
              <p className="text-[#6B6B6B] text-sm">
                Starting From
              </p>

             
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}