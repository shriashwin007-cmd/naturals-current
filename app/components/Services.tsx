"use client";

import { SERVICES, formatPrice, type Service } from "../lib/services";

export default function Services() {
  return (
    <section id="services" className="section-pad" style={{ background: "#FDFBFF" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "72px" }}>
        <span className="section-label reveal" style={{ color: "var(--purple-mid)" }}>
          Our Expertise
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
          Services Tailored<br />
          <em style={{ fontStyle: "italic", color: "var(--purple-light)" }}>For You</em>
        </h2>
        <p
          className="reveal"
          style={{
            color: "rgba(30,0,60,0.55)",
            fontSize: "0.88rem",
            lineHeight: 1.8,
            maxWidth: "480px",
            margin: "22px auto 0",
          }}
        >
          Every treatment begins with a complimentary consultation, so we can
          tailor the result to your hair, your skin and your day.
        </p>
      </div>

      {/* Grid */}
      <div
        className="grid-auto reveal"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {SERVICES.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>

      <p
        className="reveal"
        style={{
          textAlign: "center",
          marginTop: "36px",
          fontSize: "0.62rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(30,0,60,0.4)",
        }}
      >
        Prices are indicative and vary with hair length &amp; stylist seniority
      </p>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      className="service-card"
      style={{
        background: "#fff",
        border: "1px solid rgba(107,33,168,0.1)",
        boxShadow: "0 2px 20px rgba(107,33,168,0.06)",
        padding: "48px 36px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "box-shadow 0.4s, transform 0.3s, border-color 0.3s",
      }}
    >
      {service.popular && (
        <span
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            background: "var(--gold)",
            color: "var(--purple-deep)",
            fontSize: "0.55rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "7px 14px",
            fontWeight: 500,
          }}
        >
          Most Loved
        </span>
      )}

      <span style={{ fontSize: "2rem", display: "block", marginBottom: "20px" }}>
        {service.icon}
      </span>

      <div
        className="svc-arrow"
        style={{
          position: "absolute",
          top: "40px",
          right: "36px",
          fontSize: "1.2rem",
          color: "rgba(168,85,247,0.3)",
          transition: "color 0.3s, transform 0.3s",
        }}
      >
        ↗
      </div>

      <div
        className="font-display"
        style={{
          fontSize: "1.5rem",
          fontWeight: 400,
          marginBottom: "8px",
          color: "var(--purple-deep)",
        }}
      >
        {service.name}
      </div>

      <div
        style={{
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(30,0,60,0.4)",
          marginBottom: "16px",
        }}
      >
        {service.category} · {service.duration}
      </div>

      <p
        style={{
          fontSize: "0.82rem",
          lineHeight: 1.7,
          color: "rgba(30,0,60,0.55)",
          marginBottom: "20px",
        }}
      >
        {service.desc}
      </p>

      <div
        className="font-display"
        style={{
          fontSize: "1.1rem",
          color: "var(--purple-mid)",
          letterSpacing: "0.05em",
        }}
      >
        From {formatPrice(service.price)}
      </div>
    </div>
  );
}
