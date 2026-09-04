"use client";

import { usePathname } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BackToTop from "@/components/common/BackToTop";
import ShareButton from "@/components/common/ShareButton";
import CallNowFloat from "./common/CallNowFloat";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop />

      {!isAdmin && <Navbar />}

      <main className="flex-1">{children}</main>

      {!isAdmin && <Footer />}
      {!isAdmin && <CallNowFloat />}
      {!isAdmin && <ShareButton />}
      {!isAdmin && <BackToTop />}
    </>
  );
}
