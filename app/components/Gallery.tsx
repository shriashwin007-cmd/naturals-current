"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const IMAGES = [
  { src: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892346/showroom_1._WhatsApp_Image_2026-06-19_at_7.51.21_PM_qs2bom.jpg", label: "Our Salon" },
  { src: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892347/showroom_2._WhatsApp_Image_2026-06-19_at_7.51.22_PM_mwvtit.jpg", label: "Styling Stations" },
  { src: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892348/showroom_3._WhatsApp_Image_2026-06-19_at_7.51.24_PM_imhkep.jpg", label: "Wash Area" },
  { src: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892350/showroom_4._WhatsApp_Image_2026-06-19_at_7.52.21_PM_faig2o.jpg", label: "Premium Seating" },
  { src: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892352/showroom_5._WhatsApp_Image_2026-06-19_at_7.53.04_PM_suzn9d.jpg", label: "Interior Design" },
];

/* Each image has its own parallax speed for depth variety */
const SPEEDS = [0.14, 0.20, 0.18, 0.22, 0.16];

export default function Gallery() {
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const update = () => {
      const vh = window.innerHeight;
      layerRefs.current.forEach((layer, i) => {
        if (!layer) return;
        const rect = (layer.parentElement as HTMLElement).getBoundingClientRect();
        const centerOffset = (rect.top + rect.height / 2) - vh / 2;
        layer.style.transform = `translateY(${centerOffset * SPEEDS[i]}px)`;
      });
    };

    update();
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { update(); ticking = false; });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }}>

          {/* Large featured — col-span-2 */}
          <div style={{
            gridColumn: "span 2",
            position: "relative", height: "500px",
            overflow: "hidden",
            border: "1px solid rgba(168,85,247,0.12)",
          }}>
            <div
              ref={(el) => { layerRefs.current[0] = el; }}
              style={{ position: "absolute", top: "-18%", left: 0, width: "100%", height: "136%", willChange: "transform" }}
            >
              <Image src={IMAGES[0].src} alt={IMAGES[0].label} fill className="object-cover" sizes="66vw" priority />
            </div>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,0,40,0.65), transparent 55%)" }} />
            <span style={{
              position: "absolute", bottom: "22px", left: "26px",
              fontSize: "0.62rem", letterSpacing: "0.28em", textTransform: "uppercase",
              color: "rgba(253,251,255,0.7)", zIndex: 2,
            }}>
              {IMAGES[0].label}
            </span>
          </div>

          {/* Right column — 2 stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {IMAGES.slice(1, 3).map((img, i) => (
              <div key={i} style={{
                position: "relative", flex: 1,
                overflow: "hidden",
                border: "1px solid rgba(168,85,247,0.12)",
                minHeight: "247px",
              }}>
                <div
                  ref={(el) => { layerRefs.current[i + 1] = el; }}
                  style={{ position: "absolute", top: "-18%", left: 0, width: "100%", height: "136%", willChange: "transform" }}
                >
                  <Image src={img.src} alt={img.label} fill className="object-cover" sizes="33vw" />
                </div>
                <div style={{ position: "absolute", inset: 0, background: "rgba(20,0,40,0.25)" }} />
              </div>
            ))}
          </div>

          {/* Bottom row — 3 equal */}
          {IMAGES.slice(2, 5).map((img, i) => (
            <div key={i} style={{
              position: "relative", height: "260px",
              overflow: "hidden",
              border: "1px solid rgba(168,85,247,0.12)",
            }}>
              <div
                ref={(el) => { layerRefs.current[i + 3] = el; }}
                style={{ position: "absolute", top: "-18%", left: 0, width: "100%", height: "136%", willChange: "transform" }}
              >
                <Image src={img.src} alt={img.label} fill className="object-cover" sizes="33vw" />
              </div>
              <div style={{ position: "absolute", inset: 0, background: "rgba(20,0,40,0.2)" }} />
              <span style={{
                position: "absolute", bottom: "16px", left: "18px",
                fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase",
                color: "rgba(253,251,255,0.55)", zIndex: 2,
              }}>
                {img.label}
              </span>
            </div>
          ))}
        </div>

        <p style={{
          textAlign: "center", marginTop: "28px",
          fontSize: "0.62rem", letterSpacing: "0.28em", textTransform: "uppercase",
          color: "rgba(253,251,255,0.28)",
        }}>
          Naturals Signature — Premium Salon Interior
        </p>
      </div>
    </section>
  );
}
