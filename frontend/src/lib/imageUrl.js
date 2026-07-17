// src/utils/resolveImageUrl.js

// The backend's /api/upload endpoint returns relative paths like "/uploads/xyz.jpg".
// Those are only reachable on the BACKEND's origin (e.g. http://localhost:5000),
// not the frontend's own origin (e.g. http://localhost:3000) — so we prefix them here.

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
const ORIGIN = API.replace(/\/api(\/.*)?$/, ""); // strips /api, /api/, /api/v1, etc.

export function resolveImageUrl(url) {
  if (!url) return null; // null, not "", so next/image never sees an empty src
  if (/^https?:\/\//i.test(url)) return url; // already a full URL, leave as-is
  return `${ORIGIN}${url.startsWith("/") ? url : `/${url}`}`;
}