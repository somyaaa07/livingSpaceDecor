"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { resolveImageUrl } from "@/lib/imageUrl";

const DISPLAY = "'Marcellus', serif";
const BODY = "'Poppins', sans-serif";

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

// Backend may return tags/gallery as a proper array, or (if the DB column
// isn't a native JSON type) as a raw string — handle both safely.
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

export default function BlogDetail({ post }) {
  const paragraphs = (post.content || "").split(/\n{2,}/).filter(Boolean);
  const tags = toArray(post.tags);
  const gallery = toArray(post.gallery);

  return (
    <main className="text-[#3D1F0D] min-h-screen bg-[#F5EBE0]" style={{ fontFamily: BODY }}>
      {/* ══ Hero ══ */}
      <section className="relative h-[52vh] md:h-[62vh] min-h-[380px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {post.coverImage && (
            <Image
              src={resolveImageUrl(post.coverImage)}
              alt={post.title}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          )}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#3D1F0D]/90 via-[#3D1F0D]/25 to-[#3D1F0D]/30" />

        <nav className="absolute top-6 md:top-8 left-6 md:left-16 flex items-center gap-2.5 text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/70 z-10">
          <Link href="/" className="hover:text-[#C8972B] transition-colors">Home</Link>
          <span className="text-white/30">/</span>
          <Link href="/blog" className="hover:text-[#C8972B] transition-colors">Journal</Link>
        </nav>

        <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-6 md:px-16 pb-14 md:pb-20">
          {post.category && (
            <motion.p
              className="text-[#C8972B] text-[11px] md:text-xs tracking-[0.4em] uppercase mb-5 font-semibold"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {post.category}
            </motion.p>
          )}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] mb-4 max-w-4xl text-white"
            style={{ fontFamily: DISPLAY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {post.title}
          </motion.h1>
        </div>
      </section>

      {/* ══ Meta bar ══ */}
      <section className="max-w-6xl mx-auto px-6 md:px-0 -mt-px">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-6 text-xs tracking-widest uppercase text-[#3D1F0D]/50 border-b border-[#C8972B]/15">
          {post.author && <span>{post.author}</span>}
          {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
          {post.readTime && <span>{post.readTime}</span>}
        </div>
      </section>

      {/* ══ Content ══ */}
      <section className="max-w-6xl mx-auto px-6 md:px-0 py-16 md:py-20">
        {post.excerpt && (
          <p className="text-lg md:text-xl text-[#3D1F0D]/70 font-light leading-relaxed mb-10 italic">
            {post.excerpt}
          </p>
        )}
        <div className="space-y-6">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-base md:text-lg leading-[1.9] text-[#3D1F0D]/80 font-light">
              {p}
            </p>
          ))}
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[#C8972B]/15">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] tracking-widest uppercase px-3 py-1.5 rounded-full bg-[#C8972B]/10 text-[#C8972B] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* ══ Gallery (optional) ══ */}
      {gallery.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 md:px-0 pb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-px bg-[#C8972B]" />
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8972B] font-semibold">Gallery</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image src={resolveImageUrl(img)} alt={`${post.title} — image ${i + 1}`} fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ══ Back to journal CTA ══ */}
      <section className="border-t border-[#C8972B]/15 py-16 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#3D1F0D]/50 hover:text-[#C8972B] text-xs tracking-[0.3em] uppercase transition-colors font-light group"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:-translate-x-1 transition-transform">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Journal
        </Link>
      </section>
    </main>
  );
}