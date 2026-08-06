import { notFound } from "next/navigation";
import { getBlog } from "@/lib/serverApi";
import BlogDetail from "@/components/BlogDetail";

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   try {
//     const { data: post } = await getBlog(slug);
//     return { title: `${post.title} — Studio Journal`, description: post.excerpt };
//   } catch {
//     return { title: "Blogs - Interior Design Studio" };
//   }
// }

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const { data: post } = await getBlog(slug);

    return {
      title: `${post.title} | Living Space Decor`,
      description: post.excerpt,

      keywords: post.tags || [
        "Interior Designer in Greater Noida",
        "Interior Designer",
        "Home Interior",
        "Living Space Decor",
        "Modular Kitchen",
      ],

      alternates: {
        canonical: `https://livingspacedecor.in/blog/${slug}`,
      },

      robots: {
        index: true,
        follow: true,
      },
    };
  } catch {
    return {
      title: "Blog | Living Space Decor",
      description: "Interior designer blogs by Living Space Decor.",
    };
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  let post;
  try {
    const res = await getBlog(slug);
    post = res.data;
  } catch {
    notFound();
  }

  return <BlogDetail post={post} />;
}
