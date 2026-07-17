"use client";

import { AuthProvider } from "@/lib/AuthContext";
import { ToastProvider } from "@/components/admin/ToastProvider";

export default function AdminRootLayout({ children }) {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
}
