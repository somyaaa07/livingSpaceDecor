import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactForm from "@/components/contact/ContactForm";
import GoogleMap from "@/components/contact/GoogleMap";
import FAQSection from "@/components/contact/FAQSection";

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
