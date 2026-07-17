"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function LeadFormStep({ formData, setFormData, onBack }) {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "name":
        if (!value.trim()) {
          newErrors.name = "Name is required";
        } else if (value.trim().length < 2) {
          newErrors.name = "Name must be at least 2 characters";
        } else {
          delete newErrors.name;
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = "Email is required";
        } else if (!emailRegex.test(value)) {
          newErrors.email = "Please enter a valid email";
        } else {
          delete newErrors.email;
        }
        break;

      case "phone":
        if (!value.trim()) {
          newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(value.replace(/\D/g, ""))) {
          newErrors.phone = "Please enter a valid 10-digit number";
        } else {
          delete newErrors.phone;
        }
        break;

      case "pincode":
        if (!value.trim()) {
          newErrors.pincode = "Pincode is required";
        } else if (!/^\d{6}$/.test(value)) {
          newErrors.pincode = "Please enter a valid 6-digit pincode";
        } else {
          delete newErrors.pincode;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    validateField(name, value);
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.pincode &&
    Object.keys(errors).length === 0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      phone: true,
      pincode: true,
    });

    if (!isFormValid) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://livingspacedecor.in/send-kitchen-quote.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dimension: formData.dimension,
            shape: formData.shape,
            package: formData.package,

            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            pincode: formData.pincode,
          }),
        },
      );

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
      } else {
        alert(result.message || "Failed to submit enquiry");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {!submitSuccess ? (
        <motion.div
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-sm tracking-widest uppercase text-[#C8972B] font-medium mb-4">
              Step 4 of 4
            </p>

            <h2 className="text-4xl md:text-5xl font-heading text-[#3D1F0D] mb-4">
              Get Your Kitchen
              <br />
              <span className="text-[#C8972B]">Estimate</span>
            </h2>

            <p className="text-gray-600 text-md max-w-2xl mx-auto leading-relaxed">
              Share your details and our expert team will provide a personalized
              cost estimate within 24 hours.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
            {/* Form Fields */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {/* Name Field */}
              <div className="relative">
                <label className="block mb-3 text-sm font-body text-[#3D1F0D] uppercase tracking-wide">
                  Full Name
                </label>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <User size={20} strokeWidth={1.5} />
                  </div>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your full name"
                    className={`w-full h-14 px-4 pl-12 rounded-2xl border-2 transition-all duration-300 bg-white
                      ${
                        touched.name && errors.name
                          ? "border-red-300 focus:border-red-400"
                          : "border-gray-200 focus:border-[#C8972B]"
                      }
                      focus:outline-none focus:shadow-lg focus:shadow-[#C8972B]/10
                      placeholder:text-gray-400`}
                  />

                  {touched.name && errors.name && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <AlertCircle size={20} className="text-red-500" />
                    </motion.div>
                  )}

                  {touched.name && !errors.name && formData.name && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <CheckCircle2 size={20} className="text-green-500" />
                    </motion.div>
                  )}
                </div>

                <AnimatePresence>
                  {touched.name && errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Pincode Field */}
              <div className="relative">
                <label className="block mb-3 text-sm font-body text-[#3D1F0D] uppercase tracking-wide">
                  Pincode
                </label>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <MapPin size={20} strokeWidth={1.5} />
                  </div>

                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="6-digit pincode"
                    maxLength="6"
                    className={`w-full h-14 px-4 pl-12 rounded-2xl border-2 transition-all duration-300 bg-white
                      ${
                        touched.pincode && errors.pincode
                          ? "border-red-300 focus:border-red-400"
                          : "border-gray-200 focus:border-[#C8972B]"
                      }
                      focus:outline-none focus:shadow-lg focus:shadow-[#C8972B]/10
                      placeholder:text-gray-400`}
                  />

                  {touched.pincode && errors.pincode && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <AlertCircle size={20} className="text-red-500" />
                    </motion.div>
                  )}

                  {touched.pincode && !errors.pincode && formData.pincode && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <CheckCircle2 size={20} className="text-green-500" />
                    </motion.div>
                  )}
                </div>

                <AnimatePresence>
                  {touched.pincode && errors.pincode && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.pincode}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Phone Field */}
              <div className="relative sm:col-span-2 md:col-span-1">
                <label className="block mb-3 text-sm font-body text-[#3D1F0D] uppercase tracking-wide">
                  Phone Number
                </label>

                <div className="flex gap-0">
                  <div className="flex items-center px-4 border-2 border-gray-200 border-r-0 rounded-l-2xl bg-[#F5EBE0] text-[#3D1F0D] font-medium">
                    +91
                  </div>

                  <div className="relative flex-1">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <Phone size={20} strokeWidth={1.5} />
                    </div>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="10-digit mobile number"
                      maxLength="10"
                      className={`w-full h-14 px-4 pl-12 rounded-r-2xl border-2 transition-all duration-300 bg-white
                        ${
                          touched.phone && errors.phone
                            ? "border-red-300 focus:border-red-400"
                            : "border-gray-200 focus:border-[#C8972B]"
                        }
                        focus:outline-none focus:shadow-lg focus:shadow-[#C8972B]/10
                        placeholder:text-gray-400`}
                    />

                    {touched.phone && errors.phone && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                      >
                        <AlertCircle size={20} className="text-red-500" />
                      </motion.div>
                    )}

                    {touched.phone && !errors.phone && formData.phone && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                      >
                        <CheckCircle2 size={20} className="text-green-500" />
                      </motion.div>
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {touched.phone && errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email Field */}
              <div className="relative sm:col-span-2 md:col-span-1">
                <label className="block mb-3 text-sm font-body text-[#3D1F0D] uppercase tracking-wide">
                  Email Address
                </label>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <Mail size={20} strokeWidth={1.5} />
                  </div>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="your.email@example.com"
                    className={`w-full h-14 px-4 pl-12 rounded-2xl border-2 transition-all duration-300 bg-white
                      ${
                        touched.email && errors.email
                          ? "border-red-300 focus:border-red-400"
                          : "border-gray-200 focus:border-[#C8972B]"
                      }
                      focus:outline-none focus:shadow-lg focus:shadow-[#C8972B]/10
                      placeholder:text-gray-400`}
                  />

                  {touched.email && errors.email && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <AlertCircle size={20} className="text-red-500" />
                    </motion.div>
                  )}

                  {touched.email && !errors.email && formData.email && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <CheckCircle2 size={20} className="text-green-500" />
                    </motion.div>
                  )}
                </div>

                <AnimatePresence>
                  {touched.email && errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Configuration Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#F5EBE0] to-[#F5EBE0]/50 border-2 border-[#C8972B]/20"
            >
              <h3 className="font-bold text-lg text-[#3D1F0D] mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#C8972B] rounded-full" />
                Your Configuration
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: "Dimension", value: formData.dimension || "-" },
                  {
                    label: "Shape",
                    value: formData.shape || "Custom Requirement",
                  },
                  {
                    label: "Package",
                    value: formData.package || "Custom Package",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm"
                  >
                    <p className="text-xs font-body uppercase tracking-wide text-gray-500 mb-2">
                      {item.label}
                    </p>
                    <p className="font-body text-[#3D1F0D] text-md">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* WhatsApp Opt-in */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-3 p-4 rounded-2xl bg-[#F5EBE0]/50 border border-[#C8972B]/10"
            >
              <input
                type="checkbox"
                id="whatsapp"
                defaultChecked
                className="mt-1 w-5 h-5 accent-[#C8972B] cursor-pointer rounded"
              />

              <label
                htmlFor="whatsapp"
                className="text-gray-700 leading-relaxed cursor-pointer font-medium"
              >
                Yes, send me kitchen updates, design tips, and exclusive offers
                on WhatsApp
              </label>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <button
                type="button"
                onClick={onBack}
                disabled={isSubmitting}
                className="px-8 py-4 rounded-md border-2 border-[#3D1F0D] text-[#3D1F0D] font-body hover:bg-[#3D1F0D]/5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Back
              </button>

              <button
                type="submit"
                disabled={isSubmitting || !isFormValid}
                className={`px-12 py-4 rounded-md font-body text-md text-white transition-all duration-300 flex items-center justify-center gap-2
                  ${
                    isFormValid && !isSubmitting
                      ? "bg-[#3D1F0D] hover:bg-[#2A1408] shadow-lg shadow-[#3D1F0D]/20 hover:shadow-xl hover:shadow-[#3D1F0D]/30"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-5 h-5 border-2 text-nowrap border-white border-t-transparent rounded-md"
                    />
                    Processing...
                  </>
                ) : (
                  <>
                    Get Estimate
                    <motion.span
                      animate={isFormValid ? { x: [0, 4, 0] } : {}}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </>
                )}
              </button>
            </motion.div>
          </form>
        </motion.div>
      ) : (
        /* Success State */
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="text-center py-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 size={40} className="text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-body text-[#3D1F0D] mb-4"
          >
            Request Submitted!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Thank you! Our kitchen design experts will review your details and
            contact you within 24 hours with a personalized cost estimate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="p-6 rounded-2xl bg-blue-50 border border-blue-200 max-w-xl mx-auto mb-8"
          >
            <p className="text-sm text-blue-900">
              Check your email ({formData.email}) for a confirmation. You can
              also track your request on WhatsApp.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={() => window.location.reload()}
            className="px-10 py-4 rounded-full bg-[#3D1F0D] text-white font-semibold hover:bg-[#2A1408] transition-all duration-300"
          >
            Calculate Another Kitchen
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
