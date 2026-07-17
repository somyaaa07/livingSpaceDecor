"use client";

/**
 * LATEST / UPCOMING PROJECTS — 4-card row section
 * Stack: Next.js (App Router) + Tailwind + JS
 *
 * Palette:
 * Espresso Brown #3D1F0D  – primary brand / dark text
 * Warm Gold      #C8972B  – luxury accent
 * Warm Cream     #F5EBE0  – page background
 * Pure White     #FFFFFF  – card surface
 * Charcoal       #2C2C2C  – paragraph text
 *
 * Fonts:
 * Marcellus (display/headings) + Poppins (body/labels)
 */

const PROJECTS = [
  {
    id: "01",
    title: "Modular Kitchen Design",
    img: "/image/kitchen_design12.webp",
    alt: "Premium modular kitchen with under-cabinet accent lighting",
  },
  {
    id: "02",
    title: "Kids Room Design",
    img: "/image/kids_room4.webp",
    alt: "Warmly lit modern kids room interior",
  },
  {
    id: "03",
    title: "Dining Room Design",
    img: "/image/dining_room1.webp",
    alt: "Elegant dining room with warm cove accent lighting",
  },
  {
    id: "04",
    title: "Wardrobe Design",
    img: "/image/wardrobe_design.webp",
    alt: "Luxury wardrobe room with LED profile lighting",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative bg-[#F5EBE0] py-24 px-6 sm:px-10 lg:px-16 selection:bg-[#3D1F0D] selection:text-[#F5EBE0]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Marcellus&family=Poppins:wght@300;400;500;600&display=swap");

        .font-marcellus {
          font-family: "Marcellus", serif;
        }
        .font-poppins {
          font-family: "Poppins", sans-serif;
        }
      `}</style>

      <div className="max-w-7xl mx-auto font-poppins">
        {/* ─── HEADER SECTION (LUXURY MINIMALIST) ─── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-b border-[#3D1F0D]/10 pb-8">
          <div>
            <p className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#C8972B] font-semibold mb-2">
              <span className="w-6 h-px bg-[#C8972B]" />
              Upcoming Projects
            </p>

            <h2 className="font-marcellus text-4xl sm:text-5xl text-[#3D1F0D] tracking-wide mt-2">
              Our Upcoming Projects
            </h2>
          </div>
          <p className="text-[#6B6B6B] max-w-sm text-sm leading-relaxed font-light">
            A meticulous showcase of spaces we are currently transforming,
            custom engineering, and finishing to an absolute luxury standard.
          </p>
        </div>

        {/* ─── CARDS GRID LAYOUT ─── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              className="relative h-[280px] xs:h-[350px] sm:h-[420px] lg:h-[460px] w-full overflow-hidden bg-[#F0E6D8] group cursor-pointer"
            >
              {/* Background Image Frame */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  className="block h-full w-full object-cover grayscale-[15%] sepia-[5%] transition-all duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-105 group-hover:grayscale-0 group-hover:sepia-0"
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                />
              </div>

              {/* Sophisticated Soft Shadow Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D1F0D]/90 via-[#3D1F0D]/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />

              {/* Top Accent Luxury Border Line */}
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C8972B]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating Large Serial Number (Marcellus) */}
              <span className="font-marcellus pointer-events-none absolute right-4 top-2 select-none text-4xl sm:text-5xl font-medium tracking-tight text-[#F5EBE0]/10 transition-colors duration-500 group-hover:text-[#C8972B]/20">
                {p.id}
              </span>

              {/* Text Content Area */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                {/* Micro Label */}
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#C8972B] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  Bespoke Concept
                </span>

                {/* Title (Marcellus) */}
                <h3 className="font-marcellus text-lg sm:text-xl lg:text-2xl text-white tracking-wide leading-tight">
                  {p.title.trim()}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
