"use client";

import { useState, useRef } from "react";
import { adminApi } from "@/lib/adminApi";
import { useToast } from "./ToastProvider";
import { resolveImageUrl } from "../../lib/imageUrl";
import { Upload, ImagePlus } from "lucide-react";

export default function ImageUploader({ value, onChange, label = "Image" }) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef(null);
  const showToast = useToast();

  const upload = async (file) => {
    setUploading(true);
    try {
      const res = await adminApi.upload([file]);
      onChange(res.data[0]);
    } catch (err) {
      showToast(err.message, "error");
    } finally {
      setUploading(false);
    }
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (file) upload(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) upload(file);
  };

  return (
    <div className="my-1">
      {value && (
        <div className="relative mb-2.5 group">
          <img
            src={resolveImageUrl(value)}
            alt={label}
            className="w-full h-40 object-cover rounded-lg bg-[#C8972B]/10"
          />
          <div className="absolute inset-0 rounded-lg bg-[#1A0F08]/0 group-hover:bg-[#1A0F08]/30 transition-colors" />
        </div>
      )}

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
            {value ? (
              <Upload className="w-5 h-5 text-[#3D1F0D]/35" />
            ) : (
              <ImagePlus className="w-5 h-5 text-[#3D1F0D]/35" />
            )}
            <span className="text-xs text-[#3D1F0D]/50">
              {value ? `Replace ${label.toLowerCase()}` : `Click or drag to upload ${label.toLowerCase()}`}
            </span>
          </>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFile}
        />
      </label>
    </div>
  );
}