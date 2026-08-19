"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  Clock,
} from "lucide-react";

const testimonials = [
  // {
  //   name: "Rohan Singh",

  //   review:`Had my full turnkey home interior done by them in Greater Noida West. On-time delivery and stayed within budget. Best interior designer company experience I’ve had.`,
  // },
  {
    name: "Rohan Singh",
    review: `I recently completed my home interior project with Living Space Decor, and I am extremely satisfied with the entire experience. From the first consultation to the final handover, the team was professional, knowledgeable, and committed to delivering quality work. They carefully understood my requirements, budget, and style preferences before suggesting practical design solutions that perfectly matched my home.

The entire process was smooth and well organised. Every space was planned efficiently, making my home feel more functional, spacious, and elegant. The attention to detail in every corner was impressive, and the finishing quality exceeded my expectations. The materials used were of excellent quality, and the craftsmanship reflected the team's experience and dedication.

What impressed me most was their transparency and timely execution. They kept me informed throughout the project, responded quickly to my questions, and ensured that every stage was completed as promised. There were no unnecessary delays or hidden charges, making the entire experience stress-free and enjoyable.

The final outcome has completely transformed my home into a beautiful, comfortable, and practical living space. The designs are modern, well planned, and perfectly suited to my lifestyle. Friends and family have appreciated the elegant interiors and overall finish whenever they visit.

I highly recommend Living Space Decor to anyone looking for reliable and professional home interior services. Their commitment to quality, customer satisfaction, and timely delivery truly sets them apart. I would happily choose them again for future projects and confidently recommend their services to anyone planning to upgrade or redesign their home interiors. `,
  },

  // {
  //   name: "Aditi Kaptiyal",

  //   review: `I had a wonderful experience with Living Space Decor. From start to finish, the team was professional, friendly, and very attentive to what I wanted. They really listened to my ideas and gave helpful suggestions that made the design even better.`,
  // },

{
  name: "Aditi Kaptiyal",

  review: `I had a wonderful experience with Living Space Decor, and I am extremely happy with the final outcome of my home interior project. From the very beginning, the team was professional, friendly, and genuinely interested in understanding my ideas and requirements. They patiently listened to my preferences and provided practical suggestions that enhanced the overall design while keeping everything functional and elegant. Their experience and attention to detail gave me complete confidence throughout the project.

The planning process was smooth and well organised. Every area of my home was thoughtfully designed to maximise space and create a comfortable, modern living environment. The quality of materials, finishing, and craftsmanship was excellent, and every detail reflected their commitment to delivering high standards. The team worked efficiently and ensured that each stage of the project was completed with precision and care.

What impressed me the most was their transparency, communication, and dedication to customer satisfaction. They kept me informed about the progress, completed the work within the promised timeline, and handled every request with patience and professionalism. There were no unnecessary delays, and the entire experience was stress-free.

The final result has completely transformed my home into a stylish, functional, and welcoming space that my family truly enjoys. Friends and relatives have appreciated the beautiful interiors and excellent finish whenever they visit. I highly recommend Living Space Decor to anyone looking for reliable and experienced home interior professionals. Their creativity, quality workmanship, and customer-first approach make them a trusted choice, and I would happily choose their services again for future projects.`
},




  // {
  //   name: "Aakanksha Singh",

  //   review:
  //     "This company did a wonderful job, beyond my expectation, you can choose this company without having a second thought.",
  // },
  {
    name: "Aakanksha Singh",
    review: `I recently chose Living Space Decor for my home interior project, and I am genuinely impressed with the quality of their work. From the very first meeting, the team listened carefully to my ideas, understood my requirements, and suggested practical solutions that perfectly suited my home and budget. They were professional, polite, and always willing to answer my questions throughout the project.

The planning and execution were handled with great attention to detail. Every stage of the work was completed systematically, and the team ensured that the final outcome matched the design discussed during the consultation. The quality of materials, finishing, and craftsmanship was excellent, making every room look elegant and well organised. Their commitment to quality was visible in every detail, and they never compromised on workmanship.

One thing I appreciated the most was their transparency and timely communication. They kept me informed about the progress, respected the agreed timeline, and completed the work without unnecessary delays. The entire experience was smooth, stress-free, and enjoyable.

Now that the project is complete, my home looks modern, stylish, and much more functional than before. Friends and family have appreciated the beautiful interiors, and I am delighted with the transformation. Living Space Decor truly exceeded my expectations with their professionalism, creativity, and dedication. I would confidently recommend them to anyone looking for reliable home interior services. If you are planning to renovate or design your home, you can choose this company without a second thought because they genuinely care about delivering quality and customer satisfaction.`,
  },
  // {
  //   name: "SHOURYA",

  //   review: "Wonderful services and great designs. Timely services provided!!",
  // },
  {
    name: "SHOURYA",

    review: `I recently got my home interiors completed by Living Space Decor, and I am extremely happy with the overall experience. From the beginning, the team was professional, organised, and committed to delivering quality work. They carefully understood my requirements and provided creative ideas that perfectly matched my expectations while making the best use of the available space.

The entire project was completed in a systematic manner, and every detail was executed with precision. The finishing quality, material selection, and overall craftsmanship were excellent. Every area of my home now looks modern, elegant, and well planned. It is clear that the team pays close attention to detail and focuses on delivering high-quality results.

What impressed me the most was their punctuality and commitment to deadlines. They completed the project on time and kept me informed throughout every stage of the process. Their communication was clear, and they responded to all my queries with patience and professionalism. There were no surprises during the project, and everything was completed exactly as promised. The final outcome has completely transformed my home into a beautiful and comfortable living space. I appreciate the team's dedication, creativity, and customer-first approach. If anyone is looking for reliable interior designers who deliver excellent quality, modern designs, and timely service, I would highly recommend Living Space Decor. It was truly a wonderful experience, and I would happily choose them again for future projects.`,
  },
  // {
  //   name: "Dipanshu Rawat",

  //   review: "Wonderful services and great designs. Timely services provided!!",
  // },
   {
    name: "Dipanshu Rawat",

    review:`My experience with Living Space Decor has been excellent from start to finish. I hired them for my home interior project after hearing positive feedback, and they completely lived up to my expectations. The team was professional, experienced, and always ready to provide useful suggestions that improved both the appearance and functionality of my home.

From the planning stage to the final execution, every step was handled with care and professionalism. They understood my preferences, respected my budget, and created a design that perfectly suited my lifestyle. The finishing quality, craftsmanship, and attention to detail were outstanding. Every room now looks elegant, organised, and thoughtfully designed.

Another aspect that impressed me was their commitment to completing the project on schedule. They maintained excellent communication throughout the work, provided regular updates, and ensured that everything progressed smoothly. The installation and finishing work were completed neatly without compromising on quality. `,
  },
  // {
  //   name: "Aman Haldar",

  //   review:
  //     "My experience was very good, and good service provided by Living Space Decor.",
  // },



  // {
  //   name: "Deepak Bainsla",

  //   review:
  //     "Awesome work done by their team at my home. #bestinteriordesigner in Noida",
  // },
  // {
  //   name: "Grisha Bhardwaj",

  //   review:
  //     "I really liked the collection at this shop. Prices are reasonable and the service is friendly.",
  // },
  // {
  //   name: "Vanz",

  //   review: "Amazing experience! Worth trying!",
  // },


{
  name: "Aman Haldar",

  review: `I recently completed my home interior project with Living Space Decor, and the overall experience was excellent. From the initial consultation to the final handover, the team was professional, supportive, and highly experienced. They carefully listened to my ideas, understood my requirements, and suggested practical design solutions that perfectly suited my home. Every discussion was handled with patience, and they ensured that my preferences were included throughout the project.

The work was completed with impressive attention to detail and high-quality craftsmanship. Every area of my home was planned efficiently, making the space feel more organised, functional, and elegant. The materials, finishing, and installation quality exceeded my expectations, and every stage of the project reflected their commitment to excellence.

What impressed me the most was their professionalism and timely execution. The team maintained clear communication, provided regular updates, and completed the project within the promised timeline. They handled every request with care and ensured that the final result matched exactly what was discussed.

Now that the project is complete, my home looks modern, comfortable, and beautifully designed. Friends and family have appreciated the transformation, and I am extremely satisfied with the outcome. I highly recommend Living Space Decor to anyone looking for reliable home interior services. Their dedication, quality workmanship, and customer-focused approach truly make them a trusted choice. I would happily work with them again for future projects and confidently recommend them to anyone planning to renovate or design their home interiors.`,
},

{
  name: "Deepak Bainsla",

  review: `Living Space Decor transformed my home into a beautiful and functional living space, and I couldn't be happier with the results. From the beginning, the team demonstrated professionalism, creativity, and a clear understanding of my expectations. They carefully planned every area of the house and provided practical suggestions that enhanced both the appearance and usability of the space.

The execution was smooth, and every detail was completed with precision and care. The finishing quality, craftsmanship, and overall design exceeded my expectations. Every room now feels more spacious, organised, and elegant. The team maintained high standards throughout the project and ensured that every aspect of the work reflected quality and attention to detail.

One of the things I appreciated most was their commitment to completing the project on time. They kept me informed about the progress, responded promptly to my questions, and maintained complete transparency throughout the entire process. Their dedication and customer service made the experience completely stress-free.

The final outcome has received many compliments from friends and family, and I am delighted with the transformation. Living Space Decor truly delivers exceptional home interior solutions with excellent craftsmanship and reliable service. I highly recommend them to anyone looking for professional interior designers who focus on quality, timely delivery, and customer satisfaction. Without a doubt, they are one of the best interior design companies in Noida, and I would gladly choose them again for future home improvement projects.`
},

{
  name: "Grisha Bhardwaj",

  review: `I had a wonderful experience with Living Space Decor while planning my home interiors. From the first consultation, the team was friendly, knowledgeable, and genuinely interested in understanding my requirements. They carefully explained different design options, materials, and finishes, helping me make informed decisions without any pressure.

What impressed me most was the wide range of modern designs and thoughtful ideas they offered. Every recommendation was practical and tailored to my preferences, making the entire planning process enjoyable. The team maintained excellent communication throughout the project and ensured that every detail was executed with care and precision.

The quality of workmanship and finishing was outstanding. Every corner of my home now looks elegant, organised, and beautifully designed. The materials used were of high quality, and the installation was completed professionally without compromising on standards. The project was delivered within the agreed timeline, making the experience smooth and hassle-free.

The overall value for money was excellent, considering the quality of work and level of service provided. The team remained approachable throughout the project and handled every request with professionalism and patience. I am extremely happy with the final outcome, and my family loves the transformation. I highly recommend Living Space Decor to anyone looking for stylish, practical, and high-quality home interiors. Their creativity, attention to detail, and customer-first approach make them a reliable choice for anyone planning to redesign or renovate their home.`
},

{
  name: "Vanz",

  review: `Working with Living Space Decor was an amazing experience from beginning to end. The team was professional, organised, and committed to delivering high-quality home interiors that perfectly matched my expectations. They took the time to understand my ideas, budget, and lifestyle before creating a design that was both functional and visually appealing.

Throughout the project, the team maintained excellent communication and kept me informed about every stage of the work. They completed each task with great attention to detail and ensured that the quality of workmanship remained consistently high. The finishing, materials, and overall execution exceeded my expectations, giving my home a fresh, modern, and elegant appearance.

One of the biggest advantages of working with them was their punctuality and dedication. The project was completed within the promised timeline, and every small request was handled with patience and professionalism. Their customer service made the entire process smooth and enjoyable without unnecessary stress.

The final result completely transformed my home into a comfortable and stylish living space that my family truly enjoys. I have received many compliments from visitors, and I am extremely satisfied with the quality of work delivered. I highly recommend Living Space Decor to anyone looking for reliable, experienced, and creative interior designers. Their commitment to quality, customer satisfaction, and timely delivery makes them an excellent choice for any home interior project. It was truly an amazing experience and definitely worth choosing their services.`
},


  // {
  //   name: "Mohmd Shehwaz",

  //   review: "Best in terms of everything in their work.",
  // },
  // {
  //   name: "Paras Pandey",

  //   review: "This is a very good work. He has made my house very beautiful.",
  // },
  // {
  //   name: "SHIVAM MISHRA",

  //   review: "It's one of the best places for interior works.👍🏻",
  // },

{
  name: "Mohmd Shehwaz",

  review: `I recently completed my home interior project with Living Space Decor, and I am extremely satisfied with the entire experience. From the initial consultation to the final handover, the team demonstrated professionalism, creativity, and a strong commitment to quality. They carefully understood my requirements and suggested practical design ideas that perfectly suited my home and lifestyle. Every detail was planned thoughtfully, ensuring that each space was both functional and visually appealing.

The quality of workmanship was outstanding. Every room was finished with great attention to detail, and the materials used reflected their high standards. The entire project was completed neatly and efficiently, giving my home a modern, elegant, and well-organised look. Throughout the process, the team maintained clear communication and kept me updated on the progress. They completed the work within the promised timeline and handled every request with patience and professionalism.

What impressed me the most was their dedication to customer satisfaction. They paid attention to even the smallest details and ensured that the final result matched my expectations perfectly. My family and friends have appreciated the beautiful transformation, and I continue to receive compliments whenever someone visits my home.

I highly recommend Living Space Decor to anyone looking for reliable and experienced home interior professionals. Their excellent craftsmanship, timely execution, and customer-first approach truly make them stand out. In every aspect of their work, they maintain high standards of quality and professionalism. I would happily choose them again for future interior projects and confidently recommend their services to others.`
},

{
  name: "Paras Pandey",

  review: `Living Space Decor has completely transformed my home, and I am delighted with the final outcome. From the first meeting, the team was friendly, professional, and focused on understanding my ideas and requirements. They suggested practical solutions that enhanced both the appearance and functionality of every room while ensuring that the design suited my lifestyle and budget.

The project was executed with excellent planning and attention to detail. Every stage of the work reflected their dedication and experience. The quality of materials, finishing, and craftsmanship exceeded my expectations, and every corner of my home now looks elegant, organised, and modern. The team worked efficiently, maintained cleanliness during the project, and ensured that everything was completed according to the agreed timeline.

One of the things I appreciated most was their transparency and commitment to customer satisfaction. They kept me informed throughout the project, responded quickly to my questions, and handled every request with professionalism. Their dedication made the entire experience smooth, enjoyable, and completely stress-free.

Now my home feels brighter, more comfortable, and beautifully designed. My family and friends have appreciated the transformation and often compliment the interiors whenever they visit. I highly recommend Living Space Decor to anyone planning a home interior project. Their professionalism, creativity, and high-quality workmanship make them a trusted choice. I am extremely happy with the results and would gladly recommend them to anyone looking for reliable and experienced interior designers who truly care about delivering exceptional work.`
},

{
  name: "SHIVAM MISHRA",

  review: `I had an excellent experience with Living Space Decor for my home interior project. From the beginning, the team impressed me with their professionalism, creativity, and attention to detail. They carefully listened to my requirements, understood my vision, and provided practical suggestions that improved both the functionality and appearance of my home. Their planning process was organised, and they ensured that every design decision matched my expectations.

The execution of the project was smooth and well managed. Every room was completed with outstanding craftsmanship and premium-quality finishing. The materials used were durable, and the final result gave my home a stylish, modern, and elegant look. The team maintained excellent communication throughout the project and regularly updated me on the progress. They respected the agreed timeline and completed the work without unnecessary delays.

What I appreciated most was their commitment to delivering quality and ensuring complete customer satisfaction. They handled every small detail with care and professionalism, making the entire experience stress-free. It is clear that they take pride in their work and genuinely focus on delivering the best possible results.

I highly recommend Living Space Decor to anyone looking for professional home interior services. Their experienced team, excellent workmanship, timely delivery, and customer-focused approach make them one of the best choices for interior projects. I am completely satisfied with the transformation of my home and would happily work with them again for any future interior design or renovation requirements.`
},




];

