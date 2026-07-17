
"use client";

import Image from "next/image";

const howWeHelp = [
  {
    id: "01",
    tag: "RESIDENTIAL",
    title: "Luxury Residential Design",
    description:
      "Custom-designed homes that blend elegance, functionality, and comfort while reflecting your unique lifestyle.",
    image:
    "/image/office_design.webp",
  },
  {
    id: "02",
    tag: "COMMERCIAL",
    title: "Commercial Architecture",
    description:
      "Innovative office spaces, retail environments, and business facilities designed to enhance productivity and brand identity.",
    image:
    "https://images.pexels.com/photos/13073718/pexels-photo-13073718.jpeg",
  },
  {
    id: "03",
    tag: "PLANNING",
    title: "Master Planning",
    description:
      "Strategic planning solutions that create sustainable communities, public spaces, and future-ready developments.",
    image:
      "/image/living_room5.webp",
  },
];

export default function HowWeHelp() {
  return (
    <section className="bg-[#F7F4EE] py-16 md:py-20 lg:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20 lg:mb-24">
          <p className="uppercase tracking-[0.35em] md:tracking-[0.45em] text-[#B8954A] text-[10px] sm:text-xs mb-4 md:mb-6">
            Our Expertise
          </p>

          <h2
            className="
              font-heading
              text-[#3D1F0D]
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-7xl
              leading-tight
              font-light
            "
          >
            Architecture With{" "}
            <span className="font-heading text-[#B8954A]">Purpose</span>
            <br />
            Designed for You
          </h2>

          <div className="w-16 md:w-20 h-px bg-[#B8954A] mx-auto mt-6 md:mt-8" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {howWeHelp.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col h-full"
            >
              {/* Image */}
              <div
                className="
                  relative
                  overflow-hidden
                  h-[300px]
                  sm:h-[380px]
                  md:h-[420px]
                  lg:h-[500px]
                  flex-shrink-0
                "
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    lg:group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Number */}
                <span
                  className="
                    absolute
                    top-4
                    left-4
                    md:top-8
                    md:left-8
                    font-light
                    text-white/20
                    leading-none
                    select-none
                    pointer-events-none
                    text-5xl
                    sm:text-6xl
                    md:text-7xl
                    lg:text-[78px]
                    transition-all
                    duration-500
                    lg:group-hover:text-[#B8954A]
                    lg:group-hover:text-opacity-60
                  "
                >
                  {item.id}
                </span>

                {/* Tag */}
                <span
                  className="
                    absolute
                    bottom-6
                    right-0
                    bg-[#C59A43]
                    text-white
                    text-[9px]
                    sm:text-[10px]
                    font-semibold
                    tracking-[0.25em]
                    sm:tracking-[0.35em]
                    px-4
                    sm:px-5
                    py-2
                    sm:py-3
                  "
                >
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="relative pt-6 md:pt-8 lg:pt-10 flex flex-col flex-1">
                <h3
                  className="
                    font-serif
                    text-[#2B2017]
                    text-2xl
                    sm:text-3xl
                    lg:text-[38px]
                    leading-tight
                    mb-4
                    transition-colors
                    duration-500
                    lg:group-hover:text-[#B8954A]
                  "
                >
                  {item.title}
                </h3>

                <div className="w-10 h-px bg-[#C59A43] mb-5" />

                <p
                  className="
                    text-[#6D6258]
                    text-sm
                    sm:text-[15px]
                    leading-7
                    sm:leading-8
                    flex-1
                  "
                >
                  {item.description}
                </p>

                {/* Button */}
                <button
                  className="
                    mt-6
                    md:mt-8
                    flex
                    items-center
                    gap-3
                    text-[#C59A43]
                    uppercase
                    tracking-[0.25em]
                    sm:tracking-[0.35em]
                    text-[10px]
                    font-bold
                    w-fit
                    group/button
                  "
                >
                  Discover More

                  <span
                    className="
                      block
                      h-px
                      w-8
                      bg-[#C59A43]
                      transition-all
                      duration-300
                      lg:group-hover/button:w-12
                    "
                  />
                </button>

                {/* Corner Accent */}
                <span
                  className="
                    absolute
                    bottom-0
                    right-0
                    w-8
                    h-8
                    md:w-10
                    md:h-10
                    border-r
                    border-b
                    border-[#C59A43]
                    opacity-100
                    lg:opacity-0
                    lg:group-hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
