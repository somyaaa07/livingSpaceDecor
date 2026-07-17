"use client";

import useInView from "@/hooks/useInView";

export default function FadeUp({ children, delay = 0 }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
        transition: `all 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
