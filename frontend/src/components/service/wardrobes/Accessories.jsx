"use client";
import Image from "next/image";

import { wardrobeAccessories, wardrobeFeatures } from "@/data/wardrobeData";

export default function WardrobeAccessories() {
  return (
    <section className="bg-[#F5EBE0] py-16">
      <div className="container mx-auto px-4">
        {/* Premium Accessories */}
        <div className="rounded-3xl bg-white border border-[#e8dfd5] p-8">
          <h2 className="text-center text-3xl font-serif text-[#3D1F0D] mb-8">
            Premium Accessories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {wardrobeAccessories.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-[#ece4da] p-5 text-center hover:shadow-md transition"
              >
                <div className="mb-3 flex justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                </div>

                <h3 className="text-sm font-medium text-[#3D1F0D]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose */}
        <div className="mt-6 rounded-3xl bg-white border border-[#e8dfd5] p-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-center">
            <div>
              <h2 className="text-3xl font-serif text-[#3D1F0D]">
                Why Choose
                <br />
                Our Wardrobes?
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              {wardrobeFeatures.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#B8851F]/30 text-[#B8851F]">
                    ✓
                  </div>

                  <p className="text-[10px] font-medium text-[#3D1F0D]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import {
//   Lightbulb,
//   Mirror,
//   Gem,
//   Shirt,
//   Footprints,
//   ShoppingBasket,
//   PanelsTopLeft,
//   Package,
//   Wrench,
//   Ruler,
//   DoorClosed,
//   Droplets,
//   ShieldCheck,
//   Hammer,
// } from "lucide-react";

// const wardrobeAccessories = [
//   {
//     title: "LED Lights",
//     icon: Lightbulb,
//   },
//   {
//     title: "Pull-out Mirror",
//     icon: Mirror,
//   },
//   {
//     title: "Jewellery Tray",
//     icon: Gem,
//   },
//   {
//     title: "Tie Rack",
//     icon: Shirt,
//   },
//   {
//     title: "Shoe Rack",
//     icon: Footprints,
//   },
//   {
//     title: "Laundry Basket",
//     icon: ShoppingBasket,
//   },
//   {
//     title: "Pants Organiser",
//     icon: Package,
//   },
//   {
//     title: "Glass Shelves",
//     icon: PanelsTopLeft,
//   },
// ];

// const wardrobeFeatures = [
//   {
//     title: "Premium Hardware",
//     icon: Wrench,
//   },
//   {
//     title: "Custom Sizes",
//     icon: Ruler,
//   },
//   {
//     title: "Soft Closing",
//     icon: DoorClosed,
//   },
//   {
//     title: "Moisture Resistant",
//     icon: Droplets,
//   },
//   {
//     title: "10-Year Warranty",
//     icon: ShieldCheck,
//   },
//   {
//     title: "Professional Installation",
//     icon: Hammer,
//   },
// ];

// export default function Accessories() {
//   return (
//     <section className="bg-[#F5EBE0] py-16">
//       <div className="container mx-auto px-4">
//         {/* Premium Accessories */}
//         <div className="rounded-[28px] border border-[#e8dfd5] bg-white p-6 md:p-8">
//           <h2 className="mb-8 text-center text-3xl font-serif text-[#3D1F0D]">
//             Premium Accessories
//           </h2>

//           <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
//             {wardrobeAccessories.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={index}
//                   className="group rounded-xl border border-[#ece4da] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//                 >
//                   <div className="flex justify-center">
//                     <Icon
//                       size={30}
//                       className="text-[#B8851F] transition-transform duration-300 group-hover:scale-110"
//                     />
//                   </div>

//                   <h3 className="mt-4 text-sm font-medium text-[#3D1F0D]">
//                     {item.title}
//                   </h3>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Why Choose Our Wardrobes */}
//         <div className="mt-6 rounded-[28px] border border-[#e8dfd5] bg-white p-6 md:p-8">
//           <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-center">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-serif leading-tight text-[#3D1F0D]">
//                 Why Choose
//                 <br />
//                 Our Wardrobes?
//               </h2>
//             </div>

//             <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
//               {wardrobeFeatures.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div key={index} className="text-center">
//                     <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#B8851F]/30 bg-[#FDF8F2]">
//                       <Icon size={24} className="text-[#B8851F]" />
//                     </div>

//                     <p className="text-sm font-medium text-[#3D1F0D]">
//                       {item.title}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
