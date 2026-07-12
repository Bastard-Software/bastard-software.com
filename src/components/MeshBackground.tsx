"use client";

import { useEffect, useRef } from "react";

/**
 * Animated node network evoking a living knowledge graph / neural mesh.
 * Renders a static frame when the user prefers reduced motion, and pauses
 * entirely whenever it's not the visible tab or not scrolled into view —
 * cheap on its own, but several instances left running off-screen or across
 * route changes is what actually costs a page.
 */
export default function MeshBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const context = canvasEl.getContext("2d");
    if (!context) return;

    // Non-null aliases so the animation closures keep the narrowed types.
    const cv = canvasEl;
    const ctx = context;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;
    let cancelled = false;

    type Node = { x: number; y: number; vx: number; vy: number; r: number; c: string };
    let nodes: Node[] = [];

    const palette = ["8,145,168", "124,92,255", "120,200,220"];
    const maxDist = 110;

    function build() {
      const rect = cv.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      cv.width = Math.floor(width * dpr);
      cv.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = Math.min(42, Math.max(16, Math.floor((width * height) / 32000)));
      nodes = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.5 + 0.7,
        c: palette[Math.floor(Math.random() * palette.length)],
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) {
            const o = (1 - d / maxDist) * 0.3;
            ctx.strokeStyle = `rgba(150,178,214,${o})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${n.c},0.12)`;
        ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = `rgba(${n.c},0.9)`;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function step() {
      if (cancelled) return;
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }
      draw();
      raf = requestAnimationFrame(step);
    }

    function play() {
      if (running || cancelled) return;
      running = true;
      if (width === 0 || height === 0) build();
      if (reduce) draw();
      else raf = requestAnimationFrame(step);
    }

    function pause() {
      running = false;
      cancelAnimationFrame(raf);
    }

    function onResize() {
      build();
      if (reduce) draw();
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) play();
        else pause();
      },
      { threshold: 0.01 }
    );
    io.observe(cv);

    window.addEventListener("resize", onResize);

    const onVisibility = () => {
      if (document.hidden) pause();
      else if (cv.getBoundingClientRect().top < window.innerHeight) play();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelled = true;
      pause();
      io.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
