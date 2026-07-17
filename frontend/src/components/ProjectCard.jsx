import Link from "next/link";
import Image from "next/image";
import { resolveImageUrl } from "@/lib/imageUrl";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block bg-white/40 border border-[#C8972B]/15 rounded-sm overflow-hidden hover:border-[#C8972B]/40 transition-colors"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#C8972B]/10">
        {project.image ? (
          <Image
            src={resolveImageUrl(project.image)}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[10px] tracking-widest uppercase text-[#3D1F0D]/30">
            No image
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3D1F0D]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6">
        {project.type && (
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8972B] font-semibold mb-2">
            {project.type}
          </p>
        )}
        <h3 className="font-display text-xl text-[#3D1F0D] mb-1">{project.name}</h3>
        <p className="text-xs tracking-wide text-[#3D1F0D]/50 uppercase">
          {project.location} {project.bhk ? `• ${project.bhk}` : ""}
        </p>
      </div>
    </Link>
  );
}