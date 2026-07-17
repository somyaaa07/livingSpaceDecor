"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function ServiceConsultation() {
  return (
    <section className="px-4 md:px-8 py-6 md:py-10">
      <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px]">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg_consult_video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#3D1F0D]/55" />

        {/* Decorative Blurs */}
        <div className="absolute -top-20 -right-20 h-48 w-48 md:h-80 md:w-80 rounded-full bg-[#C8972B]/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-40 w-40 md:h-72 md:w-72 rounded-full bg-[#C8972B]/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 min-h-[300px] md:min-h-[340px] flex items-center">
          <div className="max-w-4xl px-6 py-10 md:px-12 md:py-14">
            {" "}
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C8972B]/30 bg-[#C8972B]/10 px-4 py-2 backdrop-blur-md">
              <span className="text-[8px] md:text-xs tracking-[0.25em] uppercase text-[#F5EBE0]">
                Premium Interior Solutions
              </span>
            </div>
            {/* Heading */}
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.1] text-white">
              {" "}
              Let's Create a Space
              <br />
              That Reflects
              <span className="block text-[#C8972B]">Your Lifestyle</span>
            </h2>
            {/* Description */}
            <p className="mt-5 max-w-2xl text-[12px] sm:text-base md:text-sm leading-relaxed text-[#F5EBE0]/90">
              From concept to completion, we design beautiful interiors,
              architectural spaces, turnkey projects and modular kitchens
              tailored to your vision, lifestyle and budget.
            </p>
            {/* Trust Points */}
            <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
              {[
                "Free Consultation",
                "Transparent Pricing",
                "End-to-End Execution",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs md:text-sm text-white backdrop-blur-md"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#C8972B] px-6 md:px-8 py-4 text-sm md:text-base font-medium text-white transition-all duration-300 hover:bg-[#b68522]"
              >
                Get Free Estimate
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="tel:+918826606869"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white px-6 md:px-8 py-4 text-sm md:text-base font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#3D1F0D]"
              >
                <Phone size={18} />
                Book Consultation
              </Link>
            </div>
            {/* Mobile Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 md:hidden">
              <div className="rounded-xl bg-white/10 backdrop-blur-md p-3 text-center">
                <h3 className="text-[#C8972B] font-bold text-xl">500+</h3>
                <p className="text-white/80 text-xs">Projects</p>
              </div>

              <div className="rounded-xl bg-white/10 backdrop-blur-md p-3 text-center">
                <h3 className="text-[#C8972B] font-bold text-xl">10+</h3>
                <p className="text-white/80 text-xs">Years</p>
              </div>

              <div className="rounded-xl bg-white/10 backdrop-blur-md p-3 text-center">
                <h3 className="text-[#C8972B] font-bold text-xl">4.9★</h3>
                <p className="text-white/80 text-xs">Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Stats */}
        <div className="absolute bottom-8 right-8 hidden lg:block">
          <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-[#C8972B]">500+</h3>
                <p className="mt-1 text-sm text-white/80">Projects</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#C8972B]">10+</h3>
                <p className="mt-1 text-sm text-white/80">Years</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#C8972B]">4.9★</h3>
                <p className="mt-1 text-sm text-white/80">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
