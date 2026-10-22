import { SERVICES } from "../lib/services";

/* Service names, doubled so the marquee loops seamlessly at -50%. */
const ITEMS = [...SERVICES.map((s) => s.name), ...SERVICES.map((s) => s.name)];

export default function MarqueeBanner() {
  return (
    <div
      style={{
        padding: "20px 0",
        background: "var(--purple-mid)",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "60px",
          whiteSpace: "nowrap",
          animation: "marqueeScroll 26s linear infinite",
          width: "max-content",
        }}
      >
        {ITEMS.map((item, i) => (
          <div
            key={`${item}-${i}`}
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.8)",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {item}
            <span style={{ color: "var(--gold)", fontSize: "0.7rem" }}>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
