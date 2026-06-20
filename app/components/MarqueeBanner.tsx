const ITEMS = [
  "Hair Styling", "Balayage", "Hair Spa", "Keratin Treatment",
  "Skin Care", "Bridal Makeup", "Nail Art & Care", "Hair Coloring",
  "Threading", "Hair Extensions", "Hair Styling", "Balayage",
  "Hair Spa", "Keratin Treatment", "Skin Care", "Bridal Makeup",
  "Nail Art & Care", "Hair Coloring", "Threading", "Hair Extensions",
];

export default function MarqueeBanner() {
  return (
    <div style={{
      padding: "20px 0",
      background: "var(--purple-mid)",
      overflow: "hidden",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    }}>
      <div style={{
        display: "flex",
        gap: "60px",
        whiteSpace: "nowrap",
        animation: "marqueeScroll 22s linear infinite",
        width: "max-content",
      }}>
        {ITEMS.map((item, i) => (
          <div key={i} style={{
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.8)",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}>
            {item}
            <span style={{ color: "var(--gold)", fontSize: "0.7rem" }}>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
