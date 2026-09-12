// import Link from "next/link";
// import { notFound } from "next/navigation";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;
// const BACKEND_URL = API_URL?.replace(/\/api\/?$/, "");

// export default async function UpcomingProjectDetails({ params }) {
//   const { id } = await params;

//   let project = null;

//   // =========================================================
//   // FETCH PROJECT
//   // =========================================================

//   try {
//     const response = await fetch(`${API_URL}/upcoming-projects/${id}`, {
//       cache: "no-store",
//     });

//     if (!response.ok) {
//       notFound();
//     }

//     const data = await response.json();

//     console.log("Upcoming Project Details:", data);

//     project = data.project || data.data || data.upcomingProject || null;
//   } catch (error) {
//     console.error("Error fetching upcoming project:", error);

//     notFound();
//   }

//   // =========================================================
//   // PROJECT NOT FOUND
//   // =========================================================

//   if (!project) {
//     notFound();
//   }

//   // =========================================================
//   // MAIN IMAGE URL
//   // =========================================================

//   const imageUrl = project.image
//     ? project.image.startsWith("http")
//       ? project.image
//       : `${BACKEND_URL}${project.image}`
//     : "/image/placeholder.webp";

//   // =========================================================
//   // GALLERY NORMALIZATION
//   // =========================================================

//   let gallery = [];

//   if (Array.isArray(project.gallery)) {
//     gallery = project.gallery;
//   } else if (typeof project.gallery === "string") {
//     try {
//       gallery = JSON.parse(project.gallery || "[]");
//     } catch (error) {
//       console.error("Invalid gallery JSON:", error);

//       gallery = [];
//     }
//   }

//   // Make sure gallery is actually an array
//   if (!Array.isArray(gallery)) {
//     gallery = [];
//   }

//   // =========================================================
//   // GALLERY IMAGE URL
//   // =========================================================

//   const getGalleryImageUrl = (imagePath) => {
//     if (!imagePath) {
//       return "/image/placeholder.webp";
//     }

//     if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
//       return imagePath;
//     }

//     return `${BACKEND_URL}${imagePath}`;
//   };

//   return (
//     <main className="min-h-screen bg-[#F5EBE0] pt-28 pb-20 px-6 sm:px-10 lg:px-16">
//       <div className="mx-auto max-w-7xl">
//         {/* =====================================================
//             BACK TO HOME
//         ===================================================== */}

//         <Link
//           href="/"
//           className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#3D1F0D] transition hover:text-[#C8972B] sm:text-sm"
//         >
//           ← Back to Home
//         </Link>

//         {/* =====================================================
//             MAIN PROJECT SECTION
//         ===================================================== */}

//         <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
//           {/* ===================================================
//               MAIN IMAGE
//           =================================================== */}

//           <div className="relative overflow-hidden bg-[#E8DCCF]">
//             <img
//               src={imageUrl}
//               alt={project.alt || project.title || "Upcoming interior project"}
//               className="h-[400px] w-full object-cover sm:h-[550px] lg:h-[650px]"
//             />

//             {/* GOLD TOP LINE */}

//             <div className="absolute inset-x-0 top-0 h-[3px] bg-[#C8972B]" />
//           </div>

//           {/* ===================================================
//               PROJECT CONTENT
//           =================================================== */}

//           <div>
//             {/* LABEL */}

//             <p className="mb-4 mt-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8972B] lg:mt-0">
//               <span className="h-px w-8 bg-[#C8972B]" />
//               Upcoming Project
//             </p>

//             {/* TITLE */}

//             <h1 className="mb-6 font-marcellus text-4xl leading-tight tracking-wide text-[#3D1F0D] sm:text-5xl lg:text-6xl">
//               {project.title}
//             </h1>

//             {/* GOLD LINE */}

//             <div className="mb-6 h-px w-16 bg-[#C8972B]" />

//             {/* DESCRIPTION */}

//             {project.description ? (
//               <p className="mb-8 text-base font-light leading-relaxed text-[#5F554E] sm:text-lg">
//                 {project.description}
//               </p>
//             ) : project.alt ? (
//               <p className="mb-8 text-base font-light leading-relaxed text-[#5F554E] sm:text-lg">
//                 {project.alt}
//               </p>
//             ) : (
//               <p className="mb-8 text-base font-light leading-relaxed text-[#5F554E] sm:text-lg">
//                 Explore our upcoming interior design project, thoughtfully
//                 planned with modern design, quality materials, and attention to
//                 every detail.
//               </p>
//             )}

