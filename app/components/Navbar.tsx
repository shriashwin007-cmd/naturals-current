"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Gallery",  href: "#gallery"  },
  { label: "Book",     href: "#booking"  },
  { label: "About",    href: "#about"    },
  { label: "Reviews",  href: "#reviews"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
        padding: "22px 60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backdropFilter: "blur(14px)",
        background: scrolled ? "rgba(30,4,60,0.95)" : "rgba(59,7,100,0.6)",
        borderBottom: "1px solid rgba(168,85,247,0.15)",
        transition: "background 0.4s",
      }}
    >
      {/* Logo */}
      <a
        href="#home"
        className="font-display"
        style={{ fontSize: "1.7rem", fontWeight: 600, letterSpacing: "0.04em", color: "var(--white)", textDecoration: "none" }}
      >
        Naturals<span style={{ color: "var(--purple-glow)" }}>.</span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex" style={{ gap: "40px", listStyle: "none" }}>
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="nav-link-dark">{l.label}</a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <a
        href="#booking"
        className="hidden md:inline-block"
        style={{
          background: "var(--purple-mid)",
          color: "var(--white)",
          padding: "10px 28px",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          borderRadius: "2px",
          textDecoration: "none",
          transition: "background 0.3s, box-shadow 0.3s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "var(--purple-light)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 0 22px rgba(168,85,247,0.5)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "var(--purple-mid)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        Book Now
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden"
        style={{ background: "none", border: "none", color: "var(--purple-glow)", cursor: "pointer", fontSize: "1.5rem" }}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(30,4,60,0.98)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(168,85,247,0.15)",
            padding: "24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link-dark" style={{ fontSize: "0.9rem" }} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            style={{
              background: "var(--purple-mid)",
              color: "var(--white)",
              padding: "12px 24px",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              borderRadius: "2px",
              textDecoration: "none",
              textAlign: "center",
              marginTop: "8px",
            }}
            onClick={() => setOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
