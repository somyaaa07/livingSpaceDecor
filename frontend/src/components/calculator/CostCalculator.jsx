

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Step1BHK from "./Step1BHK";
// import Step2Rooms from "./Step2Rooms";
// import Step3Style from "./Step3Style";
// import Step4Result from "./Step4Result";

// export default function CostCalculator() {
//   const [step, setStep] = useState(1);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     bhk: "",
//     rooms: [],
//     style: "",
//     name: "",
//     phone: "",
//     email: "",
//     pincode: "",
//     whatsappUpdates: true,
//   });

//   // ✅ SUBMIT → sends all formData to PHP backend
//   const handleSubmit = async () => {
//     setIsSubmitting(true);
//     try {
//       const res = await fetch("https://yourdomain.com/api/send-quote.php", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       if (data.success) {
//         setSubmitted(true);
//       } else {
//         alert("Something went wrong. Please try again.");
//       }
//     } catch (err) {
//       alert("Network error. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const stepVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
//     exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
//   };

//   return (
//     <section className="relative min-h-screen py-12 md:py-24 overflow-hidden">
//       <div className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/lsd_images/52.png')" }} />
//       <div className="absolute inset-0 -z-20 bg-black/60" />

//       <div className="absolute inset-0 pointer-events-none -z-10">
//         <motion.div className="absolute top-32 left-10 w-96 h-96 bg-[#C8972B]/10 rounded-full blur-3xl"
//           animate={{ y: [0, 30, 0], x: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
//         <motion.div className="absolute bottom-32 right-10 w-80 h-80 bg-[#8B6B4A]/8 rounded-full blur-3xl"
//           animate={{ y: [0, -30, 0], x: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
//       </div>

//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Hero */}
//         <motion.div className="text-center mb-16 md:mb-20"
//           initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
//           <motion.div className="inline-flex items-center justify-center gap-2 mb-6"
//             initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
//             <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
//             <p className="text-[10px] uppercase tracking-[.3em] text-[#D4AF37] font-semibold">Smart Estimation Tool</p>
//             <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
//           </motion.div>
//           <h2 className="font-[Cormorant_Garamond,serif] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-6">
//             Plan Your Interior<br />
//             <span className="block text-[#D4AF37]">Investment Today</span>
//           </h2>
//           <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
//             Answer just 4 questions and receive a personalized budget estimate tailored to your home, preferences, and style.
//           </p>
//         </motion.div>

//         {/* Calculator Container */}
//         <motion.div className="relative"
//           initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}>
//           <div className="absolute -inset-1 bg-gradient-to-r from-[#C8972B]/0 via-[#C8972B]/20 to-[#C8972B]/0 rounded-[40px] blur-xl opacity-30" />

//           <div className="relative bg-transparent backdrop-blur-xl rounded-[28px] md:rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.35)] border border-white/20 overflow-hidden">
//             <div className="h-1 bg-gradient-to-r from-[#C8972B] via-[#C8972B]/60 to-transparent" />

//             <div className="p-8 sm:p-10 md:p-12 lg:p-14">
//               {/* Step Header */}
//               {!submitted && (
//                 <motion.div key={`header-${step}`} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4 }} className="mb-10 flex items-start gap-6">
//                   <motion.div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#C8972B] to-[#A0762E] flex items-center justify-center shadow-lg"
//                     whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
//                     <span className="font-[Cormorant_Garamond,serif] text-2xl font-semibold text-white">{step}</span>
//                   </motion.div>
//                   <div className="flex-1">
//                     <p className="text-[11px] uppercase tracking-[.16em] text-[#C8972B] font-semibold mb-2">Step {step} / 4</p>
//                     <h3 className="font-[Cormorant_Garamond,serif] text-3xl md:text-4xl font-medium text-[#f9f3ee]">
//                       {step === 1 && "What's your home type?"}
//                       {step === 2 && "Select your rooms"}
//                       {step === 3 && "Choose your design style"}
//                       {step === 4 && "Your budget is ready!"}
//                     </h3>
//                   </div>
//                 </motion.div>
//               )}

