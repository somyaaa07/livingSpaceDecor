


// "use client";

// import { useState } from "react";

// export default function Step4Result({ formData, setFormData, back, onSubmit, isSubmitting, submitted }) {
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name?.trim()) newErrors.name = "Full name is required.";
//     if (!formData.phone?.trim()) newErrors.phone = "Phone number is required.";
//     else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) newErrors.phone = "Enter a valid 10-digit number.";
//     if (!formData.email?.trim()) newErrors.email = "Email is required.";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) newErrors.email = "Enter a valid email.";
//     if (!formData.pincode?.trim()) newErrors.pincode = "PIN Code is required.";
//     else if (!/^\d{6}$/.test(formData.pincode.trim())) newErrors.pincode = "Enter a valid 6-digit PIN.";
//     return newErrors;
//   };

//   const handleSubmit = () => {
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
//     onSubmit();
//   };

//   const inputClass = (field) =>
//     `w-full border rounded-2xl p-4 text-sm md:text-base outline-none transition bg-white/80 ${
//       errors[field] ? "border-red-400 focus:border-red-500" : "border-[#E5D8C7] focus:border-[#8B6B4A]"
//     }`;

//   // ✅ SUCCESS SCREEN
//   if (submitted) {
//     return (
//       <div className="w-full max-w-xl mx-auto text-center py-10">
//         <div className="w-16 h-16 rounded-full bg-[#8B6B4A] flex items-center justify-center mx-auto mb-6">
//           <span className="text-white text-2xl">✓</span>
//         </div>
//         <h3 className="text-2xl font-semibold text-white mb-3">Quote Request Sent!</h3>
//         <p className="text-white/70 text-sm leading-relaxed mb-8">
//           Thank you <strong className="text-white">{formData.name}</strong>! We've received your request and will reach out to{" "}
//           <strong className="text-white">{formData.email}</strong> within 24 hours.
//         </p>
//         <div className="p-5 bg-white/10 rounded-2xl border border-white/20 text-left space-y-3 text-sm text-white/80">
//           <p><span className="font-semibold text-white">Home Type:</span> {formData.bhk}</p>
//           <p><span className="font-semibold text-white">Rooms:</span> {formData.rooms?.join(", ")}</p>
//           <p><span className="font-semibold text-white">Style:</span> {formData.style}</p>
//           <p><span className="font-semibold text-white">PIN Code:</span> {formData.pincode}</p>
//           <p><span className="font-semibold text-white">WhatsApp Updates:</span> {formData.whatsappUpdates ? "Yes" : "No"}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       {/* Heading */}
//       <div className="text-center mb-8 md:mb-10">
//         <p className="uppercase tracking-[0.25em] text-[#C8972B] text-[10px] sm:text-xs mb-3">Cost Calculator</p>
//         <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">Get Your Detailed Quote</h2>
//         <p className="mt-3 text-sm text-white/70 max-w-xl mx-auto">
//           Fill in your details and receive a personalized estimate for your interior project.
//         </p>
//       </div>

//       {/* ✅ CARRIED FORWARD CHOICES */}
//       <div className="max-w-xl mx-auto mb-6">
//         <p className="text-xs uppercase tracking-widest text-[#C8972B] mb-3 text-center">Your Selections</p>
//         <div className="flex flex-wrap gap-2 justify-center">
//           {formData.bhk && (
//             <span className="flex items-center gap-1.5 px-4 py-1.5 bg-[#8B6B4A]/20 border border-[#8B6B4A]/40 rounded-full text-xs text-[#D4AF37] font-medium">
//               🏠 {formData.bhk}
//             </span>
//           )}
//           {formData.rooms?.map((r) => (
//             <span key={r} className="flex items-center gap-1.5 px-4 py-1.5 bg-[#8B6B4A]/20 border border-[#8B6B4A]/40 rounded-full text-xs text-[#D4AF37] font-medium">
//               🛋 {r}
//             </span>
//           ))}
//           {formData.style && (
//             <span className="flex items-center gap-1.5 px-4 py-1.5 bg-[#8B6B4A]/20 border border-[#8B6B4A]/40 rounded-full text-xs text-[#D4AF37] font-medium">
//               🎨 {formData.style}
//             </span>
//           )}
//         </div>
//       </div>

