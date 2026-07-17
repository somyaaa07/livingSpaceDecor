import { notFound } from "next/navigation";
import Image from "next/image";
import { locations } from "@/data/locations";

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const location = locations.find((item) => item.slug === slug);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `${location.title} | Living Space Decor`,
    description: location.description,
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;

  const location = locations.find((item) => item.slug === slug);

  if (!location) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src={location.image}
          alt={location.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-heading">
              {location.title}
            </h1>

            <p className="mt-5 max-w-2xl mx-auto text-md md:text-md">
              {location.description}
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto py-20 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
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

          {/* Right Section */}
          <div className="relative h-[450px] rounded-xl overflow-hidden">
            <Image
              src={location.aboutImage}
              alt={location.service}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5EBE0] py-20 mt-16">
        <div className="max-w-4xl mx-auto text-center px-5">
          <h2 className="text-4xl font-bold">
            Looking for Interior Designers in Noida
          </h2>

          <p className="mt-5 text-gray-600">
            Call Now today and transform your dream home with
            Living Space Decor.
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