//             {/* =================================================
//                 PROJECT INFO
//             ================================================= */}

//             <div className="border-t border-[#3D1F0D]/10 pt-6">
//               <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#C8972B]">
//                 Living Space Decor
//               </p>

//               <p className="text-sm leading-relaxed text-[#6B6B6B]">
//                 Designed with elegance, functionality and attention to detail.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             GALLERY SECTION
//         ===================================================== */}

//         {gallery.length > 0 && (
//           <section className="mt-20 border-t border-[#3D1F0D]/10 pt-12 sm:mt-24">
//             {/* GALLERY HEADER */}

//             <div className="mb-8">
//               <p className="mb-3 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8972B]">
//                 <span className="h-px w-8 bg-[#C8972B]" />
//                Upcoming Project Gallery
//               </p>

//               <h2 className="font-marcellus text-3xl tracking-wide text-[#3D1F0D] sm:text-4xl">
//                 Interior Design Details
//               </h2>

//               <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
//                 Explore more details of this upcoming interior design project
//                 through the project gallery.
//               </p>
//             </div>

//             {/* =================================================
//                 GALLERY GRID
//             ================================================= */}

//             <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//               {gallery.map((image, index) => {
//                 const galleryUrl = getGalleryImageUrl(image);

//                 return (
//                   <div
//                     key={`${image}-${index}`}
//                     className="group relative overflow-hidden bg-[#E8DCCF]"
//                   >
//                     <img
//                       src={galleryUrl}
//                       alt={`${project.title || "Upcoming interior project"} - detail image ${
//                         index + 1
//                       }`}
//                       className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[350px] lg:h-[400px]"
//                       loading="lazy"
//                     />

//                     {/* TOP GOLD LINE */}

//                     <div className="absolute inset-x-0 top-0 h-[2px] bg-[#C8972B] opacity-0 transition duration-300 group-hover:opacity-100" />

//                     {/* IMAGE NUMBER */}

//                     <div className="absolute bottom-3 left-3 rounded-md bg-[#3D1F0D]/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-white">
//                       {String(index + 1).padStart(2, "0")}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </section>
//         )}

//         {/* =====================================================
//             BOTTOM CTA
//         ===================================================== */}

//         <section className="mt-20 border-t border-[#3D1F0D]/10 pt-12 text-center sm:mt-24">
//           <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8972B]">
//             Living Space Decor
//           </p>

//           <h2 className="font-marcellus text-3xl tracking-wide text-[#3D1F0D] sm:text-4xl">
//             Creating Beautiful Spaces
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
//             From concept to completion, we create thoughtfully designed
//             interiors that combine elegance, functionality, and timeless style.
//           </p>

//           <Link
//             href="/contact"
//             className="mt-7 inline-flex items-center justify-center rounded-md bg-[#3D1F0D] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#542b15]"
//           >
//             Get in Touch
//           </Link>
//         </section>
//       </div>
//     </main>
//   );
// }

// New Design Feature

import Link from "next/link";
import { notFound } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const BACKEND_URL = API_URL?.replace(/\/api\/?$/, "");

// =========================================================
// PAGINATION
// =========================================================

const IMAGES_PER_PAGE = 12;

