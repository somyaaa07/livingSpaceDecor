"use client";

import { useEffect, useState } from "react";
import { adminApi } from "@/lib/adminApi";
import { LayoutGrid, Newspaper, CheckCircle2, FileEdit } from "lucide-react";

export default function DashboardPage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    Promise.all([adminApi.listProjects(), adminApi.listBlogs()]).then(([projRes, blogRes]) => {
      const projects = projRes.data;
      const blogs = blogRes.data;
      const all = [...projects, ...blogs];
      setStats({
        projects: projects.length,
        blogs: blogs.length,
        published: all.filter((x) => x.isPublished).length,
        drafts: all.filter((x) => !x.isPublished).length,
      });
    });
  }, []);

  const cards = [
    {
      label: "Portfolio Projects",
      value: stats?.projects,
      icon: LayoutGrid,
    },
    {
      label: "Blog Posts",
      value: stats?.blogs,
      icon: Newspaper,
    },
    {
      label: "Published",
      value: stats?.published,
      icon: CheckCircle2,
      accent: true,
    },
    {
      label: "Drafts",
      value: stats?.drafts,
      icon: FileEdit,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5EBE0]">
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 px-5 sm:px-8 lg:px-11 pt-7 sm:pt-9 pb-5 sm:pb-6 border-b border-[#3D1F0D]/10">
        <div>
          <p className="flex items-center gap-2.5 sm:gap-3 text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.35em] uppercase text-[#C8972B] font-semibold mb-2">
            <span className="w-[18px] sm:w-[22px] h-px bg-[#C8972B] inline-block" />
            Overview
          </p>
          <h1 className="font-display text-2xl sm:text-3xl text-[#3D1F0D]">Dashboard</h1>
        </div>
      </header>

      <div className="p-5 sm:p-8 lg:p-11">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {cards.map((c) => {
            const Icon = c.icon;
            const loaded = c.value !== undefined && c.value !== null;
            return (
              <div
                key={c.label}
                className="group bg-white border border-[#3D1F0D]/10 rounded-xl p-4 sm:p-5 hover:border-[#C8972B]/40 hover:shadow-[0_12px_28px_-12px_rgba(61,31,13,0.18)] transition-all"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
                  <p className="text-[9.5px] sm:text-[10.5px] tracking-wide sm:tracking-widest uppercase text-[#3D1F0D]/45 font-semibold leading-snug">
                    {c.label}
                  </p>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 ${
                      c.accent ? "bg-[#C8972B]/15" : "bg-[#3D1F0D]/5"
                    }`}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${c.accent ? "text-[#C8972B]" : "text-[#3D1F0D]/50"}`}
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {loaded ? (
                  <p className="font-display text-2xl sm:text-3xl text-[#3D1F0D] leading-none">{c.value}</p>
                ) : (
                  <div className="h-7 sm:h-8 w-10 sm:w-12 bg-[#3D1F0D]/8 rounded-md animate-pulse" />
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-start gap-3 bg-white/60 border border-[#3D1F0D]/8 rounded-xl px-4 sm:px-5 py-4 max-w-xl">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8972B] mt-1.5 shrink-0" />
          <p className="text-[13px] sm:text-sm text-[#3D1F0D]/55 leading-relaxed">
            Use the sidebar to add or edit portfolio projects and blog posts.
          </p>
        </div>
      </div>
    </div>
  );
}