const AUTOPLAY_MS = 5000;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const dragStartX = useRef(0);
  const dragging = useRef(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goTo = (index) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  const goNext = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDragStart = (e) => {
    dragging.current = true;
    dragStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
    setIsPaused(true);
  };

  const handleDragEnd = (e) => {
    if (!dragging.current) return;
    dragging.current = false;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const delta = endX - dragStartX.current;
    if (delta > 50) goPrev();
    else if (delta < -50) goNext();
  };

  const handleMouseLeave = () => {
    if (dragging.current) {
      handleDragEnd({ clientX: dragStartX.current });
    }
    setIsPaused(false);
  };

  const current = testimonials[active];

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#F7F2EB] overflow-hidden">
      {/* HEADER */}
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center mb-10 md:mb-14">
        <p className="flex items-center justify-center gap-3 text-[10px] tracking-[.28em] uppercase text-[#C8972B] font-medium mb-3">
          <span className="w-6 h-px bg-[#C8972B]" />
          Client Stories
          <span className="w-6 h-px bg-[#C8972B]" />
        </p>
        <h2 className="font-heading text-4xl md:text-[46px] font-medium leading-[1.1] text-[#2A1506]">
          Loved by Homeowners{" "}
          <em className="text-[#C8972B] not-italic">Across NCR</em>
        </h2>
      </div>

      {/* SINGLE BIG CARD */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div
          className="relative select-none"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
          onMouseEnter={() => setIsPaused(true)}
        >
          {/* Prev / Next arrows — desktop */}
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={goPrev}
            className="hidden sm:flex items-center justify-center absolute -left-5 md:-left-14 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-[#3D1F0D]/15 text-[#3D1F0D] shadow-sm hover:bg-[#3D1F0D] hover:text-white transition-colors duration-300"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={goNext}
            className="hidden sm:flex items-center justify-center absolute -right-5 md:-right-14 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-[#3D1F0D]/15 text-[#3D1F0D] shadow-sm hover:bg-[#3D1F0D] hover:text-white transition-colors duration-300"
          >
            <ChevronRight size={18} />
          </button>

          <div className="relative overflow-hidden bg-white border border-[#C8972B]/15 shadow-md rounded-xl px-6 py-10 sm:px-10 sm:py-12 md:px-16 md:py-14 min-h-[360px] sm:min-h-[340px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full text-center"
              >
                {/* Quote mark */}
                <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-[#C8972B]/10 border border-[#C8972B]/20 flex items-center justify-center">
                  <span className="text-[#C8972B] text-3xl leading-none">
                    ❝
                  </span>
                </div>

                {/* Stars — every review is 5-star */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[#C8972B] text-base">
                      ★
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p className="font-heading italic text-[#2A1506]/85 text-[10px] sm:text-[10px] md:text-xl lg:text-base leading-relaxed max-w-6xl mx-auto">
                  "{current.review}"
                </p>

                {/* Author */}
                <div className="flex flex-col items-center gap-3 mt-8 pt-6 border-t border-[#C8972B]/10 max-w-xs mx-auto">
                  <div className="w-12 h-12 rounded-full bg-[#C8972B] text-white flex items-center justify-center font-heading text-lg font-semibold">
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-medium text-[#2A1506] text-sm sm:text-base">
                      {current.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8 flex-wrap px-4">
          {testimonials.map((t, index) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => {
                goTo(index);
                setIsPaused(true);
              }}
              className={`h-[6px] rounded-full transition-all duration-300 ${
                active === index
                  ? "w-6 bg-[#C8972B]"
                  : "w-[6px] bg-[#3D1F0D]/20 hover:bg-[#3D1F0D]/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CTA — "consultation ticket" */}
      <div className="mt-16 md:mt-20 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="relative flex flex-col sm:flex-row bg-white rounded-2xl shadow-[0_8px_30px_rgba(61,31,13,0.08)] border border-[#3D1F0D]/10">
            {/* Main stub */}
            <div className="flex-1 px-8 py-10 sm:px-10 sm:py-12 text-center sm:text-left">
              <p className="flex items-center justify-center sm:justify-start gap-3 text-[10px] tracking-[.28em] uppercase text-[#C8972B] font-medium mb-4">
                <span className="w-6 h-px bg-[#C8972B]" />
                Free Consultation
              </p>
              <h2 className="font-heading text-3xl sm:text-[34px] font-medium text-[#2A1506] leading-[1.15]">
                Looking for Interior Designers in Noida?
              </h2>
              <p className="mt-4 text-[#2A1506]/55 text-[15px] leading-relaxed max-w-sm mx-auto sm:mx-0">
                Book a free consultation today and transform your dream home
                with Living Space Decor.
              </p>

              <div className="mt-8 flex items-center justify-center sm:justify-start gap-2 text-[#6E6258] text-[11px] tracking-[0.08em] uppercase">
                <Clock size={13} className="text-[#C8972B]" />
                <span>Mon – Sun · 10 AM – 7 PM</span>
              </div>
            </div>

            {/* Perforated divider with punch-hole notches */}
            <div className="relative hidden sm:flex flex-col items-center justify-center w-0">
              <span className="absolute -top-3 w-6 h-6 rounded-full bg-[#F7F2EB]" />
              <span className="absolute -bottom-3 w-6 h-6 rounded-full bg-[#F7F2EB]" />
              <span className="h-full w-px border-l-2 border-dashed border-[#3D1F0D]/15" />
            </div>
            <div className="sm:hidden relative flex items-center justify-center h-0">
              <span className="absolute -left-3 w-6 h-6 rounded-full bg-[#F7F2EB]" />
              <span className="absolute -right-3 w-6 h-6 rounded-full bg-[#F7F2EB]" />
              <span className="w-full h-px border-t-2 border-dashed border-[#3D1F0D]/15" />
            </div>

            {/* Ticket stub — call action */}
            <div className="relative flex flex-col items-center justify-center gap-3 px-8 py-10 sm:py-12 sm:w-[240px] bg-[#F5EBE0] rounded-b-2xl sm:rounded-r-2xl sm:rounded-bl-none">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3D1F0D] text-[#C8972B]">
                <Phone size={18} />
              </span>
              <div className="text-center">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#6E6258]">
                  Admit One Enquiry
                </p>
                <p className="font-heading text-lg font-medium text-[#2A1506] mt-1">
                  +91 88266 06869
                </p>
              </div>
              <a
                href="tel:+918826606869"
                className="mt-1 inline-flex items-center gap-2 bg-[#3D1F0D] text-white px-6 py-3 rounded text-[12px] tracking-[0.1em] uppercase font-medium hover:bg-[#B8851F] transition-colors duration-300"
              >
                Call Now
                <ChevronRight size={14} />
              </a>
            </div>
          </div>

          {/* Secondary link */}
          <p className="text-center mt-6 text-[13px] text-[#6E6258]">
            Prefer messaging?{" "}
            <a
              href="https://wa.me/918826606869"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#C8972B] font-medium hover:underline"
            >
              <MessageCircle size={13} />
              WhatsApp us instead
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
