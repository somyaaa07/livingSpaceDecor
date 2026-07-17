"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { adminApi } from "@/lib/adminApi";
import { useToast } from "@/components/admin/ToastProvider";
import { resolveImageUrl } from "@/lib/imageUrl";
import Drawer from "@/components/admin/Drawer";
import BlogForm from "@/components/admin/BlogForm";
import { Search, Plus, Eye, Pencil, Trash2, ImageOff } from "lucide-react";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [drawer, setDrawer] = useState(null); // null | { blog: null|obj }
  const [confirmId, setConfirmId] = useState(null);
  const showToast = useToast();
  const debounceRef = useRef(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const refresh = useCallback((q = "") => {
    setLoading(true);
    const query = q ? `?search=${encodeURIComponent(q)}` : "";
    return adminApi.listBlogs(query).then((res) => {
      setBlogs(res.data);
      setLoading(false);
      return res.data;
    });
  }, []);

  useEffect(() => {
    refresh().then((data) => {
      const editId = searchParams.get("edit");
      if (editId) {
        const match = data.find((b) => String(b.id) === editId);
        if (match) setDrawer({ blog: match });
        router.replace(pathname);
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => clearTimeout(debounceRef.current), []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => refresh(value), 350);
  };

  const remove = async (id) => {
    try {
      await adminApi.deleteBlog(id);
      showToast("Blog post deleted", "success");
      setConfirmId(null);
      refresh(search);
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  const handleSaved = () => {
    setDrawer(null);
    refresh(search);
  };

  const StatusBadge = ({ published }) => (
    <span
      className={`inline-flex items-center gap-1.5 text-[10.5px] uppercase font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
        published ? "bg-emerald-50 text-emerald-600" : "bg-[#3D1F0D]/5 text-[#3D1F0D]/50"
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${published ? "bg-emerald-500" : "bg-[#3D1F0D]/30"}`} />
      {published ? "Published" : "Draft"}
    </span>
  );

  const RowActions = ({ blog }) => (
    <div className="flex flex-wrap gap-2 lg:justify-end">
      <Link
        href={`/admin/blogs/${blog.id}`}
        className="flex items-center gap-1.5 text-[10.5px] uppercase font-semibold border border-[#3D1F0D]/15 text-[#3D1F0D]/60 rounded-lg px-3 py-1.5 hover:border-[#C8972B] hover:text-[#C8972B] transition-colors"
      >
        <Eye className="w-3 h-3" />
        View
      </Link>
      <button
        onClick={() => setDrawer({ blog })}
        className="flex items-center gap-1.5 text-[10.5px] uppercase font-semibold border border-[#3D1F0D]/15 text-[#3D1F0D]/60 rounded-lg px-3 py-1.5 hover:border-[#C8972B] hover:text-[#C8972B] transition-colors"
      >
        <Pencil className="w-3 h-3" />
        Edit
      </button>
      <button
        onClick={() => setConfirmId(blog.id)}
        className="flex items-center gap-1.5 text-[10.5px] uppercase font-semibold bg-red-50 text-red-600 rounded-lg px-3 py-1.5 hover:bg-red-600 hover:text-white transition-colors"
      >
        <Trash2 className="w-3 h-3" />
        Delete
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F5EBE0]">
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 px-5 sm:px-8 lg:px-11 pt-7 sm:pt-9 pb-5 sm:pb-6 border-b border-[#3D1F0D]/10">
        <div>
          <p className="flex items-center gap-2.5 sm:gap-3 text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.35em] uppercase text-[#C8972B] font-semibold mb-2">
            <span className="w-[18px] sm:w-[22px] h-px bg-[#C8972B] inline-block" />
            Content
          </p>
          <h1 className="font-display text-2xl sm:text-3xl text-[#3D1F0D]">Blog Posts</h1>
        </div>
        <button
          onClick={() => setDrawer({ blog: null })}
          className="flex items-center justify-center gap-1.5 bg-[#C8972B] text-[#1A0F08] px-5 py-3 rounded-lg text-xs tracking-widest uppercase font-semibold hover:bg-[#D9A93A] active:bg-[#B8871F] transition-colors shadow-[0_8px_20px_-8px_rgba(200,151,43,0.5)] w-full sm:w-auto"
        >
          <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
          New
        </button>
      </header>

      <div className="p-5 sm:p-8 lg:p-11">
        <div className="relative max-w-xs w-full mb-5">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3D1F0D]/35" />
          <input
            className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-[#3D1F0D]/12 rounded-lg text-sm text-[#3D1F0D] placeholder:text-[#3D1F0D]/30 focus:outline-none focus:border-[#C8972B] focus:ring-[3px] focus:ring-[#C8972B]/12 transition-all"
            placeholder="Search blog posts…"
            value={search}
            onChange={handleSearch}
          />
        </div>

        {/* Mobile / tablet: card list */}
        <div className="lg:hidden flex flex-col gap-3">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="bg-white border border-[#3D1F0D]/10 rounded-xl p-4 flex gap-3">
                  <div className="w-14 h-11 rounded-md bg-[#3D1F0D]/6 animate-pulse shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3.5 w-2/3 rounded bg-[#3D1F0D]/6 animate-pulse" />
                    <div className="h-3 w-1/3 rounded bg-[#3D1F0D]/6 animate-pulse" />
                  </div>
                </div>
              ))
            : blogs.map((b) => (
                <div
                  key={b.id}
                  className="bg-white border border-[#3D1F0D]/10 rounded-xl p-4 hover:border-[#C8972B]/40 transition-colors"
                >
                  <div className="flex gap-3 mb-3">
                    {b.coverImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={resolveImageUrl(b.coverImage)}
                        alt=""
                        className="w-14 h-11 object-cover rounded-md bg-[#C8972B]/10 shrink-0"
                      />
                    ) : (
                      <div className="w-14 h-11 rounded-md bg-[#3D1F0D]/6 flex items-center justify-center shrink-0">
                        <ImageOff className="w-4 h-4 text-[#3D1F0D]/25" />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm text-[#3D1F0D] truncate">{b.title}</p>
                      <p className="text-xs text-[#3D1F0D]/50 truncate">
                        {b.category || "—"} • {b.author || "—"}
                      </p>
                      <div className="mt-1.5">
                        <StatusBadge published={b.isPublished} />
                      </div>
                    </div>
                  </div>
                  <RowActions blog={b} />
                </div>
              ))}

          {!loading && blogs.length === 0 && (
            <div className="text-center py-16 px-6 bg-white border border-[#3D1F0D]/10 rounded-xl">
              <p className="text-sm text-[#3D1F0D]/40 mb-4">
                {search ? `No blog posts match "${search}".` : `No blog posts yet — click "New" to write your first one.`}
              </p>
              {!search && (
                <button
                  onClick={() => setDrawer({ blog: null })}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#C8972B] hover:text-[#3D1F0D] transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Write your first post
                </button>
              )}
            </div>
          )}
        </div>

        {/* Desktop (lg+): table */}
        <div className="hidden lg:block bg-white border border-[#3D1F0D]/10 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[720px]">
              <thead>
                <tr className="bg-[#C8972B]/5">
                  <th className="w-14"></th>
                  <th className="text-left text-[10px] tracking-widest uppercase text-[#3D1F0D]/45 font-semibold px-4 py-3.5 border-b border-[#3D1F0D]/8">
                    Title
                  </th>
                  <th className="text-left text-[10px] tracking-widest uppercase text-[#3D1F0D]/45 font-semibold px-4 py-3.5 border-b border-[#3D1F0D]/8">
                    Category
                  </th>
                  <th className="text-left text-[10px] tracking-widest uppercase text-[#3D1F0D]/45 font-semibold px-4 py-3.5 border-b border-[#3D1F0D]/8">
                    Author
                  </th>
                  <th className="text-left text-[10px] tracking-widest uppercase text-[#3D1F0D]/45 font-semibold px-4 py-3.5 border-b border-[#3D1F0D]/8">
                    Status
                  </th>
                  <th className="w-52 border-b border-[#3D1F0D]/8"></th>
                </tr>
              </thead>
              <tbody>
                {loading
                  ? Array.from({ length: 4 }).map((_, i) => (
                      <tr key={i} className="border-b border-[#3D1F0D]/5 last:border-none">
                        <td className="px-4 py-3">
                          <div className="w-11 h-8 rounded-md bg-[#3D1F0D]/6 animate-pulse" />
                        </td>
                        <td className="px-4 py-3" colSpan={5}>
                          <div className="h-3.5 w-40 rounded bg-[#3D1F0D]/6 animate-pulse" />
                        </td>
                      </tr>
                    ))
                  : blogs.map((b) => (
                      <tr
                        key={b.id}
                        className="border-b border-[#3D1F0D]/5 last:border-none hover:bg-[#C8972B]/[0.03] transition-colors"
                      >
                        <td className="px-4 py-2.5">
                          {b.coverImage ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={resolveImageUrl(b.coverImage)}
                              alt=""
                              className="w-11 h-8 object-cover rounded-md bg-[#C8972B]/10"
                            />
                          ) : (
                            <div className="w-11 h-8 rounded-md bg-[#3D1F0D]/6 flex items-center justify-center">
                              <ImageOff className="w-3.5 h-3.5 text-[#3D1F0D]/25" />
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-2.5 font-medium text-sm text-[#3D1F0D]">{b.title}</td>
                        <td className="px-4 py-2.5 text-sm text-[#3D1F0D]/60">{b.category || "—"}</td>
                        <td className="px-4 py-2.5 text-sm text-[#3D1F0D]/60">{b.author || "—"}</td>
                        <td className="px-4 py-2.5">
                          <StatusBadge published={b.isPublished} />
                        </td>
                        <td className="px-4 py-2.5">
                          <RowActions blog={b} />
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>

          {!loading && blogs.length === 0 && (
            <div className="text-center py-16 px-6">
              <p className="text-sm text-[#3D1F0D]/40 mb-4">
                {search ? `No blog posts match "${search}".` : `No blog posts yet — click "New" to write your first one.`}
              </p>
              {!search && (
                <button
                  onClick={() => setDrawer({ blog: null })}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#C8972B] hover:text-[#3D1F0D] transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Write your first post
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <Drawer
        open={!!drawer}
        eyebrow={drawer?.blog ? "Edit blog post" : "New blog post"}
        title={drawer?.blog ? drawer.blog.title : "New blog post"}
        onClose={() => setDrawer(null)}
      >
        {drawer && <BlogForm blogId={drawer.blog?.id} onSaved={handleSaved} onCancel={() => setDrawer(null)} />}
      </Drawer>

      {/* Delete confirmation */}
      {confirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A0F08]/50 backdrop-blur-sm p-6">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-2xl">
            <h3 className="font-display text-xl text-[#3D1F0D] mb-2">Delete this post?</h3>
            <p className="text-sm text-[#3D1F0D]/55 mb-6">
              This can't be undone. The blog post will be permanently removed.
            </p>
            <div className="flex justify-end gap-2.5">
              <button
                onClick={() => setConfirmId(null)}
                className="text-xs uppercase tracking-widest font-semibold px-4 py-2.5 rounded-lg text-[#3D1F0D]/60 hover:bg-[#3D1F0D]/5 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => remove(confirmId)}
                className="text-xs uppercase tracking-widest font-semibold px-4 py-2.5 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}