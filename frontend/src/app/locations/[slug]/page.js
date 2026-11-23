import { notFound } from "next/navigation";
import Image from "next/image";
import { getLocation, getLocations } from "@/lib/serverApi";
import Markdown from "@/components/common/Markdown";
import { BUSINESS } from "@/components/seo/LocalBusinessSchema";

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
      title:
        location.seoTitle ||
        (/living space decor/i.test(location.title)
          ? location.title
          : `${location.title} | Living Space Decor`),
      description: location.seoDescription || location.description,

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

  const isMarkdown = /(^|\n)\s*(#{1,6}\s|[-*•]\s|\d+[.)]\s)|\n\s*\n/.test(
    location.about || "",
  );

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BUSINESS.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${BUSINESS.url}/locations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.title,
        item: `${BUSINESS.url}/locations/${slug}`,
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold text-[#3D1F0D]">
              Our {location.service}
            </h2>

            {isMarkdown ? (
              <>
                <p className="mt-6 text-lg text-gray-600 leading-9">
                  Living Space Decor specializes in premium{" "}
                  <strong>{location.service}</strong> in{" "}
                  <strong>{location.city}</strong>.
                </p>
                <Markdown text={location.about} />
              </>
            ) : (
              <p className="mt-6 text-lg text-gray-600 leading-9">
                Living Space Decor specializes in premium{" "}
                <strong>{location.service}</strong> in{" "}
                <strong>{location.city}</strong>, {location.about}
              </p>
            )}
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

      {/* Visit / contact – NAP must match Google Business Profile */}
      <section className="max-w-7xl mx-auto px-5 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="bg-[#F5EBE0] p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-[#3D1F0D]">
              Visit Our Design Studio
            </h2>
            <address className="not-italic mt-5 text-lg text-gray-700 leading-8">
              <strong>{BUSINESS.name}</strong>
              <br />
              {BUSINESS.street}
              <br />
              {BUSINESS.locality}, {BUSINESS.region} {BUSINESS.postalCode}
              <br />
              Phone:{" "}
              <a href={BUSINESS.phoneHref} className="text-[#B8851F]">
                {BUSINESS.phone}
              </a>
            </address>
            <p className="mt-4 text-gray-600">
              We serve homes and offices in {location.city} and across Noida,
              Greater Noida, Ghaziabad, Indirapuram and Vasundhara.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={BUSINESS.phoneHref}
                className="bg-[#3D1F0D] text-white px-6 py-3 rounded hover:bg-[#B8851F] transition"
              >
                Call Now
              </a>
              <a
                href={`${BUSINESS.whatsappHref}?text=${encodeURIComponent(
                  `Hi, I need interior design in ${location.city}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded hover:opacity-90 transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl min-h-[320px]">
            <iframe
              title={`${BUSINESS.name} location`}
              src={BUSINESS.mapEmbed}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[320px] border-0"
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
