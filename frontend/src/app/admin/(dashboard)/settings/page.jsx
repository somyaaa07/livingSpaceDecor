"use client";

import { useState } from "react";
import { adminApi } from "@/lib/adminApi";

export default function SettingsPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [msg, setMsg] = useState(null); // { text, type }
  const [saving, setSaving] = useState(false);
  const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);
    setSaving(true);
    try {
      await adminApi.changePassword(currentPassword, newPassword);
      setMsg({ text: "Password updated.", type: "success" });
      setCurrentPassword("");
      setNewPassword("");
    } catch (err) {
      setMsg({ text: err.message, type: "error" });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <header className="flex items-end justify-between px-11 pt-9 pb-6 border-b border-gold/25">
        <div>
          <p className="flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-gold font-semibold mb-2">
            <span className="w-[22px] h-px bg-gold inline-block" />
            Account
          </p>
          <h1 className="font-display text-3xl">Settings</h1>
        </div>
      </header>

      <div className="p-11">
        <div className="bg-white border border-gold/25 rounded-md p-8 max-w-md">
          <h3 className="font-display text-xl mb-4">Change password</h3>
          <form onSubmit={handleSubmit}>
            <label className="block text-[10px] tracking-[0.2em] uppercase text-brown/55 font-semibold mb-1.5">
              Current password
            </label>
            <input
              type="password"
              required
              className="w-full px-3 py-2.5 border border-brown/15 rounded text-sm mb-4 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/15"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <label className="block text-[10px] tracking-[0.2em] uppercase text-brown/55 font-semibold mb-1.5">
              New password
            </label>
            <input
              type="password"
              required
              minLength={8}
              className="w-full px-3 py-2.5 border border-brown/15 rounded text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/15"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            {msg && (
              <p className={`text-xs rounded px-3 py-2.5 mt-4 ${msg.type === "success" ? "bg-success/10 text-success" : "bg-danger/10 text-danger"}`}>
                {msg.text}
              </p>
            )}

            <button
              type="submit"
              disabled={saving}
              className="bg-gold text-brown-deep px-5 py-3 rounded text-xs tracking-widest uppercase font-semibold mt-6 disabled:opacity-60"
            >
              {saving ? "Updating…" : "Update password"}
            </button>
          </form>
        </div>

        <div className="bg-white border border-gold/25 rounded-md p-8 max-w-md mt-6">
          <h3 className="font-display text-xl mb-3">Connection</h3>
          <p className="text-xs text-brown/55 leading-relaxed">
            This panel talks to <code className="bg-gold/10 px-1.5 py-0.5 rounded text-[11px]">{apiBase}</code>.
            Set <code className="bg-gold/10 px-1.5 py-0.5 rounded text-[11px]">NEXT_PUBLIC_API_URL</code> in{" "}
            <code className="bg-gold/10 px-1.5 py-0.5 rounded text-[11px]">.env.local</code> to point at a different API.
          </p>
        </div>
      </div>
    </div>
  );
}
