"use client";

import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function KitchenCTA() {
  return (
    <section className="py-12 bg-[#3D1F0D] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-72 h-42 bg-[#B8851F]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-42 bg-[#B8851F]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-[#B8851F] uppercase tracking-[4px] text-sm font-medium">
            Free Design Consultation
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Let's Design Your
            <span className="block text-[#B8851F]">Dream Kitchen</span>
          </h2>

          <p className="mt-4 text-sm text-gray-300 max-w-2xl mx-auto">
            Get personalized kitchen designs, expert guidance, material
            recommendations, and a detailed quotation tailored to your space and
            budget.
          </p>

          {/* Features */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[#B8851F]">500+</h3>
              <p className="mt-2 text-gray-300">Kitchens Delivered</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[#B8851F]">45 Days</h3>
              <p className="mt-2 text-gray-300">Installation Timeline</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[#B8851F]">10 Years</h3>
              <p className="mt-2 text-gray-300">Warranty Support</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#B8851F] px-8 py-3 text-white font-medium transition hover:opacity-90"
            >
              Book Free Consultation
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+918826606869"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-3 text-white font-medium backdrop-blur-sm transition hover:bg-white/10"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
