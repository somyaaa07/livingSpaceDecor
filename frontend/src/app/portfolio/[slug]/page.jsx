import { notFound } from "next/navigation";
import { getProject } from "@/lib/serverApi";
import ProjectDetail from "@/components/ProjectDetail";

export async function generateMetadata({ params }) {
  const { slug } = await params; 
  try {
    const { data: project } = await getProject(slug);
    return { title: `${project.name} — Studio Portfolio`, description: project.description };
  } catch {
    return { title: "Project — Studio Portfolio" };
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
