"use client";

import { useState, useEffect } from "react";
import { adminApi } from "@/lib/adminApi";
import { useToast } from "./ToastProvider";
import ImageUploader from "./ImageUploader";
import GalleryUploader from "./GalleryUploader";
import Repeater from "./Repeater";

const empty = {
  title: "", excerpt: "", content: "", coverImage: "", gallery: [],
  author: "", category: "", readTime: "", publishedAt: "", tags: [], isPublished: true,
};

function Section({ label, children }) {
  return (
    <div className="mb-7">
      <p className="text-[10px] tracking-[0.25em] uppercase text-[#C8972B] font-semibold mb-3.5">
        {label}
      </p>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.2em] uppercase text-[#3D1F0D]/50 font-semibold mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function BlogForm({ blogId, onSaved, onCancel }) {
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(!!blogId);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const showToast = useToast();

  useEffect(() => {
    if (!blogId) return;
    adminApi
      .getBlog(blogId)
      .then((res) => {
        const b = res.data;
        setForm({
          ...empty,
          ...b,
          publishedAt: b.publishedAt ? new Date(b.publishedAt).toISOString().slice(0, 10) : "",
          tags: b.tags || [],
        });
      })
      .catch((err) => showToast(err.message, "error"))
      .finally(() => setLoading(false));
  }, [blogId]); // eslint-disable-line react-hooks/exhaustive-deps

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.coverImage) {
      setError("Please upload a cover image.");
      return;
    }

    const payload = {
      title: form.title,
      excerpt: form.excerpt,
      content: form.content,
      coverImage: form.coverImage,
      gallery: form.gallery,
      author: form.author,
      category: form.category,
      readTime: form.readTime,
      publishedAt: form.publishedAt || null,
      tags: form.tags.filter((t) => t.trim() !== ""),
      isPublished: form.isPublished,
    };

    setSaving(true);
    try {
      if (blogId) {
        await adminApi.updateBlog(blogId, payload);
        showToast("Blog post updated", "success");
      } else {
        await adminApi.createBlog(payload);
        showToast("Blog post created", "success");
      }
      onSaved();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const fieldInput =
    "w-full px-3.5 py-2.5 bg-white border border-[#3D1F0D]/12 rounded-lg text-sm text-[#3D1F0D] placeholder:text-[#3D1F0D]/30 focus:outline-none focus:border-[#C8972B] focus:ring-[3px] focus:ring-[#C8972B]/12 transition-all";

  if (loading) {
    return (
      <div className="py-10 space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-9 rounded-lg bg-[#3D1F0D]/6 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="pb-24">
      <Section label="Basics">
        <Field label="Title">
          <input className={fieldInput} required value={form.title} onChange={set("title")} />
        </Field>
        <Field label="Excerpt">
          <textarea
            className={`${fieldInput} min-h-[64px] resize-y`}
            placeholder="Short summary shown on the blog grid"
            value={form.excerpt}
            onChange={set("excerpt")}
          />
        </Field>
        <Field label="Content">
          <textarea
            className={`${fieldInput} min-h-[220px] resize-y`}
            required
            placeholder="Full post content"
            value={form.content}
            onChange={set("content")}
          />
        </Field>
      </Section>

      <Section label="Media">
        <Field label="Cover image">
          <ImageUploader
            value={form.coverImage}
            onChange={(url) => setForm((f) => ({ ...f, coverImage: url }))}
            label="Cover image"
          />
        </Field>
        <Field label="Gallery (optional)">
          <GalleryUploader value={form.gallery} onChange={(g) => setForm((f) => ({ ...f, gallery: g }))} />
        </Field>
      </Section>

      <Section label="Details">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Author">
            <input className={fieldInput} value={form.author} onChange={set("author")} />
          </Field>
          <Field label="Category">
            <input className={fieldInput} value={form.category} onChange={set("category")} />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Read time">
            <input className={fieldInput} placeholder="5 min read" value={form.readTime} onChange={set("readTime")} />
          </Field>
          <Field label="Published date">
            <input type="date" className={fieldInput} value={form.publishedAt} onChange={set("publishedAt")} />
          </Field>
        </div>
        <Field label="Tags">
          <Repeater value={form.tags} onChange={(t) => setForm((f) => ({ ...f, tags: t }))} placeholder="e.g. minimalism" />
        </Field>
      </Section>

      <Section label="Publishing">
        <label className="flex items-center justify-between bg-white border border-[#3D1F0D]/10 rounded-lg px-4 py-3.5 cursor-pointer">
          <div>
            <p className="text-sm text-[#3D1F0D] font-medium">Published</p>
            <p className="text-xs text-[#3D1F0D]/45 mt-0.5">Visible on the public site</p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={form.isPublished}
            onClick={() => setForm((f) => ({ ...f, isPublished: !f.isPublished }))}
            className={`relative w-10 h-6 rounded-full shrink-0 transition-colors ${
              form.isPublished ? "bg-[#C8972B]" : "bg-[#3D1F0D]/15"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                form.isPublished ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </button>
        </label>
      </Section>

      {error && (
        <p className="bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg px-3.5 py-2.5 mb-2">
          {error}
        </p>
      )}

      <div className="sticky bottom-0 -mx-8 px-8 pt-4 pb-6 mt-7 border-t border-[#3D1F0D]/10 bg-[#F5EBE0]/95 backdrop-blur-sm flex gap-2.5">
        <button
          type="submit"
          disabled={saving}
          className="bg-[#C8972B] text-[#1A0F08] px-5 py-3 rounded-lg text-xs tracking-widest uppercase font-semibold hover:bg-[#D9A93A] active:bg-[#B8871F] disabled:opacity-60 transition-colors shadow-[0_8px_20px_-8px_rgba(200,151,43,0.5)]"
        >
          {saving ? "Saving…" : "Save post"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="border border-[#3D1F0D]/15 text-[#3D1F0D]/60 px-5 py-3 rounded-lg text-xs tracking-widest uppercase font-semibold hover:border-[#C8972B] hover:text-[#C8972B] transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}