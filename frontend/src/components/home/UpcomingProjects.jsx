// "use client";

// /**
//  * LATEST / UPCOMING PROJECTS — 4-card row section
//  * Stack: Next.js (App Router) + Tailwind + JS
//  *
//  * Palette:
//  * Espresso Brown #3D1F0D  – primary brand / dark text
//  * Warm Gold      #C8972B  – luxury accent
//  * Warm Cream     #F5EBE0  – page background
//  * Pure White     #FFFFFF  – card surface
//  * Charcoal       #2C2C2C  – paragraph text
//  *
//  * Fonts:
//  * Marcellus (display/headings) + Poppins (body/labels)
//  */

// const PROJECTS = [
//   {
//     id: "01",
//     title: "Modular Kitchen Design",
//     img: "/image/kitchen_design12.webp",
//     alt: "Premium modular kitchen with under-cabinet accent lighting",
//   },
//   {
//     id: "02",
//     title: "Kids Room Design",
//     img: "/image/kids_room4.webp",
//     alt: "Warmly lit modern kids room interior",
//   },
//   {
//     id: "03",
//     title: "Dining Room Design",
//     img: "/image/dining_room1.webp",
//     alt: "Elegant dining room with warm cove accent lighting",
//   },
//   {
//     id: "04",
//     title: "Wardrobe Design",
//     img: "/image/wardrobe_design.webp",
//     alt: "Luxury wardrobe room with LED profile lighting",
//   },
// ];


"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const BACKEND_URL = API_URL?.replace(/\/api\/?$/, "");

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpcomingProjects = async () => {
      try {
        const response = await fetch(
          `${API_URL}/upcoming-projects/latest`,
          {
            cache: "no-store",
          }
        );

        const data = await response.json();

        console.log("Upcoming Projects API Response:", data);

        if (response.ok && data.success) {
          setProjects(data.projects || []);
        } else {
          setProjects([]);
        }
      } catch (error) {
        console.error("Error fetching upcoming projects:", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingProjects();
  }, []);

  const getImageUrl = (imagePath) => {
    if (!imagePath) {
      return "/image/placeholder.webp";
    }

    if (imagePath.startsWith("http")) {
      return imagePath;
    }

    return `${BACKEND_URL}${imagePath}`;
  };

  if (loading) {
    return (
      <section className="bg-[#F5EBE0] py-24 px-6 text-center">
        Loading projects...
      </section>
    );
  }

  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="relative bg-[#F5EBE0] py-24 px-6 sm:px-10 lg:px-16 selection:bg-[#3D1F0D] selection:text-[#F5EBE0]">
      <div className="max-w-7xl mx-auto font-poppins">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-b border-[#3D1F0D]/10 pb-8">
          <div>
            <p className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#C8972B] font-semibold mb-2">
              <span className="w-6 h-px bg-[#C8972B]" />
              {/* Upcoming Projects */} Trending Design
            </p>

            <h2 className="font-marcellus text-4xl sm:text-5xl text-[#3D1F0D] tracking-wide mt-2">
              {/* Our Upcoming Projects */} New Trending Design
            </h2>
          </div>

          <p className="text-[#6B6B6B] max-w-sm text-sm leading-relaxed font-light">
            A meticulous showcase of spaces we are currently transforming,
            custom engineering, and finishing to an absolute luxury standard.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {projects.slice(0, 4).map((project, index) => {
            const projectId = project.id;

            const imageUrl = getImageUrl(project.image);

            return (
              <Link
                key={projectId}
                href={`/upcoming-project/${projectId}`}
                className="relative block h-[280px] sm:h-[420px] lg:h-[460px] w-full overflow-hidden bg-[#F0E6D8] group cursor-pointer"
              >
                {/* IMAGE */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    className="block h-full w-full object-cover grayscale-[15%] sepia-[5%] transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:sepia-0"
                    src={imageUrl}
                    alt={
                      project.alt ||
                      project.title ||
                      "Upcoming interior project"
                    }
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/image/placeholder.webp";
                    }}
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D1F0D]/90 via-[#3D1F0D]/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />

                {/* TOP GOLD LINE */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C8972B]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* NUMBER */}
                <span className="font-marcellus pointer-events-none absolute right-4 top-2 select-none text-4xl sm:text-5xl font-medium tracking-tight text-[#F5EBE0]/10 transition-colors duration-500 group-hover:text-[#C8972B]/20">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* CONTENT */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col gap-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#C8972B] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {/* Upcoming Project */} Trending Design
                  </span>

                  <h3 className="font-marcellus text-lg sm:text-xl lg:text-2xl text-white tracking-wide leading-tight">
                    {project.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}