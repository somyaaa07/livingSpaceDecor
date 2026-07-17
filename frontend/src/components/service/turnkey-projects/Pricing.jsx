"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const processSteps = [
  {
    title: "Consultation",
    image: "https://images.pexels.com/photos/8837733/pexels-photo-8837733.jpeg",
    description:
      "Discuss requirements, lifestyle, budget, and design vision with our experts.",
  },
  {
    title: "Design",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    description:
      "Space planning, layouts, mood boards, and concept development.",
  },
  {
    title: "3D Visualization",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    description:
      "Photorealistic 3D renders to visualize your future home before execution.",
  },
  {
    title: "Material Selection",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    description:
      "Choose laminates, finishes, fabrics, lighting, and décor elements.",
  },
  {
    title: "Manufacturing",
    image: "https://images.pexels.com/photos/5691626/pexels-photo-5691626.jpeg",
    description: "Precision manufacturing of furniture and modular components.",
  },
  {
    title: "Execution",
    image: "https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg",
    description:
      "On-site installation and execution managed by experienced professionals.",
  },
  {
    title: "Quality Check",
    image: "https://images.pexels.com/photos/8961300/pexels-photo-8961300.jpeg",
    description:
      "Multiple quality inspections ensure flawless finishing and durability.",
  },
  {
    title: "Handover",
    image: "https://images.pexels.com/photos/7578860/pexels-photo-7578860.jpeg",
    description:
      "Final walkthrough and delivery of your fully completed dream home.",
  },
];

export default function TurnkeyProcess() {
  return (
    <section className="bg-[#F5EBE0] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="bg-[#C8972B]/10 font-heading text-[#C8972B] px-4 py-2 rounded-full text-sm ">
            End-to-End Turnkey Solutions
          </span>

          <h2 className="text-4xl lg:text-5xl font-heading  text-[#3D1F0D] mt-4">
            From Concept to Handover
          </h2>
        </div>
        {/* Timeline */}
        <div className="hidden lg:flex justify-center mt-12 mb-8 flex-wrap gap-4">
          {processSteps.map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="text-[#3D1F0D]  text-sm">{item.title}</span>

              {index !== processSteps.length - 1 && (
                <span className="mx-3 text-[#C8972B] text-xl">→</span>
              )}
            </div>
          ))}
        </div>

        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            scale: 0.9,
            slideShadows: false,
          }}
          className="py-10"
        >
          {processSteps.map((step, index) => (
            <SwiperSlide key={index} className="!w-[300px] md:!w-[400px]">
              <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
                <div className="relative h-[300px]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex ">
                  <div className="w-8 h-8 mx-auto mb-4 rounded-full bg-[#C8972B] text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <h3 className="text-xl  font-heading text-[#3D1F0D]">
                    {step.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

