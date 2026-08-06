const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function safeFetch(url, options = {}) {
  const res = await fetch(url, {
    ...options,
    next: {
      revalidate: 60,
      ...(options.next || {}),
    },
  });

  const json = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(json?.message || `Request failed (${res.status})`);
  }

  return json;
}

// ======================= PROJECTS =======================

export async function getProjects({
  page = 1,
  limit = 12,
  type,
  style,
  search,
} = {}) {
  const params = new URLSearchParams({ page, limit });

  if (type) params.set("type", type);
  if (style) params.set("style", style);
  if (search) params.set("search", search);

  return safeFetch(`${API}/project?${params}`);
}

export async function getProject(slug) {
  return safeFetch(`${API}/project/${slug}`);
}

// ======================= BLOGS =======================

export async function getBlogs({
  page = 1,
  limit = 9,
  category,
  tag,
  search,
} = {}) {
  const params = new URLSearchParams({ page, limit });

  if (category) params.set("category", category);
  if (tag) params.set("tag", tag);
  if (search) params.set("search", search);

  return safeFetch(`${API}/blog?${params}`);
}

export async function getBlog(slug) {
  return safeFetch(`${API}/blog/${slug}`);
}

// ======================= LOCATIONS =======================

// List
export async function getLocations() {
  return safeFetch(`${API}/location`);
}

// Public page (slug)
export async function getLocation(slug) {
  return safeFetch(`${API}/location/${slug}`);
}


// Admin Edit (id)
export async function getLocationById(id) {
  const token = localStorage.getItem("studio_admin_token");

  return safeFetch(`${API}/location/id/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

// Create
export async function createLocation(formData) {
  const token = localStorage.getItem("studio_admin_token");

  return safeFetch(`${API}/location`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
}

// Update
export async function updateLocation(id, formData) {
  const token = localStorage.getItem("studio_admin_token");

  return safeFetch(`${API}/location/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
}

export async function deleteLocation(id) {
  const token = localStorage.getItem("studio_admin_token");

  console.log("Deleting:", id);
  console.log("Token:", token);

  return safeFetch(`${API}/location/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
