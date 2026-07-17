"use client";

import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// ─── CONFIG ────────────────────────────────────────────────────────────────────
// Point this at your PHP backend URL (e.g. "https://yourdomain.com/api/send-consultation.php")
const API_ENDPOINT = "https://livingspacedecor.in/send-consultation.php";
// ───────────────────────────────────────────────────────────────────────────────

const INITIAL_FORM = {
  name: "",
  phone: "",
  city: "",
  email: "",
  message: "",
  whatsapp: false,
};

export default function ConsultationModal({ isOpen, onClose }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  // ── Handlers ────────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || data.status !== "success") {
        throw new Error(
          data.message || "Something went wrong. Please try again.",
        );
      }

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  const handleClose = () => {
    setStatus("idle");
    setErrorMsg("");
    onClose();
  };

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#F5EBE0] flex items-center justify-center hover:bg-[#C8972B] hover:text-white transition-all duration-300"
          >
            <X size={16} />
          </motion.button>

          {/* Content */}
          <div className="p-5">
            {/* ── SUCCESS STATE ── */}
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-8 flex flex-col items-center text-center gap-3"
              >
                <div className="w-14 h-14 rounded-full bg-[#C8972B]/10 flex items-center justify-center text-2xl">
                  ✓
                </div>
                <h3 className="text-base font-semibold text-[#3D1F0D]">
                  Consultation Booked!
                </h3>
                <p className="text-xs text-[#6E5E4E] leading-relaxed">
                  Thank you! Our design expert will reach out within 24 hours.
                </p>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={handleClose}
                  className="mt-2 h-9 px-6 bg-[#3D1F0D] text-white text-xs font-medium rounded-lg hover:bg-[#C8972B] transition-all duration-300"
                >
                  Close
                </motion.button>
              </motion.div>
            ) : (
              <>
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-4"
                >
                  <div className="inline-flex items-center gap-2 bg-[#C8972B]/8 px-3 py-1 rounded-full mb-2">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#C8972B] font-medium">
                      Complimentary
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-[#3D1F0D] leading-tight">
                    Book Your Free Consultation
                  </h2>
                  <p className="mt-1 text-xs text-[#6E5E4E] leading-snug">
                    Our expert will contact you within 24 hours.
                  </p>
                </motion.div>

                {/* Form */}
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-2"
                >
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full h-10 px-3 text-xs border border-[#E5DDD3] rounded-lg bg-[#FAFAF8] focus:outline-none focus:ring-1 focus:ring-[#C8972B] transition-all"
                  />

                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full h-10 px-3 text-xs border border-[#E5DDD3] rounded-lg bg-[#FAFAF8] focus:outline-none focus:ring-1 focus:ring-[#C8972B] transition-all"
                  />

                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                    className="w-full h-10 px-3 text-xs border border-[#E5DDD3] rounded-lg bg-[#FAFAF8] focus:outline-none focus:ring-1 focus:ring-[#C8972B] transition-all"
                  />

                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full h-10 px-3 text-xs border border-[#E5DDD3] rounded-lg bg-[#FAFAF8] focus:outline-none focus:ring-1 focus:ring-[#C8972B] transition-all"
                  />

                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    rows={2}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project"
                    className="w-full p-3 text-xs border border-[#E5DDD3] rounded-lg bg-[#FAFAF8] resize-none focus:outline-none focus:ring-1 focus:ring-[#C8972B] transition-all"
                  />

                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="whatsapp"
                      checked={form.whatsapp}
                      onChange={handleChange}
                      className="mt-0.5 w-3.5 h-3.5 accent-[#C8972B] cursor-pointer"
                    />
                    <span className="text-xs text-[#6E5E4E] leading-tight">
                      WhatsApp updates
                    </span>
                  </label>

                  {/* Error Message */}
                  {status === "error" && (
                    <p className="text-xs text-red-500 bg-red-50 px-3 py-2 rounded-lg">
                      {errorMsg}
                    </p>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{
                      backgroundColor: "#C8972B",
                      boxShadow: "0 8px 20px rgba(200, 151, 43, 0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full h-10 bg-[#3D1F0D] text-white text-xs font-medium rounded-lg transition-all duration-300 mt-3 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <svg
                          className="animate-spin w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      "Book Consultation"
                    )}
                  </motion.button>
                </motion.form>

                <p className="mt-2 text-center text-xs text-[#A89B8F]">
                  Your details are secure
                </p>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}
