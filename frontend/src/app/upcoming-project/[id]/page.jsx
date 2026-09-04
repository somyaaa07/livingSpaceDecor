import Link from "next/link";
import { notFound } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const BACKEND_URL = API_URL?.replace(/\/api\/?$/, "");

export default async function UpcomingProjectDetails({ params }) {
  const { id } = await params;

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
  // MAIN IMAGE URL
  // =========================================================

  const imageUrl = project.image
    ? project.image.startsWith("http")
      ? project.image
      : `${BACKEND_URL}${project.image}`
    : "/image/placeholder.webp";

  // =========================================================
  // GALLERY NORMALIZATION
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

  // Make sure gallery is actually an array
  if (!Array.isArray(gallery)) {
    gallery = [];
  }

  // =========================================================
  // GALLERY IMAGE URL
  // =========================================================

  const getGalleryImageUrl = (imagePath) => {
    if (!imagePath) {
      return "/image/placeholder.webp";
    }

    if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
      return imagePath;
    }

    return `${BACKEND_URL}${imagePath}`;
  };

  return (
    <main className="min-h-screen bg-[#F5EBE0] pt-28 pb-20 px-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            BACK TO HOME
        ===================================================== */}

        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#3D1F0D] transition hover:text-[#C8972B] sm:text-sm"
        >
          ← Back to Home
        </Link>

        {/* =====================================================
            MAIN PROJECT SECTION
        ===================================================== */}

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ===================================================
              MAIN IMAGE
          =================================================== */}

          <div className="relative overflow-hidden bg-[#E8DCCF]">
            <img
              src={imageUrl}
              alt={project.alt || project.title || "Upcoming interior project"}
              className="h-[400px] w-full object-cover sm:h-[550px] lg:h-[650px]"
            />

            {/* GOLD TOP LINE */}

            <div className="absolute inset-x-0 top-0 h-[3px] bg-[#C8972B]" />
          </div>

          {/* ===================================================
              PROJECT CONTENT
          =================================================== */}

          <div>
            {/* LABEL */}

            <p className="mb-4 mt-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8972B] lg:mt-0">
              <span className="h-px w-8 bg-[#C8972B]" />
              Upcoming Project
            </p>

            {/* TITLE */}

            <h1 className="mb-6 font-marcellus text-4xl leading-tight tracking-wide text-[#3D1F0D] sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            {/* GOLD LINE */}

            <div className="mb-6 h-px w-16 bg-[#C8972B]" />

            {/* DESCRIPTION */}

            {project.description ? (
              <p className="mb-8 text-base font-light leading-relaxed text-[#5F554E] sm:text-lg">
                {project.description}
              </p>
            ) : project.alt ? (
              <p className="mb-8 text-base font-light leading-relaxed text-[#5F554E] sm:text-lg">
                {project.alt}
              </p>
            ) : (
              <p className="mb-8 text-base font-light leading-relaxed text-[#5F554E] sm:text-lg">
                Explore our upcoming interior design project, thoughtfully
                planned with modern design, quality materials, and attention to
                every detail.
              </p>
            )}

            {/* =================================================
                PROJECT INFO
            ================================================= */}

            <div className="border-t border-[#3D1F0D]/10 pt-6">
              <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#C8972B]">
                Living Space Decor
              </p>

              <p className="text-sm leading-relaxed text-[#6B6B6B]">
                Designed with elegance, functionality and attention to detail.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            GALLERY SECTION
        ===================================================== */}

        {gallery.length > 0 && (
          <section className="mt-20 border-t border-[#3D1F0D]/10 pt-12 sm:mt-24">
            {/* GALLERY HEADER */}

            <div className="mb-8">
              <p className="mb-3 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8972B]">
                <span className="h-px w-8 bg-[#C8972B]" />
               Upcoming Project Gallery
              </p>

              <h2 className="font-marcellus text-3xl tracking-wide text-[#3D1F0D] sm:text-4xl">
                Interior Design Details
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
                Explore more details of this upcoming interior design project
                through the project gallery.
              </p>
            </div>

            {/* =================================================
                GALLERY GRID
            ================================================= */}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((image, index) => {
                const galleryUrl = getGalleryImageUrl(image);

                return (
                  <div
                    key={`${image}-${index}`}
                    className="group relative overflow-hidden bg-[#E8DCCF]"
                  >
                    <img
                      src={galleryUrl}
                      alt={`${project.title || "Upcoming interior project"} - detail image ${
                        index + 1
                      }`}
                      className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[350px] lg:h-[400px]"
                      loading="lazy"
                    />

                    {/* TOP GOLD LINE */}

                    <div className="absolute inset-x-0 top-0 h-[2px] bg-[#C8972B] opacity-0 transition duration-300 group-hover:opacity-100" />

                    {/* IMAGE NUMBER */}

                    <div className="absolute bottom-3 left-3 rounded-md bg-[#3D1F0D]/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

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
            From concept to completion, we create thoughtfully designed
            interiors that combine elegance, functionality, and timeless style.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center justify-center rounded-md bg-[#3D1F0D] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#542b15]"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </main>
  );
}
