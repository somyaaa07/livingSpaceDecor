"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";
import {
  LayoutDashboard,
  LayoutGrid,
  Newspaper,
  Settings,
  LogOut,
  MapPin,
  Menu,
  X,
} from "lucide-react";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/projects", label: "Portfolio Projects", icon: LayoutGrid },
  { href: "/admin/blogs", label: "Blog Posts", icon: Newspaper },
  {
   label: "Locations",
    href: "/admin/locations",
    icon: MapPin,
  },
  // { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { admin, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const name = admin?.name || admin?.username || "";
  const initial = name.charAt(0).toUpperCase();

  return (
    <>
      {/* Mobile/tablet top bar — sirf lg se neeche dikhega */}
      <div className="lg:hidden sticky top-0 z-30 flex items-center justify-between bg-[#1A0F08] text-[#F5EBE0] px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-[16px] h-px bg-[#C8972B] inline-block" />
          <span className="font-display text-lg">Admin Panel</span>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="p-1.5 text-[#F5EBE0]/80 hover:text-[#F5EBE0]"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Backdrop — click karke close ho jayega */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar: mobile/tablet pe drawer (slide in/out), lg+ pe fixed rail */}
      <aside
        className={`
          w-72 sm:w-80 shrink-0 bg-[#1A0F08] text-[#F5EBE0] flex flex-col p-6 sm:p-7
          fixed inset-y-0 left-0 z-50 h-screen transition-transform duration-300 ease-in-out
          lg:sticky lg:top-0 lg:translate-x-0 lg:z-auto
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="mb-10 flex items-start justify-between">
          <div>
            <p className="flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-[#C8972B]/90 font-semibold mb-2.5">
              <span className="w-[22px] h-px bg-[#C8972B] inline-block" />
              Interior Decor
            </p>
            <h2 className="font-display text-2xl text-[#F5EBE0]">
              Admin Panel
            </h2>
          </div>
          {/* Close button — sirf drawer mode me dikhega */}
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden text-[#F5EBE0]/60 hover:text-[#F5EBE0] p-1 -mr-1"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          {NAV.map((item) => {
            const active =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
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
              <span className="font-display text-[#C8972B] text-sm leading-none">
                {initial}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-[13px] text-[#F5EBE0]/85 truncate capitalize leading-tight">
                {name}
              </p>
              <p className="text-[10.5px] text-[#F5EBE0]/35 leading-tight">
                Administrator
              </p>
            </div>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-5 ml-2 mt-10 text-sm uppercase tracking-wide text-[#F5EBE0]/85 hover:text-[#C8972B] transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign out
          </button>
        </div>
      </aside>
    </>
  );
}
