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
      <header className="flex items-end justify-between px-8 sm:px-11 pt-9 pb-6 border-b border-[#3D1F0D]/10">
        <div>
          <p className="flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-[#C8972B] font-semibold mb-2">
            <span className="w-[22px] h-px bg-[#C8972B] inline-block" />
            Overview
          </p>
          <h1 className="font-display text-3xl text-[#3D1F0D]">Dashboard</h1>
        </div>
      </header>

      <div className="p-8 sm:p-11">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {cards.map((c) => {
            const Icon = c.icon;
            const loaded = c.value !== undefined && c.value !== null;
            return (
              <div
                key={c.label}
                className="group bg-white border border-[#3D1F0D]/10 rounded-xl p-5 hover:border-[#C8972B]/40 hover:shadow-[0_12px_28px_-12px_rgba(61,31,13,0.18)] transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[10.5px] tracking-widest uppercase text-[#3D1F0D]/45 font-semibold">
                    {c.label}
                  </p>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      c.accent ? "bg-[#C8972B]/15" : "bg-[#3D1F0D]/5"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${c.accent ? "text-[#C8972B]" : "text-[#3D1F0D]/50"}`}
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {loaded ? (
                  <p className="font-display text-3xl text-[#3D1F0D] leading-none">{c.value}</p>
                ) : (
                  <div className="h-8 w-12 bg-[#3D1F0D]/8 rounded-md animate-pulse" />
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-start gap-3 bg-white/60 border border-[#3D1F0D]/8 rounded-xl px-5 py-4 max-w-xl">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8972B] mt-1.5 shrink-0" />
          <p className="text-sm text-[#3D1F0D]/55 leading-relaxed">
            Use the sidebar to add or edit portfolio projects and blog posts.
          </p>
        </div>
      </div>
    </div>
  );
}