"use client";

import { useState } from "react";

export default function HoverButton({ children, primary = false }) {
  const [hovered, setHovered] = useState(false);

  const gold = "#B8882A";
  const goldLight = "#C8972B";

  const buttonStyle = primary
    ? {
        background: hovered ? goldLight : gold,
        color: "#fff",
        border: "none",
      }
    : {
        background: "transparent",
        color: hovered ? goldLight : "rgba(255,255,255,0.85)",
        border: `1px solid ${hovered ? gold : "rgba(184,136,42,0.5)"}`,
      };

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...buttonStyle,
        padding: "0.9rem 2.4rem",
        fontSize: "0.78rem",
        letterSpacing: "0.18em",
        fontWeight: 600,
        borderRadius: "2px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        textTransform: "uppercase",
      }}
    >
      {children}
    </button>
  );
}