export default async function UpcomingProjectDetails({ params, searchParams }) {
  const { id } = await params;

  const queryParams = await searchParams;

  const requestedPage = Number(queryParams?.page) || 1;

  let project = null;

  // =========================================================
  // FETCH PROJECT
  // =========================================================

  try {
    const response = await fetch(`${API_URL}/upcoming-projects/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      notFound();
    }

    const data = await response.json();

    console.log("Upcoming Project Details:", data);

    project = data.project || data.data || data.upcomingProject || null;
  } catch (error) {
    console.error("Error fetching upcoming project:", error);

    notFound();
  }

  // =========================================================
  // PROJECT NOT FOUND
  // =========================================================

  if (!project) {
    notFound();
  }

  // =========================================================
  // NORMALIZE GALLERY
  // =========================================================

  let gallery = [];

  if (Array.isArray(project.gallery)) {
    gallery = project.gallery;
  } else if (typeof project.gallery === "string") {
    try {
      gallery = JSON.parse(project.gallery || "[]");
    } catch (error) {
      console.error("Invalid gallery JSON:", error);

      gallery = [];
    }
  }

  if (!Array.isArray(gallery)) {
    gallery = [];
  }

  // =========================================================
  // IMAGE URL
  // =========================================================

  const getImageUrl = (imagePath) => {
    if (!imagePath) {
      return "/image/placeholder.webp";
    }

    if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
      return imagePath;
    }

    return `${BACKEND_URL}${imagePath}`;
  };

  // =========================================================
  // PAGINATION CALCULATION
  // =========================================================

  const totalPages = Math.ceil(gallery.length / IMAGES_PER_PAGE);

  const currentPage =
    totalPages > 0 ? Math.min(Math.max(requestedPage, 1), totalPages) : 1;

  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;

  const endIndex = startIndex + IMAGES_PER_PAGE;

  const currentImages = gallery.slice(startIndex, endIndex);

  // =========================================================
  // PAGE URL
  // =========================================================

  const getPageUrl = (page) => {
    return `/upcoming-project/${id}?page=${page}`;
  };

  // =========================================================
  // NEW GALLERY ONLY DESIGN
  // =========================================================

  return (
    <main className="min-h-screen bg-[#F5EBE0] px-4 pb-20 pt-28 sm:px-6 lg:px-10 xl:px-16">
      <div className="mx-auto max-w-[1600px]">
        {/* =====================================================
            BACK TO HOME
        ===================================================== */}

        <div className="mb-8 sm:mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#3D1F0D] transition hover:text-[#C8972B] sm:text-sm"
          >
            ← Back to Home
          </Link>
        </div>

        {/* =====================================================
            GALLERY HEADER
        ===================================================== */}

        <div className="mb-10 -mt-28 text-center sm:mb-14">
          <p className="mb-3 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8972B] sm:text-xs">
            <span className="h-px w-8 bg-[#C8972B]" />
            New Trending Design
            <span className="h-px w-8 bg-[#C8972B]" />
          </p>

          <h1 className="font-marcellus text-3xl tracking-wide text-[#3D1F0D] sm:text-4xl md:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <div className="mx-auto mt-5 h-px w-16 bg-[#C8972B]" />

          <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[#777]">
            Project Gallery
          </p>
        </div>

        {/* =====================================================
            EMPTY GALLERY
        ===================================================== */}

        {gallery.length === 0 ? (
          <div className="rounded-2xl border border-[#3D1F0D]/10 bg-white/70 px-6 py-16 text-center">
            <p className="text-sm text-[#777]">
              No project images available yet.
            </p>
          </div>
        ) : (
          /* =====================================================
             GALLERY
          ===================================================== */

          <section>
            {/* =================================================
                GALLERY GRID
            ================================================= */}

            <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
              {currentImages.map((image, index) => {
                const actualIndex = startIndex + index;

                const imageUrl = getImageUrl(image);

                const modalId = `image-modal-${actualIndex}`;

                return (
                  <div
                    key={`${image}-${actualIndex}`}
                    className="group relative overflow-hidden bg-[#E8DCCF]"
                  >
                    {/* =================================================
                        IMAGE CLICK
                    ================================================= */}

                    <a
                      href={`#${modalId}`}
                      className="block cursor-zoom-in"
                      aria-label={`View ${
                        project.title || "Upcoming project"
                      } image ${actualIndex + 1}`}
                    >
                      <img
                        src={imageUrl}
                        alt={`${project.title || "Upcoming project"} - gallery image ${
                          actualIndex + 1
                        }`}
                        className="h-[320px] w-full object-cover transition duration-700 ease-out group-hover:scale-105 sm:h-[350px] lg:h-[380px] xl:h-[400px]"
                        loading={index < 8 ? "eager" : "lazy"}
                      />
                    </a>

                    {/* =================================================
                        GOLD TOP LINE
                    ================================================= */}

                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[#C8972B] opacity-0 transition duration-300 group-hover:opacity-100" />

                    {/* =================================================
                        NO IMAGE NUMBER
                    ================================================= */}
                  </div>
                );
              })}
            </div>

            {/* =================================================
                IMAGE LIGHTBOX / ZOOM
            ================================================= */}

            {currentImages.map((image, index) => {
              const actualIndex = startIndex + index;

              const imageUrl = getImageUrl(image);

              const modalId = `image-modal-${actualIndex}`;

              return (
                <div
                  key={`modal-${image}-${actualIndex}`}
                  id={modalId}
                  className="fixed inset-0 z-[9999] hidden h-screen w-screen items-center justify-center bg-black/90 p-4 target:flex sm:p-8"
                >
                  {/* =================================================
                      CLICK BACKGROUND TO CLOSE
                  ================================================= */}

                  <a
                    href="#"
                    className="absolute inset-0 cursor-default"
                    aria-label="Close image"
                  />

                  {/* =================================================
                      CLOSE BUTTON
                  ================================================= */}

                  <a
                    href="#"
                    className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl font-light text-white backdrop-blur-sm transition hover:bg-white/20 sm:right-8 sm:top-8"
                    aria-label="Close image"
                  >
                    ×
                  </a>

                  {/* =================================================
                      ZOOMED IMAGE
                  ================================================= */}

                  <div className="relative z-10 flex max-h-[90vh] max-w-[95vw] items-center justify-center">
                    <img
                      src={imageUrl}
                      alt={`${project.title || "Upcoming project"} - gallery image ${
                        actualIndex + 1
                      }`}
                      className="max-h-[90vh] max-w-[95vw] object-contain"
                    />
                  </div>
                </div>
              );
            })}

            {/* =================================================
                PAGINATION
            ================================================= */}

            {totalPages > 1 && (
              <div className="mt-12">
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {/* =================================================
                      PREVIOUS
                  ================================================= */}

                  {currentPage > 1 ? (
                    <Link
                      href={getPageUrl(currentPage - 1)}
                      className="rounded-md border border-[#3D1F0D]/20 bg-white px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#3D1F0D] transition hover:bg-[#3D1F0D] hover:text-white"
                    >
                      ← Previous
                    </Link>
                  ) : (
                    <span className="cursor-not-allowed rounded-md border border-gray-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-wider text-gray-300">
                      ← Previous
                    </span>
                  )}

                  {/* =================================================
                      PAGE NUMBERS
                  ================================================= */}

                  {Array.from(
                    {
                      length: totalPages,
                    },
                    (_, index) => index + 1,
                  ).map((page) => (
                    <Link
                      key={page}
                      href={getPageUrl(page)}
                      className={`flex h-10 w-10 items-center justify-center rounded-md border text-sm font-medium transition ${
                        currentPage === page
                          ? "border-[#3D1F0D] bg-[#3D1F0D] text-white"
                          : "border-[#3D1F0D]/20 bg-white text-[#3D1F0D] hover:bg-[#C8972B] hover:text-white"
                      }`}
                    >
                      {page}
                    </Link>
                  ))}

                  {/* =================================================
                      NEXT
                  ================================================= */}

                  {currentPage < totalPages ? (
                    <Link
                      href={getPageUrl(currentPage + 1)}
                      className="rounded-md border border-[#3D1F0D]/20 bg-white px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#3D1F0D] transition hover:bg-[#3D1F0D] hover:text-white"
                    >
                      Next →
                    </Link>
                  ) : (
                    <span className="cursor-not-allowed rounded-md border border-gray-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-wider text-gray-300">
                      Next →
                    </span>
                  )}
                </div>

                {/* =================================================
                    PAGE INFO
                ================================================= */}

                <p className="mt-4 text-center text-xs uppercase tracking-[0.15em] text-[#777]">
                  Page {currentPage} of {totalPages}
                  {" • "}
                  {gallery.length} total images
                </p>
              </div>
            )}
          </section>
        )}
      </div>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="mt-20 border-t border-[#3D1F0D]/10 pt-12 text-center sm:mt-24">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8972B]">
          Living Space Decor
        </p>

        <h2 className="font-marcellus text-3xl tracking-wide text-[#3D1F0D] sm:text-4xl">
          Creating Beautiful Spaces
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
          From concept to completion, we create thoughtfully designed interiors
          that combine elegance, functionality, and timeless style.
        </p>

        <Link
          href="/contact"
          className="mt-7 inline-flex items-center justify-center rounded-md bg-[#3D1F0D] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#542b15]"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
