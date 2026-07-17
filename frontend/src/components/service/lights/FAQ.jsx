// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const faqs = [
//   {
//     question: "What is Light Accent Lighting?",
//     answer:
//       "Accent lighting is used to highlight specific design features such as wall panels, artwork, display units, niches, and decorative elements. It adds depth and creates a luxurious ambiance.",
//   },
//   {
//     question: "What is Profile Lighting?",
//     answer:
//       "Profile lighting uses slim aluminum channels with LED strips to create clean linear illumination. It is commonly used in ceilings, wardrobes, kitchens, and wall designs for a modern look.",
//   },
//   {
//     question: "What is Cove Lighting?",
//     answer:
//       "Cove lighting is indirect lighting installed in false ceilings or wall recesses. It provides a soft glow and enhances the overall atmosphere of a room without causing glare.",
//   },
//   {
//     question: "Where can profile lights be installed?",
//     answer:
//       "Profile lights can be installed in false ceilings, wardrobes, kitchens, TV units, staircases, wall panels, and display shelves to create elegant linear lighting effects.",
//   },
//   {
//     question: "Are LED profile lights energy efficient?",
//     answer:
//       "Yes. LED profile lights consume less power, generate minimal heat, and offer a long lifespan, making them an energy-efficient lighting solution.",
//   },
//   {
//     question: "Can accent and cove lighting be customized?",
//     answer:
//       "Absolutely. Brightness levels, color temperatures, profiles, and lighting layouts can be customized according to your interior design requirements.",
//   },
// ];

// export default function FAQs() {
//   const [open, setOpen] = useState();

//   return (
//     <section className="py-20 md:py-28 bg-[#F7F2EB] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-14">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <p className="uppercase tracking-[0.35em] text-[#C8972B] text-[11px] mb-4">
//             FAQs
//           </p>

//           <h2
//             className=" font-heading text-4xl md:text-5xl lg:text-6xl text-[#2A1506]"
//             // style={{ fontFamily: "'Cormorant Garamond', serif" }}
//           >
//             Frequently Asked
//             <span className="text-[#C8972B]"> Questions</span>
//           </h2>

//           <div className="w-16 h-px bg-[#C8972B] mx-auto mt-6" />
//         </div>

//         {/* FAQ Grid */}
//         <div className="grid lg:grid-cols-2 gap-6">
//           {faqs.map((faq, index) => {
//             const isOpen = open === index;

//             return (
//               <motion.div
//                 key={index}
//                 layout
//                 className="
//                   bg-white
//                   rounded-md
//                   border border-[#C8972B]/15
//                   overflow-hidden
//                   shadow-[0_15px_50px_rgba(0,0,0,0.04)]
//                 "
//               >
//                 <button
//                   onClick={() => setOpen(isOpen ? null : index)}
//                   className="
//                     w-full
//                     flex
//                     items-center
//                     justify-between
//                     gap-6
//                     px-6
//                     md:px-8
//                     py-6
//                     text-left
//                   "
//                 >
//                   <div className="flex items-center gap-5">
//                     <span
//                       className="
//                         text-xl
//                         md:text-md
//                         text-[#C8972B]/30
//                         leading-none
//                       "
//                       style={{
//                         fontFamily: "'Cormorant Garamond', poppins",
//                       }}
//                     >
//                       {String(index + 1).padStart(2, "0")}
//                     </span>

//                     <h5 className="text-[#2A1506] font-body text-sm md:text-sm">
//                       {faq.question}
//                     </h5>
//                   </div>

//                   <motion.div
//                     animate={{
//                       rotate: isOpen ? 180 : 0,
//                     }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <ChevronDown className="text-[#C8972B]" size={22} />
//                   </motion.div>
//                 </button>

//                 <AnimatePresence>
//                   {isOpen && (
//                     <motion.div
//                       initial={{
//                         height: 0,
//                         opacity: 0,
//                       }}
//                       animate={{
//                         height: "auto",
//                         opacity: 1,
//                       }}
//                       exit={{
//                         height: 0,
//                         opacity: 0,
//                       }}
//                       transition={{
//                         duration: 0.35,
//                       }}
//                     >
//                       <div className="px-6 md:px-8 pb-7 md:pb-8">
//                         <div className="w-10 h-px bg-[#C8972B]/40 mb-5" />

