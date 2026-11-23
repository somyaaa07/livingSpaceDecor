import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Living Space Decor",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center bg-[#F5EBE0] text-[#3D1F0D] px-6 text-center">
      <h1 className="font-display text-4xl md:text-5xl mb-4">Page not found</h1>
      <p className="mb-8 text-[#3D1F0D]/70">
        The page you are looking for has moved or does not exist.
      </p>
      <Link
        href="/"
        className="bg-[#3D1F0D] text-white px-8 py-3 rounded hover:bg-[#B8851F] transition"
      >
        Back to Home
      </Link>
    </main>
  );
}
