"use client";

import { useEffect, useRef } from "react";

const FRAME_COUNT  = 240;
const PX_PER_FRAME = 24;                            // scroll px per frame (lower = slower, more cinematic)
const TOTAL_SCROLL = FRAME_COUNT * PX_PER_FRAME;    // 5760px runway
const LERP         = 0.12;                          // smoothing (lower = smoother)

/* Frames are loaded on demand instead of all 240 up front (that was ~22.8 MB). */
const PRELOAD_RADIUS = 10;   // frames kept warm behind the current position
const AHEAD_RADIUS   = 24;   // extra frames prefetched in the scroll direction
const IDLE_AHEAD     = 48;   // frames quietly warmed ahead during idle time

function frameSrc(n: number) {
  return `/frames/frame_${String(n + 1).padStart(4, "0")}.jpg`;
}

function isReady(img: HTMLImageElement | undefined): boolean {
  return !!img && img.complete && img.naturalWidth > 0;
}

export default function HeroCanvas() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imgs       = useRef<HTMLImageElement[]>([]);
  const loaded     = useRef<boolean[]>([]);
  const pending    = useRef<boolean[]>([]);
  const targetIdx  = useRef(0);
  const smoothIdx  = useRef(0);   // fractional, lerped each rAF tick
  const lastDrawn  = useRef(-1);
  const rafId      = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

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

    /* ── Frame loading (on demand + directional prefetch) ── */
    const loadFrame = (i: number) => {
      if (i < 0 || i >= FRAME_COUNT) return;
      if (loaded.current[i] || pending.current[i]) return;
      pending.current[i] = true;

      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        pending.current[i] = false;
        loaded.current[i] = true;
        /* Decode off the main thread so the first paint is not janky. */
        if (typeof img.decode === "function") {
          img.decode().catch(() => {});
        }
      };
      img.onerror = () => { pending.current[i] = false; };
      img.src = frameSrc(i);
      imgs.current[i] = img;
    };

    /** Warm a window of frames centred on `center`, biased towards `dir`. */
    const ensureRange = (center: number, radius: number, dir: number) => {
      /* Ahead of the pointer first — that is where the user is heading. */
      for (let d = 0; d <= radius; d++) loadFrame(center + dir * d);
      /* A shorter tail behind, so scrubbing back is instant too. */
      for (let d = 1; d <= Math.floor(radius / 2); d++) loadFrame(center - dir * d);
    };

    /* ── Scroll → target frame ── */
    let lastTarget = 0;
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const scrolled = window.scrollY - section.offsetTop;
      const progress = Math.max(0, Math.min(1, scrolled / TOTAL_SCROLL));
      const next = Math.floor(progress * (FRAME_COUNT - 1));
      targetIdx.current = next;

      /* Prefetch around the new position, biased in the direction of travel. */
      const dir = next >= lastTarget ? 1 : -1;
      lastTarget = next;
      ensureRange(next, PRELOAD_RADIUS, dir);
      ensureRange(next + dir * AHEAD_RADIUS, 6, dir);

      /* Fade the headline out as the frames take over. */
      if (overlayRef.current) {
        const fade = Math.max(0, 1 - progress / 0.18);
        overlayRef.current.style.opacity = String(fade);
        overlayRef.current.style.transform = `translateY(${-progress * 180}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    /* ── Initial load: first frames immediately, rest warmed during idle ── */
    loadFrame(0);                                   // frame 0 first — no black flash
    ensureRange(0, PRELOAD_RADIUS, 1);

    const idle = (window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    });

    /* Keep a rolling buffer of frames warm ahead of wherever the user is. */
    let idleHandle = 0;
    let aheadCursor = 0;
    const warmIdle = () => {
      const step = (deadline?: IdleDeadline) => {
        const base = targetIdx.current;
        if (aheadCursor < base) aheadCursor = base;

        let budget = 8;
        while (budget-- > 0 && aheadCursor - base < IDLE_AHEAD) {
          if (deadline && deadline.timeRemaining() <= 0) break;
          loadFrame(aheadCursor);
          aheadCursor++;
        }

        idleHandle = idle.requestIdleCallback
          ? idle.requestIdleCallback(step, { timeout: 2500 })
          : (window.setTimeout(() => step(), 600) as unknown as number);
      };
      idleHandle = idle.requestIdleCallback
        ? idle.requestIdleCallback(step, { timeout: 2500 })
        : (window.setTimeout(() => step(), 600) as unknown as number);
    };
    warmIdle();

    /* ── Pause the loop when the tab is hidden ── */
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId.current);
      } else {
        rafId.current = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(rafId.current);
      if (idle.cancelIdleCallback) idle.cancelIdleCallback(idleHandle);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
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
          aria-hidden="true"
          style={{ display: "block", width: "100%", height: "100%" }}
        />

        {/* Cinematic vignette */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(20,0,45,0) 35%, rgba(20,0,45,0.55) 100%)",
        }} />

        {/* ── Brand lockup ── */}
        <div
          ref={overlayRef}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 24px",
            pointerEvents: "none",
            willChange: "opacity, transform",
          }}
        >
          <span
            className="hero-rise"
            style={{
              fontSize: "0.62rem",
              letterSpacing: "0.42em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "26px",
              animationDelay: "0.05s",
            }}
          >
            Chennai · Est. 2009
          </span>

          <h1
            className="font-display hero-rise"
            style={{
              fontSize: "clamp(3.4rem, 11vw, 9rem)",
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "0.01em",
              textShadow: "0 10px 60px rgba(20,0,45,0.75)",
              animationDelay: "0.15s",
            }}
          >
            Naturals<span style={{ color: "var(--purple-glow)" }}>.</span>
          </h1>

          <p
            className="hero-rise"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "clamp(1.15rem, 2.4vw, 1.9rem)",
              color: "rgba(253,251,255,0.92)",
              marginTop: "14px",
              letterSpacing: "0.04em",
              textShadow: "0 6px 30px rgba(20,0,45,0.8)",
              animationDelay: "0.25s",
            }}
          >
            Where Beauty Begins
          </p>

          <p
            className="hero-rise"
            style={{
              fontSize: "0.78rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(253,251,255,0.55)",
              marginTop: "18px",
              maxWidth: "460px",
              lineHeight: 2,
              animationDelay: "0.35s",
            }}
          >
            Premium hair, skin &amp; bridal artistry — crafted for you
          </p>

          <div
            className="hero-rise"
            style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center", marginTop: "38px", animationDelay: "0.45s" }}
          >
            <a
              href="#booking"
              className="hero-cta hero-cta-primary"
              style={{ pointerEvents: "auto" }}
            >
              Book an Appointment
            </a>
            <a
              href="#gallery"
              className="hero-cta hero-cta-ghost"
              style={{ pointerEvents: "auto" }}
            >
              Explore the Salon
            </a>
          </div>
        </div>

        {/* ── Scroll cue ── */}
        <div
          className="hero-scroll-cue"
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "38px",
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            pointerEvents: "none",
          }}
        >
          <span style={{
            fontSize: "0.56rem",
            letterSpacing: "0.34em",
            textTransform: "uppercase",
            color: "rgba(253,251,255,0.5)",
          }}>
            Scroll
          </span>
          <span style={{
            width: "1px",
            height: "46px",
            background: "linear-gradient(to bottom, rgba(212,175,106,0.9), rgba(212,175,106,0))",
            display: "block",
          }} />
        </div>

        {/* Bottom fade into the next section */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "200px",
          background: "linear-gradient(to bottom, transparent, var(--purple-deep))",
          pointerEvents: "none",
        }} />
      </div>
    </div>
  );
}