//               {/* Steps */}
//               <AnimatePresence mode="wait">
//                 <motion.div key={step} variants={stepVariants} initial="hidden" animate="visible" exit="exit"
//                   className="min-h-[380px] md:min-h-[450px]">
//                   {step === 1 && <Step1BHK formData={formData} setFormData={setFormData} next={() => setStep(2)} />}
//                   {step === 2 && <Step2Rooms formData={formData} setFormData={setFormData} next={() => setStep(3)} back={() => setStep(1)} />}
//                   {step === 3 && <Step3Style formData={formData} setFormData={setFormData} next={() => setStep(4)} back={() => setStep(2)} />}
//                   {step === 4 && (
//                     <Step4Result
//                       formData={formData}
//                       setFormData={setFormData}
//                       back={() => setStep(3)}
//                       onSubmit={handleSubmit}
//                       isSubmitting={isSubmitting}
//                       submitted={submitted}
//                     />
//                   )}
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             <div className="h-1 bg-gradient-to-l from-[#C8972B] via-[#C8972B]/60 to-transparent" />
//           </div>
//         </motion.div>

//         {/* Info Banner */}
//         {!submitted && (
//           <motion.div className="mt-12 mx-auto max-w-2xl"
//             initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
//             <div className="p-6 rounded-2xl bg-gradient-to-r from-[#C8972B]/8 to-[#8B6B4A]/8 border border-[#C8972B]/20 backdrop-blur-sm">
//               <div className="flex gap-4">
//                 <div className="flex-shrink-0 mt-1">
//                   <div className="w-6 h-6 rounded-full bg-[#C8972B] flex items-center justify-center text-white text-xs font-semibold">✓</div>
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium text-white mb-1">What to expect next?</p>
//                   <p className="text-xs text-white/60 leading-relaxed">
//                     Your estimate will be delivered instantly. An interior design specialist will reach out within 24 hours to discuss your project in detail.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }


"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Step1BHK from "./Step1BHK";
import Step2Rooms from "./Step2Rooms";
import Step3Style from "./Step3Style";
import Step4Result from "./Step4Result";

