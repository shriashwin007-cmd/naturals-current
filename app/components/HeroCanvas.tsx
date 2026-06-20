"use client";

import { useEffect, useRef } from "react";

const FRAME_COUNT = 240;
const SCROLL_PX_PER_FRAME = 22; // total scroll = 240 * 22 = 5280px
const TOTAL_SCROLL = FRAME_COUNT * SCROLL_PX_PER_FRAME;

function frameUrl(n: number) {
  return `/frames/frame_${String(n).padStart(4, "0")}.jpg`;
}

export default function HeroCanvas() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const images     = useRef<HTMLImageElement[]>([]);
  const current    = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* Resize canvas to fill viewport */
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      draw(current.current);
    };

    /* Draw a single frame — cover-fill the canvas */
    const draw = (idx: number) => {
      const img = images.current[idx];
      if (!img?.complete || !img.naturalWidth) return;
      const { width: cw, height: ch } = canvas;
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const w = img.naturalWidth  * scale;
      const h = img.naturalHeight * scale;
      const x = (cw - w) / 2;
      const y = (ch - h) / 2;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, x, y, w, h);
    };

    /* Scroll → frame index */
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const section = sectionRef.current;
          if (!section) return;
          const scrolled = window.scrollY - section.offsetTop;
          const progress = Math.max(0, Math.min(1, scrolled / TOTAL_SCROLL));
          const idx = Math.min(FRAME_COUNT - 1, Math.floor(progress * FRAME_COUNT));
          if (idx !== current.current) {
            current.current = idx;
            draw(idx);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });

    /* Preload all frames — first frame eager, rest lazy */
    const load = (i: number) =>
      new Promise<void>((res) => {
        const img = new Image();
        img.src = frameUrl(i + 1);
        img.onload = () => res();
        img.onerror = () => res();
        images.current[i] = img;
      });

    /* Load frame 0 immediately, then stream the rest */
    load(0).then(() => draw(0));

    /* Load remaining frames in small batches to not overwhelm network */
    const loadBatch = async (start: number, end: number) => {
      const batch = Array.from({ length: end - start }, (_, i) => load(start + i));
      await Promise.all(batch);
    };

    (async () => {
      await loadBatch(1, 30);
      onScroll();
      await loadBatch(30, 120);
      onScroll();
      await loadBatch(120, FRAME_COUNT);
      onScroll();
    })();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    /* Tall section creates the scroll "runway" */
    <div
      ref={sectionRef}
      id="home"
      style={{ height: `calc(100vh + ${TOTAL_SCROLL}px)`, position: "relative" }}
    >
      {/* Sticky canvas */}
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        <canvas
          ref={canvasRef}
          style={{ display: "block", width: "100%", height: "100%" }}
        />
        {/* Bottom fade into next section */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "180px",
          background: "linear-gradient(to bottom, transparent, var(--purple-deep))",
          pointerEvents: "none",
        }} />
      </div>
    </div>
  );
}
