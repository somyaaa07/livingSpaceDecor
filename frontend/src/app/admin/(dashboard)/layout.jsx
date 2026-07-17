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
      <div className="min-h-screen flex items-center justify-center bg-cream text-brown/50 text-sm">
        Loading…
      </div>
    );
  }

  if (!admin) return null; // redirecting to /admin/login

  return (
    <div className="flex min-h-screen bg-cream">
      <Sidebar />
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
