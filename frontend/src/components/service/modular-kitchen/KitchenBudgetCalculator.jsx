"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Luxury",
    price: "Cost starting from ₹ 3 Lakhs",
    image: "/image/kitchen_design11.webp",
    rotate: "lg:-rotate-12",
    bg: "bg-zinc-800",
    text: "text-white",
  },
  {
    title: "Premium",
    price: "Cost starting from ₹ 2 Lakhs",
    image:
      "/image/kitchen_design6.webp",
    rotate: "lg:-rotate-2",
    bg: "bg-[#b08d74]",
    text: "text-white",
  },
  {
    title: "Economy",
    price: "Cost starting from ₹ 1 Lakhs",
    image:
      "/image/kitchen_design2.webp",
    rotate: "lg:rotate-12",
    bg: "bg-[#d7d1c8]",
    text: "text-zinc-700",
  },
];

export default function KitchenBudgetCalculator() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-[24px] md:rounded-[32px] lg:rounded-[40px] bg-[#F5EBE0]">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-10 p-6 md:p-10 lg:p-14">
          {/* Left Side Cards */}
          <div className="relative">
            {/* Mobile Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:hidden">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`rounded-[24px] shadow-xl overflow-hidden ${card.bg}`}
                >
                  <div className="relative h-[180px] sm:h-[200px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className={`p-4 ${card.text}`}>
                    <h3 className="text-xl md:text-2xl font-medium">
                      {card.title}
                    </h3>

                    <p className="text-xs md:text-sm mt-1">{card.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Stacked Cards */}
            <div className="hidden lg:flex relative items-center justify-center h-[500px]">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`
                    absolute
                    w-[250px]
                    xl:w-[280px]
                    rounded-[30px]
                    shadow-2xl
                    overflow-hidden
                    ${card.rotate}
                    ${card.bg}
                  `}
                  style={{
                    left: index === 0 ? "0%" : index === 1 ? "30%" : "58%",
                    top: index === 0 ? "80px" : index === 1 ? "10px" : "90px",
                  }}
                >
                  <div className="relative h-[240px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className={`p-5 ${card.text}`}>
                    <h3 className="text-3xl font-medium">{card.title}</h3>

                    <p className="text-sm mt-1">{card.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Content */}
          <div className="text-center lg:ml-34 ">
            <h2 className="text-[36px] sm:text-[34px] md:text-[56px] lg:text-5xl font-heading text-zinc-900 leading-tight">
              Kitchen Budget
              <br />
              Calculator
            </h2>

            <p className="mt-5 md:mt-6 text-base md:text-lg text-zinc-700 max-w-md mx-auto lg:mx-0 leading-relaxed">
              We've got a modular kitchen solution for every style, need and
              budget.
            </p>

            <Link
              href="/kitchen-calculator"
              className="
                group
                mt-8 md:mt-10
                inline-flex
                items-center
                gap-3 md:gap-4
                bg-white
                px-5 md:px-8
                py-3 md:py-4
                rounded-md
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
          <span className="text-base md:text-xl font-medium">
            Calculate Now
          </span>

        <span
          className="
            w-10 h-10
            md:w-12 md:h-12
            rounded-full
            border
            border-zinc-300
            flex
            items-center
            justify-center
            group-hover:bg-black
            group-hover:text-white
            transition-all
          "
        >
      <ArrowRight size={18} />
    </span>
  </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
