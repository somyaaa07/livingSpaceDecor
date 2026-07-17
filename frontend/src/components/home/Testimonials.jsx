"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  Clock,
} from "lucide-react";

const testimonials = [
  {
    name: "Aditi Kaptiyal",
    role: "Homeowner, Gurgaon",
    review:
      "I had a wonderful experience with Living Space Build and Design. From start to finish, the team was professional, friendly, and very attentive to what I wanted. They really listened to my ideas and gave helpful suggestions that made the design even better.",
  },
  {
    name: "VISHU YT",
    role: "Homeowner, Gurgaon",
    review:
      "Best interior shop and best quality products and good coordination, amazing team work.",
  },
  {
    name: "Aakanksha Singh",
    role: "Homeowner, Gurgaon",
    review:
      "This company did a wonderful job, beyond my expectation, you can choose this company without having a second thought.",
  },
  {
    name: "SHOURYA",
    role: "Homeowner, Gurgaon",
    review: "Wonderful services and great designs. Timely services provided!!",
  },
  {
    name: "Dipanshu Rawat",
    role: "Homeowner, Gurgaon",
    review: "Wonderful services and great designs. Timely services provided!!",
  },
  {
    name: "Aman Haldar",
    role: "Homeowner, Gurgaon",
    review:
      "My experience was very good, and good service provided by Living Space Build and Design.",
  },
  {
    name: "Deepak Bainsla",
    role: "Homeowner, Gurgaon",
    review:
      "Awesome work done by their team at my home. #bestinteriordesigner in Noida",
  },
  {
    name: "Grisha Bhardwaj",
    role: "Homeowner, Gurgaon",
    review:
      "I really liked the collection at this shop. Prices are reasonable and the service is friendly.",
  },
  {
    name: "Vanz",
    role: "Homeowner, Gurgaon",
    review: "Amazing experience! Worth trying!",
  },
  {
    name: "Mohmd Shehwaz",
    role: "Homeowner, Gurgaon",
    review: "Best in terms of everything in their work.",
  },
];

