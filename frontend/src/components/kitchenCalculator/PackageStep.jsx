"use client";

import { packages } from "@/data/kitchenCalculatorData";

export default function PackageStep({
  selected,
  onSelect,
  onNext,
  onBack,
}) {
  return (
    <div>
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-[#C8972B] font-medium mb-2">
          Step 3 of 4
        </p>

        <h2 className="text-3xl md:text-4xl font-heading text-[#3D1F0D]">
          Select Your Package
        </h2>

        <p className="text-gray-600 mt-3">
          Choose the package that best suits your requirements
        </p>
      </div>

      {/* Package Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => onSelect(pkg.id)}
            className={`rounded-3xl overflow-hidden border-2 cursor-pointer transition-all duration-300 hover:-translate-y-1
              
              ${
                selected === pkg.id
                  ? "border-gray-400 shadow-xl"
                  : "border-gray-200"
              }`}
          >
            {/* Header */}
            <div
              className={`p-5 text-white
              ${
                pkg.id === "essential"
                  ? "bg-green-700"
                  : pkg.id === "premium"
                  ? "bg-blue-700"
                  : pkg.id === "luxury"
                  ? "bg-[#3D1F0D]"
                  : "bg-black"
              }`}
            >
              <h3 className="text-2xl font-bold">
                {pkg.name}
              </h3>

              <p className="mt-2 text-white/80">
                {pkg.price}
              </p>
            </div>

            {/* Features */}
            <div className="p-6 bg-white">
              <ul className="space-y-3 min-h-[180px]">
                {pkg.features.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-2 text-gray-700"
                  >
                    <span className="text-[#C8972B]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full mt-6 py-3 rounded-full border transition-all
                  
                  ${
                    selected === pkg.id
                      ? "bg-[#C8972B] border-[#C8972B] text-white"
                      : "border-[#3D1F0D] text-[#3D1F0D]"
                  }`}
              >
                {selected === pkg.id
                  ? "Selected"
                  : "Select Package"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-12">
        <button
          onClick={onBack}
          className="px-8 py-3 border border-[#3D1F0D] text-[#3D1F0D] rounded-md"
        >
          Back
        </button>

        <button
          disabled={!selected}
          onClick={onNext}
          className={`px-10 py-3 rounded-md font-medium transition
            ${
              selected
                ? "bg-[#3D1F0D] text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Check, ChevronRight, Zap, Crown, Star } from "lucide-react";
// import { packages } from "@/data/kitchenCalculatorData";

// export default function PackageStep({
//   selected,
//   onSelect,
//   onNext,
//   onBack,
// }) {
//   const [hoveredPackage, setHoveredPackage] = useState(null);

//   // Define package metadata
//   const packageMeta = {
//     essential: {
//       icon: Zap,
//       badge: "Popular",
//       color: "from-emerald-500 to-emerald-600",
//       accentColor: "#10b981",
//       description: "Perfect for those just starting their kitchen journey",
//     },
//     premium: {
//       icon: Star,
//       badge: "Best Value",
//       color: "from-blue-500 to-blue-600",
//       accentColor: "#3b82f6",
//       description: "Our most recommended package for complete transformations",
//     },
//     luxury: {
//       icon: Crown,
//       badge: "Most Popular",
//       color: "from-[#3D1F0D] to-[#2a1408]",
//       accentColor: "#C8972B",
//       description: "Premium finishes and exclusive design elements",
//     },
//     ultimate: {
//       icon: Crown,
//       badge: "Elite",
//       color: "from-amber-600 to-amber-700",
//       accentColor: "#d97706",
//       description: "The ultimate in luxury kitchen design",
//     },
//   };

//   const handleSelectPackage = (packageId) => {
//     onSelect(packageId);
//   };

//   return (
//     <div>
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-14"
//       >
//         <p className="text-sm tracking-widest uppercase text-[#C8972B] font-medium mb-4">
//           Step 3 of 4
//         </p>

//         <h2 className="text-4xl md:text-5xl font-bold text-[#3D1F0D] mb-4">
//           Select Your
//           <br />
//           <span className="text-[#C8972B]">Perfect Package</span>
//         </h2>

//         <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
//           Each package is thoughtfully curated with premium materials and
//           professional design services included
//         </p>
//       </motion.div>

//       {/* Package Cards Grid */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
//       >
//         <AnimatePresence>
//           {packages.map((pkg, idx) => {
//             const meta = packageMeta[pkg.id] || packageMeta.essential;
//             const Icon = meta.icon;
//             const isSelected = selected === pkg.id;
//             const isHovered = hoveredPackage === pkg.id;

//             return (
//               <motion.div
//                 key={pkg.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.1 }}
//                 onMouseEnter={() => setHoveredPackage(pkg.id)}
//                 onMouseLeave={() => setHoveredPackage(null)}
//                 onClick={() => handleSelectPackage(pkg.id)}
//                 className="relative h-full cursor-pointer group"
//               >
//                 {/* Card Container */}
//                 <motion.div
//                   animate={
//                     isSelected
//                       ? { y: 0, scale: 1 }
//                       : isHovered
//                       ? { y: -8 }
//                       : { y: 0, scale: 1 }
//                   }
//                   transition={{ duration: 0.3 }}
//                   className={`h-full rounded-3xl overflow-hidden border-2 transition-all duration-300 flex flex-col
//                     ${
//                       isSelected
//                         ? "border-[#C8972B] shadow-2xl shadow-[#C8972B]/20"
//                         : "border-gray-200 hover:border-[#C8972B]/40 hover:shadow-xl hover:shadow-[#C8972B]/10"
//                     }`}
//                 >
//                   {/* Badge */}
//                   {meta.badge && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: idx * 0.1 + 0.2 }}
//                       className="absolute top-4 right-4 z-10"
//                     >
//                       <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${meta.color}`}>
//                         {meta.badge}
//                       </span>
//                     </motion.div>
//                   )}

//                   {/* Header with Background */}
//                   <div
//                     className={`p-6 md:p-8 text-white bg-gradient-to-br ${meta.color} relative overflow-hidden`}
//                   >
//                     {/* Background glow effect */}
//                     <div className="absolute inset-0 opacity-20">
//                       <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl" />
//                     </div>

//                     <div className="relative z-10">
//                       {/* Icon */}
//                       <motion.div
//                         animate={isSelected ? { scale: 1.1, rotate: 0 } : { scale: 1 }}
//                         transition={{ type: "spring", stiffness: 200 }}
//                         className="mb-4 inline-flex p-3 rounded-2xl bg-white/20 backdrop-blur-sm"
//                       >
//                         <Icon size={28} strokeWidth={2} />
//                       </motion.div>

//                       {/* Package Name */}
//                       <h3 className="text-2xl md:text-3xl font-bold mb-2">
//                         {pkg.name}
//                       </h3>

//                       {/* Price */}
//                       <motion.p
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: idx * 0.1 + 0.3 }}
//                         className="text-3xl font-bold mb-2"
//                       >
//                         {pkg.price}
//                       </motion.p>

//                       {/* Description */}
//                       <p className="text-white/90 text-sm leading-relaxed">
//                         {meta.description}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Features List */}
//                   <div className="flex-1 p-6 md:p-8 bg-white flex flex-col">
//                     <ul className="space-y-4 flex-1">
//                       {pkg.features.map((item, fIdx) => (
//                         <motion.li
//                           key={fIdx}
//                           initial={{ opacity: 0, x: -20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{
//                             delay: idx * 0.1 + fIdx * 0.05 + 0.3,
//                           }}
//                           className="flex gap-3 items-start text-gray-700 text-sm md:text-base leading-relaxed"
//                         >
//                           <motion.span
//                             animate={isSelected ? { scale: 1.2 } : { scale: 1 }}
//                             className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
//                             style={{
//                               backgroundColor: meta.accentColor,
//                             }}
//                           >
//                             <Check size={16} className="text-white" />
//                           </motion.span>
//                           <span>{item}</span>
//                         </motion.li>
//                       ))}
//                     </ul>

//                     {/* Select Button */}
//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       className={`w-full mt-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-base md:text-lg
//                         ${
//                           isSelected
//                             ? "bg-gradient-to-r text-white shadow-lg"
//                             : "border-2 text-[#3D1F0D] hover:text-white hover:border-transparent group-hover:bg-gray-50"
//                         }`}
//                       style={
//                         isSelected
//                           ? {
//                               backgroundImage: `linear-gradient(to right, ${meta.accentColor}, ${meta.accentColor}dd)`,
//                             }
//                           : { borderColor: meta.accentColor }
//                       }
//                     >
//                       {isSelected ? (
//                         <>
//                           <Check size={20} strokeWidth={3} />
//                           Selected
//                         </>
//                       ) : (
//                         <>
//                           Select Package
//                           <ChevronRight
//                             size={18}
//                             className="group-hover:translate-x-1 transition-transform"
//                           />
//                         </>
//                       )}
//                     </motion.button>
//                   </div>

//                   {/* Selection Indicator */}
//                   {isSelected && (
//                     <motion.div
//                       layoutId="selection-highlight"
//                       className="absolute inset-0 rounded-3xl border-2 pointer-events-none"
//                       style={{ borderColor: meta.accentColor }}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                     />
//                   )}
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>
//       </motion.div>

//       {/* Info Box */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6 }}
//         className="max-w-4xl mx-auto p-5 md:p-6 bg-gradient-to-r from-[#F5EBE0] to-transparent rounded-2xl border border-[#C8972B]/10 mb-12"
//       >
//         <p className="text-sm md:text-base text-gray-700 text-center">
//           <span className="font-semibold text-[#3D1F0D]">💡 Tip:</span> All packages include
//           professional design consultation, material sourcing, and installation
//           support
//         </p>
//       </motion.div>

//       {/* Action Buttons */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.7 }}
//         className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto"
//       >
//         <button
//           onClick={onBack}
//           className="px-8 py-4 border-2 border-[#3D1F0D] text-[#3D1F0D] rounded-full font-semibold hover:bg-[#3D1F0D]/5 transition-all duration-300 w-full sm:w-auto"
//         >
//           Back
//         </button>

//         <motion.button
//           whileHover={selected ? { scale: 1.05 } : {}}
//           whileTap={selected ? { scale: 0.95 } : {}}
//           disabled={!selected}
//           onClick={onNext}
//           className={`px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto
//             ${
//               selected
//                 ? "bg-[#3D1F0D] text-white hover:bg-[#2A1408] shadow-lg shadow-[#3D1F0D]/20 hover:shadow-xl hover:shadow-[#3D1F0D]/30"
//                 : "bg-gray-200 text-gray-500 cursor-not-allowed"
//             }`}
//         >
//           Continue to Details
//           <motion.span
//             animate={selected ? { x: [0, 4, 0] } : {}}
//             transition={{ duration: 1.5, repeat: Infinity }}
//           >
//             →
//           </motion.span>
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// }