"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { adminApi } from "@/lib/adminApi";
import BlogPreview from "@/components/admin/BlogPreview";
import { ArrowLeft, Pencil } from "lucide-react";

export default function AdminBlogDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    adminApi
      .getBlog(id)
      .then((res) => setPost(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="min-h-screen bg-[#F5EBE0]">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-5 sm:px-8 lg:px-11 pt-7 sm:pt-9 pb-5 sm:pb-6 border-b border-[#3D1F0D]/10">
        <div className="min-w-0">
          <Link
            href="/admin/blogs"
            className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#3D1F0D]/45 hover:text-[#C8972B] transition-colors mb-3"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to Blog Posts
          </Link>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <h1 className="font-display text-xl sm:text-3xl text-[#3D1F0D] max-w-full sm:max-w-xl truncate">
              {post?.title || "Blog Post"}
            </h1>
            {post && (
              <span
                className={`text-[10px] sm:text-[10.5px] uppercase font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                  post.isPublished ? "bg-emerald-50 text-emerald-600" : "bg-[#3D1F0D]/5 text-[#3D1F0D]/50"
                }`}
              >
                {post.isPublished ? "Published" : "Draft"}
              </span>
            )}
          </div>
        </div>
        {post && (
          <button
            onClick={() => router.push(`/admin/blogs?edit=${post.id}`)}
            className="flex items-center justify-center gap-1.5 bg-[#C8972B] text-[#1A0F08] px-5 py-3 rounded-lg text-xs tracking-widest uppercase font-semibold hover:bg-[#D9A93A] transition-colors shadow-[0_8px_20px_-8px_rgba(200,151,43,0.5)] w-full sm:w-auto shrink-0"
          >
            <Pencil className="w-3.5 h-3.5" />
            Edit
          </button>
        )}
      </header>

      {loading && <p className="text-center text-[#3D1F0D]/45 text-sm py-24 px-5">Loading…</p>}
      {error && <p className="text-center text-red-500 text-sm py-24 px-5">{error}</p>}
      {post && <BlogPreview post={post} />}
    </div>
  );
}