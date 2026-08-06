"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { createLocation } from "@/lib/serverApi";
import { ArrowLeft, UploadCloud, X, Loader2, ImageIcon } from "lucide-react";

const GOLD = "#C8972B";
const ESPRESSO = "#3D1F0D";

export default function NewLocationPage() {
  const router = useRouter();

  const heroInputRef = useRef(null);
  const aboutInputRef = useRef(null);

  const [form, setForm] = useState({
    title: "",
    city: "",
    service: "",
    description: "",
    about: "",
  });

  const [heroImage, setHeroImage] = useState(null);
  const [heroPreview, setHeroPreview] = useState(null);
  const [aboutImage, setAboutImage] = useState(null);
  const [aboutPreview, setAboutPreview] = useState(null);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleImageSelect = (type) => (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);

    if (type === "hero") {
      setHeroImage(file);
      setHeroPreview(previewUrl);
      if (errors.heroImage) setErrors((prev) => ({ ...prev, heroImage: "" }));
    } else {
      setAboutImage(file);
      setAboutPreview(previewUrl);
      if (errors.aboutImage) setErrors((prev) => ({ ...prev, aboutImage: "" }));
    }
  };

  const clearImage = (type) => () => {
    if (type === "hero") {
      setHeroImage(null);
      setHeroPreview(null);
      if (heroInputRef.current) heroInputRef.current.value = "";
    } else {
      setAboutImage(null);
      setAboutPreview(null);
      if (aboutInputRef.current) aboutInputRef.current.value = "";
    }
  };

  const validate = () => {
    const next = {};
    if (!form.title.trim()) next.title = "Title is required";
    if (!form.city.trim()) next.city = "City is required";
    if (!form.service.trim()) next.service = "Service is required";
    if (!form.description.trim()) next.description = "Description is required";
    if (!form.about.trim()) next.about = "About is required";
    if (!heroImage) next.heroImage = "Hero image is required";
    if (!aboutImage) next.aboutImage = "About image is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("city", form.city);
      formData.append("service", form.service);
      formData.append("description", form.description);
      formData.append("about", form.about);

      formData.append("heroImage", heroImage);
      formData.append("aboutImage", aboutImage);

      await createLocation(formData);

      alert("Location created successfully!");

      router.push("/admin/locations");
      router.refresh();
    } catch (err) {
      console.error(err);

      setSubmitError(err.message || "Could not save this location.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] px-4 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <button
          onClick={() => router.push("/admin/locations")}
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#8A7A6D] transition-colors hover:text-[#6B5D50]"
        >
          <ArrowLeft size={16} />
          Back to Locations
        </button>

        <h1
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
          style={{ color: ESPRESSO }}
        >
          Add Location
        </h1>
        <p className="mt-1 mb-8 text-sm text-[#8A7A6D]">
          Create a new location to display on the site
        </p>

        {submitError && (
          <div className="mb-6 rounded-lg border border-[#E8B4B4] bg-[#FCEEEE] px-4 py-3 text-sm text-[#8A2B2B]">
            {submitError}
          </div>
        )}

        <motion.form
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-[#EDE4D9] bg-white p-6 shadow-sm sm:p-8"
        >
          {/* Title */}
          <Field label="Title" error={errors.title}>
            <input
              type="text"
              value={form.title}
              onChange={handleChange("title")}
              placeholder="e.g. Living Room"
              className={inputClass(errors.title)}
            />
          </Field>

          {/* City */}
          <Field label="City" error={errors.city}>
            <input
              type="text"
              value={form.city}
              onChange={handleChange("city")}
              placeholder="e.g. Noida"
              className={inputClass(errors.city)}
            />
          </Field>

          {/* Service */}
          <Field label="Service" error={errors.service}>
            <input
              type="text"
              value={form.service}
              onChange={handleChange("service")}
              placeholder="e.g. Living Room Design"
              className={inputClass(errors.service)}
            />
          </Field>

          {/* Description */}
          <Field label="Description" error={errors.description}>
            <textarea
              value={form.description}
              onChange={handleChange("description")}
              rows={3}
              placeholder="Short summary shown on the location card"
              className={inputClass(errors.description) + " resize-none"}
            />
          </Field>

          {/* About */}
          <Field label="About" error={errors.about}>
            <textarea
              value={form.about}
              onChange={handleChange("about")}
              rows={5}
              placeholder="Longer description shown on the location detail page"
              className={inputClass(errors.about) + " resize-none"}
            />
          </Field>

          {/* Hero Image Upload */}
          <Field label="Hero Image" error={errors.heroImage}>
            <ImageUploader
              inputRef={heroInputRef}
              preview={heroPreview}
              onSelect={handleImageSelect("hero")}
              onClear={clearImage("hero")}
              error={errors.heroImage}
            />
          </Field>

          {/* About Image Upload */}
          <Field label="About Image" error={errors.aboutImage}>
            <ImageUploader
              inputRef={aboutInputRef}
              preview={aboutPreview}
              onSelect={handleImageSelect("about")}
              onClear={clearImage("about")}
              error={errors.aboutImage}
            />
          </Field>

          {/* Submit */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:shadow-md active:scale-[0.98] disabled:opacity-60"
              style={{ backgroundColor: GOLD }}
            >
              {isSubmitting && <Loader2 size={16} className="animate-spin" />}
              {isSubmitting ? "Saving..." : "Save Location"}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <label
        className="mb-1.5 block text-sm font-medium"
        style={{ color: ESPRESSO }}
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-[#B23A3A]">{error}</p>}
    </div>
  );
}

function ImageUploader({ inputRef, preview, onSelect, onClear, error }) {
  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onSelect}
        className="hidden"
      />

      {preview ? (
        <div className="relative h-40 w-full overflow-hidden rounded-xl border border-[#EDE4D9]">
          <img
            src={preview}
            alt="Preview"
            className="h-full w-full object-cover"
          />
          <button
            type="button"
            onClick={onClear}
            className="absolute right-2 top-2 rounded-full bg-black/60 p-1.5 text-white transition-colors hover:bg-black/80"
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className={`flex h-40 w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed transition-colors ${
            error
              ? "border-[#E8B4B4] bg-[#FCEEEE]"
              : "border-[#EDE4D9] bg-[#FBF7F1] hover:bg-[#F5EFE5]"
          }`}
        >
          <UploadCloud size={22} style={{ color: GOLD }} />
          <span className="text-sm text-[#8A7A6D]">
            Click to upload an image
          </span>
          <span className="text-xs text-[#B4A996]">PNG or JPG</span>
        </button>
      )}
    </div>
  );
}

function inputClass(hasError) {
  return `w-full rounded-lg border px-4 py-2.5 text-sm text-[#3D1F0D] outline-none transition-colors placeholder:text-[#B4A996] focus:border-[#C8972B] ${
    hasError ? "border-[#E8B4B4] bg-[#FCEEEE]" : "border-[#EDE4D9] bg-white"
  }`;
}
