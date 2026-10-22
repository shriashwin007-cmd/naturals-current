import Image from "next/image";

const SHOWROOM_IMG =
  "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892346/showroom_1._WhatsApp_Image_2026-06-19_at_7.51.21_PM_qs2bom.jpg";

const TAGS = ["Certified Artists", "Premium Products", "Hygienic Space", "15+ Years", "Luxury Experience"];

const STATS = [
  { value: "15+", label: "Years of artistry" },
  { value: "3", label: "Studios in Chennai" },
  { value: "12k+", label: "Happy clients" },
  { value: "4.9", label: "Average rating" },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ background: "#FAF7FF", position: "relative", overflow: "hidden" }}
    >
      <div
        className="grid-2"
        style={{ maxWidth: "1100px", margin: "0 auto", alignItems: "center" }}
      >
        {/* Visual */}
        <div className="reveal" style={{ position: "relative" }}>
          <div
            style={{
              background: "rgba(107,33,168,0.08)",
              border: "1px solid rgba(107,33,168,0.15)",
              borderRadius: "4px",
              overflow: "hidden",
              aspectRatio: "4/5",
              position: "relative",
            }}
          >
            <Image
              src={SHOWROOM_IMG}
              alt="Naturals Salon interior at the Anna Nagar studio"
              fill
              className="object-cover"
              sizes="50vw"
              style={{ opacity: 0.85 }}
            />
            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(59,7,100,0.75) 0%, transparent 60%)",
              }}
            />
            {/* Quote overlay */}
            <div style={{ position: "absolute", bottom: "36px", left: "36px", right: "36px" }}>
              <div
                className="font-display"
                style={{
                  fontSize: "1.5rem",
                  fontStyle: "italic",
                  color: "var(--purple-glow)",
                  lineHeight: 1.3,
                }}
              >
                &ldquo;Beauty is not a trend.<br />It&apos;s an expression.&rdquo;
              </div>
            </div>
            {/* Accent orb */}
            <div
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(192,132,252,0.4), transparent 70%)",
                filter: "blur(20px)",
              }}
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="section-label reveal" style={{ color: "var(--purple-mid)" }}>
            Our Philosophy
          </span>
          <h2
            className="font-display reveal"
            style={{
              fontSize: "clamp(2.4rem, 4vw, 4rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: "24px",
              color: "var(--purple-deep)",
            }}
          >
            Crafted with<br />
            <em style={{ fontStyle: "italic", color: "var(--purple-light)" }}>
              Intention
            </em>
          </h2>
          <p
            className="reveal"
            style={{ color: "rgba(30,0,60,0.6)", lineHeight: 1.9, fontSize: "0.92rem", marginBottom: "20px" }}
          >
            Naturals began with a simple belief — every person deserves to feel
            extraordinary. For over fifteen years we have been Chennai&apos;s
            trusted home for beauty that speaks to you, not to a trend.
          </p>
          <p
            className="reveal"
            style={{ color: "rgba(30,0,60,0.6)", lineHeight: 1.9, fontSize: "0.92rem", marginBottom: "20px" }}
          >
            Our certified artists train continuously, bringing techniques refined in
            the world&apos;s finest salons back to your neighbourhood — and we never
            rush the cut, the colour, or the conversation that makes it yours.
          </p>

          {/* Stats */}
          <div
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "18px",
              margin: "34px 0",
              padding: "26px 0",
              borderTop: "1px solid rgba(107,33,168,0.12)",
              borderBottom: "1px solid rgba(107,33,168,0.12)",
            }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div
                  className="font-display"
                  style={{ fontSize: "1.8rem", color: "var(--purple-mid)", lineHeight: 1 }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: "0.58rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(30,0,60,0.45)",
                    marginTop: "8px",
                    lineHeight: 1.6,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {TAGS.map((t) => (
              <span
                key={t}
                className="tag-pill"
                style={{ borderColor: "rgba(107,33,168,0.25)", color: "rgba(30,0,60,0.65)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
