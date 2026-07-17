

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";

import DimensionStep from "./DimensionStep";
import ShapeStep from "./ShapeStep";
import PackageStep from "./PackageStep";
import LeadFormStep from "./LeadFormStep";

const STEPS = [
  { id: 1, label: "Dimensions", shortLabel: "Size" },
  { id: 2, label: "Shape", shortLabel: "Layout" },
  { id: 3, label: "Package", shortLabel: "Package" },
  { id: 4, label: "Your Details", shortLabel: "Details" },
];

export default function KitchenCostCalculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    dimension: "",
    shape: "",
    package: "",
    name: "",
    email: "",
    phone: "",
    pincode: "",
  });

  const handleDimensionSelect = (dimension) => {
    setFormData((prev) => ({
      ...prev,
      dimension,
    }));

    if (dimension === "Custom") {
      setStep(4);
    }
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleBack = () => {
    if (formData.dimension === "Custom" && step === 4) {
      setStep(1);
    } else {
      prevStep();
    }
  };

  const progressPercentage = (step / 4) * 100;
  const currentStepData = STEPS[step - 1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F5EBE0]/30 to-white py-6 md:py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h1 className=" mt-10 text-2xl  md:text-4xl font-heading text-[#3D1F0D] text-center mb-3">
            Kitchen Cost
            <br />
            <span className="text-[#C8972B]">Calculator</span>
          </h1>
          <p className="text-gray-600 text-center text-md max-w-2xl mx-auto">
            Get an instant estimate for your dream kitchen in just a few steps
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          {/* Step Circles - Hidden on very small screens */}
          <div className="hidden sm:flex justify-between mb-6">
            {STEPS.map((s, idx) => (
              <motion.div
                key={s.id}
                className="flex flex-col items-center flex-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg transition-all duration-300 mb-2 cursor-pointer relative
                    ${
                      step >= s.id
                        ? "bg-[#C8972B] text-white shadow-lg shadow-[#C8972B]/30"
                        : step > s.id
                        ? "bg-[#C8972B] text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  animate={
                    step === s.id ? { scale: [1, 1.15, 1] } : { scale: 1 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  {step > s.id ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      ✓
                    </motion.span>
                  ) : (
                    s.id
                  )}
                </motion.div>
                <p className="text-xs md:text-sm font-medium text-[#3D1F0D] text-center">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Step Indicator */}
          <div className="sm:hidden flex items-center justify-center gap-2 mb-6">
            <span className="text-sm font-semibold text-[#3D1F0D]">
              Step {step} of 4
            </span>
            <span className="text-[#C8972B]">•</span>
            <span className="text-sm text-gray-600">{currentStepData.shortLabel}</span>
          </div>

          {/* Progress Bar */}
          <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#C8972B] to-[#B8851F] rounded-full shadow-lg shadow-[#C8972B]/40"
              initial={{ width: "0%" }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </div>

          {/* Progress Text */}
          <p className="text-center text-xs text-gray-500 mt-2">
            {Math.round(progressPercentage)}% Complete
          </p>
        </motion.div>

        {/* Main Content Container */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {/* Step Content with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {step === 1 && (
                <DimensionStep
                  selected={formData.dimension}
                  onSelect={handleDimensionSelect}
                  onNext={nextStep}
                />
              )}

              {step === 2 && (
                <ShapeStep
                  selected={formData.shape}
                  onSelect={(shape) =>
                    setFormData((prev) => ({
                      ...prev,
                      shape,
                    }))
                  }
                  onNext={nextStep}
                  onBack={prevStep}
                />
              )}

              {step === 3 && (
                <PackageStep
                  selected={formData.package}
                  onSelect={(pkg) =>
                    setFormData((prev) => ({
                      ...prev,
                      package: pkg,
                    }))
                  }
                  onNext={nextStep}
                  onBack={prevStep}
                />
              )}

              {step === 4 && (
                <LeadFormStep
                  formData={formData}
                  setFormData={setFormData}
                  onBack={handleBack}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Back Button - Only on steps 2+ */}
        <AnimatePresence>
          {step > 1 && (
            <motion.button
              onClick={handleBack}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="mt-6 mx-auto flex items-center gap-2 px-6 py-3 text-gray-700 hover:text-[#3D1F0D] font-body transition-colors duration-300 group"
            >
              <ChevronLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Go Back
            </motion.button>
          )}
        </AnimatePresence>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 md:mt-12 text-center text-sm text-gray-500 px-4"
        >
          <p>
             Questions? <span className="text-[#C8972B]">Chat with us</span> or call our
            design team
          </p>
        </motion.div>
      </div>
    </div>
  );
}