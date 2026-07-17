"use client";

import { useState } from "react";
import { adminApi } from "@/lib/adminApi";
import { useToast } from "./ToastProvider";
import { resolveImageUrl } from "../../lib/imageUrl";
import { ImagePlus, X } from "lucide-react";

export default function GalleryUploader({ value = [], onChange, label = "Gallery" }) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const showToast = useToast();

  const upload = async (files) => {
    setUploading(true);
    try {
      const res = await adminApi.upload(files);
      onChange([...value, ...res.data]);
    } catch (err) {
      showToast(err.message, "error");
    } finally {
      setUploading(false);
    }
  };

  const handleFiles = (e) => {
    const files = e.target.files;
    if (files?.length) upload(files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files?.length) upload(e.dataTransfer.files);
  };

  const remove = (i) => onChange(value.slice(0, i).concat(value.slice(i + 1)));

  return (
    <div className="my-1">
      <label
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={`flex flex-col items-center justify-center gap-2 border border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          dragOver
            ? "border-[#C8972B] bg-[#C8972B]/8"
            : "border-[#3D1F0D]/20 hover:border-[#C8972B] hover:bg-[#C8972B]/[0.03]"
        }`}
      >
        {uploading ? (
          <>
            <div className="w-5 h-5 border-2 border-[#C8972B]/30 border-t-[#C8972B] rounded-full animate-spin" />
            <span className="text-xs text-[#3D1F0D]/50">Uploading…</span>
          </>
        ) : (
          <>
            <ImagePlus className="w-5 h-5 text-[#3D1F0D]/35" />
            <span className="text-xs text-[#3D1F0D]/50">
              Add {label.toLowerCase()} photos (multiple allowed)
            </span>
          </>
        )}
        <input type="file" accept="image/*" multiple className="hidden" onChange={handleFiles} />
      </label>

      {value.length > 0 && (
        <div className="grid grid-cols-4 gap-2.5 mt-3">
          {value.map((url, i) => (
            <div key={url + i} className="relative aspect-[4/3] rounded-lg overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={resolveImageUrl(url)} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#1A0F08]/0 group-hover:bg-[#1A0F08]/20 transition-colors" />
              <button
                type="button"
                onClick={() => remove(i)}
                aria-label="Remove image"
                className="absolute top-1.5 right-1.5 w-6 h-6 flex items-center justify-center rounded-full bg-[#1A0F08]/70 text-white opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-all"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}