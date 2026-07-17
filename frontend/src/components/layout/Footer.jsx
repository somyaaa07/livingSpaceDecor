"use client";

import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Modular Kitchens", href: "/kitchen-design" },
  { label: "Kitchen Cost Calculator", href: "/kitchen-calculator" },
  {
    label: "Modular Kitchen Design Ideas",
    href: "/services/design-ideas/kitchen-design-ideas",
  },
];
const MORE_LINK = [
  { label: "Architecture & Construction", href: "/services/architecture" },
  { label: "Furnitures", href: "/services/furnitures" },
  { label: "Trunkey Projects", href: "/services/turnkey-projects" },
];

const SERVICE_LINKS = [
  { label: "Wardrobe", href: "/services/wardrobes" },
  { label: "Wardrobe Cost Calculator", href: "/wardrobe-calculator" },
];
const DESIGN_IDEAS = [
  {
    label: "Living Room Designs",
    href: "/services/design-ideas/living-room-design",
  },
  {
    label: "Kids Room Designs",
    href: "/services/design-ideas/kids-room-design",
  },
  {
    label: "Modular Kitchen Designs",
    href: "/services/design-ideas/kitchen-design-ideas",
  },
  { label: "Mandir Designs", href: "/services/design-ideas/mandir-design" },
  {
    label: "Dining Room Designs",
    href: "/services/design-ideas/dining-room-design",
  },
  {
    label: "Bathroom Design",
    href: "/services/design-ideas/bathroom-design",
  },
  { label: "Bedroom Design", href: "/services/design-ideas/bathroom-design" },
  {
    label: "Home Office Design",
    href: "/services/design-ideas/home-office-design",
  },
  {
    label: "Balcony & Terrace Designs",
    href: "/services/design-ideas/balcony-terrace-design",
  },
];

const SOCIAL_ICONS = [
  {
    label: "Facebook",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  { label: "Instagram", isInstagram: true },
  {
    label: "YouTube",
    path: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z M9.75 15.02l5.75-3.02-5.75-3.02v6.04z",
  },
];

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function SocialIcon({ icon }) {
  if (icon.isInstagram) return <InstagramIcon />;
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={icon.path} />
    </svg>
  );
}

function ColTitle({ children }) {
  return (
    <p
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: 9.5,
        fontWeight: 500,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#C8972B",
        margin: "0 0 24px",
        paddingBottom: 12,
        borderBottom: "0.5px solid rgba(200,151,43,0.25)",
      }}
    >
      {children}
    </p>
  );
}

function LinkRow({ label, href = "/" }) {
  return (
    <li style={{ listStyle: "none" }}>
      <Link
        href={href}
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: 13.5,
          fontWeight: 300,
          color: "rgba(245,235,224,0.62)",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "9px 0",
          borderBottom: "0.5px solid rgba(255,255,255,0.05)",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#C8972B";
          e.currentTarget.querySelector(".arr").style.opacity = "1";
          e.currentTarget.querySelector(".arr").style.transform =
            "translateX(0)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "rgba(245,235,224,0.62)";
          e.currentTarget.querySelector(".arr").style.opacity = "0";
          e.currentTarget.querySelector(".arr").style.transform =
            "translateX(-4px)";
        }}
      >
        {label}
        <span
          className="arr"
          style={{
            opacity: 0,
            transform: "translateX(-4px)",
            transition: "all 0.2s",
            fontSize: 12,
            color: "#C8972B",
          }}
        >
          →
        </span>
      </Link>
    </li>
  );
}

