"use client";
import { useEffect, useRef } from "react";

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const PARTICLE_COUNT = 120;
    const CONNECTION_DIST = 90;
    const CENTER_PULL = 0.012;
    const cx = W / 2;
    const cy = H / 2;
    const RADIUS = Math.min(W, H) * 0.38;

    // Warm palette matching --text / --muted / --border
    const COLORS = ["#1c1c1a", "#6b6860", "#d0cdc8", "#a8a39c"];

    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      r: number; color: string;
      angle: number; speed: number; orbitR: number;
    };

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => {
      const angle = Math.random() * Math.PI * 2;
      const orbitR = RADIUS * (0.15 + Math.random() * 0.85);
      return {
        x: cx + Math.cos(angle) * orbitR,
        y: cy + Math.sin(angle) * orbitR,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: 1 + Math.random() * 1.8,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        angle,
        speed: (Math.random() - 0.5) * 0.003,
        orbitR,
      };
    });

    let mouse = { x: cx, y: cy };
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener("mousemove", onMove);

    const onResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", onResize);

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      // Update particles — slow orbital drift
      for (const p of particles) {
        p.angle += p.speed;
        const targetX = cx + Math.cos(p.angle) * p.orbitR;
        const targetY = cy + Math.sin(p.angle) * p.orbitR;

        // Gentle pull toward orbit + mouse repel
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          p.vx -= (dx / dist) * 0.3;
          p.vy -= (dy / dist) * 0.3;
        }

        p.vx += (targetX - p.x) * CENTER_PULL;
        p.vy += (targetY - p.y) * CENTER_PULL;
        p.vx *= 0.92;
        p.vy *= 0.92;
        p.x += p.vx;
        p.y += p.vy;
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECTION_DIST) {
            const alpha = (1 - d / CONNECTION_DIST) * 0.35;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(108, 104, 96, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.75;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Infinite / lemniscate symbol
      // Infinite symbol — parametric lemniscate
      ctx.save();
      ctx.translate(cx, cy);
      ctx.strokeStyle = "rgba(108,104,96,0.6)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      const a = 20;
      const steps = 300;
      for (let i = 0; i <= steps; i++) {
        const t = (i / steps) * Math.PI * 2;
        const denom = 1 + Math.sin(t) * Math.sin(t);
        const x = (a * Math.cos(t)) / denom;
        const y = (a * Math.sin(t) * Math.cos(t)) / denom;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        cursor: "crosshair",
      }}
    />
  );
}
