"use client";

import { useEffect, useRef } from "react";
import { MorphingText } from "./ui/liquid-text";

const HERO_TEXTS = [
  "Where Beauty",
  "Finds Its Voice",
  "Hair Styling",
  "Feel Radiant",
  "Bridal Looks",
  "Be Yourself",
  "Naturals",
  "Transform Now",
];

const FRAME_COUNT     = 240;
const PX_PER_FRAME    = 31;                          // 22 * 1.4 → 40% slower
const TOTAL_SCROLL    = FRAME_COUNT * PX_PER_FRAME;  // 7440px runway
const LERP            = 0.10;                        // smoothing (lower = smoother)

function frameSrc(n: number) {
  return `/frames/frame_${String(n).padStart(4, "0")}.jpg`;
}

function isReady(img: HTMLImageElement | undefined): boolean {
  return !!img && img.complete && img.naturalWidth > 0;
}

export default function HeroCanvas() {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const sectionRef  = useRef<HTMLDivElement>(null);
  const imgs        = useRef<HTMLImageElement[]>([]);
  const targetIdx   = useRef(0);
  const smoothIdx   = useRef(0);   // fractional, lerped each rAF tick
  const lastDrawn   = useRef(-1);
  const rafId       = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false })!;

    /* ── Resize ── */
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      lastDrawn.current = -1; // force redraw on resize
    };
    resize();
    window.addEventListener("resize", resize);

    /* ── Draw one frame (cover-fill) ── */
    const draw = (idx: number) => {
      const img = imgs.current[idx];
      if (!isReady(img)) return false;
      const { width: cw, height: ch } = canvas;
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const w = img.naturalWidth  * scale;
      const h = img.naturalHeight * scale;
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
      return true;
    };

    /* ── Nearest loaded frame ── */
    const nearestLoaded = (idx: number): number => {
      // search outward: prefer already-seen frames (idx-1, idx-2…)
      for (let d = 0; d < 15; d++) {
        if (isReady(imgs.current[idx - d])) return idx - d;
        if (isReady(imgs.current[idx + d])) return idx + d;
      }
      return 0;
    };

    /* ── Continuous rAF loop ── */
    const tick = () => {
      smoothIdx.current += (targetIdx.current - smoothIdx.current) * LERP;
      const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(smoothIdx.current)));

      if (idx !== lastDrawn.current) {
        const fallback = nearestLoaded(idx);
        if (draw(fallback)) lastDrawn.current = idx;
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    /* ── Scroll → target frame ── */
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const scrolled  = window.scrollY - section.offsetTop;
      const progress  = Math.max(0, Math.min(1, scrolled / TOTAL_SCROLL));
      targetIdx.current = Math.floor(progress * (FRAME_COUNT - 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    /* ── Batched preload ── */
    const loadFrame = (i: number) =>
      new Promise<void>((res) => {
        if (imgs.current[i]) { res(); return; }
        const img = new Image();
        img.decoding = "async";
        img.onload  = () => res();
        img.onerror = () => res();
        img.src = frameSrc(i + 1);
        imgs.current[i] = img;
      });

    const loadRange = (a: number, b: number) =>
      Promise.all(Array.from({ length: b - a }, (_, i) => loadFrame(a + i)));

    (async () => {
      await loadFrame(0);           // frame 0 first — no black flash
      await loadRange(1, 40);       // first ~1.3s of scrub
      await loadRange(40, 120);
      await loadRange(120, FRAME_COUNT);
    })();

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id="home"
      style={{ height: `calc(100vh + ${TOTAL_SCROLL}px)`, position: "relative" }}
    >
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        <canvas
          ref={canvasRef}
          style={{ display: "block", width: "100%", height: "100%" }}
        />
        {/* Morphing text overlay — centred on canvas */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          pointerEvents: "none", zIndex: 2,
        }}>
          <div style={{ width: "100%", maxWidth: "900px", padding: "0 40px" }}>
            <MorphingText
              texts={HERO_TEXTS}
              className="hero-morph-text"
            />
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "200px",
          background: "linear-gradient(to bottom, transparent, var(--purple-deep))",
          pointerEvents: "none",
        }} />
      </div>
    </div>
  );
}
