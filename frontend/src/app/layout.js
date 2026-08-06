import { Marcellus, Poppins } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

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

export const metadata = {
  metadataBase: new URL("https://livingspacedecor.in"),

  title: {
    default: "Living Space Decor",
    template: "%s",
  },

  description:
    "Living Space Decor provides premium interior design services in Noida, Greater Noida, Ghaziabad, specializing in modular kitchens, wardrobes, home interiors, and turnkey interior solutions.",

  keywords: [
    "Interior Designer",
    "Interior Design",
    "Modular Kitchen",
    "Wardrobe Design",
    "Home Interior",
    "Living Space Decor",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    siteName: "Living Space Decor",
    title: "Living Space Decor",
    description:
      "Premium Interior Design Services in Greater Noida & Noida.",
    url: "https://livingspacedecor.in",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}