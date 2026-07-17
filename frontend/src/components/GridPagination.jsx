import Link from "next/link";

export default function GridPagination({ basePath, pagination }) {
  const { page, pages } = pagination;
  if (pages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-3 mt-16">
      <Link
        href={`${basePath}?page=${Math.max(1, page - 1)}`}
        aria-disabled={page <= 1}
        className={`px-4 py-2 text-xs tracking-widest uppercase border rounded-sm transition-colors ${
          page <= 1
            ? "pointer-events-none opacity-30 border-[#3D1F0D]/15"
            : "border-[#C8972B]/30 hover:border-[#C8972B] text-[#3D1F0D]"
        }`}
      >
        Prev
      </Link>
      <span className="text-xs tracking-widest uppercase text-[#3D1F0D]/50">
        {page} / {pages}
      </span>
      <Link
        href={`${basePath}?page=${Math.min(pages, page + 1)}`}
        aria-disabled={page >= pages}
        className={`px-4 py-2 text-xs tracking-widest uppercase border rounded-sm transition-colors ${
          page >= pages
            ? "pointer-events-none opacity-30 border-[#3D1F0D]/15"
            : "border-[#C8972B]/30 hover:border-[#C8972B] text-[#3D1F0D]"
        }`}
      >
        Next
      </Link>
    </div>
  );
}
