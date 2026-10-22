"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

/* ── Paint palette (matches the site theme) ── */
const PAINT = [
  [168, 85, 247],  // purple-light
  [192, 132, 252], // purple-glow
  [212, 175, 106], // gold
  [236, 72, 153],  // blush pink
  [139, 92, 246],  // violet
] as const;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  color: readonly [number, number, number];
  spin: number;
};

const INTERACTIVE = "a, button, input, select, textarea, label, summary, [role='button'], [role='tab']";
const TEXT_INPUT = "input, textarea, [contenteditable='true']";

/* ── Feel ── */
const FOLLOW    = 0.15;   // how tightly the brush tracks the pointer (lower = floatier)
const TRAIL_MIN = 3;      // particles emitted every tick, even when barely moving
const MAX_STEPS = 9;      // cap on particles per tick
const MAX_PARTICLES = 420; // alive particle budget
const TRAIL_ALPHA  = 0.62; // paint opacity (additive blending saturates fast)

/* The brush is drawn pointing down-right, with its tip at (24, 42). */
const TIP_X = 24;
const TIP_Y = 42;

/* ── Capability gate ──
 * Read straight from the environment via useSyncExternalStore so we never
 * setState inside an effect, and so the server snapshot stays `false`. */
function subscribe() {
  return () => {};
}
function getSnapshot() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
function getServerSnapshot() {
  return false;
}

