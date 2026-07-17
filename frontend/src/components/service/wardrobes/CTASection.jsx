// "use client";

// import { ArrowRight, Phone, CheckCircle, Play, Sparkles } from "lucide-react";
// import { useState } from "react";

// export default function WardrobeCTA() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePosition({
//       x: (e.clientX - rect.left) / rect.width,
//       y: (e.clientY - rect.top) / rect.height,
//     });
//   };

//   return (
//     <section className="relative bg-gradient-to-b from-[#F5EBE0] to-[#F0E6D8] py-24 overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-[#B8851F]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C8972B]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left Content - Unique Design */}
//           <div className="space-y-8">
//             {/* Decorative line */}
//             <div className="w-16 h-1 bg-gradient-to-r from-[#B8851F] to-transparent"></div>

//             {/* Label with icon */}
//             <div className="inline-flex items-center gap-2 rounded-full border border-[#B8851F]/30 bg-[#B8851F]/10 px-4 py-2 text-sm font-medium text-[#B8851F] w-fit">
//               <Sparkles size={16} />
//               Premium Design Service
//             </div>

//             {/* Main Heading */}
//             <div>
//               <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#3D1F0D] leading-tight">
//                 Your Dream
//                 <br />
//                 <span className="text-[#B8851F] relative inline-block">
//                   Wardrobe
//                   <svg
//                     className="absolute bottom-0 left-0 w-full"
//                     viewBox="0 0 200 20"
//                     preserveAspectRatio="none"
//                   >
//                     <path
//                       d="M 0 15 Q 50 5, 100 15 T 200 15"
//                       stroke="#B8851F"
//                       strokeWidth="2"
//                       fill="none"
//                       opacity="0.5"
//                     />
//                   </svg>
//                 </span>
//               </h2>
//             </div>

//             {/* Description */}
//             <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
//               Transform your space with bespoke wardrobes crafted to perfection.
//               Our expert designers create custom storage solutions that blend
//               functionality with luxury aesthetics.
//             </p>

//             {/* Features Grid */}
//             <div className="grid sm:grid-cols-2 gap-4 pt-4">
//               {[
//                 "Free 3D Design",
//                 "Premium Materials",
//                 "Expert Installation",
//                 "Lifetime Support",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-center gap-3 p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-[#B8851F]/10 hover:border-[#B8851F]/30 transition"
//                 >
//                   <div className="w-6 h-6 rounded-full bg-[#B8851F]/20 flex items-center justify-center">
//                     <CheckCircle size={16} className="text-[#B8851F]" />
//                   </div>
//                   <span className="text-sm md:text-base text-[#3D1F0D] font-medium">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#B8851F] text-white font-semibold overflow-hidden">
//                 <div className="absolute inset-0 bg-[#3D1F0D] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
//                 <span className="relative flex items-center gap-2">
//                   Schedule Consultation
//                   <ArrowRight
//                     size={18}
//                     className="group-hover:translate-x-1 transition-transform"
//                   />
//                 </span>
//               </button>

//               <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-[#B8851F] text-[#B8851F] font-semibold hover:bg-[#B8851F]/10 transition">
//                 <Phone size={18} />
//                 <span>+91 98XXX XXXXX</span>
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#B8851F]/20">
//               {[
//                 { num: "500+", text: "Projects" },
//                 { num: "10Y", text: "Warranty" },
//                 { num: "45", text: "Days" },
//               ].map((stat) => (
//                 <div key={stat.text} className="text-center">
//                   <h4 className="text-2xl md:text-3xl font-bold text-[#B8851F]">
//                     {stat.num}
//                   </h4>
//                   <p className="text-xs md:text-sm text-gray-600 mt-1">
//                     {stat.text}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Side - Unique Video Frame */}
//           <div
//             className="relative h-[500px] lg:h-[600px] perspective"
//             onMouseMove={handleMouseMove}
//           >
//             {/* Floating decorative shapes */}
//             <div className="absolute -top-12 -right-12 w-32 h-32 border-2 border-[#B8851F]/20 rounded-lg rotate-12 opacity-50"></div>
//             <div className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-[#B8851F]/20 rounded-full opacity-50"></div>

//             {/* Main Video Container */}
//             <div className="relative h-full w-full group">
//               {/* Gradient Background */}
//               <div className="absolute inset-0 bg-gradient-to-br from-[#B8851F]/10 to-transparent rounded-3xl"></div>

