import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactForm from "@/components/contact/ContactForm";
import GoogleMap from "@/components/contact/GoogleMap";
import FAQSection from "@/components/contact/FAQSection";

export const metadata = {
  title: "Contact Us | Living Space Decor - Interior Designers in Noida",

  description:
    "Contact Living Space Decor for expert interior design services in Noida, Greater Noida, and Ghaziabad. Book a free consultation today.",
  keywords: [
    "Contact Living Space Decor",
    "Interior Designer Contact",
    "Interior Designer in Noida",
    "Interior Designer in Greater Noida",
    "Modular Kitchen Designer",
    "Wardrobe Design",
    "Living Space Decor",
  ],

  alternates: {
    canonical: "https://livingspacedecor.in/contact",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactForm />
      <GoogleMap />
      <FAQSection />
    </>
  );
}
