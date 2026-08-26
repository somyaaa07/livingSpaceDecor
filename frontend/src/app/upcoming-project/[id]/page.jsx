import Link from "next/link";
import { notFound } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const BACKEND_URL = API_URL?.replace(/\/api\/?$/, "");

export default async function UpcomingProjectDetails({ params }) {
  const { id } = await params;

  let project = null;

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

  if (!project) {
    notFound();
  }

  // CREATE CORRECT IMAGE URL
  const imageUrl = project.image
    ? project.image.startsWith("http")
      ? project.image
      : `${BACKEND_URL}${project.image}`
    : "/image/placeholder.webp";

  return (
    <main className="min-h-screen bg-[#F5EBE0] pt-28 pb-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* BACK TO HOME */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-10  text-xs sm:text-sm tracking-[0.15em] uppercase text-[#3D1F0D] transition hover:text-[#C8972B]"
        >
          ← Back to Home
        </Link>

        {/* PROJECT DETAILS */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* IMAGE */}
          <div className="relative overflow-hidden bg-[#E8DCCF]">
            <img
              src={imageUrl}
              alt={project.alt || project.title || "Upcoming interior project"}
              className="w-full h-[400px] sm:h-[550px] lg:h-[650px] object-cover"
            />

            {/* GOLD TOP LINE */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-[#C8972B]" />
          </div>

          {/* CONTENT */}
          <div>
            <p className="flex items-center gap-3 text-[10px] mt-6 lg:-mt-[310px] tracking-[0.3em] uppercase text-[#C8972B] font-semibold mb-4">
              <span className="w-8 h-px bg-[#C8972B]" />
              Upcoming Project
            </p>

            {/* TITLE */}
            <h1 className="font-marcellus text-4xl sm:text-5xl lg:text-6xl text-[#3D1F0D] tracking-wide leading-tight mb-6">
              {project.title}
            </h1>

            <div className="w-16 h-px bg-[#C8972B] mb-6" />

            {/* DESCRIPTION */}
            {project.description ? (
              <p className="text-[#5F554E] text-base sm:text-lg leading-relaxed font-light mb-8">
                {project.description}
              </p>
            ) : project.alt ? (
              <p className="text-[#5F554E] text-base sm:text-lg leading-relaxed font-light mb-8">
                {project.alt}
              </p>
            ) : (
              <p className="text-[#5F554E] text-base sm:text-lg leading-relaxed font-light mb-8">
                Explore our upcoming interior design project, thoughtfully
                planned with modern design, quality materials, and attention to
                every detail.
              </p>
            )}

            {/* FOOTER */}
            <div className="border-t border-[#3D1F0D]/10 pt-6">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#C8972B] mb-2">
                Living Space Decor
              </p>

              <p className="text-sm text-[#6B6B6B]">
                Designed with elegance, functionality and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
