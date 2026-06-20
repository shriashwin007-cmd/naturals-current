"use client";
import Image from "next/image";

const IMAGES = [
  { src: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892346/showroom_1._WhatsApp_Image_2026-06-19_at_7.51.21_PM_qs2bom.jpg",  label: "Our Salon" },
  { src: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892347/showroom_2._WhatsApp_Image_2026-06-19_at_7.51.22_PM_mwvtit.jpg",  label: "Styling Stations" },
  { src: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892348/showroom_3._WhatsApp_Image_2026-06-19_at_7.51.24_PM_imhkep.jpg",  label: "Wash Area" },
  { src: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892350/showroom_4._WhatsApp_Image_2026-06-19_at_7.52.21_PM_faig2o.jpg",  label: "Premium Seating" },
  { src: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892352/showroom_5._WhatsApp_Image_2026-06-19_at_7.53.04_PM_suzn9d.jpg",  label: "Interior Design" },
];

export default function Gallery() {
  return (
    <section id="gallery" style={{ padding: "120px 60px", background: "rgba(30,0,50,0.5)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "56px" }}>
          <span className="section-label reveal">Our Space</span>
          <h2 className="font-display reveal" style={{ fontSize: "clamp(2.4rem, 4vw, 4rem)", fontWeight: 300, lineHeight: 1.1 }}>
            Step Inside<br />
            <em style={{ fontStyle: "italic", color: "var(--purple-glow)" }}>Our World</em>
          </h2>
        </div>

        {/* Mosaic */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4px" }}>
          {/* Large featured */}
          <div
            className="reveal"
            style={{
              gridColumn: "span 2",
              position: "relative",
              height: "460px",
              overflow: "hidden",
              border: "1px solid rgba(168,85,247,0.12)",
            }}
          >
            <Image src={IMAGES[0].src} alt={IMAGES[0].label} fill className="object-cover" sizes="66vw" priority
              style={{ transition: "transform 0.6s ease" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(59,7,100,0.7), transparent)",
            }} />
            <span style={{
              position: "absolute", bottom: "20px", left: "24px",
              fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase",
              color: "rgba(253,251,255,0.7)",
            }}>
              {IMAGES[0].label}
            </span>
          </div>

          {/* Right column — 2 stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {IMAGES.slice(1, 3).map((img, i) => (
              <div key={i} style={{ position: "relative", flex: 1, overflow: "hidden", border: "1px solid rgba(168,85,247,0.12)" }}>
                <Image src={img.src} alt={img.label} fill className="object-cover" sizes="33vw" />
                <div style={{ position: "absolute", inset: 0, background: "rgba(59,7,100,0.3)", transition: "background 0.3s" }} />
              </div>
            ))}
          </div>

          {/* Bottom row — 3 equal */}
          {IMAGES.slice(2, 5).map((img, i) => (
            <div key={i} className="reveal" style={{ position: "relative", height: "220px", overflow: "hidden", border: "1px solid rgba(168,85,247,0.12)" }}>
              <Image src={img.src} alt={img.label} fill className="object-cover" sizes="33vw" />
              <div style={{ position: "absolute", inset: 0, background: "rgba(59,7,100,0.3)" }} />
            </div>
          ))}
        </div>

        <p style={{
          textAlign: "center", marginTop: "28px",
          fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase",
          color: "rgba(253,251,255,0.3)",
        }}>
          Naturals Signature — Premium Salon Interior
        </p>
      </div>
    </section>
  );
}
