"use client";

export default function Footer() {
  return (
    <footer style={{
      padding: "80px 60px 40px",
      background: "rgba(20,0,40,0.95)",
      borderTop: "1px solid rgba(168,85,247,0.15)",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "60px", marginBottom: "60px" }}>

          {/* Brand */}
          <div>
            <div className="font-display" style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "8px" }}>
              Naturals<span style={{ color: "var(--purple-glow)" }}>.</span>
            </div>
            <p className="font-display" style={{ fontStyle: "italic", color: "rgba(255,255,255,0.4)", fontSize: "0.9rem", marginBottom: "20px" }}>
              &ldquo;Where Beauty Begins&rdquo;
            </p>
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>
              Chennai&apos;s most loved salon for over 15 years. Premium services, expert artists, unforgettable experiences.
            </p>
          </div>

          {/* Services */}
          <FooterCol title="Services" links={[
            { label: "Hair Styling",    href: "#services" },
            { label: "Hair Colouring",  href: "#services" },
            { label: "Hair Spa",        href: "#services" },
            { label: "Bridal Packages", href: "#services" },
            { label: "Nail Art",        href: "#services" },
          ]} />

          {/* Quick Links */}
          <FooterCol title="Quick Links" links={[
            { label: "Book Appointment", href: "#booking" },
            { label: "About Us",         href: "#about"   },
            { label: "Reviews",          href: "#reviews" },
            { label: "Careers",          href: "#"        },
            { label: "Franchise",        href: "#"        },
          ]} />

          {/* Contact */}
          <FooterCol title="Contact" links={[
            { label: "Chennai, Tamil Nadu",   href: "#" },
            { label: "10 AM – 8 PM Daily",    href: "#" },
            { label: "Book Appointment",      href: "#booking" },
          ]} />
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.7rem",
          color: "rgba(255,255,255,0.3)",
        }}>
          <span>© 2026 Naturals Salon. All rights reserved.</span>
          <span>Designed for beauty ✦</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 style={{
        fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase",
        color: "var(--gold)", marginBottom: "20px",
      }}>
        {title}
      </h4>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--purple-glow)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
