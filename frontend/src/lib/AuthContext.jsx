"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { adminApi, getToken, setToken, clearToken } from "./adminApi";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadFromToken = useCallback(async () => {
    if (!getToken()) {
      setAdmin(null);
      setLoading(false);
      return;
    }
    try {
      const res = await adminApi.me();
      setAdmin(res.data);
    } catch {
      clearToken();
      setAdmin(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadFromToken();
    const onExpired = () => setAdmin(null);
    window.addEventListener("auth:expired", onExpired);
    return () => window.removeEventListener("auth:expired", onExpired);
  }, [loadFromToken]);

  const login = async (username, password) => {
    const res = await adminApi.login(username, password);
    setToken(res.data.token);
    setAdmin(res.data.admin);
    return res.data.admin;
  };

  const logout = async () => {
    try {
      await adminApi.logout();
    } catch {
      // even if the server call fails, clear the local session
    }
    clearToken();
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, loading, login, logout }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
