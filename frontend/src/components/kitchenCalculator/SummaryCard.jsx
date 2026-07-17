// "use client";

// export default function SummaryCard({ data }) {
//   return (
//     <div className="bg-[#F5EBE0] border border-[#C8972B]/20 rounded-3xl p-6 shadow-sm">
//       <div className="flex items-center justify-between mb-5">
//         <h3 className="text-xl font-bold text-[#3D1F0D]">
//           Kitchen Summary
//         </h3>

//         <span className="bg-[#C8972B] text-white px-3 py-1 rounded-full text-xs font-medium">
//           Selected
//         </span>
//       </div>

//       <div className="space-y-4">
//         {/* Dimension */}
//         <div className="flex justify-between items-center pb-3 border-b border-[#C8972B]/10">
//           <span className="text-gray-500">
//             Kitchen Dimension
//           </span>

//           <span className="font-semibold text-[#3D1F0D]">
//             {data.dimension || "--"}
//           </span>
//         </div>

//         {/* Shape */}
//         <div className="flex justify-between items-center pb-3 border-b border-[#C8972B]/10">
//           <span className="text-gray-500">
//             Kitchen Shape
//           </span>

//           <span className="font-semibold text-[#3D1F0D] capitalize">
//             {data.shape || "--"}
//           </span>
//         </div>

//         {/* Package */}
//         <div className="flex justify-between items-center">
//           <span className="text-gray-500">
//             Package
//           </span>

//           <span className="font-semibold text-[#3D1F0D] capitalize">
//             {data.package || "--"}
//           </span>
//         </div>
//       </div>

//       <div className="mt-6 p-4 bg-white rounded-2xl">
//         <p className="text-sm text-gray-500">
//           Your kitchen configuration has been
//           selected. Submit your details to get a
//           personalized quote from our experts.
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import {
  Ruler,
  Layout,
  Package,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function SummaryCard({ data }) {
  const summaryItems = [
    {
      label: "Kitchen Dimension",
      value: data.dimension || "--",
      icon: Ruler,
      color: "#3b82f6",
    },
    {
      label: "Kitchen Shape",
      value: data.shape || "--",
      icon: Layout,
      color: "#f59e0b",
    },
    {
      label: "Package",
      value: data.package || "--",
      icon: Package,
      color: "#ec4899",
    },
  ];

  const isComplete =
    data.dimension && data.shape && data.package;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden"
    >
      {/* Gradient background effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#C8972B] rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#C8972B] rounded-full blur-3xl opacity-20" />
      </div>

      {/* Card */}
      <div className="relative bg-gradient-to-br from-[#F5EBE0] to-[#F5EBE0]/70 border-2 border-[#C8972B]/20 rounded-3xl p-6 md:p-8 shadow-lg shadow-[#C8972B]/10 backdrop-blur-sm">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-between mb-8 pb-6 border-b-2 border-[#C8972B]/15"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="p-2.5 rounded-xl bg-gradient-to-br from-[#C8972B] to-[#B8851F]"
            >
              <CheckCircle2 size={24} className="text-white" />
            </motion.div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#3D1F0D]">
                Your Kitchen
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Configuration Summary
              </p>
            </div>
          </div>

          <motion.span
            animate={
              isComplete ? { scale: [1, 1.1, 1] } : {}
            }
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
              isComplete
                ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {isComplete ? "✓ Complete" : "⏳ Incomplete"}
          </motion.span>
        </motion.div>

        {/* Summary Items */}
        <div className="space-y-3 mb-8">
          {summaryItems.map((item, idx) => {
            const Icon = item.icon;
            const hasValue =
              item.value && item.value !== "--";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="group relative"
              >
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#C8972B]/10 hover:border-[#C8972B]/30 transition-all duration-300 hover:shadow-md hover:shadow-[#C8972B]/10">
                  {/* Icon */}
                  <motion.div
                    animate={hasValue ? { scale: [1, 1.1, 1] } : {}}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: idx * 0.2,
                    }}
                    className="flex-shrink-0 p-2.5 rounded-lg"
                    style={{
                      backgroundColor: item.color + "20",
                    }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={2}
                      style={{ color: item.color }}
                    />
                  </motion.div>

                  {/* Label & Value */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1">
                      {item.label}
                    </p>
                    <p
                      className={`text-lg font-bold capitalize transition-colors ${
                        hasValue
                          ? "text-[#3D1F0D]"
                          : "text-gray-400"
                      }`}
                    >
                      {item.value}
                    </p>
                  </div>

                  {/* Status Indicator */}
                  {hasValue && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: item.color + "30",
                      }}
                    >
                      <CheckCircle2
                        size={18}
                        strokeWidth={3}
                        style={{ color: item.color }}
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`p-5 md:p-6 rounded-2xl border-2 transition-all ${
            isComplete
              ? "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200"
              : "bg-gradient-to-r from-blue-50 to-blue-50/50 border-blue-200"
          }`}
        >
          <div className="flex gap-3">
            <div className="flex-shrink-0 mt-1">
              {isComplete ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  ✓
                </motion.div>
              ) : (
                <span>💡</span>
              )}
            </div>

            <div className="min-w-0">
              <p
                className={`text-sm leading-relaxed ${
                  isComplete
                    ? "text-green-900 font-medium"
                    : "text-blue-900"
                }`}
              >
                {isComplete ? (
                  <>
                    Great! Your kitchen configuration is
                    complete. Proceed to submit your details
                    and our experts will provide a
                    personalized quote within 24 hours.
                  </>
                ) : (
                  <>
                    Complete all selections (dimension,
                    shape, and package) to proceed to the
                    final step and get your personalized
                    kitchen estimate.
                  </>
                )}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        {!isComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 pt-6 border-t-2 border-[#C8972B]/15"
          >
            <div className="flex gap-2">
              {summaryItems.map((item, idx) => {
                const hasValue =
                  item.value && item.value !== "--";
                return (
                  <motion.div
                    key={idx}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      delay: 0.7 + idx * 0.1,
                      type: "spring",
                    }}
                    className={`h-1.5 flex-1 rounded-full origin-left ${
                      hasValue
                        ? "bg-gradient-to-r from-[#C8972B] to-[#B8851F]"
                        : "bg-gray-300"
                    }`}
                  />
                );
              })}
            </div>
            <p className="text-xs text-gray-600 mt-3 text-center">
              {summaryItems.filter(
                (item) =>
                  item.value && item.value !== "--"
              ).length * 33.33}% Complete
            </p>
          </motion.div>
        )}

        {/* Call to Action - Only show when complete */}
        <AnimatePresence>
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.6 }}
              className="mt-6 pt-6 border-t-2 border-[#C8972B]/15"
            >
              <div className="flex items-center gap-2 text-sm text-[#3D1F0D] font-semibold">
                <span>Ready to proceed?</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}