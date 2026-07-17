"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function AdminLoginPage() {
  const { admin, loading, login } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && admin) router.replace("/admin");
  }, [loading, admin, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await login(username, password);
      router.replace("/admin");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5EBE0] p-4 sm:p-6 relative overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#C8972B]/[0.08] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-[400px] h-[400px] bg-[#3D1F0D]/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative w-full max-w-4xl grid md:grid-cols-[1.05fr_1fr] rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(26,15,8,0.35)] border border-[#3D1F0D]/8 animate-[fadeUp_0.6s_ease-out]">
        {/* Left branding panel */}
        <div className="hidden md:flex flex-col justify-between bg-[#1A0F08]/90 p-9 lg:p-11 relative isolate">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A0F08]" />

          <div className="relative">
            {/* Monogram mark */}
            <div className="w-10 h-10 rounded-full border border-[#C8972B]/40 flex items-center justify-center mb-9">
              <span className="font-display text-[#C8972B] text-base leading-none">S</span>
            </div>

            <p className="flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-[#C8972B] font-semibold mb-7">
              <span className="w-[22px] h-px bg-[#C8972B] inline-block" />
              Studio Admin
            </p>
            <h2 className="font-display text-[2.1rem] lg:text-[2.6rem] text-[#F5EBE0] leading-[1.1] mb-5">
              Manage your
              <br />
              <span className="text-[#C8972B]">craft</span> with ease.
            </h2>
            <p className="text-[13.5px] text-[#F5EBE0]/45 max-w-[240px] leading-relaxed">
              Curate portfolio projects, publish journal entries, and keep the studio's story current.
            </p>
          </div>

          <div className="relative flex items-center gap-2.5 text-[11px] tracking-wide text-[#F5EBE0]/40">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8972B]/60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C8972B]" />
            </span>
            Secure admin access
          </div>
        </div>

        {/* Right form panel */}
        <div className="bg-[#F5EBE0] p-6 sm:p-9 md:p-11 lg:p-12 flex flex-col justify-center">
          <div className="md:hidden flex items-center gap-3 mb-6 sm:mb-7">
            <div className="w-8 h-8 rounded-full border border-[#C8972B]/40 flex items-center justify-center shrink-0">
              <span className="font-display text-[#C8972B] text-sm leading-none">S</span>
            </div>
            <p className="text-[9.5px] sm:text-[10px] tracking-[0.3em] uppercase text-[#C8972B] font-semibold">
              Studio Admin
            </p>
          </div>

          <h1 className="font-display text-[1.65rem] sm:text-[2rem] text-[#3D1F0D] mb-1.5">Welcome back</h1>
          <p className="text-[13px] sm:text-[13.5px] text-[#3D1F0D]/50 mb-7 sm:mb-8">
            Sign in to manage your projects and posts.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-[10px] tracking-[0.2em] uppercase text-[#3D1F0D]/50 font-semibold mb-1.5"
              >
                Username
              </label>
              <input
                id="username"
                className="autofill-fix w-full px-3.5 py-3 bg-white border border-[#3D1F0D]/12 rounded-lg text-sm text-[#3D1F0D] placeholder:text-[#3D1F0D]/25 focus:outline-none focus:border-[#C8972B] focus:ring-[3px] focus:ring-[#C8972B]/12 transition-all"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                autoComplete="username"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-[10px] tracking-[0.2em] uppercase text-[#3D1F0D]/50 font-semibold mb-1.5"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="autofill-fix w-full px-3.5 py-3 pr-11 bg-white border border-[#3D1F0D]/12 rounded-lg text-sm text-[#3D1F0D] placeholder:text-[#3D1F0D]/25 focus:outline-none focus:border-[#C8972B] focus:ring-[3px] focus:ring-[#C8972B]/12 transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#3D1F0D]/35 hover:text-[#3D1F0D]/65 transition-colors"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-1 text-[12.5px]">
              <label className="flex items-center gap-2 text-[#3D1F0D]/55 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-3.5 h-3.5 rounded-[3px] border-[#3D1F0D]/25 text-[#C8972B] focus:ring-[#C8972B]/30 accent-[#C8972B]"
                />
                Remember me
              </label>
              <a href="#" className="text-[#C8972B] hover:text-[#3D1F0D] transition-colors font-medium">
                Forgot password?
              </a>
            </div>

            {error && (
              <p className="bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg px-3.5 py-2.5">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 bg-[#C8972B] text-[#1A0F08] py-3.5 rounded-lg text-xs tracking-[0.15em] uppercase font-semibold mt-6 hover:bg-[#D9A93A] active:bg-[#B8871F] disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-[0_8px_20px_-6px_rgba(200,151,43,0.5)]"
            >
              {submitting ? (
                "Signing in…"
              ) : (
                <>
                  Sign in
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .autofill-fix:-webkit-autofill,
        .autofill-fix:-webkit-autofill:hover,
        .autofill-fix:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px white inset !important;
          -webkit-text-fill-color: #3d1f0d !important;
          transition: background-color 5000s ease-in-out 0s;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[fadeUp_0\\.6s_ease-out\\] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}