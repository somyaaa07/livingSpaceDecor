"use client";

import { usePathname } from "next/navigation";
import { Marcellus, Poppins } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import BackToTop from "@/components/common/BackToTop";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ShareButton from "@/components/common/ShareButton";

const marcellus = Marcellus({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "600", "700"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isAdmin = pathname.startsWith("/admin");

  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="min-h-screen flex flex-col">
       <ScrollToTop />
        { <Navbar />}

        <main className="flex-1">{children}</main>

        {  <Footer />}
        {<ShareButton />}
         <BackToTop />
      </body>
    </html>
  );
}