const AUTOPLAY_MS = 5000;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const dragStartX = useRef(0);
  const dragging = useRef(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goTo = (index) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  const goNext = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDragStart = (e) => {
    dragging.current = true;
    dragStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
    setIsPaused(true);
  };

  const handleDragEnd = (e) => {
    if (!dragging.current) return;
    dragging.current = false;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const delta = endX - dragStartX.current;
    if (delta > 50) goPrev();
    else if (delta < -50) goNext();
  };

  const handleMouseLeave = () => {
    if (dragging.current) {
      handleDragEnd({ clientX: dragStartX.current });
    }
    setIsPaused(false);
  };

  const current = testimonials[active];

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#F7F2EB] overflow-hidden">
      {/* HEADER */}
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center mb-10 md:mb-14">
        <p className="flex items-center justify-center gap-3 text-[10px] tracking-[.28em] uppercase text-[#C8972B] font-medium mb-3">
          <span className="w-6 h-px bg-[#C8972B]" />
          Client Stories
          <span className="w-6 h-px bg-[#C8972B]" />
        </p>
        <h2 className="font-heading text-4xl md:text-[46px] font-medium leading-[1.1] text-[#2A1506]">
          Loved by Homeowners{" "}
          <em className="text-[#C8972B] not-italic">Across NCR</em>
        </h2>
      </div>

      {/* SINGLE BIG CARD */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div
          className="relative select-none"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
          onMouseEnter={() => setIsPaused(true)}
        >
          {/* Prev / Next arrows — desktop */}
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={goPrev}
            className="hidden sm:flex items-center justify-center absolute -left-5 md:-left-14 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-[#3D1F0D]/15 text-[#3D1F0D] shadow-sm hover:bg-[#3D1F0D] hover:text-white transition-colors duration-300"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={goNext}
            className="hidden sm:flex items-center justify-center absolute -right-5 md:-right-14 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-[#3D1F0D]/15 text-[#3D1F0D] shadow-sm hover:bg-[#3D1F0D] hover:text-white transition-colors duration-300"
          >
            <ChevronRight size={18} />
          </button>

          <div className="relative overflow-hidden bg-white border border-[#C8972B]/15 shadow-md rounded-xl px-6 py-10 sm:px-10 sm:py-12 md:px-16 md:py-14 min-h-[360px] sm:min-h-[340px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full text-center"
              >
                {/* Quote mark */}
                <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-[#C8972B]/10 border border-[#C8972B]/20 flex items-center justify-center">
                  <span className="text-[#C8972B] text-3xl leading-none">
                    ❝
                  </span>
                </div>

                {/* Stars — every review is 5-star */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[#C8972B] text-base">
                      ★
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p className="font-heading italic text-[#2A1506]/85 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                  "{current.review}"
                </p>

                {/* Author */}
                <div className="flex flex-col items-center gap-3 mt-8 pt-6 border-t border-[#C8972B]/10 max-w-xs mx-auto">
                  <div className="w-12 h-12 rounded-full bg-[#C8972B] text-white flex items-center justify-center font-heading text-lg font-semibold">
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-medium text-[#2A1506] text-sm sm:text-base">
                      {current.name}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#6E6258] mt-1">
                      {current.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8 flex-wrap px-4">
          {testimonials.map((t, index) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => {
                goTo(index);
                setIsPaused(true);
              }}
              className={`h-[6px] rounded-full transition-all duration-300 ${
                active === index
                  ? "w-6 bg-[#C8972B]"
                  : "w-[6px] bg-[#3D1F0D]/20 hover:bg-[#3D1F0D]/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CTA — "consultation ticket" */}
      <div className="mt-16 md:mt-20 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="relative flex flex-col sm:flex-row bg-white rounded-2xl shadow-[0_8px_30px_rgba(61,31,13,0.08)] border border-[#3D1F0D]/10">
            {/* Main stub */}
            <div className="flex-1 px-8 py-10 sm:px-10 sm:py-12 text-center sm:text-left">
              <p className="flex items-center justify-center sm:justify-start gap-3 text-[10px] tracking-[.28em] uppercase text-[#C8972B] font-medium mb-4">
                <span className="w-6 h-px bg-[#C8972B]" />
                Free Consultation
              </p>
              <h2 className="font-heading text-3xl sm:text-[34px] font-medium text-[#2A1506] leading-[1.15]">
                Looking for Interior Designers in Noida?
              </h2>
              <p className="mt-4 text-[#2A1506]/55 text-[15px] leading-relaxed max-w-sm mx-auto sm:mx-0">
                Book a free consultation today and transform your dream home
                with Living Space Decor.
              </p>

              <div className="mt-8 flex items-center justify-center sm:justify-start gap-2 text-[#6E6258] text-[11px] tracking-[0.08em] uppercase">
                <Clock size={13} className="text-[#C8972B]" />
                <span>Mon – Sun · 10 AM – 7 PM</span>
              </div>
            </div>

            {/* Perforated divider with punch-hole notches */}
            <div className="relative hidden sm:flex flex-col items-center justify-center w-0">
              <span className="absolute -top-3 w-6 h-6 rounded-full bg-[#F7F2EB]" />
              <span className="absolute -bottom-3 w-6 h-6 rounded-full bg-[#F7F2EB]" />
              <span className="h-full w-px border-l-2 border-dashed border-[#3D1F0D]/15" />
            </div>
            <div className="sm:hidden relative flex items-center justify-center h-0">
              <span className="absolute -left-3 w-6 h-6 rounded-full bg-[#F7F2EB]" />
              <span className="absolute -right-3 w-6 h-6 rounded-full bg-[#F7F2EB]" />
              <span className="w-full h-px border-t-2 border-dashed border-[#3D1F0D]/15" />
            </div>

            {/* Ticket stub — call action */}
            <div className="relative flex flex-col items-center justify-center gap-3 px-8 py-10 sm:py-12 sm:w-[240px] bg-[#F5EBE0] rounded-b-2xl sm:rounded-r-2xl sm:rounded-bl-none">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3D1F0D] text-[#C8972B]">
                <Phone size={18} />
              </span>
              <div className="text-center">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#6E6258]">
                  Admit One Enquiry
                </p>
                <p className="font-heading text-lg font-medium text-[#2A1506] mt-1">
                  +91 88266 06869
                </p>
              </div>
              <a
                href="tel:+918826606869"
                className="mt-1 inline-flex items-center gap-2 bg-[#3D1F0D] text-white px-6 py-3 rounded text-[12px] tracking-[0.1em] uppercase font-medium hover:bg-[#B8851F] transition-colors duration-300"
              >
                Call Now
                <ChevronRight size={14} />
              </a>
            </div>
          </div>

          {/* Secondary link */}
          <p className="text-center mt-6 text-[13px] text-[#6E6258]">
            Prefer messaging?{" "}
            <a
              href="https://wa.me/918826606869"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#C8972B] font-medium hover:underline"
            >
              <MessageCircle size={13} />
              WhatsApp us instead
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
