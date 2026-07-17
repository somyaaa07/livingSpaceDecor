// "use client";

// import { dimensions } from "@/data/kitchenCalculatorData";

// export default function DimensionStep({
//   selected,
//   onSelect,
//   onNext,
// }) {
//   const handleNext = () => {
//     if (!selected) return;
//     onNext();
//   };

//   return (
//     <div>
//       <div className="text-center mb-10">
//         <p className="text-[#C8972B] font-medium mb-2">
//           Step 1 of 4
//         </p>

//         <h2 className="text-3xl md:text-4xl font-bold text-[#3D1F0D]">
//           Select Kitchen Dimension
//         </h2>

//         <p className="text-gray-600 mt-3">
//           Choose the nearest size of your kitchen
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
//         {dimensions.map((dimension) => (
//           <button
//             key={dimension}
//             onClick={() => onSelect(dimension)}
//             className={`group relative p-5 rounded-2xl border-2 transition-all duration-300 text-left
              
//               ${
//                 selected === dimension
//                   ? "border-[#C8972B] bg-[#F5EBE0]"
//                   : "border-gray-200 hover:border-[#C8972B]/50"
//               }`}
//           >
//             <div className="flex items-center gap-4">
//               {/* Radio Circle */}
//               <div
//                 className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                  
//                   ${
//                     selected === dimension
//                       ? "border-[#C8972B]"
//                       : "border-gray-300"
//                   }`}
//               >
//                 {selected === dimension && (
//                   <div className="w-3 h-3 rounded-full bg-[#C8972B]" />
//                 )}
//               </div>

//               <span className="font-medium text-lg text-[#3D1F0D]">
//                 {dimension}
//               </span>
//             </div>
//           </button>
//         ))}
//       </div>

      

//       {/* Next Button */}
//       <div className="flex justify-center mt-12">
//         <button
//           onClick={handleNext}
//           disabled={!selected}
//           className={`px-10 py-4 rounded-full font-semibold transition-all duration-300
//             ${
//               selected
//                 ? "bg-[#3D1F0D] text-white hover:bg-[#2a1408]"
//                 : "bg-gray-200 text-gray-500 cursor-not-allowed"
//             }`}
//         >
//           Next Step →
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dimensions } from "@/data/kitchenCalculatorData";
import { Home, Sofa, Building2 } from "lucide-react";

// Map dimensions to icons and specs
const dimensionDetails = {
  "8x10": { icon: Home, sqft: "80 sq ft", label: "Compact" },
  "10x12": { icon: Sofa, sqft: "120 sq ft", label: "Standard" },
  "12x15": { icon: Building2, sqft: "180 sq ft", label: "Spacious" },
  "15x18": { icon: Building2, sqft: "270 sq ft", label: "Grand" },
};

export default function DimensionStep({ selected, onSelect, onNext }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSelect = (dimension) => {
    setIsAnimating(true);
    onSelect(dimension);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNext = () => {
    if (!selected) return;
    onNext();
  };

  return (
    <div className="relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8972B]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === 0
                      ? "w-8 bg-[#C8972B]"
                      : "w-2 bg-gray-300"
                  }`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </div>
          </div>

          <p className="text-sm tracking-widest uppercase text-[#C8972B] font-medium mb-4">
            Step 1 of 4
          </p>

          <h2 className="text-3xl md:text-4xl font-heading text-[#3D1F0D] mb-4 leading-tight">
            What's Your
            <br />
            <span className="text-[#C8972B]">Kitchen Size?</span>
          </h2>

          <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
            Select the dimensions that best match your kitchen to get accurate
            estimates for your dream space.
          </p>
        </motion.div>

        {/* Dimension Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <AnimatePresence>
            {dimensions.map((dimension, idx) => {
              const details = dimensionDetails[dimension] || {
                icon: Home,
                sqft: "Custom",
                label: "Custom",
              };
              const Icon = details.icon;
              const isSelected = selected === dimension;

              return (
                <motion.button
                  key={dimension}
                  onClick={() => handleSelect(dimension)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ translateY: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative p-8 rounded-3xl border-2 transition-all duration-300 text-left overflow-hidden
                    ${
                      isSelected
                        ? "border-[#C8972B] bg-[#F5EBE0] shadow-lg shadow-[#C8972B]/10"
                        : "border-gray-200 hover:border-[#C8972B]/40 bg-white hover:shadow-md hover:shadow-[#C8972B]/5"
                    }`}
                >
                  {/* Background glow on select */}
                  {isSelected && (
                    <motion.div
                      layoutId="selection-glow"
                      className="absolute inset-0 bg-gradient-to-br from-[#C8972B]/10 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  <div className="relative z-10 flex flex-col items-start gap-5">
                    {/* Icon and Selection Radio */}
                    <div className="flex items-start justify-between w-full">
                      <motion.div
                        animate={isSelected ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className={`p-3.5 rounded-2xl transition-all duration-300 ${
                          isSelected
                            ? "bg-[#C8972B] text-white shadow-md shadow-[#C8972B]/30"
                            : "bg-gray-100 text-gray-600 group-hover:bg-[#F5EBE0]"
                        }`}
                      >
                        <Icon size={18} strokeWidth={1} />
                      </motion.div>

                      {/* Custom Radio Circle */}
                      <motion.div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                          isSelected
                            ? "border-[#C8972B] bg-[#C8972B]"
                            : "border-gray-300 group-hover:border-[#C8972B]/40"
                        }`}
                        animate={isSelected ? { scale: 1.2 } : { scale: 1 }}
                      >
                        {isSelected && (
                          <motion.div
                            className="w-2 h-2 rounded-full bg-white"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          />
                        )}
                      </motion.div>
                    </div>

                    {/* Dimension Info */}
                    <div className="flex flex-col gap-2 w-full">
                      <span
                        className={`text-2xl font-bold transition-colors duration-300 ${
                          isSelected ? "text-[#3D1F0D]" : "text-[#3D1F0D]"
                        }`}
                      >
                        {dimension}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-[#C8972B]">
                          {details.label}
                        </span>
                        <span className="text-sm text-gray-500">
                          • {details.sqft}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto mb-12 p-5 bg-gradient-to-r from-[#F5EBE0] to-transparent rounded-2xl border border-[#C8972B]/10"
        >
          <p className="text-sm text-gray-700 text-center">
           <span className="font-medium">Tip:</span> These dimensions represent the
            total kitchen floor space. Final cost will depend on your selections in the
            next steps.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto"
        >
          <button
            onClick={handleNext}
            disabled={!selected}
            className={`flex-1 sm:flex-none px-6 py-4 rounded-md font-body text-md transition-all duration-300 relative group
              ${
                selected
                  ? "bg-[#3D1F0D] text-white hover:bg-[#2a1408] shadow-lg shadow-[#3D1F0D]/20 hover:shadow-xl hover:shadow-[#3D1F0D]/30"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
          >
            <span className="relative  text-nowrap z-10 flex items-center justify-center gap-2">
              Continue to Materials
              <motion.span
                animate={selected ? { x: [0, 4, 0] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}