//       {/* Estimated Cost */}
//       <div className="max-w-xl mx-auto mb-8">
//         <div className="bg-white/10 border border-white/20 rounded-3xl p-6 md:p-8 text-center">
//           <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37]">₹8L – ₹12L</h3>
//           <p className="mt-2 text-sm text-white/70">Estimated Interior Cost</p>
//         </div>
//       </div>

//       {/* Form */}
//       <div className="max-w-xl mx-auto space-y-4 md:space-y-5">
//         <div>
//           <input type="text" name="name" placeholder="Full Name" value={formData.name || ""} onChange={handleChange} className={inputClass("name")} />
//           {errors.name && <p className="mt-1 text-xs text-red-400 pl-1">{errors.name}</p>}
//         </div>
//         <div>
//           <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone || ""} onChange={handleChange} className={inputClass("phone")} />
//           {errors.phone && <p className="mt-1 text-xs text-red-400 pl-1">{errors.phone}</p>}
//         </div>
//         <div>
//           <input type="email" name="email" placeholder="Email Address" value={formData.email || ""} onChange={handleChange} className={inputClass("email")} />
//           {errors.email && <p className="mt-1 text-xs text-red-400 pl-1">{errors.email}</p>}
//         </div>
//         <div>
//           <input type="text" name="pincode" placeholder="PIN Code" value={formData.pincode || ""} onChange={handleChange} className={inputClass("pincode")} />
//           {errors.pincode && <p className="mt-1 text-xs text-red-400 pl-1">{errors.pincode}</p>}
//         </div>

