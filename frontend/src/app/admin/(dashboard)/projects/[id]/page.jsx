"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { adminApi } from "@/lib/adminApi";
import { useToast } from "@/components/admin/ToastProvider";
import ProjectDetail from "@/components/ProjectDetail";

export default function AdminProjectPreviewPage() {
  const { id } = useParams();
  const router = useRouter();
  const showToast = useToast();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    adminApi
      .getProject(id)
      .then((res) => setProject(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {/* Admin preview toolbar - not part of the public design, sits above it */}
      <div className="sticky top-0 z-50 bg-brown-deep text-white px-6 py-3 flex items-center justify-between text-sm">
        <div className="flex items-center gap-3">
          <Link href="/admin/projects" className="text-white/60 hover:text-gold transition-colors">
            ← Back to Projects
          </Link>
          {project && (
            <span
              className={`text-[10.5px] uppercase font-semibold px-2.5 py-1 rounded-full ${
                project.isPublished ? "bg-success/20 text-success" : "bg-white/10 text-white/70"
              }`}
            >
              {project.isPublished ? "Published" : "Draft — preview only"}
            </span>
          )}
        </div>
        {project && (
          <button
            onClick={() => router.push(`/admin/projects?edit=${project.id}`)}
            className="bg-gold text-brown-deep px-4 py-2 rounded text-xs tracking-widest uppercase font-semibold"
          >
            Edit this project
          </button>
        )}
      </div>

      {loading && <p className="text-center text-brown/50 text-sm py-24">Loading preview…</p>}
      {error && <p className="text-center text-danger text-sm py-24">{error}</p>}
      {project && <ProjectDetail project={project} />}
    </div>
  );
}