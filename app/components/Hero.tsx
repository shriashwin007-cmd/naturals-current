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
          if (video) video.style.transform = `translateY(${window.scrollY * 0.4}px)`;
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
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        style={{
          position: "absolute",
          top: "-20%", left: 0,
          width: "100%", height: "140%",
          objectFit: "cover",
          willChange: "transform",
        }}
        src="https://res.cloudinary.com/dxvui0xkz/video/upload/v1781891967/Animate_20Keyframes_20-_20Slow_20cinematic_20push-in_20through_20a_20premium_20purple_20beauty_20atmosphere__20Silk_20ribbons_d3neoj.mp4"
        autoPlay muted loop playsInline
      />

      {/* Subtle bottom fade into next section */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, transparent 60%, var(--purple-deep) 100%)",
        pointerEvents: "none",
      }} />
    </section>
  );
}
