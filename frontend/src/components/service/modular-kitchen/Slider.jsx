"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const data = {
  Straight: [
    {
      title: "Artisanal Straight Kitchen with Aviorio Acrylic Cabinets",
      color: "Aviorio Acrylic",
      finish: "Acrylic Solid",
      img: "https://images.pexels.com/photos/7535074/pexels-photo-7535074.webp",
      thumbs: [
        "https://images.pexels.com/photos/7512040/pexels-photo-7512040.webp",
        "https://images.pexels.com/photos/6207945/pexels-photo-6207945.webp",
      ],
    },
    {
      title: "Artisanal Straight Kitchen with Revival Green Cabinets",
      color: "Revival Green",
      finish: "Acrylic Solid",
      img: "https://images.pexels.com/photos/20653872/pexels-photo-20653872.webp",
      thumbs: [
        "https://images.pexels.com/photos/4469153/pexels-photo-4469153.webp",
        "https://images.pexels.com/photos/8266851/pexels-photo-8266851.webp",
      ],
    },
    {
      title: "Modern Straight Kitchen with White Gloss Finish",
      color: "Pearl White",
      finish: "High Gloss Laminate",
      img: "https://images.pexels.com/photos/7535070/pexels-photo-7535070.webp",
      thumbs: [
        "https://images.pexels.com/photos/7535074/pexels-photo-7535074.webp",
        "https://images.pexels.com/photos/7546220/pexels-photo-7546220.webp",
      ],
    },
  ],
  "L-shaped": [
    {
      title: "Brown L-Shaped Kitchen with Wine Storage Alcove Design",
      color: "Brown",
      finish: "Acrylic Solid",
      img: "https://images.pexels.com/photos/12850946/pexels-photo-12850946.webp",
      thumbs: [
        "https://images.pexels.com/photos/6899443/pexels-photo-6899443.webp",
        "https://images.pexels.com/photos/8089156/pexels-photo-8089156.webp",
      ],
    },
    {
      title: "Beige L-Shaped Kitchen with Open Shelving Design",
      color: "Warm Beige",
      finish: "Matt Laminate",
      img: "/image/kitchen_design10.webp",
      thumbs: [
        "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&q=80",
        "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=400&q=80",
      ],
    },
  ],
  Parallel: [
    {
      title: "Contemporary Parallel Kitchen with Champagne Cabinets",
      color: "Champagne",
      finish: "High Gloss Laminate",
      img: "/image/kitchen_design4.webp",
      thumbs: [
        "/image/kitchen_design6.webp",
        "https://images.pexels.com/photos/6782474/pexels-photo-6782474.webp",
      ],
    },
    {
      title: "Dark Parallel Kitchen with Handleless Cabinet Design",
      color: "Graphite",
      finish: "Matte Acrylic",
      img: "/image/kitchen_design11.webp",
      thumbs: [
        "https://images.pexels.com/photos/7515855/pexels-photo-7515855.png",
        "https://images.pexels.com/photos/8089080/pexels-photo-8089080.webp",
      ],
    },
  ],
};

const CATEGORIES = Object.keys(data);

/* 
  LEFT  click → gates OPEN (swing outward) showing NEW image behind → gates CLOSE back
  RIGHT click → gates CLOSE inward (join together) → swap image → gates OPEN back
*/

