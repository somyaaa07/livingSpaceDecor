"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

const API =
  process.env.NEXT_PUBLIC_API_URL?.replace("/api", "") ||
  "http://localhost:5000";

export default function LocationsClient({ locations = [] }) {
  const [search, setSearch] = useState("");

  const filteredLocations = locations.filter((location) =>
    [location.title, location.city, location.service]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-[#F5EBE0] text-center px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#3D1F0D]">
          Interior Design Services by Location
        </h1>

        <p className="mt-4 text-gray-600">
          Choose your location to explore our interior design services.
        </p>

        <div className="mt-8 max-w-xl mx-auto">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={20}
            />

            <input
              type="text"
              placeholder="Search by location or service..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-10 py-4 rounded-full border"
            />

            {search && (
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2"
                onClick={() => setSearch("")}
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Location Cards */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        {filteredLocations.length === 0 ? (
          <div className="text-center">
            <h3 className="text-2xl font-semibold">No Locations Found</h3>

            <p className="text-gray-500 mt-2">Try another keyword.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredLocations.map((location) => (
              <Link
                key={location.id}
                href={`/locations/${location.slug}`}
                className="rounded-xl overflow-hidden shadow hover:shadow-xl transition"
              >
                <div className="h-60 w-full">
                  <img
                    src={
                      location.heroImage
                        ? `${API}${location.heroImage}`
                        : "/placeholder.jpg"
                    }
                    alt={location.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-lg font-semibold text-[#3D1F0D]">
                    {location.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                    {location.description}
                  </p>

                  <span className="inline-block mt-4 text-[#3D1F0D] font-semibold">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
