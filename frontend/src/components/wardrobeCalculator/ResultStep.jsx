"use client";

import { CheckCircle2, Phone, Mail } from "lucide-react";

export default function ResultStep({ formData }) {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="bg-white rounded-[32px] border border-[#F0E6D8] shadow-lg p-8 md:p-14 text-center">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle2
              size={50}
              className="text-green-600"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#3D1F0D] mb-4">
          Thank You!
        </h1>

        <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto mb-8">
          Your wardrobe enquiry has been submitted successfully.
          Our design team will contact you shortly with a personalized
          estimate and free consultation.
        </p>

        {/* Customer Details */}
        <div className="bg-[#F5EBE0] rounded-3xl p-6 text-left max-w-2xl mx-auto mb-8">
          <h3 className="text-xl font-semibold text-[#3D1F0D] mb-4">
            Submitted Details
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

            <p>
              <span className="font-semibold text-[#3D1F0D]">
                Name:
              </span>{" "}
              {formData.name}
            </p>

            <p>
              <span className="font-semibold text-[#3D1F0D]">
                Phone:
              </span>{" "}
              {formData.phone}
            </p>

            <p>
              <span className="font-semibold text-[#3D1F0D]">
                Email:
              </span>{" "}
              {formData.email}
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
          <div className="flex items-center justify-center gap-2 text-[#3D1F0D]">
            <Phone size={18} />
            <span>+91 XXXXX XXXXX</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-[#3D1F0D]">
            <Mail size={18} />
            <span>info@livingspacedekor.com</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#3D1F0D] text-white font-semibold hover:bg-[#C8972B] transition-all duration-300"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}