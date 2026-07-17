"use client";

import { Plus, X } from "lucide-react";

export default function Repeater({ value = [], onChange, placeholder = "" }) {
  const lines = value.length ? value : [""];

  const update = (i, text) => {
    const next = [...lines];
    next[i] = text;
    onChange(next);
  };
  const remove = (i) => onChange(lines.slice(0, i).concat(lines.slice(i + 1)));
  const add = () => onChange([...lines, ""]);

  const handleKeyDown = (e, i) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (i === lines.length - 1) add();
    }
  };

  return (
    <div>
      {lines.map((line, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input
            className="flex-1 px-3.5 py-2.5 bg-white border border-[#3D1F0D]/12 rounded-lg text-sm text-[#3D1F0D] placeholder:text-[#3D1F0D]/30 focus:outline-none focus:border-[#C8972B] focus:ring-[3px] focus:ring-[#C8972B]/12 transition-all"
            value={line}
            placeholder={placeholder}
            onChange={(e) => update(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, i)}
          />
          <button
            type="button"
            onClick={() => remove(i)}
            disabled={lines.length === 1 && !line}
            aria-label="Remove line"
            className="w-9 shrink-0 flex items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-600 hover:text-white disabled:opacity-40 disabled:hover:bg-red-50 disabled:hover:text-red-500 disabled:cursor-not-allowed transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={add}
        className="flex items-center gap-1.5 text-xs uppercase tracking-wide font-semibold text-[#3D1F0D]/55 hover:text-[#C8972B] border border-[#3D1F0D]/12 hover:border-[#C8972B] rounded-lg px-3 py-1.5 mt-1 transition-colors"
      >
        <Plus className="w-3 h-3" />
        Add line
      </button>
    </div>
  );
}