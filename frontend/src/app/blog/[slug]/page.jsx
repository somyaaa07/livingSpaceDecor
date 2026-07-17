import { notFound } from "next/navigation";
import { getBlog } from "@/lib/serverApi";
import BlogDetail from "@/components/BlogDetail";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const { data: post } = await getBlog(slug);   // ✅
    return { title: `${post.title} — Studio Journal`, description: post.excerpt };
  } catch {
    return { title: "Blogs - Interior Design Studio" };
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  let post;
  try {
    const res = await getBlog(slug);   // ✅
    post = res.data;
  } catch {
    notFound();
  }

  return <BlogDetail post={post} />;
}