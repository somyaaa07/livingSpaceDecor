const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
const TOKEN_KEY = "studio_admin_token";

export function getToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}
export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}
export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

async function request(path, { method = "GET", body, isForm = false } = {}) {
  const headers = {};
  const token = getToken();
  if (token) headers["Authorization"] = `Bearer ${token}`;
  if (!isForm && body) headers["Content-Type"] = "application/json";

  const res = await fetch(`${API}${path}`, {
    method,
    headers,
    body: isForm ? body : body ? JSON.stringify(body) : undefined,
  });

  let json;
  try {
    json = await res.json();
  } catch {
    json = null;
  }

  if (res.status === 401 && typeof window !== "undefined") {
    clearToken();
    window.dispatchEvent(new CustomEvent("auth:expired"));
  }

  if (!res.ok) {
    throw new Error(json?.message || `Request failed (${res.status})`);
  }
  return json;
}

export const adminApi = {
  login: (username, password) => request("/auth/login", { method: "POST", body: { username, password } }),
  me: () => request("/auth/me"),
  logout: () => request("/auth/logout", { method: "POST" }),
  changePassword: (currentPassword, newPassword) =>
    request("/auth/password", { method: "PUT", body: { currentPassword, newPassword } }),

  listProjects: (params = "") => request(`/admin/projects${params}`),
  getProject: (id) => request(`/admin/projects/${id}`),
  createProject: (data) => request("/project", { method: "POST", body: data }),
  updateProject: (id, data) => request(`/project/${id}`, { method: "PUT", body: data }),
  deleteProject: (id) => request(`/project/${id}`, { method: "DELETE" }),

  listBlogs: (params = "") => request(`/admin/blogs${params}`),
  getBlog: (id) => request(`/admin/blogs/${id}`),
  createBlog: (data) => request("/blog", { method: "POST", body: data }),
  updateBlog: (id, data) => request(`/blog/${id}`, { method: "PUT", body: data }),
  deleteBlog: (id) => request(`/blog/${id}`, { method: "DELETE" }),

  upload: (files) => {
    const form = new FormData();
    [...files].forEach((f) => form.append("images", f));
    return request("/upload", { method: "POST", body: form, isForm: true });
  },
};