const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function safeFetch(url, options = {}) {
  const res = await fetch(url, { ...options, next: { revalidate: 60, ...(options.next || {}) } });
  const json = await res.json().catch(() => null);
  if (!res.ok) {
    throw new Error(json?.message || `Request failed (${res.status})`);
  }
  return json;
}

// ── Portfolio projects ──
export async function getProjects({ page = 1, limit = 12, type, style, search } = {}) {
  const params = new URLSearchParams({ page, limit });
  if (type) params.set("type", type);
  if (style) params.set("style", style);
  if (search) params.set("search", search);
  return safeFetch(`${API}/project?${params.toString()}`);
}

export async function getProject(slug) {
  return safeFetch(`${API}/project/${slug}`, { next: { revalidate: 30 } });
}

// ── Blog posts ──
export async function getBlogs({ page = 1, limit = 9, category, tag, search } = {}) {
  const params = new URLSearchParams({ page, limit });
  if (category) params.set("category", category);
  if (tag) params.set("tag", tag);
  if (search) params.set("search", search);
  return safeFetch(`${API}/blog?${params.toString()}`);
}

export async function getBlog(slug) {
  return safeFetch(`${API}/blog/${slug}`, { next: { revalidate: 30 } });
}