"use client";

import { useState } from "react";
import { adminApi } from "@/lib/adminApi";
import { useToast } from "./ToastProvider";
import ImageUploader from "./ImageUploader";
import GalleryUploader from "./GalleryUploader";
import Repeater from "./Repeater";

const empty = {
  name: "", type: "", location: "", area: "", bhk: "", style: "", year: "", duration: "",
  description: "", image: "", gallery: [], highlights: [],
  clientQuoteText: "", clientQuoteAuthor: "", clientQuoteTitle: "",
  isPublished: true,
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

export default function ProjectForm({ project, onSaved, onCancel }) {
  const [form, setForm] = useState(
    project
      ? {
          ...empty,
          ...project,
          clientQuoteText: project.clientQuote?.text || "",
          clientQuoteAuthor: project.clientQuote?.author || "",
          clientQuoteTitle: project.clientQuote?.title || "",
        }
      : empty
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const showToast = useToast();

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.image) {
      setError("Please upload a hero image.");
      return;
    }

    const payload = {
      name: form.name,
      type: form.type,
      location: form.location,
      area: form.area,
      bhk: form.bhk,
      style: form.style,
      year: form.year,
      duration: form.duration,
      description: form.description,
      image: form.image,
      gallery: form.gallery,
      highlights: form.highlights.filter((h) => h.trim() !== ""),
      clientQuote: form.clientQuoteText
        ? { text: form.clientQuoteText, author: form.clientQuoteAuthor, title: form.clientQuoteTitle }
        : null,
      isPublished: form.isPublished,
    };

    setSaving(true);
    try {
      if (project) {
        await adminApi.updateProject(project.id, payload);
        showToast("Project updated", "success");
      } else {
        await adminApi.createProject(payload);
        showToast("Project created", "success");
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

  return (
    <form onSubmit={handleSubmit} className="pb-24">
      <Section label="Basics">
        <Field label="Project name">
          <input className={fieldInput} required value={form.name} onChange={set("name")} />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Type">
            <input className={fieldInput} placeholder="Residential / Commercial" value={form.type} onChange={set("type")} />
          </Field>
          <Field label="Location">
            <input className={fieldInput} value={form.location} onChange={set("location")} />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Area">
            <input className={fieldInput} placeholder="2400 sqft" value={form.area} onChange={set("area")} />
          </Field>
          <Field label="BHK">
            <input className={fieldInput} placeholder="3 BHK" value={form.bhk} onChange={set("bhk")} />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Style">
            <input className={fieldInput} placeholder="Contemporary" value={form.style} onChange={set("style")} />
          </Field>
          <Field label="Year">
            <input className={fieldInput} value={form.year} onChange={set("year")} />
          </Field>
        </div>
        <Field label="Duration">
          <input className={fieldInput} placeholder="4 months" value={form.duration} onChange={set("duration")} />
        </Field>
        <Field label="Description">
          <textarea className={`${fieldInput} min-h-[90px] resize-y`} value={form.description} onChange={set("description")} />
        </Field>
      </Section>

      <Section label="Media">
        <Field label="Hero image">
          <ImageUploader value={form.image} onChange={(url) => setForm((f) => ({ ...f, image: url }))} label="Hero image" />
        </Field>
        <Field label="Gallery">
          <GalleryUploader value={form.gallery} onChange={(g) => setForm((f) => ({ ...f, gallery: g }))} />
        </Field>
      </Section>

      <Section label="Highlights">
        <Repeater
          value={form.highlights}
          onChange={(h) => setForm((f) => ({ ...f, highlights: h }))}
          placeholder="e.g. Custom walnut joinery"
        />
      </Section>

      <Section label="Client quote">
        <Field label="Quote">
          <textarea
            className={`${fieldInput} min-h-[70px] resize-y`}
            placeholder="What the client said…"
            value={form.clientQuoteText}
            onChange={set("clientQuoteText")}
          />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Author name">
            <input className={fieldInput} placeholder="Author name" value={form.clientQuoteAuthor} onChange={set("clientQuoteAuthor")} />
          </Field>
          <Field label="Author title">
            <input className={fieldInput} placeholder="e.g. Homeowner" value={form.clientQuoteTitle} onChange={set("clientQuoteTitle")} />
          </Field>
        </div>
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
          {saving ? "Saving…" : "Save project"}
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