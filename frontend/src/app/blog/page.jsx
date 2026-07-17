import { getBlogs } from "@/lib/serverApi";
import BlogCard from "@/components/BlogCard";
import GridPagination from "@/components/GridPagination";
import Link from "next/link";

export const metadata = { title: "Journal — Studio" };

export default async function BlogPage({ searchParams }) {
  const { page: pageParam } = await searchParams;
  const page = parseInt(pageParam, 10) || 1;
  const { data: posts, pagination } = await getBlogs({ page, limit: 9 });

  return (
    <main className="min-h-screen bg-[#F5EBE0] text-[#3D1F0D]">
      {/* Hero Section */}
      <section className="relative h-[420px] md:h-[520px] w-full overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/image/banner.webp')" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#1A0F08]/70" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#C8972B]" />
            <p className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#C8972B] font-semibold">
              Journal
            </p>
            <span className="w-8 h-px bg-[#C8972B]" />
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-normal text-white mb-4">
            The <span className="text-[#C8972B]">Blog</span>
          </h1>

          <span className="w-14 h-px bg-[#C8972B] mb-5" />

          <p className="text-white/70 max-w-xl mx-auto font-light mb-6">
            Notes on design, materials, and process from the studio.
          </p>

          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-[#C8972B]">Blog</span>
          </div>
        </div>
      </section>

      {/* Title + Description before grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pt-16 pb-8 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8972B] font-semibold mb-4">
          Journal
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-normal mb-4">
          Latest Stories
        </h2>
        <p className="text-[#3D1F0D]/60 max-w-xl mx-auto font-light">
          Notes on design, materials, and process from the studio.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pb-24">
        {posts.length === 0 ? (
          <p className="text-center text-[#3D1F0D]/50 py-20">No posts published yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
        <GridPagination basePath="/blog" pagination={pagination} />
      </section>
    </main>
  );
}