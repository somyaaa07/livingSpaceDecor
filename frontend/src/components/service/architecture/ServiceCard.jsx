"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ title, desc, image, Icon }) {
  return (
    <div className="group">
      <div className=" rounded-[28px] overflow-hidden   transition-all duration-500 hover:-translate-y-3">
        {/* Image */}
        <div
          className="relative h-[340px] overflow-hidden"
          style={{
            borderRadius: "120px 120px 0 0",
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Floating Icon */}
        <div className="flex justify-center -mt-10 relative z-20">
          <div className="w-12 h-12 rounded-full bg-white border border-[#DDBB7B] shadow-lg flex items-center justify-center group-hover:bg-[#C8972B] transition-all duration-500">
            <Icon
              size={24}
              className="text-[#C8972B] group-hover:text-white transition-all duration-500"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pb-10 pt-5 text-center">
          <h3 className="text-[30px] leading-tight font-serif text-[#2D1A0B]">
            {title}
          </h3>

          <div className="w-16 h-[1px] bg-[#DDBB7B] mx-auto my-5" />

          <p className="text-[#707070] leading-8 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}
