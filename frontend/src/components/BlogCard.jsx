import Link from "next/link";
import Image from "next/image";
import { resolveImageUrl } from "@/lib/imageUrl";

export default function BlogCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white/40 border border-[#C8972B]/15 rounded-sm overflow-hidden hover:border-[#C8972B]/40 transition-colors"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={resolveImageUrl(post.coverImage)}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          {post.category && (
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8972B] font-semibold">
              {post.category}
            </p>
          )}
          {post.readTime && <p className="text-[11px] text-[#3D1F0D]/40">{post.readTime}</p>}
        </div>
        <h3 className="font-display text-xl text-[#3D1F0D] mb-2 leading-snug">{post.title}</h3>
        {post.excerpt && (
          <p className="text-sm text-[#3D1F0D]/60 leading-relaxed line-clamp-2 font-light">
            {post.excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}