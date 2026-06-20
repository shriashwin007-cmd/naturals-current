import Image from "next/image";

const SHOWROOM_IMG = "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892346/showroom_1._WhatsApp_Image_2026-06-19_at_7.51.21_PM_qs2bom.jpg";

const TAGS = ["Certified Artists", "Premium Products", "Hygienic Space", "15+ Years", "Luxury Experience"];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 60px",
        background: "#FAF7FF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

        {/* Visual */}
        <div className="reveal" style={{ position: "relative" }}>
          <div style={{
            background: "rgba(107,33,168,0.08)",
            border: "1px solid rgba(107,33,168,0.15)",
            borderRadius: "4px",
            overflow: "hidden",
            aspectRatio: "4/5",
            position: "relative",
          }}>
            <Image
              src={SHOWROOM_IMG}
              alt="Naturals Salon Interior"
              fill
              className="object-cover"
              sizes="50vw"
              style={{ opacity: 0.85 }}
            />
            {/* Overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(59,7,100,0.75) 0%, transparent 60%)",
            }} />
            {/* Quote overlay */}
            <div style={{
              position: "absolute", bottom: "36px", left: "36px", right: "36px",
            }}>
              <div className="font-display" style={{
                fontSize: "1.5rem", fontStyle: "italic",
                color: "var(--purple-glow)", lineHeight: 1.3,
              }}>
                &ldquo;Beauty is not a trend.<br />It&apos;s an expression.&rdquo;
              </div>
            </div>
            {/* Accent orb */}
            <div style={{
              position: "absolute", top: "-40px", right: "-40px",
              width: "150px", height: "150px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(192,132,252,0.4), transparent 70%)",
              filter: "blur(20px)",
            }} />
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="section-label reveal" style={{ color: "var(--purple-mid)" }}>Our Philosophy</span>
          <h2 className="font-display reveal" style={{ fontSize: "clamp(2.4rem, 4vw, 4rem)", fontWeight: 300, lineHeight: 1.1, marginBottom: "24px", color: "var(--purple-deep)" }}>
            Crafted with<br />
            <em style={{ fontStyle: "italic", color: "var(--purple-light)" }}>Intention</em>
          </h2>
          <p className="reveal" style={{ color: "rgba(30,0,60,0.6)", lineHeight: 1.9, fontSize: "0.92rem", marginBottom: "20px" }}>
            Naturals was born from a simple belief — every person deserves to feel extraordinary. For over 15 years, we&apos;ve been Chennai&apos;s trusted home for beauty that speaks to your soul.
          </p>
          <p className="reveal" style={{ color: "rgba(30,0,60,0.6)", lineHeight: 1.9, fontSize: "0.92rem", marginBottom: "20px" }}>
            Our team of certified artists stays ahead of every global trend, bringing you techniques refined in the world&apos;s finest salons — right here in your city.
          </p>
          <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "32px" }}>
            {TAGS.map((t) => (
              <span key={t} className="tag-pill" style={{ borderColor: "rgba(107,33,168,0.25)", color: "rgba(30,0,60,0.65)" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
