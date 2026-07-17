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

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function SectionLabel({ children }) {
  return (
    <p className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#C8972B] font-semibold mb-4">
      <span className="w-[18px] h-px bg-[#C8972B] inline-block" />
      {children}
    </p>
  );
}

export default function BlogPreview({ post = {} }) {
  const tags = toArray(post.tags);
  const gallery = toArray(post.gallery);
  const paragraphs = (post.content || "").split(/\n{2,}/).filter(Boolean);

  const meta = [post.author, formatDate(post.publishedAt), post.readTime].filter(Boolean);

  return (
    <div className="p-5 sm:p-8 lg:p-11 max-w-4xl mx-auto">
      {/* Cover image */}
      <div className="relative aspect-[16/9] sm:aspect-[16/8] rounded-xl overflow-hidden bg-[#3D1F0D]/5 mb-5 sm:mb-6">
        {post.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={resolveImageUrl(post.coverImage)} alt={post.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-[#3D1F0D]/25">
            <ImageOff className="w-7 h-7 sm:w-8 sm:h-8" />
            <span className="text-[11px] sm:text-xs uppercase tracking-widest">No cover image</span>
          </div>
        )}
      </div>

      {/* Category + meta */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-2">
        {post.category && (
          <span className="text-[9.5px] sm:text-[10px] tracking-[0.25em] uppercase text-[#C8972B] font-semibold">
            {post.category}
          </span>
        )}
        {meta.length > 0 && (
          <span className="text-[11px] sm:text-xs text-[#3D1F0D]/45">{meta.join(" · ")}</span>
        )}
      </div>

      <h2 className="font-display text-xl sm:text-3xl text-[#3D1F0D] mb-6 sm:mb-8 leading-snug">{post.title}</h2>

      {/* Excerpt */}
      {post.excerpt && (
        <p className="text-[#3D1F0D]/65 italic text-sm sm:text-[15px] leading-relaxed mb-6 sm:mb-8 border-l-2 border-[#C8972B]/30 pl-3 sm:pl-4">
          {post.excerpt}
        </p>
      )}

      {/* Content */}
      {paragraphs.length > 0 && (
        <div className="mb-8 sm:mb-10">
          <SectionLabel>Content</SectionLabel>
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-[#3D1F0D]/75 leading-[1.85] text-sm sm:text-[15px] font-light">
                {p}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mb-8 sm:mb-10">
          <SectionLabel>Tags</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10.5px] sm:text-[11px] uppercase tracking-wide px-2.5 sm:px-3 py-1.5 rounded-full bg-[#C8972B]/10 text-[#C8972B] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Gallery */}
      {gallery.length > 0 && (
        <div>
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
    </div>
  );
}