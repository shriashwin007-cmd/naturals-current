"use client";

const SERVICES = [
  { icon: "✂️", name: "Hair Styling",       desc: "Expert cuts, blowouts, and styling that defines your signature look with precision.",         price: "From ₹499"  },
  { icon: "🎨", name: "Hair Colouring",     desc: "Global colour, balayage, ombré, highlights — painted with artistry for every skin tone.",    price: "From ₹1,299" },
  { icon: "💆", name: "Hair Spa",           desc: "Deep conditioning rituals that restore moisture, shine, and strength to every strand.",        price: "From ₹799"  },
  { icon: "✨", name: "Keratin Treatment",  desc: "Frizz-free, silky smoothness that lasts for months — the ultimate hair transformation.",      price: "From ₹2,499" },
  { icon: "👑", name: "Bridal Package",     desc: "Complete bridal transformations — makeup, hair, and styling for your most radiant day.",      price: "From ₹5,999" },
  { icon: "💅", name: "Nail Art & Care",    desc: "Manicures, pedicures, and intricate nail art crafted with meticulous attention to detail.",    price: "From ₹399"  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{ padding: "120px 60px", background: "linear-gradient(to bottom, #4A1175 0%, #FDFBFF 18%, #FDFBFF 100%)" }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "72px" }}>
        <span className="section-label reveal" style={{ color: "var(--gold)" }}>Our Expertise</span>
        <h2
          className="font-display reveal"
          style={{ fontSize: "clamp(2.4rem, 4vw, 4rem)", fontWeight: 300, lineHeight: 1.1, color: "#FDFBFF" }}
        >
          Services Tailored<br />
          <em style={{ fontStyle: "italic", color: "var(--purple-glow)" }}>For You</em>
        </h2>
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "2px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        {SERVICES.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ icon, name, desc, price }: { icon: string; name: string; desc: string; price: string }) {
  return (
    <div
      className="reveal"
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
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 12px 40px rgba(107,33,168,0.18)";
        el.style.borderColor = "rgba(168,85,247,0.35)";
        el.style.transform = "translateY(-4px)";
        const arrow = el.querySelector(".svc-arrow") as HTMLElement;
        if (arrow) { arrow.style.color = "var(--purple-light)"; arrow.style.transform = "translate(4px,-4px)"; }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 2px 20px rgba(107,33,168,0.06)";
        el.style.borderColor = "rgba(107,33,168,0.1)";
        el.style.transform = "";
        const arrow = el.querySelector(".svc-arrow") as HTMLElement;
        if (arrow) { arrow.style.color = "rgba(168,85,247,0.3)"; arrow.style.transform = ""; }
      }}
    >
      <span style={{ fontSize: "2rem", display: "block", marginBottom: "20px" }}>{icon}</span>
      <div
        className="svc-arrow"
        style={{
          position: "absolute", top: "40px", right: "36px",
          fontSize: "1.2rem", color: "rgba(168,85,247,0.3)",
          transition: "color 0.3s, transform 0.3s",
        }}
      >
        ↗
      </div>
      <div className="font-display" style={{ fontSize: "1.5rem", fontWeight: 400, marginBottom: "12px", color: "var(--purple-deep)" }}>{name}</div>
      <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "rgba(30,0,60,0.55)", marginBottom: "20px" }}>{desc}</p>
      <div className="font-display" style={{ fontSize: "1.1rem", color: "var(--purple-mid)", letterSpacing: "0.05em" }}>{price}</div>
    </div>
  );
}
