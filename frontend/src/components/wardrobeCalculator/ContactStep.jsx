"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, User, Phone, Mail } from "lucide-react";

export default function ContactStep({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isValid =
    formData.name?.trim() &&
    formData.phone?.trim() &&
    formData.email?.trim();

  const handleSubmit = async () => {
    if (!isValid) return;

    // Phone Validation
    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      alert("Please enter a valid 10 digit mobile number");
      return;
    }

    // Email Validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://livingspacedecor.in/send-wardrobe-quote.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: formData.type,
            dimension: formData.dimension,
            finish: formData.finish,
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        nextStep();
      } else {
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Wardrobe Quote Error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 bg-[#C8972B]/10 text-[#C8972B] px-4 py-2 rounded-full text-sm font-medium">
          Step 5 of 6
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-[#3D1F0D] mt-4 mb-4">
          Get Your Cost Estimate
        </h2>

        <p className="text-[#6B6B6B] max-w-2xl mx-auto">
          Enter your details and receive a personalized wardrobe cost estimate
          along with a free design consultation.
        </p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-[32px] border border-[#F0E6D8] shadow-lg p-8 md:p-12">
        <div className="grid gap-6">
          {/* Name */}
          <div>
            <label className="block mb-2 text-[#3D1F0D] font-medium">
              Full Name
            </label>

            <div className="relative">
              <User
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C8972B]"
              />

              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full h-14 pl-12 pr-4 rounded-2xl border border-[#F0E6D8] focus:outline-none focus:border-[#C8972B]"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-[#3D1F0D] font-medium">
              Phone Number
            </label>

            <div className="relative">
              <Phone
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C8972B]"
              />

              <input
                type="tel"
                name="phone"
                maxLength={10}
                value={formData.phone || ""}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full h-14 pl-12 pr-4 rounded-2xl border border-[#F0E6D8] focus:outline-none focus:border-[#C8972B]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-[#3D1F0D] font-medium">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C8972B]"
              />

              <input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full h-14 pl-12 pr-4 rounded-2xl border border-[#F0E6D8] focus:outline-none focus:border-[#C8972B]"
              />
            </div>
          </div>

          {/* Selection Summary */}
          <div className="bg-[#F5EBE0] rounded-3xl p-6 mt-4">
            <h3 className="text-xl font-semibold text-[#3D1F0D] mb-4">
              Your Selection
            </h3>

            <div className="space-y-3 text-[#6B6B6B]">
              <p>
                <span className="font-semibold text-[#3D1F0D]">
                  Wardrobe Type:
                </span>{" "}
                {formData.type}
              </p>

              <p>
                <span className="font-semibold text-[#3D1F0D]">
                  Size:
                </span>{" "}
                {formData.dimension}
              </p>

              <p>
                <span className="font-semibold text-[#3D1F0D]">
                  Finish:
                </span>{" "}
                {formData.finish}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-10">
        <button
          onClick={prevStep}
          disabled={isSubmitting}
          className="flex items-center gap-2 border border-[#3D1F0D] text-[#3D1F0D] px-6 py-3 rounded-md hover:bg-[#3D1F0D] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          disabled={!isValid || isSubmitting}
          onClick={handleSubmit}
          className={`flex items-center gap-2 px-8 py-3 rounded-md transition-all duration-300 ${
            isValid && !isSubmitting
              ? "bg-[#3D1F0D] text-white hover:bg-[#C8972B]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Get Estimate"}

          {!isSubmitting && <ArrowRight size={18} />}
        </button>
      </div>
    </section>
  );
}