//                         <p className="text-[#6E6258] leading-8 text-sm md:text-base">
//                           {faq.answer}
//                         </p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Light Accent Lighting?",
    answer:
      "Accent lighting is used to highlight specific design features such as wall panels, artwork, display units, niches, and decorative elements. It adds depth and creates a luxurious ambiance.",
  },
  {
    question: "What is Profile Lighting?",
    answer:
      "Profile lighting uses slim aluminum channels with LED strips to create clean linear illumination. It is commonly used in ceilings, wardrobes, kitchens, and wall designs for a modern look.",
  },
  {
    question: "What is Cove Lighting?",
    answer:
      "Cove lighting is indirect lighting installed in false ceilings or wall recesses. It provides a soft glow and enhances the overall atmosphere of a room without causing glare.",
  },
  {
    question: "Where can profile lights be installed?",
    answer:
      "Profile lights can be installed in false ceilings, wardrobes, kitchens, TV units, staircases, wall panels, and display shelves to create elegant linear lighting effects.",
  },
  {
    question: "Are LED profile lights energy efficient?",
    answer:
      "Yes. LED profile lights consume less power, generate minimal heat, and offer a long lifespan, making them an energy-efficient lighting solution.",
  },
  {
    question: "Can accent and cove lighting be customized?",
    answer:
      "Absolutely. Brightness levels, color temperatures, profiles, and lighting layouts can be customized according to your interior design requirements.",
  },
];

function FAQItem({ faq, index, openIndex, toggleFAQ }) {
  const isOpen = openIndex === index;

  return (
    <div className="border border-[#C8972B]/15 bg-white overflow-hidden group hover:border-[#C8972B]/40 transition-colors duration-300">
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full flex items-start justify-between p-4 sm:p-5 lg:p-6 text-left gap-3 sm:gap-4"
      >
        {/* Number + Question */}
        <div className="flex items-start gap-3 sm:gap-4 flex-1">
          <span className="text-[#C8972B]/40 text-[10px] sm:text-xs tracking-widest font-light mt-1 flex-shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="font-medium text-[#2A1506] text-sm sm:text-base leading-snug group-hover:text-[#C8972B] transition-colors duration-300">
            {faq.question}
          </span>
        </div>

        {/* Icon */}
        <div
          className={`
            flex-shrink-0
            w-7 h-7
            rounded-full
            border
            flex
            items-center
            justify-center
            transition-all
            duration-300
            mt-0.5
            ${isOpen ? "bg-[#C8972B] border-[#C8972B]" : "border-[#C8972B]/30"}
          `}
        >
          {isOpen ? (
            <Minus size={13} className="text-white" />
          ) : (
            <Plus size={13} className="text-[#C8972B]" />
          )}
        </div>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-48" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-6 pb-5 sm:pb-6 pl-10 sm:pl-14 text-[#6E6258] leading-7 sm:leading-8 text-sm border-t border-[#C8972B]/10 pt-4">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#F7F2EB]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-14">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#C8972B] text-[11px] sm:text-xs mb-4">
            Frequently Asked Questions
          </p>

          <h2 className="font-[Playfair,serif] text-[36px] sm:text-[44px] md:text-5xl text-[#2A1506] leading-tight">
            Got Questions?
          </h2>

          <div className="w-12 h-px bg-[#C8972B] mx-auto mt-5 md:mt-6 mb-5 md:mb-6" />

          
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {leftFaqs.map((faq) => {
              const originalIndex = faqs.indexOf(faq);

              return (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  index={originalIndex}
                  openIndex={openIndex}
                  toggleFAQ={toggleFAQ}
                />
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightFaqs.map((faq) => {
              const originalIndex = faqs.indexOf(faq);

              return (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  index={originalIndex}
                  openIndex={openIndex}
                  toggleFAQ={toggleFAQ}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


