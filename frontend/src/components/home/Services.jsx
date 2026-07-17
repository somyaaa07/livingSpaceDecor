"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Sofa, Building2, ChefHat, Compass } from "lucide-react";

const services = [
  {
    title: "Living Room",
    description:
      "Transform your living room with luxury interior design solutions in Noida, Greater Noida, and Ghaziabad.",
    image: "/image/living_room6.webp",
    icon: Sofa,
    link: "/services/design-ideas/living-room-design",
  },
  {
    title: "Modular Kitchen",
    description:
      "Get stylish and functional kitchen interiors for homes in Noida, Greater Noida, and Ghaziabad.",
    image: "/image/kitchen_design5.webp",
    icon: ChefHat,
    link: "/services/design-ideas/kitchen-design-ideas",
  },
  {
    title: "Bedroom Design",
    description:
      "Create a comfortable and luxurious bedroom with custom interior design solutions.",
    image: "/image/bedroom_design6.webp",
    icon: Building2,
    link: "/services/design-ideas/bedroom-design",
  },
  {
    title: "Bathroom Design",
    description:
      "Modern bathroom interior designs featuring premium fittings, elegant layouts, and space-efficient solutions.",
    image: "/image/bathroom_design.webp",
    icon: Building2,
    link: "/services/design-ideas/bathroom-design",
  },
  {
    title: "Architecture",
    description:
      "Professional architectural design services for residential and commercial projects. We deliver innovative planning, modern elevations, and sustainable architectural solutions.",
    image: "/Home/architecture.avif",
    icon: Compass,
    link: "/services/architecture",
  },
  {
    title: "Dining Room Design",
    description:
      "Elegant dining room interior designs that enhance comfort, functionality, and style.",
    image: "/image/dining_room5.webp",
    icon: Compass,
    link: "/services/design-ideas/dining-room-design",
  },
  {
    title: "Office Design",
    description:
      "Modern office interior design solutions that improve productivity, comfort, and brand identity.",
    image: "/image/office_design8.webp",
    icon: Compass,
    link: "/services/design-ideas/home-office-design",
  },
  // {
  //   title: "Hospitality",
  //   description:
  //     "Luxury hospitality interior design services for hotels, restaurants, cafés, resorts, and commercial spaces.",
  //   image:
  //     "https://i.pinimg.com/736x/66/bd/54/66bd54f9c1b4b46691c66a2d62ef01d7.jpg",
  //   icon: Compass,
  //   link: "/services/design-ideas",
  // },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const dragMoved = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const [dragging, setDragging] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const fillRef = useRef(null);
  const dotRef = useRef(null);

  const rafId = useRef(null);

  const lastActive = useRef(0);
  const lastAtStart = useRef(true);
  const lastAtEnd = useRef(false);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const max = track.scrollWidth - track.clientWidth;
    const progress = max > 0 ? Math.min(1, Math.max(0, track.scrollLeft / max)) : 0;
    const pct = `${progress * 100}%`;

    if (fillRef.current) fillRef.current.style.width = pct;
    if (dotRef.current) dotRef.current.style.left = pct;

    const newAtStart = track.scrollLeft <= 4;
    const newAtEnd = track.scrollLeft >= max - 4;
    if (newAtStart !== lastAtStart.current) {
      lastAtStart.current = newAtStart;
      setAtStart(newAtStart);
    }
    if (newAtEnd !== lastAtEnd.current) {
      lastAtEnd.current = newAtEnd;
      setAtEnd(newAtEnd);
    }

    const firstCard = track.querySelector("[data-card]");
    if (!firstCard) return;
    const step = firstCard.offsetWidth + 16; // card width + gap-4 (16px)
    const newActive = Math.min(
      services.length - 1,
      Math.round(track.scrollLeft / step)
    );
    if (newActive !== lastActive.current) {
      lastActive.current = newActive;
      setActiveIndex(newActive);
    }
  }, []);

  const scheduleUpdate = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(updateScrollState);
  }, [updateScrollState]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const initial = requestAnimationFrame(updateScrollState);
    track.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      cancelAnimationFrame(initial);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      track.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [updateScrollState, scheduleUpdate]);

 
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const step = card ? card.offsetWidth + 16 : 300;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const scrollToIndex = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll("[data-card]");
    const card = cards[i];
    if (!card) return;
    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const offset = cardRect.left - trackRect.left + track.scrollLeft;
    track.scrollTo({ left: offset, behavior: "smooth" });
  };

  const handlePointerDown = (e) => {
    if (e.pointerType && e.pointerType !== "mouse") return;
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    dragMoved.current = false;
    setDragging(true);
    startX.current = e.pageX - track.offsetLeft;
    scrollLeftStart.current = track.scrollLeft;
  };

  const handlePointerMove = (e) => {
    if (e.pointerType && e.pointerType !== "mouse") return;
    const track = trackRef.current;
    if (!isDragging.current || !track) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = x - startX.current;
    if (Math.abs(walk) > 5) dragMoved.current = true;
    track.scrollLeft = scrollLeftStart.current - walk;
    scheduleUpdate();
  };

  const stopDragging = () => {
    isDragging.current = false;
    setDragging(false);
  };

  // Prevents a drag-release from being misread as a card click
  const handleCardClick = (e) => {
    if (dragMoved.current) {
      e.preventDefault();
      dragMoved.current = false;
    }
  };

  return (
    <section ref={sectionRef} className="px-6 lg:px-14 py-12 overflow-hidden">
      {/* ── Heading ── */}
      <div
        className={`flex items-end justify-between mb-10 md:mb-14 flex-wrap gap-5 transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div>
          <p className="flex items-center gap-3 text-[10px] tracking-[.28em] uppercase text-[#C8972B] font-medium mb-3">
            <span
              className={`h-px bg-[#C8972B] transition-all duration-700 delay-150 ease-out ${
                inView ? "w-6" : "w-0"
              }`}
            />
            What We Offer
          </p>
          <h2 className="font-[Cormorant_Garamond,serif] text-4xl md:text-[50px] font-medium leading-[1.1] text-[#2A1506]">
            Our <em className="text-[#C8972B] not-italic">Services</em>
          </h2>
          <p className="text-[15px] text-[#2A1506]/60 mt-3 max-w-[480px] leading-[1.75] font-light">
            From concept to completion — we transform ordinary spaces into
            extraordinary living experiences.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Arrow controls — desktop affordance for the carousel */}
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label="Scroll services left"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-[#3D1F0D]/25 text-[#3D1F0D] transition-all duration-300 hover:bg-[#3D1F0D] hover:text-white hover:scale-110 hover:-translate-x-0.5 active:scale-95 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#3D1F0D] disabled:hover:scale-100 disabled:hover:translate-x-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8972B]"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label="Scroll services right"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-[#3D1F0D]/25 text-[#3D1F0D] transition-all duration-300 hover:bg-[#3D1F0D] hover:text-white hover:scale-110 hover:translate-x-0.5 active:scale-95 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#3D1F0D] disabled:hover:scale-100 disabled:hover:translate-x-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8972B]"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          
        </div>
      </div>

      {/* ── Carousel ── */}
      <div
        className={`relative transition-all duration-700 delay-100 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Edge fades — a quiet visual cue that there's more to scroll to,
            especially useful on mobile where there's no arrow affordance. */}
      

        <div
          ref={trackRef}
          role="region"
          aria-label="Our services"
          tabIndex={0}
          className={`flex gap-4 overflow-x-auto overscroll-x-contain scrollbar-hide select-none snap-x snap-proximity scroll-px-6 focus-visible:outline-none ${
            dragging ? "cursor-grabbing" : "cursor-grab md:cursor-grab"
          }`}
          style={{
            // `proximity` (not `mandatory`) is the key fix here: mandatory
            // snap forces the browser to fight its own momentum scroll on
            // touch devices, which is what produced the jerky/stuttery
            // feel. Proximity only snaps once the scroll has basically
            // settled, so momentum stays smooth the whole way through.
            scrollSnapType: dragging ? "none" : "x proximity",
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
          onPointerLeave={stopDragging}
          onPointerCancel={stopDragging}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") scrollByCard(1);
            if (e.key === "ArrowLeft") scrollByCard(-1);
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.link}
                draggable={false}
                data-card
                onClick={handleCardClick}
                style={{ transitionDelay: inView ? `${Math.min(index, 6) * 80}ms` : "0ms" }}
                className={`group relative h-[320px] sm:h-[360px] md:h-[420px] w-[76vw] xs:w-[260px] md:w-[320px] max-w-[320px] shrink-0 snap-start overflow-hidden transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#140802]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8972B] ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                {/* Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width:768px) 76vw, 320px"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.15]"
                />

                {/* Default overlay — lighter */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#140802]/85 via-[#140802]/15 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                {/* Hover overlay — darker */}
                <div className="absolute inset-0 bg-[#140802]/78 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Gold frame — reads as "selected" on hover, no shadow needed */}
                <div className="pointer-events-none absolute inset-3 z-10 border border-[#C8972B]/0 scale-95 group-hover:scale-100 group-hover:border-[#C8972B]/50 transition-all duration-500" />

                {/* Icon top-left */}
                <div className="absolute top-5 left-5 z-10">
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-500 group-hover:bg-[#C8972B]/90 group-hover:border-[#C8972B] group-hover:rotate-[18deg] group-hover:scale-110">
                    <Icon size={20} className="text-white transition-transform duration-500 group-hover:-rotate-[18deg]" />
                  </div>
                </div>

                {/* Number top-right */}
                <div className="absolute top-5 right-5 z-10">
                  <span className="inline-block text-[#C8972B] text-sm tracking-[0.2em] transition-all duration-500 group-hover:scale-110 group-hover:tracking-[0.3em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* ── DEFAULT: only title at bottom ── */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                  <h3 className="font-heading text-xl md:text-3xl text-white">
                    {service.title}
                  </h3>
                  <span className="block w-8 h-px bg-[#C8972B] mt-3" />
                </div>

                {/* ── HOVER: title + description, cascading in ── */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center p-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="block w-8 h-px bg-[#C8972B] mb-5 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all duration-500 group-hover:delay-75" />
                  <h3 className="font-heading text-2xl md:text-3xl text-white mb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 group-hover:delay-100">
                    {service.title}
                  </h3>
                  <p className="text-white/75 text-sm leading-7 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 group-hover:delay-150">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[#C8972B] text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 group-hover:delay-200">
                    <span>Explore</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Progress indicator — a single line that grows as you move through
            the cards, with the active card's number sitting beside it.
            NOTE: the fill/dot widths are set via refs (see updateScrollState),
            not React state, so this never re-renders during scroll. */}
        <div className="mt-9 flex items-center gap-4 md:gap-5">
          <div
            role="slider"
            aria-label="Services scroll progress"
            aria-valuemin={1}
            aria-valuemax={services.length}
            aria-valuenow={activeIndex + 1}
            tabIndex={0}
            onClick={(e) => {
              const track = trackRef.current;
              if (!track) return;
              const rect = e.currentTarget.getBoundingClientRect();
              const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
              const max = track.scrollWidth - track.clientWidth;
              track.scrollTo({ left: ratio * max, behavior: "smooth" });
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") scrollByCard(1);
              if (e.key === "ArrowLeft") scrollByCard(-1);
            }}
            className="relative flex-1 h-[3px] rounded-full bg-[#3D1F0D]/10 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8972B]"
          >
            <span
              ref={fillRef}
              className="absolute left-0 top-0 h-full rounded-full bg-[#C8972B] transition-[width] duration-100 ease-out"
              style={{ width: "0%", willChange: "width" }}
            />
            {/* a small dot riding the head of the line reads as an active marker */}
            <span
              ref={dotRef}
              className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 -translate-x-1/2 rounded-full bg-[#C8972B] shadow-[0_0_0_3px_#fff] transition-[left] duration-100 ease-out"
              style={{ left: "0%", willChange: "left" }}
            />
          </div>
          <span className="shrink-0 text-[11px] tracking-[0.15em] tabular-nums text-[#2A1506]/60">
            <span className="text-[#C8972B] font-medium">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            {" / "}
            {String(services.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <style jsx>{`
        /* hide scrollbar but keep native touch/trackpad + drag scrolling */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}