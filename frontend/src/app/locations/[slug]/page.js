import { notFound } from "next/navigation";
import Image from "next/image";
import { getLocation, getLocations } from "@/lib/serverApi";

const API =
  process.env.NEXT_PUBLIC_API_URL?.replace("/api", "") ||
  "http://localhost:5000";

// Generate Static Params
export async function generateStaticParams() {
  const res = await getLocations();

  return res.data.map((location) => ({
    slug: location.slug,
  }));
}

// SEO Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const { data: location } = await getLocation(slug);

    return {
      title: `${location.title} | Living Space Decor`,
      description: location.description,

      keywords: [
        `${location.city} Interior Designer`,
        `${location.city} Home Interior`,
        location.service,
        "Living Space Decor",
        "Interior Design",
      ],

      alternates: {
        canonical: `https://livingspacedecor.in/locations/${slug}`,
      },

      robots: {
        index: true,
        follow: true,
      },
    };
  } catch {
    return {
      title: "Location Not Found | Living Space Decor",
      description: "The requested location could not be found.",
    };
  }
}

export default async function LocationPage({ params }) {
  const { slug } = await params;

  let location;

  try {
    const res = await getLocation(slug);
    location = res.data;
  } catch {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[500px]">
        {/* <Image
          src={
            location.heroImage
              ? `${API}${location.heroImage}`
              : "/placeholder.jpg"
          }
          alt={location.title}
          fill
          priority
          className="object-cover"
        /> */}

        <img
          src={
            location.heroImage
              ? `${API}${location.heroImage}`
              : "/placeholder.jpg"
          }
          alt={location.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-heading">
              {location.title}
            </h1>

            <p className="mt-5 max-w-2xl mx-auto">{location.description}</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto py-20 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#3D1F0D]">
              Our {location.service}
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-9">
              Living Space Decor specializes in premium{" "}
              <strong>{location.service}</strong> in{" "}
              <strong>{location.city}</strong>, {location.about}
            </p>
          </div>

          <div className="relative h-[450px] rounded-xl overflow-hidden">
            {/* <Image
              src={
                location.aboutImage
                  ? `${API}${location.aboutImage}`
                  : "/placeholder.jpg"
              }
              alt={location.service}
              fill
              className="object-cover"
            /> */}
            <img
              src={
                location.aboutImage
                  ? `${API}${location.aboutImage}`
                  : "/placeholder.jpg"
              }
              alt={location.service}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5EBE0] py-20 mt-16">
        <div className="max-w-4xl mx-auto text-center px-5">
          <h2 className="text-4xl font-bold">
            Looking for Interior Designers in {location.city}
          </h2>

          <p className="mt-5 text-gray-600">
            Call today and transform your dream home with Living Space Decor.
          </p>

          <a
            href="tel:+918826606869"
            className="inline-block mt-8 bg-[#3D1F0D] text-white px-8 py-4 rounded hover:bg-[#B8851F] transition"
          >
            Call Now
          </a>
        </div>
      </section>
    </main>
  );
}
