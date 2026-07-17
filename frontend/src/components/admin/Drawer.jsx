"use client";

import { X } from "lucide-react";

export default function Drawer({ open, eyebrow, title, onClose, children }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 bg-[#1A0F08]/45 backdrop-blur-[2px] flex justify-end z-[200]"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-xl bg-[#F5EBE0] h-screen overflow-y-auto shadow-2xl animate-[slideIn_0.25s_ease-out]">
        <div className="sticky top-0 bg-[#F5EBE0]/95 backdrop-blur-sm px-8 pt-7 pb-5 border-b border-[#3D1F0D]/10 z-10 relative">
          <p className="flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-[#C8972B] font-semibold mb-2.5">
            <span className="w-[22px] h-px bg-[#C8972B] inline-block" />
            {eyebrow}
          </p>
          <h2 className="font-display text-2xl text-[#3D1F0D] pr-8">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-6 right-7 w-8 h-8 flex items-center justify-center rounded-full text-[#3D1F0D]/50 hover:bg-[#3D1F0D]/5 hover:text-[#C8972B] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="px-8 pt-6 pb-12">{children}</div>
      </div>

      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[slideIn_0\\.25s_ease-out\\] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}