export default function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("https://livingspacedecor.in/send-quote.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
  };

  const progressSteps = [
    { num: 1, label: "Home Type" },
    { num: 2, label: "Rooms" },
    { num: 3, label: "Style" },
    { num: 4, label: "Details" },
  ];

  return (
    <section className="relative min-h-screen py-12 md:py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/lsd_images/52.png')" }} />
      <div className="absolute inset-0 -z-20 bg-black/65" />

      {/* Animated Orbs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div 
          className="absolute top-20 left-5 sm:left-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#C8972B]/12 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, 25, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
        />
        <motion.div 
          className="absolute bottom-20 right-5 sm:right-10 w-64 sm:w-80 h-64 sm:h-80 bg-[#8B6B4A]/10 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -25, 0] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}>
          <motion.div 
            className="inline-flex items-center justify-center gap-2 mb-5"
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.2 }}>
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <p className="text-[9px] md:text-[10px] uppercase tracking-[.3em] text-[#D4AF37] font-semibold">Intelligent Budget Planner</p>
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          </motion.div>
          <h2 className="font-[Cormorant_Garamond,serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.15] mb-4 md:mb-5">
            Design Your Dream Interior<br />
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E8B84A]">with Confidence</span>
          </h2>
          <p className="text-sm md:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            4 simple questions. One personalized estimate. Discover what your perfect space costs.
          </p>
        </motion.div>

        {/* Progress Indicator - Only show if not submitted */}
        {!submitted && (
          <motion.div 
            className="flex justify-center mb-10 md:mb-14"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }}>
            <div className="flex items-center gap-1.5 sm:gap-3">
              {progressSteps.map((s, idx) => (
                <div key={s.num} className="flex items-center gap-1.5 sm:gap-3">
                  <motion.div
                    className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                      step >= s.num
                        ? "bg-gradient-to-br from-[#C8972B] to-[#A0762E] text-white shadow-lg"
                        : "bg-white/10 text-white/40 border border-white/20"
                    }`}
                    animate={step === s.num ? { scale: 1.05 } : { scale: 1 }}
                  >
                    {step > s.num ? "✓" : s.num}
                  </motion.div>
                  <span className={`hidden sm:inline text-xs font-medium transition-colors ${
                    step >= s.num ? "text-white" : "text-white/40"
                  }`}>
                    {s.label}
                  </span>
                  {idx < progressSteps.length - 1 && (
                    <div className={`hidden sm:block w-8 h-0.5 mx-1 transition-colors ${
                      step > s.num ? "bg-[#C8972B]" : "bg-white/20"
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Calculator Container */}
        <motion.div 
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.2 }} 
          viewport={{ once: true }}>
          {/* Gradient Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#C8972B]/20 via-[#C8972B]/30 to-[#C8972B]/20 rounded-[32px] blur-lg opacity-40" />
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C8972B]/10 via-transparent to-[#C8972B]/10 rounded-[32px]" />

          <div className="relative bg-white/8 backdrop-blur-xl rounded-[28px] md:rounded-[32px] shadow-[0_25px_75px_rgba(0,0,0,0.4)] border border-white/20 overflow-hidden">
            {/* Top Accent Line */}
            <div className="h-1 bg-gradient-to-r from-transparent via-[#C8972B] to-transparent" />

            {/* Content */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              {/* Step Header */}
              {!submitted && (
                <motion.div 
                  key={`header-${step}`} 
                  initial={{ opacity: 0, x: -30 }} 
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }} 
                  className="mb-8 md:mb-10">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-xs uppercase tracking-[.2em] text-[#C8972B] font-semibold">
                      Step {step} of 4
                    </span>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-[#C8972B]/50 to-transparent rounded-full" />
                  </div>
                  <h3 className="font-[Cormorant_Garamond,serif] text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-tight">
                    {step === 1 && "What type of home are you designing?"}
                    {step === 2 && "Which rooms should we focus on?"}
                    {step === 3 && "What's your design style?"}
                    {step === 4 && "Ready for your personalized quote"}
                  </h3>
                </motion.div>
              )}

              {/* Steps Content */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={step} 
                  variants={stepVariants} 
                  initial="hidden" 
                  animate="visible" 
                  exit="exit"
                  className="min-h-[360px] sm:min-h-[400px] md:min-h-[450px]">
                  {step === 1 && <Step1BHK formData={formData} setFormData={setFormData} next={() => setStep(2)} />}
                  {step === 2 && <Step2Rooms formData={formData} setFormData={setFormData} next={() => setStep(3)} back={() => setStep(1)} />}
                  {step === 3 && <Step3Style formData={formData} setFormData={setFormData} next={() => setStep(4)} back={() => setStep(2)} />}
                  {step === 4 && (
                    <Step4Result
                      formData={formData}
                      setFormData={setFormData}
                      back={() => setStep(3)}
                      onSubmit={handleSubmit}
                      isSubmitting={isSubmitting}
                      submitted={submitted}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Accent Line */}
            <div className="h-1 bg-gradient-to-l from-transparent via-[#C8972B] to-transparent" />
          </div>
        </motion.div>

        {/* Info Banner */}
        {!submitted && (
          <motion.div 
            className="mt-10 md:mt-12 mx-auto max-w-2xl px-4"
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }} 
            viewport={{ once: true }}>
            <div className="p-5 md:p-6 rounded-2xl bg-gradient-to-r from-[#C8972B]/8 to-[#8B6B4A]/8 border border-[#C8972B]/25 backdrop-blur-sm">
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#C8972B] flex items-center justify-center text-white text-xs font-bold">✓</div>
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold text-white mb-1">What happens next?</p>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Get your personalized estimate instantly. Our design specialist will contact you within 24 hours to discuss your vision and refine the budget.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
