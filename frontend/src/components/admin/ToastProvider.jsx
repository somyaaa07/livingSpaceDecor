"use client";

import { createContext, useContext, useState, useCallback, useRef } from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToastState] = useState(null);
  const timerRef = useRef(null);

  const showToast = useCallback((message, type = "") => {
    setToastState({ message, type });
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setToastState(null), 3200);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {toast && (
        <div
          className={`fixed bottom-7 left-1/2 -translate-x-1/2 px-6 py-3 rounded-md text-sm z-[300] shadow-lg text-white ${
            toast.type === "error" ? "bg-danger" : toast.type === "success" ? "bg-success" : "bg-brown-deep"
          }`}
        >
          {toast.message}
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
