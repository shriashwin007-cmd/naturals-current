"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const IMAGES = [
  {
    src: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892346/showroom_1._WhatsApp_Image_2026-06-19_at_7.51.21_PM_qs2bom.jpg",
    label: "Our Salon",
    alt: "The main floor of the Naturals salon",
  },
  {
    src: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892347/showroom_2._WhatsApp_Image_2026-06-19_at_7.51.22_PM_mwvtit.jpg",
    label: "Styling Stations",
    alt: "Styling stations at the Naturals salon",
  },
  {
    src: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892348/showroom_3._WhatsApp_Image_2026-06-19_at_7.51.24_PM_imhkep.jpg",
    label: "Wash Area",
    alt: "The shampoo and wash area",
  },
  {
    src: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892350/showroom_4._WhatsApp_Image_2026-06-19_at_7.52.21_PM_faig2o.jpg",
    label: "Premium Seating",
    alt: "The premium waiting lounge seating",
  },
  {
    src: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892352/showroom_5._WhatsApp_Image_2026-06-19_at_7.53.04_PM_suzn9d.jpg",
    label: "Interior Design",
    alt: "Interior detailing and lighting",
  },
];

/* Each image has its own parallax speed for depth variety */
const SPEEDS = [0.14, 0.2, 0.18, 0.22, 0.16];

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
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallaxLayer = (index: number, children: React.ReactNode) => (
    <div
      ref={(el) => {
        layerRefs.current[index] = el;
      }}
      style={{
        position: "absolute",
        top: "-18%",
        left: 0,
        width: "100%",
        height: "136%",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );

  return (
    <section id="gallery" className="section-pad" style={{ background: "rgba(30,0,50,0.5)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "56px" }}>
          <span className="section-label reveal">Our Space</span>
          <h2
            className="font-display reveal"
            style={{ fontSize: "clamp(2.4rem, 4vw, 4rem)", fontWeight: 300, lineHeight: 1.1 }}
          >
            Step Inside<br />
            <em style={{ fontStyle: "italic", color: "var(--purple-glow)" }}>Our World</em>
          </h2>
          <p
            className="reveal"
            style={{
              color: "rgba(253,251,255,0.5)",
              fontSize: "0.88rem",
              lineHeight: 1.8,
              maxWidth: "460px",
              marginTop: "18px",
            }}
          >
            A calm, considered space where every station is set for you — warm
            light, clean lines and nothing that asks for attention but the work.
          </p>
        </div>

        {/* Mosaic */}
        <div className="gallery-mosaic">
          {/* Large featured — col-span-2 */}
          <div className="gallery-feature">
            {parallaxLayer(
              0,
              <Image
                src={IMAGES[0].src}
                alt={IMAGES[0].alt}
                fill
                className="object-cover"
                sizes="66vw"
                priority
              />,
            )}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(20,0,40,0.65), transparent 55%)",
              }}
            />
            <span
              style={{
                position: "absolute",
                bottom: "22px",
                left: "26px",
                fontSize: "0.62rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(253,251,255,0.7)",
                zIndex: 2,
              }}
            >
              {IMAGES[0].label}
            </span>
          </div>

          {/* Right column — 2 stacked */}
          <div className="gallery-stack">
            {IMAGES.slice(1, 3).map((img, i) => (
              <div key={img.src} className="gallery-cell">
                {parallaxLayer(
                  i + 1,
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />,
                )}
                <div style={{ position: "absolute", inset: 0, background: "rgba(20,0,40,0.25)" }} />
              </div>
            ))}
          </div>

          {/* Bottom row — 3 equal */}
          {IMAGES.slice(2, 5).map((img, i) => (
            <div key={img.src} className="gallery-cell gallery-cell--tall">
              {parallaxLayer(
                i + 3,
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />,
              )}
              <div style={{ position: "absolute", inset: 0, background: "rgba(20,0,40,0.2)" }} />
              <span
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "18px",
                  fontSize: "0.58rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(253,251,255,0.55)",
                  zIndex: 2,
                }}
              >
                {img.label}
              </span>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "28px",
            fontSize: "0.62rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(253,251,255,0.28)",
          }}
        >
          Naturals Signature — Premium Salon Interior
        </p>
      </div>
    </section>
  );
}
