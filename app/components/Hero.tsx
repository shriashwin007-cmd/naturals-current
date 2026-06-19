"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-end overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Decorative top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-medium">
              Premium Salon Experience
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="text-[#f5f0ea]">Where Beauty</span>
            <br />
            <span className="shimmer-text italic">Meets Artistry</span>
          </h1>

          <p className="text-[#f5f0ea]/65 text-base md:text-lg leading-relaxed mb-10 max-w-xl font-light">
            Step into a world of premium hair and beauty services. Expert stylists,
            luxurious treatments, and a transformative experience crafted just for you.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="btn-gold px-8 py-4 rounded-sm text-sm text-center">
              Book an Appointment
            </a>
            <a href="#services" className="btn-outline-gold px-8 py-4 rounded-sm text-sm text-center">
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14 pt-10 border-t border-[#c9a96e]/20">
            {[
              { number: "15+", label: "Years of Excellence" },
              { number: "500+", label: "Locations Across India" },
              { number: "2M+", label: "Happy Clients" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-2xl md:text-3xl font-bold text-[#c9a96e]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.number}
                </div>
                <div className="text-[#f5f0ea]/50 text-xs tracking-wider mt-1 uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-12 z-10 flex flex-col items-center gap-2">
        <span className="text-[#c9a96e]/60 text-[9px] tracking-[0.3em] uppercase rotate-90 mb-4">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#c9a96e]/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