//               {/* Video Frame - 3D Tilt Effect */}
//               <div
//                 className="relative h-full rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 ease-out"
//                 style={{
//                   transform: `perspective(1000px) rotateX(${
//                     (mousePosition.y - 0.5) * 5
//                   }deg) rotateY(${(mousePosition.x - 0.5) * -5}deg)`,
//                 }}
//               >
//                 {/* Video Content */}
//                 <div className="absolute inset-0 bg-black rounded-3xl overflow-hidden">
//                   <video
//                     className="w-full h-full object-cover"
//                     poster="https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg"
//                   >
//                     <source
//                       src="https://videos.pexels.com/video-files/3573382/3573382-sd_640_360_25fps.mp4"
//                       type="video/mp4"
//                     />
//                   </video>

//                   {/* Advanced Play Button */}
//                   {!isPlaying && (
//                     <div
//                       className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm flex items-center justify-center cursor-pointer group-hover:from-black/50 group-hover:to-black/70 transition-all duration-300"
//                       onClick={() => setIsPlaying(true)}
//                     >
//                       {/* Animated Rings */}
//                       <div className="relative">
//                         <div className="absolute inset-0 rounded-full border-2 border-[#B8851F]/30 animate-pulse scale-150"></div>
//                         <div className="absolute inset-0 rounded-full border-2 border-[#B8851F]/60 animate-ping scale-100 opacity-75"></div>

//                         {/* Play Button */}
//                         <div className="relative w-20 h-20 bg-gradient-to-br from-[#B8851F] to-[#C8972B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                           <Play
//                             size={40}
//                             className="text-white fill-white ml-2"
//                           />
//                         </div>
//                       </div>

//                       {/* Click Text */}
//                       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
//                         Click to Play
//                       </div>
//                     </div>
//                   )}

//                   {/* Close Button */}
//                   {isPlaying && (
//                     <button
//                       onClick={() => setIsPlaying(false)}
//                       className="absolute top-6 right-6 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
//                     >
//                       ✕
//                     </button>
//                   )}
//                 </div>

//                 {/* Premium Border */}
//                 <div className="absolute inset-0 rounded-3xl border-2 border-[#B8851F]/40 group-hover:border-[#B8851F]/60 transition-colors duration-300 pointer-events-none"></div>
//               </div>

//               {/* Floating Info Card */}
//               <div className="absolute -bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-[#B8851F]/20">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h4 className="text-[#3D1F0D] font-semibold text-lg">
//                       Premium Wardrobes
//                     </h4>
//                     <p className="text-gray-600 text-sm">
//                       Watch our latest designs
//                     </p>
//                   </div>
//                   <div className="text-[#B8851F] text-2xl font-bold">▶</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection({ data }) {
  return (
    <section className="bg-[#F5EBE0] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-[#B8851F] uppercase tracking-[4px] text-xs font-medium">
              Ready To Transform Your Space?
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl font-serif text-[#3D1F0D] leading-tight">
              Let's Create A Home That Reflects Your Lifestyle
            </h2>

            <p className="mt-6 text-sm md:text-base text-[#3D1F0D]/70 leading-relaxed max-w-lg">
              From concept to completion, our expert designers craft
              personalized interiors that combine elegance, functionality, and
              timeless beauty.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#B8851F] text-white text-sm md:text-base px-7 py-3 inline-flex items-center gap-2 hover:opacity-85 transition duration-300"
              >
                Book Consultation
                <ArrowRight size={16} />
              </Link>

              {/* <Link
                href="/portfolio"
                className="border border-[#3D1F0D] text-[#3D1F0D] text-sm md:text-base px-7 py-3 hover:bg-white/10 transition duration-300"
              >
                View Portfolio
              </Link> */}
            </div>
          </div>

          {/* Right Video with Frame */}
          <div className="relative">
            {/* Decorative frame background */}
            <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-[#B8851F]/20 to-transparent rounded-lg" />

            {/* Frame border */}
            <div className="relative bg-[#3D1F0D] p-4 md:p-6 border border-[#B8851F]/30">
              <div className="relative overflow-hidden bg-black aspect-video md:aspect-auto md:h-[450px]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src={data?.ctaVideo || "/wardrobe_video.mp4"}
                    type="video/mp4"
                  />
                </video>

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>

            {/* Accent corner elements */}
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#B8851F]/40" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#B8851F]/40" />
          </div>
        </div>
      </div>
    </section>
  );
}

