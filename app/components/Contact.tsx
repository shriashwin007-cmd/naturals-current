"use client";

import { useState } from "react";
import { BRANCHES, SITE, mapDirectionsUrl, mapEmbedUrl } from "../lib/site";

export default function Contact() {
  const [active, setActive] = useState(0);
  const branch = BRANCHES[active];

  return (
    <section id="contact" className="section-pad" style={{ background: "#FAF7FF" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-label reveal" style={{ color: "var(--purple-mid)" }}>
            Visit Us
          </span>
          <h2
            className="font-display reveal"
            style={{
              fontSize: "clamp(2.4rem, 4vw, 4rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--purple-deep)",
            }}
          >
            Find Your Nearest<br />
            <em style={{ fontStyle: "italic", color: "var(--purple-light)" }}>
              Naturals Studio
            </em>
          </h2>
          <p
            className="reveal"
            style={{
              color: "rgba(30,0,60,0.6)",
              lineHeight: 1.9,
              fontSize: "0.9rem",
              maxWidth: "520px",
              margin: "20px auto 0",
            }}
          >
            Three studios across Chennai, each with its own character and the same
            full premium service range. Walk in, or book your slot ahead of time.
          </p>
        </div>

        {/* Branch tabs */}
        <div
          className="reveal"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          {BRANCHES.map((b, i) => (
            <button
              key={b.id}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              style={{
                background: i === active ? "var(--purple-mid)" : "rgba(107,33,168,0.06)",
                border: `1px solid ${i === active ? "var(--purple-mid)" : "rgba(107,33,168,0.15)"}`,
                color: i === active ? "var(--white)" : "rgba(30,0,60,0.6)",
                padding: "10px 24px",
                fontFamily: "var(--font-jost)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                borderRadius: "2px",
                cursor: "pointer",
                transition: "background 0.3s, color 0.3s, border-color 0.3s",
              }}
            >
              {b.name}
            </button>
          ))}
        </div>

        {/* Details + map */}
        <div className="grid-2 reveal" style={{ alignItems: "stretch" }}>

          {/* Details */}
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(107,33,168,0.1)",
              boxShadow: "0 2px 20px rgba(107,33,168,0.06)",
              padding: "48px 44px",
            }}
          >
            <h3
              className="font-display"
              style={{
                fontSize: "1.8rem",
                fontWeight: 400,
                color: "var(--purple-deep)",
                marginBottom: "6px",
              }}
            >
              {branch.name}
            </h3>
            <p
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "28px",
              }}
            >
              {branch.area}
            </p>

            <dl style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <DetailRow label="Address">
                {branch.address}
              </DetailRow>
              <DetailRow label="Phone">
                <a
                  href={branch.phoneHref}
                  style={{ color: "var(--purple-mid)", textDecoration: "none" }}
                >
                  {branch.phone}
                </a>
              </DetailRow>
              <DetailRow label="Email">
                <a
                  href={`mailto:${SITE.email}`}
                  style={{ color: "var(--purple-mid)", textDecoration: "none" }}
                >
                  {SITE.email}
                </a>
              </DetailRow>
              <DetailRow label="Hours">
                {SITE.hours}
                <span style={{ color: "rgba(30,0,60,0.45)" }}> · {SITE.hoursDetail}</span>
              </DetailRow>
            </dl>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "34px" }}>
              <a
                href="#booking"
                className="hero-cta hero-cta-primary"
                style={{ background: "var(--purple-mid)", color: "var(--white)" }}
              >
                Book a Slot
              </a>
              <a
                href={mapDirectionsUrl(branch)}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta hero-cta-ghost"
                style={{
                  borderColor: "rgba(107,33,168,0.3)",
                  color: "var(--purple-mid)",
                }}
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Map */}
          <div
            style={{
              position: "relative",
              minHeight: "420px",
              border: "1px solid rgba(107,33,168,0.12)",
              overflow: "hidden",
              background: "var(--purple-deep)",
            }}
          >
            <iframe
              key={branch.id}
              title={`${branch.name} branch location`}
              src={mapEmbedUrl(branch)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
      <dt
        style={{
          fontSize: "0.6rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(30,0,60,0.42)",
          width: "78px",
          flexShrink: 0,
          paddingTop: "3px",
        }}
      >
        {label}
      </dt>
      <dd
        style={{
          fontSize: "0.88rem",
          lineHeight: 1.7,
          color: "rgba(30,0,60,0.75)",
        }}
      >
        {children}
      </dd>
    </div>
  );
}