//         <label className="flex items-start gap-3 cursor-pointer pt-2">
//           <input type="checkbox" name="whatsappUpdates" checked={formData?.whatsappUpdates ?? true} onChange={handleChange} className="mt-1 w-4 h-4 accent-[#8B6B4A] flex-shrink-0" />
//           <span className="text-sm text-white/70 leading-relaxed">
//             Yes, I would like to receive updates and offers on WhatsApp.
//           </span>
//         </label>
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 md:mt-12">
//         <button onClick={back} disabled={isSubmitting}
//           className="w-full sm:w-auto min-w-[160px] border border-[#D8CFC4] text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all hover:border-[#8B6B4A] disabled:opacity-50">
//           ← Back
//         </button>
//         <button onClick={handleSubmit} disabled={isSubmitting}
//           className="w-full sm:w-auto min-w-[220px] bg-[#8B6B4A] text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all hover:bg-[#6F5439] hover:shadow-lg disabled:opacity-70 flex items-center justify-center gap-2">
//           {isSubmitting ? (
//             <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending…</>
//           ) : "Get Detailed Quote →"}
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Step4Result({ formData, setFormData, back, onSubmit, isSubmitting, submitted }) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name?.trim()) newErrors.name = "Full name is required.";
    if (!formData.phone?.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) newErrors.phone = "Enter a valid 10-digit number.";
    if (!formData.email?.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) newErrors.email = "Enter a valid email.";
    if (!formData.pincode?.trim()) newErrors.pincode = "PIN Code is required.";
    else if (!/^\d{6}$/.test(formData.pincode.trim())) newErrors.pincode = "Enter a valid 6-digit PIN.";
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    onSubmit();
  };

  const inputClass = (field) =>
    `w-full bg-white/90 backdrop-blur-sm border rounded-lg md:rounded-xl p-3.5 md:p-4 text-sm md:text-base outline-none transition-all duration-200 placeholder:text-[#8B6B4A]/40 ${
      errors[field] 
        ? "border-red-400/60 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
        : "border-[#E5D8C7] focus:border-[#C8972B] focus:ring-2 focus:ring-[#C8972B]/20"
    }`;

  // ✅ SUCCESS SCREEN
  if (submitted) {
    return (
      <div className="w-full text-center py-6 md:py-10">
        {/* Success Icon */}
        <motion.div
          className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#C8972B] to-[#A0762E] flex items-center justify-center mx-auto mb-6 md:mb-7 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}>
          <span className="text-white text-3xl md:text-4xl">✓</span>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}>
          <h3 className="font-[Cormorant_Garamond,serif] text-2xl md:text-3xl font-semibold text-white mb-2 md:mb-3">
            Estimate Complete!
          </h3>
          <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6 md:mb-8">
            Thank you, <strong className="text-white">{formData.name}</strong>! We'll send your detailed quote to{" "}
            <strong className="text-white">{formData.email}</strong> and call within 24 hours.
          </p>
        </motion.div>

        {/* Summary Card */}
        <motion.div
          className="max-w-xl mx-auto p-5 md:p-6 bg-white/8 rounded-2xl border border-white/15 backdrop-blur-sm space-y-3 md:space-y-4 text-left mb-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-3">
            <div className="col-span-1">
              <p className="text-xs uppercase tracking-widest text-[#C8972B] font-semibold mb-1">Home</p>
              <p className="text-sm md:text-base text-white font-medium">{formData.bhk}</p>
            </div>
            <div className="col-span-1">
              <p className="text-xs uppercase tracking-widest text-[#C8972B] font-semibold mb-1">Rooms</p>
              <p className="text-sm md:text-base text-white font-medium">{formData.rooms?.length || 0}</p>
            </div>
            <div className="col-span-1">
              <p className="text-xs uppercase tracking-widest text-[#C8972B] font-semibold mb-1">Style</p>
              <p className="text-sm md:text-base text-white font-medium">{formData.style?.slice(0, 12)}</p>
            </div>
            <div className="col-span-1">
              <p className="text-xs uppercase tracking-widest text-[#C8972B] font-semibold mb-1">PIN</p>
              <p className="text-sm md:text-base text-white font-medium">{formData.pincode}</p>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10" />
          <div>
            <p className="text-xs uppercase tracking-widest text-[#C8972B] font-semibold mb-2">Selected Rooms</p>
            <div className="flex flex-wrap gap-1.5">
              {formData.rooms?.map((r) => (
                <span key={r} className="inline-block px-3 py-1 text-xs bg-[#C8972B]/20 border border-[#C8972B]/40 rounded-full text-[#D4AF37] font-medium">
                  {r}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Estimated Cost */}
        <motion.div
          className="max-w-xl mx-auto mb-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}>
          <p className="text-xs uppercase tracking-widest text-[#C8972B] font-semibold mb-3">Your Estimated Budget</p>
          <div className="bg-gradient-to-br from-[#C8972B]/20 to-[#8B6B4A]/10 border border-[#C8972B]/30 rounded-2xl md:rounded-3xl p-6 md:p-8 text-center">
            <h4 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#E8B84A] bg-clip-text text-transparent mb-2">
              ₹8L – ₹12L
            </h4>
            <p className="text-sm text-white/60">Personalized interior design budget</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Form Heading */}
      <motion.div 
        className="text-center mb-8 md:mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}>
        <p className="uppercase tracking-[0.2em] text-[#C8972B] text-[10px] md:text-xs mb-2 md:mb-3 font-semibold">Your Details</p>
        <h2 className="font-[Cormorant_Garamond,serif] text-xl md:text-2xl font-semibold text-white mb-2">
          Get Your Personalized Estimate
        </h2>
        <p className="text-xs md:text-sm text-white/60 max-w-xl mx-auto">
          Help us refine your budget with your contact information.
        </p>
      </motion.div>

      {/* Selections Summary */}
      <motion.div 
        className="max-w-2xl mx-auto mb-8 md:mb-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}>
        <p className="text-xs uppercase tracking-widest text-[#C8972B] font-semibold mb-3 text-center">Your Selections</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {formData.bhk && (
            <motion.span 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#8B6B4A]/20 border border-[#8B6B4A]/40 rounded-full text-xs text-[#D4AF37] font-medium"
              whileHover={{ scale: 1.05 }}>
               {formData.bhk}
            </motion.span>
          )}
          {formData.rooms?.slice(0, 3).map((r) => (
            <motion.span 
              key={r} 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#8B6B4A]/20 border border-[#8B6B4A]/40 rounded-full text-xs text-[#D4AF37] font-medium"
              whileHover={{ scale: 1.05 }}>
               {r}
            </motion.span>
          ))}
          {formData.style && (
            <motion.span 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#8B6B4A]/20 border border-[#8B6B4A]/40 rounded-full text-xs text-[#D4AF37] font-medium"
              whileHover={{ scale: 1.05 }}>
               {formData.style}
            </motion.span>
          )}
        </div>
      </motion.div>

      {/* Estimated Cost Box */}
      <motion.div 
        className="max-w-2xl mx-auto mb-8 md:mb-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}>
        <div className="bg-gradient-to-br from-[#C8972B]/15 to-[#8B6B4A]/8 border border-[#C8972B]/25 rounded-2xl md:rounded-3xl p-6 md:p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#C8972B] font-semibold mb-3">Budget Preview</p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] mb-1">₹8L – ₹12L</h3>
          <p className="text-xs md:text-sm text-white/60">Estimated interior design investment</p>
        </div>
      </motion.div>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto">
        {/* Contact Info Group */}
        <div className="mb-6 md:mb-8">
          <p className="text-xs uppercase tracking-[.16em] text-[#C8972B] font-semibold mb-4">Contact Information</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {/* Name */}
            <motion.div 
              className="sm:col-span-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}>
              <label className="text-xs text-white/60 font-medium block mb-2">Full Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Your full name" 
                value={formData.name || ""} 
                onChange={handleChange} 
                className={inputClass("name")} 
              />
              {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
            </motion.div>

            {/* Phone */}
            <motion.div 
              className="sm:col-span-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}>
              <label className="text-xs text-white/60 font-medium block mb-2">Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                placeholder="+91 98765 43210" 
                value={formData.phone || ""} 
                onChange={handleChange} 
                className={inputClass("phone")} 
              />
              {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>}
            </motion.div>

            {/* Email */}
            <motion.div 
              className="sm:col-span-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}>
              <label className="text-xs text-white/60 font-medium block mb-2">Email Address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="your.email@example.com" 
                value={formData.email || ""} 
                onChange={handleChange} 
                className={inputClass("email")} 
              />
              {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
            </motion.div>
          </div>
        </div>

        {/* Location Group */}
        <div className="mb-6 md:mb-8 pb-6 md:pb-8 border-b border-white/10">
          <p className="text-xs uppercase tracking-[.16em] text-[#C8972B] font-semibold mb-4">Service Location</p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}>
            <label className="text-xs text-white/60 font-medium block mb-2">PIN Code</label>
            <input 
              type="text" 
              name="pincode" 
              placeholder="e.g., 201301" 
              value={formData.pincode || ""} 
              onChange={handleChange} 
              className={inputClass("pincode")} 
            />
            {errors.pincode && <p className="mt-1.5 text-xs text-red-400">{errors.pincode}</p>}
          </motion.div>
        </div>

        {/* Preferences */}
        <motion.label 
          className="flex items-start gap-3 cursor-pointer mb-8 md:mb-10 group"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}>
          <input 
            type="checkbox" 
            name="whatsappUpdates" 
            checked={formData?.whatsappUpdates ?? true} 
            onChange={handleChange} 
            className="mt-1 w-4 h-4 accent-[#C8972B] flex-shrink-0 cursor-pointer rounded" 
          />
          <span className="text-xs md:text-sm text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
            Send me design tips and exclusive offers on WhatsApp
          </span>
        </motion.label>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}>
          <motion.button 
            onClick={back} 
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto min-w-[140px] md:min-w-[160px] border border-[#D8CFC4] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-lg md:rounded-xl text-sm font-medium transition-all duration-200 hover:border-[#C8972B] hover:bg-[#C8972B]/5 disabled:opacity-50 disabled:cursor-not-allowed">
            ← Back
          </motion.button>
          <motion.button 
            onClick={handleSubmit} 
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto min-w-[200px] md:min-w-[220px] bg-gradient-to-r from-[#8B6B4A] to-[#6F5439] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-lg md:rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-[0_10px_30px_rgba(200,151,43,0.2)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> 
                <span>Sending…</span>
              </>
            ) : (
              <>
                <span>Get My Estimate</span>
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
