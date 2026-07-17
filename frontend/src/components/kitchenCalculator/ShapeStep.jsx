// "use client";

// import Image from "next/image";
// import { kitchenShapes } from "@/data/kitchenCalculatorData";

// export default function ShapeStep({
//   selected,
//   onSelect,
//   onNext,
//   onBack,
// }) {
//   const activeShape =
//     kitchenShapes.find(
//       (shape) => shape.id === selected
//     ) || kitchenShapes[0];

//   return (
//     <div>
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <p className="text-[#C8972B] font-medium mb-2">
//           Step 2 of 4
//         </p>

//         <h2 className="text-3xl md:text-4xl font-bold text-[#3D1F0D]">
//           Select Kitchen Shape
//         </h2>

//         <p className="text-gray-600 mt-3">
//           Choose your preferred kitchen layout
//         </p>
//       </div>

//       {/* Shape Layout */}
//       <div className="grid lg:grid-cols-2 gap-10 items-center">
        
//         {/* Left Side */}
//         <div className="space-y-4">
//           {kitchenShapes.map((shape) => (
//             <button
//               key={shape.id}
//               onClick={() => onSelect(shape.id)}
//               className={`w-full p-5 rounded-2xl border-2 transition-all text-left
              
//               ${
//                 selected === shape.id
//                   ? "border-[#C8972B] bg-[#F5EBE0]"
//                   : "border-gray-200 hover:border-[#C8972B]/40"
//               }
//             `}
//             >
//               <div className="flex items-center gap-4">
//                 <div
//                   className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                  
//                   ${
//                     selected === shape.id
//                       ? "border-[#C8972B]"
//                       : "border-gray-300"
//                   }
//                 `}
//                 >
//                   {selected === shape.id && (
//                     <div className="w-3 h-3 rounded-full bg-[#C8972B]" />
//                   )}
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-[#3D1F0D]">
//                     {shape.title}
//                   </h3>

//                   <p className="text-sm text-gray-500 mt-1">
//                     {shape.description}
//                   </p>
//                 </div>
//               </div>
//             </button>
//           ))}
//         </div>

//         {/* Right Side */}
//         <div className="flex justify-center">
//           <div className="bg-[#F5EBE0] rounded-3xl p-8 w-full max-w-md">
//             <Image
//               src={activeShape.image}
//               alt={activeShape.title}
//               width={450}
//               height={450}
//               className="w-full h-auto object-contain"
//             />

//             <h3 className="text-center text-xl font-bold text-[#3D1F0D] mt-6">
//               {activeShape.title}
//             </h3>
//           </div>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-center gap-4 mt-12">
//         <button
//           onClick={onBack}
//           className="px-8 py-3 border border-[#3D1F0D] rounded-full text-[#3D1F0D] font-medium"
//         >
//           Back
//         </button>

//         <button
//           disabled={!selected}
//           onClick={onNext}
//           className={`px-10 py-3 rounded-full font-medium transition
          
//           ${
//             selected
//               ? "bg-[#3D1F0D] text-white"
//               : "bg-gray-300 text-gray-500 cursor-not-allowed"
//           }
//         `}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, Layout, Wind, Zap } from "lucide-react";
import { kitchenShapes } from "@/data/kitchenCalculatorData";

// Shape icons and metadata
const shapeMetadata = {
  linear: { icon: LayoutGrid, color: "#3b82f6" },
  lshaped: { icon: Layout, color: "#f59e0b" },
  ushaped: { icon: Wind, color: "#8b5cf6" },
  galley: { icon: Zap, color: "#ec4899" },
};

export default function ShapeStep({
  selected,
  onSelect,
  onNext,
  onBack,
}) {
  const [imageLoading, setImageLoading] = useState(true);

  const activeShape =
    kitchenShapes.find((shape) => shape.id === selected) ||
    kitchenShapes[0];

  const metadata = shapeMetadata[selected] || shapeMetadata.linear;
  const Icon = metadata.icon;

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <p className="text-sm tracking-widest uppercase text-[#C8972B] font-medium mb-4">
          Step 2 of 4
        </p>

        <h2 className="text-4xl md:text-5xl font-heading text-[#3D1F0D] mb-4">
          Choose Your Kitchen
          <br />
          <span className="text-[#C8972B]">Layout</span>
        </h2>

        <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
          Select the kitchen shape that matches your space and workflow needs
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {/* Left Side - Shape Options */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4 order-2 lg:order-1"
        >
          <p className="text-sm font-heading text-gray-600 uppercase tracking-wide mb-6">
            Available Layouts
          </p>

          <AnimatePresence mode="popLayout">
            {kitchenShapes.map((shape, idx) => {
              const shapeIcon = shapeMetadata[shape.id];
              const ShapeIcon = shapeIcon?.icon || LayoutGrid;
              const isSelected = selected === shape.id;

              return (
                <motion.button
                  key={shape.id}
                  onClick={() => onSelect(shape.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left overflow-hidden group
                    ${
                      isSelected
                        ? "border-[#C8972B] bg-[#F5EBE0]"
                        : "border-gray-200 bg-white hover:border-[#C8972B]/40"
                    }`}
                >
                  {/* Background glow on select */}
                  {isSelected && (
                    <motion.div
                      layoutId="shape-glow"
                      className="absolute inset-0 bg-gradient-to-r from-[#C8972B]/10 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}

                  <div className="relative z-10 flex items-start gap-4">
                    {/* Radio Circle */}
                    <motion.div
                      animate={isSelected ? { scale: 1.2 } : { scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className={`flex-shrink-0 w-4 h-4 rounded-full border-2 flex items-center justify-center mt-1
                        ${
                          isSelected
                            ? "border-[#C8972B]"
                            : "border-gray-300 group-hover:border-[#C8972B]/60"
                        }`}
                    >
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                          }}
                          className="w-3 h-3 rounded-full bg-[#C8972B]"
                        />
                      )}
                    </motion.div>

                    {/* Icon and Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <motion.div
                          animate={
                            isSelected
                              ? { rotate: 360, scale: 1.1 }
                              : { rotate: 0, scale: 1 }
                          }
                          transition={{ duration: 0.4 }}
                          className="flex-shrink-0 p-2 rounded-lg"
                          style={{
                            backgroundColor:
                              shapeIcon?.color + "20",
                          }}
                        >
                          <ShapeIcon
                            size={16}
                            strokeWidth={2}
                            style={{
                              color: shapeIcon?.color || "#3D1F0D",
                            }}
                          />
                        </motion.div>

                        <h3 className="font-heading text-nowrap text-[#3D1F0D] text-[11px] lg:text[14px]">
                          {shape.title}
                        </h3>
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {shape.description}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    {!isSelected && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="flex-shrink-0 text-[#C8972B]"
                      >
                        →
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Right Side - Image Preview */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col justify-center order-1 lg:order-2"
        >
          {/* Image Container */}
          <div className="sticky top-20 lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeShape.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-br from-[#F5EBE0] to-[#F5EBE0]/50 rounded-3xl p-8 md:p-10 border border-[#C8972B]/10 shadow-lg shadow-[#C8972B]/5"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-square flex items-center justify-center mb-8 overflow-hidden rounded-2xl">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: imageLoading ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#C8972B]/10 to-transparent"
                  />

                  <Image
                    src={activeShape.image}
                    alt={activeShape.title}
                    width={450}
                    height={450}
                    priority
                    onLoadingComplete={() => setImageLoading(false)}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Shape Info */}
                <div className="space-y-2 -mt-16">
                  <div className="flex items-center gap-3 pb-4 border-b border-[#C8972B]/20">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                      className="flex-shrink-0 p-2.5 rounded-lg"
                      style={{
                        backgroundColor:
                         "#3D1F0D"  + "20",
                      }}
                    >
                      <Icon
                        size={24}
                        strokeWidth={2}
                        style={{
                          color:  "#3D1F0D",
                        }}
                      />
                    </motion.div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#3D1F0D]">
                        {activeShape.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Kitchen Layout
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    {[
                      {
                        label: "Best For",
                        value: activeShape.bestFor || "Various spaces",
                      },
                      {
                        label: "Work Triangle",
                        value: activeShape.workTriangle || "Optimized",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-white/60 backdrop-blur-sm"
                      >
                        <p className="text-xs font-body uppercase tracking-wide text-gray-600 mb-1">
                          {item.label}
                        </p>
                        <p className="text-sm font-body text-[#3D1F0D]">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Image Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center text-sm text-gray-600 mt-6 lg:hidden"
            >
              Scroll down to see action buttons
            </motion.p>
          </div>
        </motion.div>
      </div>

      
      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mt-12"
      >
        <button
          onClick={onBack}
          className="px-8 py-3 border-2 border-[#3D1F0D] text-[#3D1F0D] rounded-md font-body hover:bg-[#3D1F0D]/5 transition-all duration-300 w-full sm:w-auto"
        >
          Back
        </button>

        <motion.button
          whileHover={selected ? { scale: 1.05 } : {}}
          whileTap={selected ? { scale: 0.95 } : {}}
          disabled={!selected}
          onClick={onNext}
          className={`px-12 py-4 rounded-md font-body text-nowrap text-md transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto
            ${
              selected
                ? "bg-[#3D1F0D] text-white hover:bg-[#2A1408] shadow-lg shadow-[#3D1F0D]/20 hover:shadow-xl hover:shadow-[#3D1F0D]/30"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
        >
          Continue to Package
          <motion.span
            animate={selected ? { x: [0, 4, 0] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.button>
      </motion.div>
    </div>
  );
}