"use client";

import { resolveImageUrl } from "@/lib/imageUrl";
import { ImageOff } from "lucide-react";

function toArray(value) {
  if (Array.isArray(value)) return value;
  if (typeof value === "string" && value.trim()) {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : value.split(",").map((v) => v.trim());
    } catch {
      return value.split(",").map((v) => v.trim());
    }
  }
  return [];
}

function SectionLabel({ children }) {
  return (
    <p className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#C8972B] font-semibold mb-4">
      <span className="w-[18px] h-px bg-[#C8972B] inline-block" />
      {children}
    </p>
  );
}

export default function ProjectPreview({ project = {} }) {
  const highlights = toArray(project.highlights);
  const gallery = toArray(project.gallery);

  const specs = [
    { label: "Location", value: project.location },
    { label: "Size", value: project.area || project.bhk },
    { label: "Style", value: project.style },
    { label: "Year", value: project.year },
    { label: "Duration", value: project.duration },
  ].filter((s) => s.value);

  return (
    <div className="p-5 sm:p-8 lg:p-11 max-w-4xl mx-auto">
      {/* Hero image */}
      <div className="relative aspect-[16/9] sm:aspect-[16/8] rounded-xl overflow-hidden bg-[#3D1F0D]/5 mb-6 sm:mb-8">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={resolveImageUrl(project.image)} alt={project.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-[#3D1F0D]/25">
            <ImageOff className="w-7 h-7 sm:w-8 sm:h-8" />
            <span className="text-[11px] sm:text-xs uppercase tracking-widest">No hero image</span>
          </div>
        )}
      </div>

      {/* Specs card */}
      {specs.length > 0 && (
        <div className="bg-white border border-[#3D1F0D]/10 rounded-xl overflow-hidden mb-8 sm:mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-y divide-[#3D1F0D]/8 lg:divide-y-0">
            {specs.map((s) => (
              <div key={s.label} className="px-4 sm:px-5 py-4 sm:py-5 flex flex-col gap-1 min-w-0">
                <span className="text-[9px] sm:text-[9.5px] tracking-[0.25em] uppercase text-[#C8972B] font-semibold">
                  {s.label}
                </span>
                <span className="font-display text-sm sm:text-base text-[#3D1F0D] truncate">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      {project.description && (
        <div className="mb-8 sm:mb-10">
          <SectionLabel>About This Project</SectionLabel>
          <p className="text-[#3D1F0D]/75 leading-[1.85] text-sm sm:text-[15px] font-light">{project.description}</p>
        </div>
      )}

      {/* Highlights */}
      {highlights.length > 0 && (
        <div className="mb-8 sm:mb-10">
          <SectionLabel>Highlights</SectionLabel>
          <ul className="space-y-3">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#3D1F0D]/70 font-light">
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#C8972B]" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Gallery */}
      {gallery.length > 0 && (
        <div className="mb-8 sm:mb-10">
          <SectionLabel>Gallery ({gallery.length})</SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {gallery.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#3D1F0D]/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={resolveImageUrl(img)} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Client quote */}
      {project.clientQuote?.text && (
        <div className="bg-[#C8972B]/[0.06] border border-[#C8972B]/15 rounded-xl p-5 sm:p-6">
          <SectionLabel>Client Quote</SectionLabel>
          <p className="font-display text-base sm:text-lg text-[#3D1F0D]/85 leading-relaxed mb-3">
            "{project.clientQuote.text}"
          </p>
          <p className="text-sm font-medium text-[#3D1F0D]">
            {project.clientQuote.author}
            {project.clientQuote.title && (
              <span className="text-[#3D1F0D]/45 font-normal"> — {project.clientQuote.title}</span>
            )}
          </p>
        </div>
      )}
    </div>
  );
}