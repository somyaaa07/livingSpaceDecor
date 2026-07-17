import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactForm from "@/components/contact/ContactForm";
import GoogleMap from "@/components/contact/GoogleMap";
import FAQSection from "@/components/contact/FAQSection";

export const metadata = {
  title: "Contact Us - Living Space Decor",

  description:
    "Get in touch with Living Space Decor for expert interior design services in Noida. Contact us for modular kitchens, wardrobes, living room designs, bedroom interiors, and complete home renovation solutions.",
}

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
