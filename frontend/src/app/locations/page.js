"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { locations } from "@/data/locations";

export default function LocationsPage() {
  const [search, setSearch] = useState("");

  const filteredLocations = locations.filter(
    (location) =>
      location.title.toLowerCase().includes(search.toLowerCase()) ||
      location.city.toLowerCase().includes(search.toLowerCase()) ||
      location.service.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-[#F5EBE0] text-center px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#3D1F0D] leading-tight max-w-3xl mx-auto">
          Interior Design Services by Location
        </h1>

        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
          Choose your location to explore our interior design services.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-xl mx-auto px-4 sm:px-0">
          <div className="relative flex items-center">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3D1F0D] opacity-60 pointer-events-none"
              size={20}
            />
            <input
              type="text"
              placeholder="Search by location or service..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-5 py-4 rounded-full border border-[#d6c4b0] bg-white focus:outline-none focus:ring-2 focus:ring-[#3D1F0D] focus:border-transparent shadow-md placeholder-gray-400 text-gray-700 text-sm sm:text-base transition"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#3D1F0D] transition text-lg leading-none"
              >
                ✕
              </button>
            )}
          </div>

          {search && (
            <p className="mt-3 text-sm text-gray-500 text-left pl-4">
              {filteredLocations.length === 0
                ? "No results found"
                : `${filteredLocations.length} location${filteredLocations.length !== 1 ? "s" : ""} found`}
            </p>
          )}
        </div>
      </section>

      {/* Location Cards */}
      <section className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        {filteredLocations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {filteredLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 bg-white border border-gray-100"
              >
                <div className="relative w-full h-52 sm:h-60 overflow-hidden">
                  <Image
                    src={location.image}
                    alt={location.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <h2 className="text-base sm:text-lg font-heading font-semibold text-[#3D1F0D] leading-snug">
                    {location.title}
                  </h2>

                  <p className="mt-2 sm:mt-3 text-gray-500 text-sm line-clamp-3">
                    {location.description}
                  </p>

                  <span className="mt-4 inline-block text-xs font-semibold text-[#3D1F0D] uppercase tracking-wider border-b border-[#3D1F0D] pb-0.5 group-hover:opacity-70 transition">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 sm:py-28">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg font-medium">
              No locations found for &ldquo;{search}&rdquo;
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Try a different city, service, or keyword.
            </p>
            <button
              onClick={() => setSearch("")}
              className="mt-6 px-6 py-2.5 rounded-full bg-[#3D1F0D] text-white text-sm font-medium hover:bg-[#5a2e14] transition"
            >
              Clear search
            </button>
          </div>
        )}
      </section>
    </main>
  );
}