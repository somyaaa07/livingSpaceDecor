"use client";

import Image from "next/image";

const team = [
  {
    name: "Emma Wilson",
    role: "Founder & Creative Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  },
  {
    name: "David Miller",
    role: "Senior Architect",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    name: "Sophia Clark",
    role: "Interior Designer",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80",
  },
  {
    name: "James Brown",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-[#F7F2EB]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-14">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-[#C8972B] text-xs mb-4">
            Meet Our Team
          </p>

          <h2 className="font-[Playfair_Display] text-5xl text-[#2A1506] leading-tight">
            Meet The Team That Makes
            <br />
            <span className="font-playfair text-[#C8972B]">
              The Magic Happen
            </span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-tl-[70px] rounded-tr-none rounded-bl-none rounded-br-[70px] bg-white"
            >
              {/* Image */}
              <div className="relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[450px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Hover Card */}
              <div
                className="
    absolute
    left-3
    right-6
    bottom-4

    bg-white
    rounded-2xl
    py-2
    px-4
    text-center
    shadow-xl

    opacity-100
    translate-y-0

    lg:opacity-0
    lg:translate-y-24
    lg:group-hover:translate-y-0
    lg:group-hover:opacity-100

    transition-all
    duration-500
  "
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#2A1506]">
                  {member.name}
                </h3>

                <p className="text-[#7A726A] text-sm mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
