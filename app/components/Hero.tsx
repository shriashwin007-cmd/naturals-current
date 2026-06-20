"use client";

import { useEffect, useRef } from "react";

const ORB = {
  1: { size: 400, bg: "rgba(107,33,168,0.4)",   top: "-100px", right: "-80px",  animation: "orbFloat 8s ease-in-out infinite" },
  2: { size: 250, bg: "rgba(192,132,252,0.25)",  bottom: "80px", right: "200px", animation: "orbFloat 11s ease-in-out infinite reverse" },
  3: { size: 180, bg: "rgba(212,175,106,0.15)",  top: "200px",  left: "50px",   animation: "orbFloat 13s ease-in-out infinite" },
};

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
          if (video) video.style.transform = `translateY(${window.scrollY * 0.28}px)`;
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
      {/* Video — extra height for parallax buffer */}
      <video
        ref={videoRef}
        style={{
          position: "absolute",
          top: "-15%", left: 0,
          width: "100%", height: "130%",
          objectFit: "cover",
          willChange: "transform",
        }}
        src="https://res.cloudinary.com/dxvui0xkz/video/upload/v1781891967/Animate_20Keyframes_20-_20Slow_20cinematic_20push-in_20through_20a_20premium_20purple_20beauty_20atmosphere__20Silk_20ribbons_d3neoj.mp4"
        autoPlay muted loop playsInline
      />

      {/* Overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, rgba(59,7,100,0.85) 0%, rgba(59,7,100,0.55) 50%, rgba(59,7,100,0.75) 100%)",
      }} />

      {/* Radial glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 80% 70% at 70% 50%, rgba(107,33,168,0.3) 0%, transparent 70%)",
      }} />

      {/* Orbs */}
      {Object.values(ORB).map((orb, i) => (
        <div key={i} style={{
          position: "absolute",
          width: orb.size, height: orb.size,
          background: orb.bg,
          borderRadius: "50%",
          filter: "blur(60px)",
          pointerEvents: "none",
          ...(orb as Record<string, string | number>),
          animation: orb.animation,
        }} />
      ))}

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "680px" }}>
        {/* Eyebrow */}
        <p style={{
          fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase",
          color: "var(--gold)", marginBottom: "24px",
          opacity: 0, animation: "fadeUp 0.8s 0.3s forwards",
        }}>
          Chennai&apos;s Premier Salon Experience
        </p>

        {/* Headline */}
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(3.2rem, 6vw, 6rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            marginBottom: "28px",
            opacity: 0,
            animation: "fadeUp 0.9s 0.5s forwards",
          }}
        >
          Where Beauty<br />
          <em style={{ fontStyle: "italic", color: "var(--purple-glow)", display: "block" }}>
            Finds Its Voice
          </em>
        </h1>

        {/* Sub */}
        <p style={{
          fontSize: "1rem", lineHeight: 1.8,
          color: "rgba(253,251,255,0.65)",
          maxWidth: "440px", marginBottom: "48px",
          opacity: 0, animation: "fadeUp 0.9s 0.7s forwards",
        }}>
          Step into a sanctuary of elegance. Transformations crafted with artistry,
          care, and a touch of the extraordinary.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", opacity: 0, animation: "fadeUp 0.9s 0.9s forwards" }}>
          <a
            href="#booking"
            style={{
              background: "linear-gradient(135deg, var(--purple-mid), var(--purple-light))",
              color: "var(--white)",
              padding: "16px 40px",
              fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase",
              borderRadius: "2px", textDecoration: "none",
              transition: "transform 0.3s, box-shadow 0.3s", display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(107,33,168,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "";
              (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
          >
            Reserve Your Session
          </a>
          <a
            href="#services"
            style={{
              background: "transparent",
              color: "var(--white)",
              padding: "16px 40px",
              border: "1px solid rgba(253,251,255,0.3)",
              fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase",
              borderRadius: "2px", textDecoration: "none",
              transition: "border-color 0.3s, color 0.3s", display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--purple-glow)";
              (e.currentTarget as HTMLElement).style.color = "var(--purple-glow)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(253,251,255,0.3)";
              (e.currentTarget as HTMLElement).style.color = "var(--white)";
            }}
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Stats — bottom right */}
      <div style={{
        position: "absolute", right: "60px", bottom: "80px",
        display: "flex", gap: "48px", zIndex: 2,
        opacity: 0, animation: "fadeUp 0.9s 1.1s forwards",
      }}>
        {[
          { num: "15", sup: "+",   label: "Years of Craft" },
          { num: "10k", sup: "+",  label: "Happy Clients" },
          { num: "4.9", sup: "★",  label: "Avg Rating" },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div className="font-display" style={{ fontSize: "2.8rem", fontWeight: 300, color: "var(--white)", lineHeight: 1 }}>
              {s.num}<span style={{ color: "var(--purple-glow)" }}>{s.sup}</span>
            </div>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(253,251,255,0.5)", marginTop: "6px" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", zIndex: 2,
        opacity: 0, animation: "fadeIn 1s 1.5s forwards",
      }}>
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
          Scroll
        </span>
        <div style={{
          width: "1px", height: "40px",
          background: "linear-gradient(to bottom, rgba(192,132,252,0.7), transparent)",
          animation: "scrollPulse 2s ease-in-out infinite",
        }} />
      </div>
    </section>
  );
}
