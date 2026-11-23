// LocalBusiness structured data. NAP must match the Google Business Profile exactly.
export const BUSINESS = {
  name: "Living Space Decor",
  phone: "+91-8826606869",
  phoneHref: "tel:+918826606869",
  whatsappHref: "https://wa.me/918826606869",
  street: "Shop-LGB 28, Galaxy Diamond Plaza, Sector 4",
  locality: "Greater Noida West",
  region: "Uttar Pradesh",
  postalCode: "201318",
  url: "https://livingspacedecor.in",
  mapEmbed:
    "https://www.google.com/maps?q=Living+Space+Decor,+Galaxy+Diamond+Plaza,+Sector+4,+Greater+Noida+West&output=embed",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BUSINESS.url}/#business`,
  name: BUSINESS.name,
  url: BUSINESS.url,
  telephone: BUSINESS.phone,
  image: `${BUSINESS.url}/favicon.ico`,
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.locality,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postalCode,
    addressCountry: "IN",
  },
  areaServed: [
    "Noida",
    "Greater Noida",
    "Greater Noida West",
    "Ghaziabad",
    "Indirapuram",
    "Vasundhara",
    "Delhi NCR",
  ].map((name) => ({ "@type": "City", name })),
  knowsAbout: [
    "Interior Design",
    "Turnkey Interior Projects",
    "Modular Kitchen",
    "Wardrobe Design",
    "Home Renovation",
    "Architecture",
  ],
};

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