export default function GateSlider() {
  const [cat, setCat] = useState("Straight");
  const [idx, setIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState(null); // new image loading behind gates
  const [animating, setAnimating] = useState(false);
  const [phase, setPhase] = useState("idle");
  // phases: idle | left-open | right-close | right-open
  const [panelVisible, setPanelVisible] = useState(true);

  const slides = data[cat];
  const slide = slides[idx];
  // when animating we show nextIdx behind (for left) or current (for right)
  const behindSlide = nextIdx !== null ? slides[nextIdx] : slide;

  const GATE_DUR = 550;

  const navigate = (dir) => {
    if (animating) return;
    const next = (idx + dir + slides.length) % slides.length;
    setAnimating(true);
    setPanelVisible(false);

    if (dir === -1) {
      // ── LEFT: gates open revealing new image → close back ──
      setNextIdx(next); // load new image behind gates
      setPhase("left-open"); // swing gates open

      setTimeout(() => {
        setIdx(next); // swap to new slide
        setNextIdx(null);
        setPhase("idle"); // swing gates closed
        setTimeout(() => {
          setPanelVisible(true);
          setAnimating(false);
        }, GATE_DUR);
      }, GATE_DUR);
    } else {
      // ── RIGHT: gates close (join) → swap → gates open ──
      setPhase("right-close"); // swing gates shut

      setTimeout(() => {
        setIdx(next); // swap image while gates are closed
        setPhase("right-open"); // swing gates open instantly then back to idle

        // tiny frame — let react render new image, then open
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setPhase("idle");
            setTimeout(() => {
              setPanelVisible(true);
              setAnimating(false);
            }, GATE_DUR);
          });
        });
      }, GATE_DUR);
    }
  };

  // gate transform values
  const leftTransform = {
    idle: "perspective(900px) rotateY(0deg)",
    "left-open": "perspective(900px) rotateY(75deg)",
    "right-close": "perspective(900px) rotateY(-75deg)",
    "right-open": "perspective(900px) rotateY(0deg)",
  }[phase];

  const rightTransform = {
    idle: "perspective(900px) rotateY(0deg)",
    "left-open": "perspective(900px) rotateY(-75deg)",
    "right-close": "perspective(900px) rotateY(75deg)",
    "right-open": "perspective(900px) rotateY(0deg)",
  }[phase];

  const switchCat = (c) => {
    if (animating) return;
    setCat(c);
    setIdx(0);
    setPhase("idle");
    setPanelVisible(false);
    setTimeout(() => setPanelVisible(true), 400);
  };

  return (
    <section className="bg-[#0a0a0a] overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-white/10 px-5">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => switchCat(c)}
            className={`px-2 lg:px-6 py-4 text-xs text-nowrap tracking-[0.25em] uppercase transition-all duration-200 border-b-2 ${
              cat === c
                ? "text-[#C8972B] border-[#C8972B]"
                : "text-white/40 border-transparent hover:text-white/70"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Stage */}
      <div className="relative h-[460px] overflow-hidden">
        {/* ── Behind layer (new image for LEFT direction) ── */}
        <div className="absolute inset-0 z-0">
          <img
            src={behindSlide.img}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* ── LEFT GATE ── */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full overflow-hidden origin-left z-10"
          style={{
            transform: leftTransform,
            transition:
              phase === "idle" && !animating
                ? "none"
                : `transform ${GATE_DUR}ms cubic-bezier(.4,0,.2,1)`,
          }}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="absolute top-0 left-0 h-full object-cover"
            style={{ width: "200%" }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* ── RIGHT GATE ── */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full overflow-hidden origin-right z-10"
          style={{
            transform: rightTransform,
            transition:
              phase === "idle" && !animating
                ? "none"
                : `transform ${GATE_DUR}ms cubic-bezier(.4,0,.2,1)`,
          }}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="absolute top-0 h-full object-cover"
            style={{ width: "200%", right: 0 }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20 z-[5] pointer-events-none" />

        {/* Center seam */}
        <div
          className={`absolute top-0 left-1/2 w-px h-full bg-[#C8972B]/50 z-20 -translate-x-1/2 transition-opacity duration-300 ${
            panelVisible ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Info panel */}
        <AnimatePresence>
          {panelVisible && (
            <motion.div
              className="absolute top-0 right-0 w-[42%] h-full bg-[#0a0a0a] z-30 flex flex-col justify-between p-8"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div>
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8972B] mb-3">
                  {cat} Kitchen
                </p>
                <h3
                  className="text-white text-xl leading-snug mb-5"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {slide.title}
                </h3>
                <div className="grid grid-cols-2 gap-2 h-[180px]">
                  {slide.thumbs.map((t, i) => (
                    <div key={i} className="overflow-hidden">
                      <img
                        src={t}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="border-t border-[#C8972B]/20 pt-4 flex gap-8">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-1">
                      Colour
                    </p>
                    <p className="text-sm text-white">{slide.color}</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-1">
                      Finish
                    </p>
                    <p className="text-sm text-white">{slide.finish}</p>
                  </div>
                </div>
                <button className="mt-4 flex items-center gap-2 text-[#C8972B] text-xs tracking-[0.2em] uppercase hover:gap-3 transition-all">
                  View Details <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Nav buttons */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full border border-white/20 bg-black/50 text-white flex items-center justify-center hover:border-[#C8972B] hover:text-[#C8972B] transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => navigate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full border border-white/20 bg-black/50 text-white flex items-center justify-center hover:border-[#C8972B] hover:text-[#C8972B] transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 py-4 bg-[#111]">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (!animating && i !== idx) navigate(i > idx ? 1 : -1);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === idx ? "w-5 bg-[#C8972B]" : "w-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