export default function MakeupBrushCursor() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const brushRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const groupRef = useRef<SVGGElement>(null);

  /* ── Cursor engine ── */
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    root.classList.add("has-brush-cursor");

    const canvas = canvasRef.current;
    const brush = brushRef.current;
    const group = groupRef.current;
    if (!canvas || !brush || !group) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* ── Sizing ── */
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    /* ── State ── */
    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const brushPos = { ...pointer };
    const vel = { x: 0, y: 0 };
    const particles: Particle[] = [];

    let scale = 1;
    let targetScale = 1;
    let tilt = 0;
    let visible = false;
    let last = performance.now();
    let lastSpawn = 0;
    let raf = 0;

    /* ── Particle helpers ── */
    const spawn = (x: number, y: number, speed: number, life: number) => {
      const angle = Math.random() * Math.PI * 2;
      const mag = speed * (0.35 + Math.random() * 0.65);
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * mag + vel.x * 0.18,
        vy: Math.sin(angle) * mag + vel.y * 0.18,
        life,
        size: 2.5 + Math.random() * 6,
        color: PAINT[(Math.random() * PAINT.length) | 0],
        spin: (Math.random() - 0.5) * 0.2,
      });
      if (particles.length > MAX_PARTICLES) particles.splice(0, particles.length - MAX_PARTICLES);
    };

    const splat = (x: number, y: number) => {
      for (let i = 0; i < 30; i++) {
        const angle = (i / 30) * Math.PI * 2 + Math.random() * 0.4;
        const mag = 1.6 + Math.random() * 5;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * mag,
          vy: Math.sin(angle) * mag,
          life: 1,
          size: 2.5 + Math.random() * 8,
          color: PAINT[(Math.random() * PAINT.length) | 0],
          spin: (Math.random() - 0.5) * 0.25,
        });
      }
      if (particles.length > MAX_PARTICLES) particles.splice(0, particles.length - MAX_PARTICLES);
    };

    /* ── Pointer listeners ── */
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      visible = true;
    };

    const onLeave = () => {
      visible = false;
      targetScale = 1;
    };
    const onEnter = () => { visible = true; };

    const onOver = (e: PointerEvent) => {
      const el = e.target as Element | null;
      if (!el || typeof el.closest !== "function") return;
      if (el.closest(TEXT_INPUT)) {
        targetScale = 0.55;
        return;
      }
      targetScale = el.closest(INTERACTIVE) ? 1.45 : 1;
    };

    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      splat(e.clientX, e.clientY);
      const el = e.target as Element | null;
      if (el && typeof el.closest === "function" && el.closest(INTERACTIVE)) {
        targetScale = 1.85;
      }
    };

    const onUp = () => { targetScale = 1; };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    /* ── Render loop ── */
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 16.667, 3);
      last = now;

      /* Smooth follow — floaty: the brush trails the pointer with a soft lag */
      const dx = pointer.x - brushPos.x;
      const dy = pointer.y - brushPos.y;
      brushPos.x += dx * FOLLOW;
      brushPos.y += dy * FOLLOW;
      vel.x = dx * 0.35;
      vel.y = dy * 0.35;

      /* Tilt reacts to horizontal movement */
      const targetTilt = Math.max(-26, Math.min(26, vel.x * 0.6));
      tilt += (targetTilt - tilt) * 0.08;

      /* Hover scale */
      scale += (targetScale - scale) * 0.14;

      /* Paint trail — a rich ribbon laid down along the travelled path */
      if (visible && now - lastSpawn > 16) {
        lastSpawn = now;
        const dist = Math.hypot(dx, dy);
        const steps = Math.min(MAX_STEPS, TRAIL_MIN + Math.round(dist / 3.5));
        for (let i = 0; i < steps; i++) {
          const t = (i + 1) / steps;
          spawn(
            brushPos.x + dx * t * 0.7,
            brushPos.y + dy * t * 0.7,
            0.6,
            0.7 + Math.random() * 0.45,
          );
        }
      }

      /* Update + draw particles */
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.globalCompositeOperation = "lighter";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= 0.014 * dt;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vx *= 0.93;
        p.vy = p.vy * 0.93 - 0.04 * dt;
        p.spin += 0.01 * dt;

        const [r, g, b] = p.color;
        const alpha = Math.max(0, p.life) * TRAIL_ALPHA;
        const radius = p.size * (0.6 + p.life * 0.8);

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
        grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`);
        grad.addColorStop(0.45, `rgba(${r}, ${g}, ${b}, ${alpha * 0.45})`);
        grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, radius * 1.35, radius * 0.9, p.spin, 0, Math.PI * 2);
        ctx.fill();
      }

      /* Wet paint glow at the tip */
      if (visible) {
        const glowR = 34 * scale;
        const glow = ctx.createRadialGradient(brushPos.x, brushPos.y, 0, brushPos.x, brushPos.y, glowR);
        glow.addColorStop(0, "rgba(192, 132, 252, 0.22)");
        glow.addColorStop(1, "rgba(192, 132, 252, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(brushPos.x, brushPos.y, glowR, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";

      /* Position the brush — tip locked to the pointer */
      brush.style.transform = `translate3d(${brushPos.x}px, ${brushPos.y}px, 0)`;
      brush.style.opacity = visible ? "1" : "0";
      group.setAttribute(
        "transform",
        `translate(${TIP_X} ${TIP_Y}) rotate(${tilt.toFixed(2)}) scale(${scale.toFixed(3)}) translate(${-TIP_X} ${-TIP_Y})`,
      );

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      root.classList.remove("has-brush-cursor");
    };
  }, [enabled]);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          pointerEvents: "none",
          display: enabled ? "block" : "none",
        }}
      />

      {/* The brush itself */}
      <div
        ref={brushRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          zIndex: 9999,
          pointerEvents: "none",
          opacity: 0,
          transition: "opacity 0.25s",
          willChange: "transform",
        }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          style={{
            position: "absolute",
            left: -TIP_X,
            top: -TIP_Y,
            overflow: "visible",
            filter: "drop-shadow(0 6px 14px rgba(59, 7, 100, 0.45))",
          }}
        >
          <defs>
            <linearGradient id="brush-handle" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3B0764" />
              <stop offset="55%" stopColor="#6B21A8" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
            <linearGradient id="brush-ferrule" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#A67C1A" />
              <stop offset="45%" stopColor="#E8CC8A" />
              <stop offset="100%" stopColor="#D4AF6A" />
            </linearGradient>
            <linearGradient id="brush-bristles" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="55%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#7E22CE" />
            </linearGradient>
          </defs>

          {/* Scaled + tilted about the tip so the point stays on the cursor */}
          <g ref={groupRef}>
            {/* Handle */}
            <path
              d="M18.5 17 L20.5 2.5 Q24 0.8 27.5 2.5 L29.5 17 Z"
              fill="url(#brush-handle)"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.6"
            />
            {/* Ferrule */}
            <rect x="15.6" y="16" width="16.8" height="10.5" rx="2.4" fill="url(#brush-ferrule)" />
            <rect x="15.6" y="24.4" width="16.8" height="2.1" rx="1" fill="rgba(120, 85, 20, 0.45)" />
            {/* Bristles */}
            <path
              d="M17.4 25.6 Q24 24.2 30.6 25.6 Q31.4 34 24 41.6 Q16.6 34 17.4 25.6 Z"
              fill="url(#brush-bristles)"
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="0.7"
            />
            {/* Bristle strands */}
            <path d="M21 26.6 Q21.4 33 23.4 39.4" stroke="rgba(255,255,255,0.3)" strokeWidth="0.7" fill="none" strokeLinecap="round" />
            <path d="M24 26.2 L24 40" stroke="rgba(255,255,255,0.18)" strokeWidth="0.6" fill="none" strokeLinecap="round" />
            <path d="M27 26.6 Q26.6 33 24.6 39.4" stroke="rgba(255,255,255,0.26)" strokeWidth="0.7" fill="none" strokeLinecap="round" />
            {/* Wet paint on the tip */}
            <ellipse cx="24" cy="39.6" rx="4.4" ry="2.4" fill="rgba(236, 72, 153, 0.55)" />
            <ellipse cx="24" cy="39.2" rx="2.2" ry="1.2" fill="rgba(255, 255, 255, 0.35)" />
          </g>
        </svg>
      </div>
    </>
  );
}
