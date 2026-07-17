"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";
import Sidebar from "@/components/admin/Sidebar";

export default function DashboardLayout({ children }) {
  const { admin, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !admin) router.replace("/admin/login");
  }, [loading, admin, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream text-brown/50 text-sm px-4 text-center">
        Loading…
      </div>
    );
  }

  if (!admin) return null; // redirecting to /admin/login

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#F5EBE0]">
      <Sidebar />
      <main className="flex-1 min-w-0 w-full">
        <div className="p-4 sm:p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}