"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getLocations, deleteLocation } from "@/lib/serverApi";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, ImageOff, Loader2, MapPin } from "lucide-react";

const GOLD = "#C8972B";
const ESPRESSO = "#3D1F0D";

const API =
  process.env.NEXT_PUBLIC_API_URL?.replace("/api", "") ||
  "http://localhost:5000";

export default function LocationsPage() {
  const router = useRouter();

  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [confirmId, setConfirmId] = useState(null);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await getLocations();

      setLocations(res.data || []);
    } catch (err) {
      console.error(err);
      setError("Could not load locations.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeletingId(id);

    try {
      await deleteLocation(id);

      setLocations((prev) => prev.filter((loc) => loc.id !== id));
    } catch (err) {
      console.error(err);
      setError("Could not delete location.");
    } finally {
      setDeletingId(null);
      setConfirmId(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] px-4 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
              style={{ color: ESPRESSO }}
            >
              Locations
            </h1>
            <p className="mt-1 text-sm text-[#8A7A6D]">
              Manage every project location shown on the site
            </p>
          </div>

          <button
            onClick={() => router.push("/admin/locations/new")}
            className="inline-flex w-fit items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:shadow-md active:scale-[0.98]"
            style={{ backgroundColor: GOLD }}
          >
            <Plus size={18} strokeWidth={2.25} />
            Add Location
          </button>
        </div>

        {/* Error state */}
        {error && (
          <div className="mb-6 rounded-lg border border-[#E8B4B4] bg-[#FCEEEE] px-4 py-3 text-sm text-[#8A2B2B]">
            {error}
          </div>
        )}

        {/* Table card */}
        <div className="overflow-hidden rounded-2xl border border-[#EDE4D9] bg-white shadow-sm">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center gap-3 py-24">
              <Loader2
                size={28}
                className="animate-spin"
                style={{ color: GOLD }}
              />
              <p className="text-sm text-[#8A7A6D]">Loading locations…</p>
            </div>
          ) : locations.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
              <MapPin size={32} style={{ color: GOLD }} />
              <p className="text-base font-medium" style={{ color: ESPRESSO }}>
                No locations yet
              </p>
              <p className="max-w-sm text-sm text-[#8A7A6D]">
                Add your first location to have it appear here and on the site.
              </p>
              <button
                onClick={() => router.push("/admin/locations/new")}
                className="mt-2 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-md"
                style={{ backgroundColor: GOLD }}
              >
                <Plus size={16} />
                Add Location
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[#EDE4D9] bg-[#FBF7F1]">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#8A7A6D]">
                      Image
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#8A7A6D]">
                      Title
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#8A7A6D]">
                      City
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#8A7A6D]">
                      Service
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-[#8A7A6D]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence initial={false}>
                    {locations.map((loc, index) => (
                      <motion.tr
                        key={loc.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, delay: index * 0.02 }}
                        className="border-b border-[#F1E9DE] last:border-0 hover:bg-[#FBF7F1]"
                      >
                        <td className="px-6 py-4">
                          <div className="relative h-14 w-20 overflow-hidden rounded-lg bg-[#F1E9DE]">
                            {" "}
                            {loc.heroImage ? (
                              <Image
                                src={`${API}${loc.heroImage}`}
                                alt={loc.title}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center">
                                <ImageOff
                                  size={18}
                                  className="text-[#C9B79C]"
                                />
                              </div>
                            )}
                          </div>
                        </td>
                        <td
                          className="px-6 py-4 text-sm font-medium"
                          style={{ color: ESPRESSO }}
                        >
                          {loc.title}
                        </td>
                        <td className="px-6 py-4 text-sm text-[#6B5D50]">
                          {loc.city}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                            style={{
                              backgroundColor: "#F5E9D3",
                              color: ESPRESSO,
                            }}
                          >
                            {loc.service}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() =>
                                router.push(`/admin/locations/${loc.id}/edit`)
                              }
                              className="inline-flex items-center gap-1.5 rounded-lg border border-[#EDE4D9] px-3 py-1.5 text-xs font-medium transition-colors hover:bg-[#F5EFE5]"
                              style={{ color: ESPRESSO }}
                            >
                              <Pencil size={14} />
                              Edit
                            </button>

                            {confirmId === loc.id ? (
                              <div className="flex items-center gap-1.5">
                                <button
                                  onClick={() => handleDelete(loc.id)}
                                  disabled={deletingId === loc.id}
                                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#B23A3A] px-3 py-1.5 text-xs font-medium text-white transition-opacity disabled:opacity-60"
                                >
                                  {deletingId === loc.id ? (
                                    <Loader2
                                      size={14}
                                      className="animate-spin"
                                    />
                                  ) : (
                                    "Confirm"
                                  )}
                                </button>
                                <button
                                  onClick={() => setConfirmId(null)}
                                  className="rounded-lg px-3 py-1.5 text-xs font-medium text-[#8A7A6D] hover:bg-[#F5EFE5]"
                                >
                                  Cancel
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => setConfirmId(loc.id)}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-[#F1D6D6] px-3 py-1.5 text-xs font-medium text-[#B23A3A] transition-colors hover:bg-[#FCEEEE]"
                              >
                                <Trash2 size={14} />
                                Delete
                              </button>
                            )}
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
