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
    default: "Living Space Decor | Interior Designers in Noida & Greater Noida",
    template: "%s",
  },

  description:
    "Living Space Decor offers premium interior design, modular kitchens, wardrobes, and turnkey home interiors in Noida, Greater Noida, Ghaziabad, and Delhi NCR.",

  keywords: [
    "Interior Designers in Noida",
    "Interior Designers in Greater Noida",
    "Home Interior Design",
    "Modular Kitchen",
    "Wardrobe Design",
    "Turnkey Interior",
    "Luxury Interior Design",
    "Living Room Interior",
    "Bedroom Interior",
    "Living Space Decor",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Living Space Decor | Interior Designers in Noida & Greater Noida",

    description:
      "Premium interior design company offering modular kitchens, wardrobes, luxury home interiors, and turnkey solutions across Noida and Delhi NCR.",

    url: "https://livingspacedecor.in",

    siteName: "Living Space Decor",

    locale: "en_IN",

    type: "website",

    
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
