import { notFound } from "next/navigation";
import { getProject } from "@/lib/serverApi";
import ProjectDetail from "@/components/ProjectDetail";

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   try {
//     const { data: project } = await getProject(slug);
//     return { title: `${project.name} — Studio Portfolio`, description: project.description };
//   } catch {
//     return { title: "Project — Studio Portfolio" };
//   }
// }

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const { data: project } = await getProject(slug);

    return {
      title: `${project.name} | Living Space Decor`,
      description: project.description,

      keywords: [
        project.name,
        "Interior Design Portfolio",
        "Home Interior",
        "Living Space Decor",
        "Interior Designer",
      ],

      alternates: {
        canonical: `https://livingspacedecor.in/portfolio/${slug}`,
      },

      robots: {
        index: true,
        follow: true,
      },
    };
  } catch {
    return {
      title: "Portfolio | Living Space Decor",
      description:
        "Explore our portfolio of premium interior design and home decor projects by Living Space Decor.",

      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  let project;
  try {
    const res = await getProject(slug);
    project = res.data;
  } catch {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
