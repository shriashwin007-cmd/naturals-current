"use client";

import { BRANCHES, SITE } from "../lib/site";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", icon: "◎" },
  { label: "Facebook", href: "https://facebook.com", icon: "f" },
  { label: "WhatsApp", href: `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`, icon: "✆" },
];

export default function Footer() {
  return (
    <footer
      style={{
        padding: "80px 60px 40px",
        background: "rgba(20,0,40,0.95)",
        borderTop: "1px solid rgba(168,85,247,0.15)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          className="grid-4"
          style={{ marginBottom: "60px" }}
        >
          {/* Brand */}
          <div>
            <div
              className="font-display"
              style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "8px" }}
            >
              Naturals<span style={{ color: "var(--purple-glow)" }}>.</span>
            </div>
            <p
              className="font-display"
              style={{
                fontStyle: "italic",
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.9rem",
                marginBottom: "20px",
              }}
            >
              &ldquo;{SITE.tagline}&rdquo;
            </p>
            <p
              style={{
                fontSize: "0.78rem",
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.7,
                marginBottom: "24px",
              }}
            >
              Chennai&apos;s most loved salon since {SITE.founded}. Premium services,
              certified artists, unforgettable experiences.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(168,85,247,0.25)",
                    borderRadius: "50%",
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "0.8rem",
                    textDecoration: "none",
                    transition: "color 0.3s, border-color 0.3s, background 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--purple-glow)";
                    el.style.borderColor = "var(--purple-glow)";
                    el.style.background = "rgba(168,85,247,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "rgba(255,255,255,0.55)";
                    el.style.borderColor = "rgba(168,85,247,0.25)";
                    el.style.background = "transparent";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <FooterCol
            title="Services"
            links={[
              { label: "Hair Styling", href: "#services" },
              { label: "Hair Colouring", href: "#services" },
              { label: "Hair Spa & Keratin", href: "#services" },
              { label: "Bridal Packages", href: "#services" },
              { label: "Skin & Nails", href: "#services" },
            ]}
          />

          {/* Quick Links */}
          <FooterCol
            title="Explore"
            links={[
              { label: "Book Appointment", href: "#booking" },
              { label: "Our Space", href: "#gallery" },
              { label: "About Us", href: "#about" },
              { label: "Reviews", href: "#reviews" },
              { label: "Locations", href: "#contact" },
            ]}
          />

          {/* Contact */}
          <FooterCol
            title="Contact"
            links={[
              { label: SITE.phoneDisplay, href: SITE.phoneHref },
              { label: SITE.email, href: `mailto:${SITE.email}` },
              { label: SITE.hours, href: "#contact" },
              { label: BRANCHES.map((b) => b.name).join(" · "), href: "#contact" },
            ]}
          />
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "0.7rem",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          <span>© {new Date().getFullYear()} Naturals Salon. All rights reserved.</span>
          <span>Designed for beauty ✦</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4
        style={{
          fontSize: "0.65rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: "20px",
        }}
      >
        {title}
      </h4>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              style={{
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--purple-glow)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)";
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
