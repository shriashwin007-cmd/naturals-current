"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (video) video.style.transform = `translateY(${window.scrollY * 0.38}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 60px 80px",
      }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        style={{
          position: "absolute",
          top: "-18%", left: 0,
          width: "100%", height: "136%",
          objectFit: "cover",
          willChange: "transform",
        }}
        src="https://res.cloudinary.com/dxvui0xkz/video/upload/v1781891967/Animate_20Keyframes_20-_20Slow_20cinematic_20push-in_20through_20a_20premium_20purple_20beauty_20atmosphere__20Silk_20ribbons_d3neoj.mp4"
        autoPlay muted loop playsInline
      />

      {/* Text-side gradient only — right half stays pure video */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to right, rgba(8,0,20,0.78) 0%, rgba(8,0,20,0.52) 40%, rgba(8,0,20,0.18) 65%, transparent 100%)",
        pointerEvents: "none",
      }} />

      {/* Bottom vignette for stats readability */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(8,0,20,0.55) 0%, transparent 35%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "640px" }}>
        <p style={{
          fontSize: "0.68rem", letterSpacing: "0.32em", textTransform: "uppercase",
          color: "var(--gold)", marginBottom: "22px",
          opacity: 0, animation: "fadeUp 0.8s 0.2s forwards",
        }}>
          Chennai&apos;s Premier Salon Experience
        </p>

        <h1
          className="font-display"
          style={{
            fontSize: "clamp(3.4rem, 6.5vw, 6.5rem)",
            fontWeight: 300,
            lineHeight: 1.02,
            letterSpacing: "-0.015em",
            marginBottom: "28px",
            opacity: 0,
            animation: "fadeUp 1s 0.4s forwards",
            textShadow: "0 2px 30px rgba(0,0,0,0.4)",
          }}
        >
          Where Beauty<br />
          <em style={{ fontStyle: "italic", color: "var(--purple-glow)" }}>
            Finds Its Voice
          </em>
        </h1>

        <p style={{
          fontSize: "1rem", lineHeight: 1.85,
          color: "rgba(253,251,255,0.72)",
          maxWidth: "420px", marginBottom: "48px",
          opacity: 0, animation: "fadeUp 1s 0.6s forwards",
        }}>
          Step into a sanctuary of elegance. Transformations crafted with artistry,
          care, and a touch of the extraordinary.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", opacity: 0, animation: "fadeUp 1s 0.8s forwards" }}>
          <a
            href="#booking"
            style={{
              background: "linear-gradient(135deg, var(--purple-mid), var(--purple-light))",
              color: "var(--white)",
              padding: "16px 40px",
              fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase",
              borderRadius: "2px", textDecoration: "none",
              transition: "transform 0.3s, box-shadow 0.3s", display: "inline-block",
              boxShadow: "0 4px 20px rgba(107,33,168,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(107,33,168,0.65)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(107,33,168,0.4)";
            }}
          >
            Reserve Your Session
          </a>
          <a
            href="#services"
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(10px)",
              color: "var(--white)",
              padding: "16px 40px",
              border: "1px solid rgba(253,251,255,0.25)",
              fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase",
              borderRadius: "2px", textDecoration: "none",
              transition: "border-color 0.3s, background 0.3s", display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(192,132,252,0.6)";
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(253,251,255,0.25)";
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
            }}
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Stats */}
      <div style={{
        position: "absolute", right: "60px", bottom: "80px",
        display: "flex", gap: "52px", zIndex: 2,
        opacity: 0, animation: "fadeUp 1s 1s forwards",
      }}>
        {[
          { num: "15",  sup: "+", label: "Years of Craft" },
          { num: "10k", sup: "+", label: "Happy Clients"  },
          { num: "4.9", sup: "★", label: "Avg Rating"     },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div className="font-display" style={{ fontSize: "2.8rem", fontWeight: 300, lineHeight: 1, textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
              {s.num}<span style={{ color: "var(--purple-glow)" }}>{s.sup}</span>
            </div>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(253,251,255,0.5)", marginTop: "6px" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", bottom: "28px", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", zIndex: 2,
        opacity: 0, animation: "fadeIn 1s 1.6s forwards",
      }}>
        <span style={{ fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
          Scroll
        </span>
        <div style={{
          width: "1px", height: "44px",
          background: "linear-gradient(to bottom, rgba(192,132,252,0.8), transparent)",
          animation: "scrollPulse 2s ease-in-out infinite",
        }} />
      </div>
    </section>
  );
}
