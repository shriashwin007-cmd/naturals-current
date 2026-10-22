"use client";

const REVIEWS = [
  {
    stars: "★★★★★",
    text: "I've been coming to Naturals for three years. Every visit feels like a reset for my soul — the team genuinely cares about how you feel walking out.",
    name: "Priya Menon",
    loc: "Anna Nagar, Chennai",
    avatar: "🌸",
    service: "Regular Client",
  },
  {
    stars: "★★★★★",
    text: "The balayage they did for my wedding was exactly the vision I had in my head. The attention to detail is unmatched anywhere in the city.",
    name: "Deepa Krishnamurthy",
    loc: "T. Nagar, Chennai",
    avatar: "👰",
    service: "Bridal Styling",
  },
  {
    stars: "★★★★★",
    text: "First time getting a keratin treatment and I was nervous — but the stylist walked me through everything and the result was phenomenal. Already booked my next visit.",
    name: "Nandita Iyer",
    loc: "Nungambakkam, Chennai",
    avatar: "✨",
    service: "Keratin Treatment",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="section-pad"
      style={{ background: "rgba(59,7,100,0.6)", textAlign: "center" }}
    >
      <span className="section-label reveal">Testimonials</span>
      <h2 className="font-display reveal" style={{ fontSize: "clamp(2.4rem, 4vw, 4rem)", fontWeight: 300, lineHeight: 1.1, marginBottom: "24px" }}>
        Words from Our<br />
        <em style={{ fontStyle: "italic", color: "var(--purple-glow)" }}>Beloved Clients</em>
      </h2>
      <p className="reveal" style={{ color: "rgba(253,251,255,0.5)", fontSize: "0.78rem", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "64px" }}>
        <span style={{ color: "var(--gold)" }}>★★★★★</span> 4.9 average from 2,400+ reviews
      </p>

      <div className="grid-3 reveal" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {REVIEWS.map((r) => (
          <div
            key={r.name}
            className="reveal testimonial-card"
            style={{
              background: "rgba(107,33,168,0.1)",
              border: "1px solid rgba(168,85,247,0.12)",
              padding: "40px 32px",
              borderRadius: "4px",
              textAlign: "left",
              transition: "border-color 0.3s, transform 0.3s",
            }}
          >
            <div style={{ color: "var(--gold)", fontSize: "0.85rem", marginBottom: "20px", letterSpacing: "3px" }}>{r.stars}</div>
            <p className="font-display" style={{ fontStyle: "italic", fontSize: "1.1rem", lineHeight: 1.6, color: "rgba(253,251,255,0.85)", marginBottom: "24px" }}>
              &ldquo;{r.text}&rdquo;
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{
                width: "40px", height: "40px", borderRadius: "50%",
                background: "linear-gradient(135deg, var(--purple-mid), var(--purple-light))",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1rem", flexShrink: 0,
              }}>
                {r.avatar}
              </div>
              <div>
                <div style={{ fontSize: "0.8rem", letterSpacing: "0.08em" }}>{r.name}</div>
                <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>{r.loc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
