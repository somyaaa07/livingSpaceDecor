"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { resolveImageUrl } from "../lib/imageUrl"
const DISPLAY = "'Marcellus', serif";
const BODY = "'Poppins', sans-serif";

/* ─────────────────────────────────────────────
   Lightbox
───────────────────────────────────────────── */
function Lightbox({ images, current, onClose, onPrev, onNext, onSelect }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#3D1F0D]/95 flex items-center justify-center backdrop-blur-lg px-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.button
        onClick={onClose}
        className="absolute top-5 right-5 md:top-8 md:right-8 text-white/60 hover:text-[#C8972B] transition-colors z-10"
        aria-label="Close"
        whileHover={{ scale: 1.1, rotate: 90 }}
      >
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <path d="M8 8L24 24M24 8L8 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </motion.button>

      <div
        className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 text-white/40 text-[10px] md:text-xs tracking-[0.3em] uppercase font-light"
        style={{ fontFamily: BODY }}
      >
        {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>

      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 md:left-8 text-white/50 hover:text-[#C8972B] transition-colors"
        aria-label="Previous image"
        whileHover={{ scale: 1.15, x: -4 }}
      >
        <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
          <path d="M25 8L13 20L25 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>

      <div className="relative w-full max-w-5xl mx-14 md:mx-24" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="relative aspect-[4/3] md:aspect-[16/9]"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={images[current]} alt={`Gallery image ${current + 1}`} fill className="object-contain" sizes="90vw" />
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 md:right-8 text-white/50 hover:text-[#C8972B] transition-colors"
        aria-label="Next image"
        whileHover={{ scale: 1.15, x: 4 }}
      >
        <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
          <path d="M15 8L27 20L15 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>

      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 gap-2 max-w-[90vw] md:max-w-lg overflow-x-auto px-4">
        {images.map((img, i) => (
          <motion.button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(i);
            }}
            className={`relative flex-shrink-0 w-14 h-10 overflow-hidden transition-all duration-300 border rounded-[2px] ${
              i === current ? "ring-1 ring-[#C8972B] opacity-100 border-[#C8972B]" : "opacity-30 hover:opacity-70 border-white/20"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <Image src={img} alt="" fill className="object-cover" sizes="56px" />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
export default function ProjectDetail({ project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

const rawImages = project.gallery?.length ? project.gallery : [project.image];
const allImages = rawImages.map(resolveImageUrl).filter(Boolean);
const ctaImage = allImages[2] || allImages[0];

  const openLightbox = (i) => {
    setActiveIndex(i);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const prevImage = useCallback(
    () => setActiveIndex((p) => (p - 1 + allImages.length) % allImages.length),
    [allImages.length]
  );
  const nextImage = useCallback(
    () => setActiveIndex((p) => (p + 1) % allImages.length),
    [allImages.length]
  );

  const specs = [
    { label: "Location", value: project.location },
    { label: "Size", value: project.area || project.bhk },
    { label: "Style", value: project.style || "Contemporary" },
    { label: "Year", value: project.year || "2024" },
    { label: "Duration", value: project.duration || "4 months" },
  ].filter((s) => s.value);

  return (
    <>
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={allImages}
            current={activeIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
            onSelect={setActiveIndex}
          />
        )}
      </AnimatePresence>

      <main className="text-[#3D1F0D] min-h-screen bg-[#F5EBE0] overflow-x-clip" style={{ fontFamily: BODY }}>
        {/* ══ Hero ══ */}
        <section className="relative h-[64vh] sm:h-[72vh] md:h-[82vh] min-h-[440px] md:min-h-[620px] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
{project.image && (
  <Image src={resolveImageUrl(project.image)} alt={project.name} fill priority className="object-cover object-center" sizes="100vw" />
)}         </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D1F0D]/85 via-[#3D1F0D]/15 to-[#3D1F0D]/35" />

          <motion.nav
            className="absolute top-6 md:top-8 left-6 md:left-16 flex items-center gap-2.5 text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/70 z-10"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="hover:text-[#C8972B] transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/portfolio" className="hover:text-[#C8972B] transition-colors">Portfolio</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#C8972B] font-medium">{project.name}</span>
          </motion.nav>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-16">
            <motion.p
              className="text-[#C8972B] text-[11px] md:text-xs tracking-[0.4em] uppercase mb-5 font-semibold"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {project.type ? `${project.type} Project` : "Interior Project"}
            </motion.p>
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-normal leading-[1.02] mb-5 max-w-5xl text-white"
              style={{ fontFamily: DISPLAY }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              {project.name}
            </motion.h1>
            <motion.p
              className="text-white/70 text-xs md:text-sm tracking-[0.25em] uppercase font-light"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {project.location} {project.bhk ? `• ${project.bhk}` : ""}
            </motion.p>
          </div>
        </section>

        {/* ══ Floating Spec Card ══ */}
        <section className="relative px-4 sm:px-8 md:px-16">
          <motion.div
            className="relative z-10 -mt-14 md:-mt-16 max-w-6xl mx-auto bg-white/70 backdrop-blur-md border border-[#C8972B]/20 rounded-sm shadow-[0_20px_60px_-15px_rgba(61,31,13,0.25)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-5 divide-y divide-x divide-[#C8972B]/15 md:divide-y-0">
              {specs.map((s) => (
                <div key={s.label} className="flex flex-col gap-1.5 px-5 md:px-6 py-6 md:py-8">
                  <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-[#C8972B] font-semibold">
                    {s.label}
                  </span>
                  <span className="text-[#3D1F0D] text-base md:text-lg font-normal" style={{ fontFamily: DISPLAY }}>
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ══ Description + Highlights ══ */}
        <section className="max-w-6xl mx-auto px-6 md:px-16 pt-20 md:pt-28 pb-20 md:pb-24 grid md:grid-cols-[1.1fr_0.9fr] gap-14 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-[#C8972B]" />
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8972B] font-semibold">About This Project</p>
            </div>
            <p className="text-[#3D1F0D]/75 leading-[1.9] text-base md:text-lg font-light">
              {project.description}
                 {/* "A thoughtfully designed space that balances aesthetic beauty with everyday functionality, crafted with meticulous attention to detail and the finest materials." */}
            </p>
          </motion.div>

          {project.highlights?.length > 0 && (
            <motion.div
              className="bg-white/50 border border-[#C8972B]/15 rounded-sm p-7 md:p-9"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-7">
                <span className="w-8 h-px bg-[#C8972B]" />
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8972B] font-semibold">Project Highlights</p>
              </div>
              <ul className="space-y-5">
                {project.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-4 text-[#3D1F0D]/65 text-sm leading-relaxed font-light"
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#C8972B]" />
                    <span>{h}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </section>

        {/* ══ Gallery ══ */}
        {allImages.length > 1 && (
          <section className="max-w-6xl mx-auto px-6 md:px-16 pb-20 md:pb-28">
            <div className="flex items-center gap-4 mb-10">
              <span className="w-8 h-px bg-[#C8972B]" />
              <motion.p
                className="text-[10px] tracking-[0.4em] uppercase text-[#C8972B] font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Photo Gallery
              </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[200px] gap-3 md:gap-4">
              {allImages.map((img, i) => {
                const isFeature = i === 0;
                return (
                  <motion.button
                    key={i}
                    onClick={() => openLightbox(i)}
                    className={`relative overflow-hidden group rounded-[2px] ${
                      isFeature ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
                    }`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <Image
                      src={img}
                      alt={`${project.name} — photo ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes={isFeature ? "60vw" : "25vw"}
                    />
                    <div className="absolute inset-0 bg-[#3D1F0D]/0 group-hover:bg-[#3D1F0D]/35 transition-all duration-500 flex items-center justify-center">
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/70 rounded-full p-3 bg-white/5 backdrop-blur-sm"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                      >
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M8 3H3v5M17 8V3h-5M12 17h5v-5M3 12v5h5"
                            stroke="white"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <motion.button
              onClick={() => openLightbox(0)}
              className="mt-8 flex items-center gap-3 text-[#3D1F0D]/40 hover:text-[#C8972B] text-xs tracking-[0.3em] uppercase transition-colors font-light"
              whileHover={{ x: 8 }}
            >
              <span>View All {allImages.length} Photos</span>
              <span className="w-10 h-px bg-current" />
            </motion.button>
          </section>
        )}

        {/* ══ Client Quote ══ */}
        {project.clientQuote && (
          <section className="border-y border-[#C8972B]/15 bg-gradient-to-r from-[#C8972B]/[0.06] via-transparent to-[#C8972B]/[0.06]">
            <div className="max-w-3xl mx-auto px-6 md:px-16 py-20 md:py-28 text-center">
              <motion.div
                className="text-[#C8972B]/20 text-[100px] md:text-[140px] leading-none mb-2 -mt-8 md:-mt-12 select-none"
                style={{ fontFamily: DISPLAY }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                "
              </motion.div>
              <motion.blockquote
                className="text-xl md:text-3xl font-normal text-[#3D1F0D]/85 leading-relaxed -mt-10 md:-mt-12"
                style={{ fontFamily: DISPLAY }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {project.clientQuote.text}
              </motion.blockquote>
              <motion.div
                className="mt-9 flex items-center justify-center gap-5 md:gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="w-10 md:w-12 h-px bg-gradient-to-r from-[#C8972B] to-transparent" />
                <div className="text-center">
                  <p className="text-[#3D1F0D] text-sm font-medium tracking-wider">{project.clientQuote.author}</p>
                  {project.clientQuote.title && (
                    <p className="text-[#3D1F0D]/40 text-[11px] tracking-widest uppercase mt-1.5 font-light">
                      {project.clientQuote.title}
                    </p>
                  )}
                </div>
                <span className="w-10 md:w-12 h-px bg-gradient-to-l from-[#C8972B] to-transparent" />
              </motion.div>
            </div>
          </section>
        )}

        {/* ══ CTA — full-bleed image ══ */}
        <section className="relative w-full min-h-[480px] md:min-h-[600px] flex items-center overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
           {ctaImage ? (
  <Image src={ctaImage} alt={`${project.name} — inquire`} fill className="object-cover object-center" sizes="100vw" />
) : (
  <div className="absolute inset-0 bg-[#3D1F0D]/20" />
)}
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D1F0D]/95 via-[#3D1F0D]/75 to-[#3D1F0D]/45" />

          <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 py-20 md:py-0 text-center">
            <motion.p
              className="text-[#C8972B] text-[11px] md:text-xs tracking-[0.4em] uppercase mb-5 font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Start Your Project
            </motion.p>
            <motion.h2
              className="text-4xl sm:text-5xl md:text-7xl font-normal text-white mb-6 max-w-3xl mx-auto leading-[1.08]"
              style={{ fontFamily: DISPLAY }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Love What You See?
              <br />
              <span className="text-[#C8972B]">Let's Create Yours.</span>
            </motion.h2>
            <motion.p
              className="text-white/70 max-w-md mx-auto mb-10 leading-relaxed text-sm font-light"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Share your vision with us and we'll craft an interior that's uniquely
              yours — blending luxury, comfort, and timeless design.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <motion.div
                  className="inline-flex items-center rounded-md gap-3 bg-[#C8972B] text-[#3D1F0D] px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 active:scale-95 shadow-lg shadow-black/20 hover:shadow-[0_0_40px_rgba(200,151,43,0.45)]"
                  whileHover={{ y: -2 }}
                >
                  Book Consultation
                </motion.div>
              </Link>
              <Link
                href="/portfolio"
                className="text-white/70 hover:text-[#C8972B] text-xs tracking-[0.3em] uppercase transition-colors inline-flex items-center gap-2 font-light group"
              >
                <motion.svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="group-hover:-translate-x-1 transition-transform"
                >
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
                Back to Portfolio
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}