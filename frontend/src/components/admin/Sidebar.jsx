"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";
import { LayoutDashboard, LayoutGrid, Newspaper, Settings, LogOut } from "lucide-react";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/projects", label: "Portfolio Projects", icon: LayoutGrid },
  { href: "/admin/blogs", label: "Blog Posts", icon: Newspaper },
  // { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { admin, logout } = useAuth();

  const name = admin?.name || admin?.username || "";
  const initial = name.charAt(0).toUpperCase();

  return (
    <aside className="w-60 shrink-0 bg-[#1A0F08] text-[#F5EBE0] flex flex-col p-7 sticky top-0 h-screen">
      <div className="mb-10">
        <p className="flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-[#C8972B]/90 font-semibold mb-2.5">
          <span className="w-[22px] h-px bg-[#C8972B] inline-block" />
          Studio
        </p>
        <h2 className="font-display text-2xl text-[#F5EBE0]">Admin</h2>
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        {NAV.map((item) => {
          const active = item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13.5px] transition-colors ${
                active
                  ? "bg-[#C8972B]/12 text-[#C8972B]"
                  : "text-[#F5EBE0]/60 hover:bg-white/5 hover:text-[#F5EBE0]"
              }`}
            >
              {active && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-full bg-[#C8972B]" />
              )}
              <Icon className="w-[15px] h-[15px] shrink-0" strokeWidth={2} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 pt-4">
        <div className="flex items-center gap-2.5 mb-3.5">
          <div className="w-8 h-8 rounded-full bg-[#C8972B]/15 border border-[#C8972B]/25 flex items-center justify-center shrink-0">
            <span className="font-display text-[#C8972B] text-sm leading-none">{initial}</span>
          </div>
          <div className="min-w-0">
            <p className="text-[13px] text-[#F5EBE0]/85 truncate capitalize leading-tight">{name}</p>
            <p className="text-[10.5px] text-[#F5EBE0]/35 leading-tight">Administrator</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-2 text-xs uppercase tracking-wide text-[#F5EBE0]/45 hover:text-[#C8972B] transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          Sign out
        </button>
      </div>
    </aside>
  );
}