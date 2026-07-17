"use client";

import { useState } from "react";
import { Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Form values + validation state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    project: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const handleFieldChange = (field, value) => {
  setFormData((prev) => ({ ...prev, [field]: value }));

  if (submitSuccess) {
    setSubmitSuccess(false);
  }

  if (errors[field] && value.trim()) {
    setErrors((prev) => ({ ...prev, [field]: false }));
  }
};

  const isFormComplete =
    formData.name.trim() &&
    formData.phone.trim() &&
    formData.city.trim() &&
    formData.project.trim() &&
    formData.message.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitAttempted(true);

    const newErrors = {
      name: !formData.name.trim(),
      phone: !formData.phone.trim(),
      city: !formData.city.trim(),
      project: !formData.project.trim(),
      message: !formData.message.trim(),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://livingspacedecor.in/send-contact.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            city: formData.city,
            project: formData.project,
            message: formData.message,
          }),
        },
      );

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);

        setFormData({
          name: "",
          phone: "",
          city: "",
          project: "",
          message: "",
        });
      } else {
        alert(data.message || "Failed to submit enquiry");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#F7F2EB] to-[#F0EAE0] py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8972B] opacity-5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2A1506] opacity-3 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-14">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* FORM - LEFT SIDE */}
          <div className="group relative">
            {/* Premium Shadow Background */}
            <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10" />

            <div className="bg-white p-8 sm:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-lg border border-[#E8DCC8]/50">
              {/* Label */}
              <div className="inline-block mb-4">
                <p className="uppercase tracking-[0.3em] text-[#C8972B] text-[10px] font-semibold letter-spacing-wide">
                  ✦ Contact Us
                </p>
              </div>

              {/* Heading */}
              <h2 className="font-[Cormorant_Garamond,serif] text-3xl sm:text-4xl lg:text-5xl text-[#2A1506] mb-2 leading-tight font-light">
                Start Your
              </h2>
              <h2 className="font-[Cormorant_Garamond,serif] text-3xl sm:text-4xl lg:text-5xl text-[#C8972B] mb-10 leading-tight font-light">
                Project
              </h2>

              {/* Form */}

              {submitSuccess && (
                <div className="mb-6 rounded-md border border-green-300 bg-green-50 p-4 text-green-700">
                  Thank you! Your enquiry has been submitted successfully.
                </div>
              )}
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                {/* Name Input */}
                <div className="relative group/input">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleFieldChange("name", e.target.value)}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-gradient-to-b from-white to-[#FAFAF8] border-2 px-5 py-4 outline-none focus:border-[#C8972B] text-sm text-[#2A1506] placeholder-[#B8A89C] transition-all duration-300 rounded-sm ${
                      errors.name ? "border-red-400" : "border-[#E8DCC8]"
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C8972B] via-[#D4A852] to-transparent transition-all duration-500 ${
                      focusedField === "name" ? "w-full" : "w-0"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500">
                      Please enter your name.
                    </p>
                  )}
                </div>

                {/* Phone Input */}
                <div className="relative group/input">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleFieldChange("phone", e.target.value)}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-gradient-to-b from-white to-[#FAFAF8] border-2 px-5 py-4 outline-none focus:border-[#C8972B] text-sm text-[#2A1506] placeholder-[#B8A89C] transition-all duration-300 rounded-sm ${
                      errors.phone ? "border-red-400" : "border-[#E8DCC8]"
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C8972B] via-[#D4A852] to-transparent transition-all duration-500 ${
                      focusedField === "phone" ? "w-full" : "w-0"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-500">
                      Please enter your phone number.
                    </p>
                  )}
                </div>

                {/* City Input */}
                <div className="relative group/input">
                  <input
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => handleFieldChange("city", e.target.value)}
                    onFocus={() => setFocusedField("city")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-gradient-to-b from-white to-[#FAFAF8] border-2 px-5 py-4 outline-none focus:border-[#C8972B] text-sm text-[#2A1506] placeholder-[#B8A89C] transition-all duration-300 rounded-sm ${
                      errors.city ? "border-red-400" : "border-[#E8DCC8]"
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C8972B] via-[#D4A852] to-transparent transition-all duration-500 ${
                      focusedField === "city" ? "w-full" : "w-0"
                    }`}
                  />
                  {errors.city && (
                    <p className="mt-1.5 text-xs text-red-500">
                      Please enter your city.
                    </p>
                  )}
                </div>

                {/* Project Type Select */}
                <div className="relative group/input">
                  <select
                    value={formData.project}
                    onChange={(e) =>
                      handleFieldChange("project", e.target.value)
                    }
                    onFocus={() => setFocusedField("project")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-gradient-to-b from-white to-[#FAFAF8] border-2 px-5 py-4 outline-none focus:border-[#C8972B] text-sm text-[#2A1506] transition-all duration-300 rounded-sm appearance-none cursor-pointer ${
                      errors.project ? "border-red-400" : "border-[#E8DCC8]"
                    }`}
                  >
                    <option value="">Select Project Type</option>
                    <option>Interior Design</option>
                    <option>Modular Kitchen</option>
                    <option>Turnkey Project</option>
                    <option>Architecture</option>
                  </select>
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C8972B] via-[#D4A852] to-transparent transition-all duration-500 ${
                      focusedField === "project" ? "w-full" : "w-0"
                    }`}
                  />
                  <ArrowRight
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C8972B] pointer-events-none rotate-90"
                  />
                  {errors.project && (
                    <p className="mt-1.5 text-xs text-red-500">
                      Please select a project type.
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="relative group/input">
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      handleFieldChange("message", e.target.value)
                    }
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-gradient-to-b from-white to-[#FAFAF8] border-2 px-5 py-4 outline-none focus:border-[#C8972B] text-sm text-[#2A1506] placeholder-[#B8A89C] transition-all duration-300 resize-none rounded-sm ${
                      errors.message ? "border-red-400" : "border-[#E8DCC8]"
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C8972B] via-[#D4A852] to-transparent transition-all duration-500 ${
                      focusedField === "message" ? "w-full" : "w-0"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500">
                      Please tell us about your project.
                    </p>
                  )}
                </div>

               

                {/* Premium Button */}
                <button
                  type="submit"
                  disabled={ isSubmitting}
                  className="w-full relative group/btn mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C8972B] to-[#A8752A] rounded-sm opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-lg" />
                  <div className="relative bg-gradient-to-r from-[#C8972B] to-[#B38530] hover:from-[#3D1F0D] hover:to-[#2A1506] text-white px-2 py-4 uppercase tracking-[0.1em] text-xs sm:text-sm font-semibold transition-all duration-500 rounded-sm flex items-center justify-center gap-3 group/btn-inner">
                    {isSubmitting ? "Submitting..." : "Book Consultation"}
                    <ArrowRight
                      size={16}
                      className="group-hover/btn-inner:translate-x-2 transition-transform duration-300"
                    />
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE - CONTENT + CONTACTS */}
          <div className="flex flex-col gap-10">
            {/* Image with Premium Styling */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-[#C8972B] via-transparent to-[#3D1F0D] opacity-20 z-10 group-hover:opacity-40 transition-all duration-500" />
              <img
                src="/image/living_room9.webp"
                alt="Interior Design Showcase"
                className="w-full h-[230px] md:h-[260px] object-fit group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    Transforming Spaces
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="uppercase tracking-[0.3em] text-[#C8972B] text-[10px] font-semibold mb-4">
                ✦ Contact Details
              </p>

              <h3 className="font-[Cormorant_Garamond,serif] text-4xl sm:text-4xl text-[#2A1506] mb-2 leading-tight font-light">
                Let's Create
              </h3>
              <h3 className="font-[Cormorant_Garamond,serif] text-3xl sm:text-3xl text-[#C8972B] mb-4 leading-tight font-light">
                Something Beautiful
              </h3>

              <p className="text-[#6E6258] leading-8 mt-2 text-sm md:text-base font-light">
                Ready to transform your space into something extraordinary? Our
                team of expert designers is here to bring your vision to life
                with precision, creativity, and luxury.
              </p>
            </div>

            {/* Premium Contact Cards */}
            <div className="space-y-4">
              {/* Phone Card */}
              <div
                onMouseEnter={() => setHoveredCard("phone")}
                onMouseLeave={() => setHoveredCard(null)}
                className="group/card relative overflow-hidden rounded-lg transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#C8972B]/10 via-[#C8972B]/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                <div className="relative p-2 border-2 border-[#E8DCC8]/50 hover:border-[#C8972B]/30 transition-all duration-500 backdrop-blur-sm rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#C8972B]/20 to-[#C8972B]/5 flex items-center justify-center flex-shrink-0 rounded-lg group-hover/card:from-[#C8972B]/30 group-hover/card:to-[#C8972B]/15 transition-all duration-500">
                      <Phone size={22} className="text-[#C8972B]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#2A1506] text-sm uppercase tracking-wider">
                        Phone
                      </p>
                      <p className="text-[#6E6258] text-base mt-1 group-hover/card:text-[#C8972B] transition-colors duration-300">
                        +91 88266 06869
                      </p>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-[#C8972B] opacity-0 mt-4 group-hover/card:opacity-100 transition-all duration-500 group-hover/card:translate-x-2"
                    />
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div
                onMouseEnter={() => setHoveredCard("whatsapp")}
                onMouseLeave={() => setHoveredCard(null)}
                className="group/card relative overflow-hidden rounded-lg transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#C8972B]/10 via-[#C8972B]/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                <div className="relative p-2 border-2 border-[#E8DCC8]/50 hover:border-[#C8972B]/30 transition-all duration-500 backdrop-blur-sm rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#C8972B]/20 to-[#C8972B]/5 flex items-center justify-center flex-shrink-0 rounded-lg group-hover/card:from-[#C8972B]/30 group-hover/card:to-[#C8972B]/15 transition-all duration-500">
                      <MessageCircle size={22} className="text-[#C8972B]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#2A1506] text-sm uppercase tracking-wider">
                        WhatsApp
                      </p>
                      <a
                        href="https://wa.me/918826606869"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6E6258] text-base mt-1 group-hover/card:text-[#C8972B] transition-colors duration-300 font-medium"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-[#C8972B] opacity-0 mt-4 group-hover/card:opacity-100 transition-all duration-500 group-hover/card:translate-x-2"
                    />
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div
                onMouseEnter={() => setHoveredCard("address")}
                onMouseLeave={() => setHoveredCard(null)}
                className="group/card relative overflow-hidden rounded-lg transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#C8972B]/10 via-[#C8972B]/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                <div className="relative p-2 border-2 border-[#E8DCC8]/50 hover:border-[#C8972B]/30 transition-all duration-500 backdrop-blur-sm rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#C8972B]/20 to-[#C8972B]/5 flex items-center justify-center flex-shrink-0 rounded-lg group-hover/card:from-[#C8972B]/30 group-hover/card:to-[#C8972B]/15 transition-all duration-500">
                      <MapPin size={22} className="text-[#C8972B]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#2A1506] text-sm uppercase tracking-wider">
                        Address
                      </p>
                      <p className="text-[#6E6258] text-base mt-1 group-hover/card:text-[#C8972B] transition-colors duration-300">
                        Shop-LGB 28, Galaxy Diamond Plaza Sector 4 Greater Noida
                        West, Greater Noida, Uttar Pradesh 201009
                      </p>
                    </div>
                    {/* <ArrowRight
                      size={18}
                      className="text-[#C8972B] opacity-0 mt-4 group-hover/card:opacity-100 transition-all duration-500 group-hover/card:translate-x-2"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
