"use client";
import { useEffect, useRef } from "react";

// Lightweight canvas neural-network: drifting nodes joined by faint lines.
export default function Background() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    const ctx = c.getContext("2d");
    let raf, w, h;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let nodes = [];

    const resize = () => {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
      const n = Math.min(70, Math.floor((w * h) / 22000));
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        p: Math.random() > 0.5,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const a of nodes) {
        if (!reduce) { a.x += a.vx; a.y += a.vy; }
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        for (const b of nodes) {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 140) {
            ctx.strokeStyle = `rgba(99,102,241,${0.13 * (1 - d / 140)})`;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        ctx.fillStyle = a.p ? "rgba(168,85,247,.6)" : "rgba(59,130,246,.6)";
        ctx.beginPath(); ctx.arc(a.x, a.y, 1.8, 0, 6.283); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize(); draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 bg-[#0a0a0a]">
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-electric/20 blur-[140px]" />
      <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-neon/20 blur-[140px]" />
      <canvas ref={ref} className="absolute inset-0" />
    </div>
  );
}