function ContactRow({ icon, label, value, href }) {
  const content = (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 14,
        padding: "12px 0",
        borderBottom: "0.5px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          flexShrink: 0,
          border: "0.5px solid rgba(200,151,43,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#C8972B",
        }}
      >
        {icon}
      </div>
      <div>
        <p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(245,235,224,0.4)",
            margin: "0 0 3px",
          }}
        >
          {label}
        </p>
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 13.5,
            fontWeight: 300,
            color: "rgba(245,235,224,0.75)",
          }}
        >
          {value}
        </span>
      </div>
    </div>
  );

  if (href)
    return (
      <a href={href} style={{ textDecoration: "none", display: "block" }}>
        {content}
      </a>
    );

  return content;
}

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr 0.9fr 1fr 0.9fr 1.1fr;
          gap: 32px;
          margin-bottom: 64px;
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-badge {
          display: flex;
        }
        .footer-legal-links {
          display: flex;
          gap: 24px;
        }
        .footer-developed {
          font-family: Poppins;
          font-size: 12px;
          font-weight: 300;
          color: rgba(245, 235, 224, 0.35);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-developed:hover {
          color: #C8972B;
        }

        /* Large laptop: below 1200px — tighten to 3 columns x 2 rows */
        @media (max-width: 1199px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 36px 28px;
          }
        }

        /* Tablet: 768px–1023px — 2 columns */
        @media (max-width: 1023px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px 32px;
          }
        }

        /* Mobile: up to 767px — single column */
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 48px 20px !important;
            margin-bottom: 48px;
          }
          .footer-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            padding: 20px !important;
          }
          .footer-badge {
            display: none;
          }
          .footer-legal-links {
            gap: 16px;
            flex-direction: column;
          }
        }

        /* Small mobile: up to 400px */
        @media (max-width: 400px) {
          .footer-grid {
            gap: 32px;
          }
        }
      `}</style>

      <footer
        style={{
          background: "#3D1F0D",
          color: "#F5EBE0",
          fontFamily: "'Sync', Poppins",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Main grid */}
        <div
          className="footer-grid"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1280,
            margin: "0 auto",
            padding: "72px 40px",
          }}
        >
          {/* Col 1 — Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 group flex-shrink-0"
            >
              <Image
                src="/footer-logo.png"
                alt="Living Space Decor"
                width={300}
                height={80}
                priority
                className="h-30 w-auto object-contain -mt-15"
              />
            </Link>

            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 13.5,
                fontWeight: 300,
                color: "rgba(245,235,224,0.62)",
                lineHeight: 1.85,
                margin: "0 0 28px",
              }}
            >
              Crafting elevated living environments across Noida & Delhi NCR.
              Every project is a synthesis of artisan craft, precise execution,
              and your singular vision.
            </p>

            <div style={{ display: "flex", gap: 10 }}>
              {SOCIAL_ICONS.map((icon) => (
                <a
                  key={icon.label}
                  href="#"
                  aria-label={icon.label}
                  style={{
                    width: 38,
                    height: 38,
                    border: "0.5px solid rgba(200,151,43,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(245,235,224,0.5)",
                    transition: "all 0.25s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#C8972B";
                    e.currentTarget.style.color = "#C8972B";
                    e.currentTarget.style.background = "rgba(200,151,43,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(200,151,43,0.35)";
                    e.currentTarget.style.color = "rgba(245,235,224,0.5)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <SocialIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Kitchens */}
          <div>
            <ColTitle>Kitchens</ColTitle>
            <ul style={{ padding: 0, margin: 0 }}>
              {NAV_LINKS.map((item) => (
                <LinkRow key={item.label} label={item.label} href={item.href} />
              ))}
            </ul>
          </div>

          {/* Col 3 — Wardrobes */}
          <div>
            <ColTitle>Wardrobes</ColTitle>
            <ul style={{ padding: 0, margin: 0 }}>
              {SERVICE_LINKS.map((s) => (
                <LinkRow key={s.label} label={s.label} href={s.href} />
              ))}
            </ul>
          </div>

          {/* Col 4 — Design Ideas */}
          <div>
            <ColTitle>Design Ideas</ColTitle>
            <ul style={{ padding: 0, margin: 0 }}>
              {DESIGN_IDEAS.map((s) => (
                <LinkRow key={s.label} label={s.label} href={s.href} />
              ))}
            </ul>
          </div>

          {/* Col 5 — More */}
          <div>
            <ColTitle>More</ColTitle>
            <ul style={{ padding: 0, margin: 0 }}>
              {MORE_LINK.map((s) => (
                <LinkRow key={s.label} label={s.label} href={s.href} />
              ))}
            </ul>
          </div>

          {/* Col 6 — Contact */}
          <div>
            <ColTitle>Reach Us</ColTitle>

            <ContactRow
              label="Studio"
              value="Shop-LGB 28, Galaxy Diamond Plaza Sector 4 Greater Noida West, Greater Noida, Uttar Pradesh 201009"
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
            />

            <ContactRow
              label="Call"
              value="+91 8826606869"
              href="tel:+918826606869"
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              }
            />

            <ContactRow
              label="Email"
              value="info@livingspacedecor.com"
              href="mailto:info@livingspacedecor.com"
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              }
            />
          </div>
        </div>

        <div
          style={{
            borderTop: "0.5px solid rgba(200,151,43,0.2)",
            borderBottom: "0.5px solid rgba(200,151,43,0.2)",
          }}
        />

        {/* Bottom bar */}
        <div style={{ borderTop: "0.5px solid rgba(200,151,43,0.1)" }}>
          <div
            className="footer-bottom-bar"
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "20px 40px",
            }}
          >
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: 12,
                fontWeight: 300,
                color: "rgba(245,235,224,0.35)",
                margin: 0,
              }}
            >
              © 2026 Living Space Decor Pvt. Ltd. All rights reserved.
            </p>

            <div
              className="footer-badge"
              style={{
                alignItems: "center",
                gap: 8,
                fontFamily: "Poppins",
                fontSize: 11,
                color: "rgba(245,235,224,0.3)",
                letterSpacing: "0.06em",
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#C8972B",
                  opacity: 0.6,
                  display: "inline-block",
                }}
              />
              Best Interior Design — Noida 2026
            </div>

            <a
              href="https://deboxtechnology.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-developed"
            >
              Developed by Debox Technology
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
