"use client";

import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#F8F6F1] py-10 md:py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-[#F2EBD9] shadow-sm">
          <div className="grid lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-auto min-h-[320px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/architecture_video.mp4" type="video/mp4" />
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#F2EBD9]/20" />

              
              
            </div>

            {/* Content Side */}
            <div className="flex items-center">
              <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 sm:py-14 lg:py-20">
                {/* Top Label */}
                <div className="flex items-center gap-3 sm:gap-5 mb-8 lg:mb-10">
                  <div className="w-8 sm:w-12 lg:w-16 h-px bg-[#B8954A]" />

                  <span className="uppercase tracking-[0.25em] sm:tracking-[0.4em] text-[#B8954A] text-[10px] sm:text-xs">
                    Start Your Project
                  </span>

                  <div className="w-8 sm:w-12 lg:w-16 h-px bg-[#B8954A]" />
                </div>

                {/* Heading */}
                <h2 className="font-heading text-[#3D1F0D] leading-[1.05] text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
                  Let's Build
                  <br />
                  Something{" "}
                  <span className="font-heading text-[#C59A43]">Iconic</span>
                </h2>

                {/* Description */}
                <p className="mt-6 sm:mt-8 text-[#6A5F55] leading-7 sm:leading-8 text-sm sm:text-base max-w-xl">
                  Every great structure begins with a conversation. Let's talk
                  about your vision and what's possible.
                </p>

                {/* Stats */}
                <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-[#DCCFAF]">
                  <div className="grid grid-cols-3 gap-4 sm:gap-6">
                    <div>
                      <h3 className="text-[#C59A43] text-3xl sm:text-4xl font-light">
                        500+
                      </h3>

                      <p className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs text-[#9A8D7E] mt-2">
                        Projects
                      </p>
                    </div>

                    <div className="border-x border-[#DCCFAF] px-3 sm:px-6">
                      <h3 className="text-[#C59A43] text-3xl sm:text-4xl font-light">
                        10
                      </h3>

                      <p className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs text-[#9A8D7E] mt-2">
                        Years
                      </p>
                    </div>

                    <div className="pl-1 sm:pl-3">
                      <h3 className="text-[#C59A43] text-3xl sm:text-4xl font-light">
                        45
                      </h3>

                      <p className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs text-[#9A8D7E] mt-2">
                       Day Delivery
                      </p>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-10 md:mt-12">
                  {/* Contact Button */}
                  <Link
                    href="/contact"
                    className="
                      group
                      w-full sm:w-auto
                      bg-[#2B1A0D]
                      text-white
                      px-4 md:px-4
                      py-4
                      uppercase
                      tracking-[0.08em] md:tracking-[0.1em]
                      text-[11px] md:text-xs
                      transition
                      hover:bg-[#3A2412]
                      text-center
                    "
                  >
                    Book Free Consultation
                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                  {/* Portfolio Button */}
                  {/* <Link
                    href="/portfolio"
                    className="
                    w-full sm:w-auto
                    border
                    border-[#D7C8A3]
                    text-[#B8954A]
                    px-6
                    py-4
                    uppercase
                    tracking-[0.08em] md:tracking-[0.1em]
                    text-[11px] md:text-sm
                    transition
                    hover:bg-white
                    text-center
                  "
                  >
                    View Portfolio
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
