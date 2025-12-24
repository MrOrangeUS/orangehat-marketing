"use client";
import { useEffect, useRef } from "react";

export default function MatrixRain({
  glyph = "01ΩΞ₪⟁∴",
  color = "#12ff9c",
  density = 20,
  speed = 0.15,        // smaller values slow the rain
}: {
  glyph?: string;
  color?: string;
  density?: number;
  speed?: number;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.floor(canvas.width / density);
      drops = Array(cols).fill(1);
    }
    let cols = 0;
    let drops: number[] = [];
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${density}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = glyph[Math.floor(Math.random() * glyph.length)];
        const x = i * density;
        const y = drops[i] * density;
        ctx.fillText(text, x, y);

        // Reset drop when it goes off screen
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Slow down the fall by adding a fractional increment
        drops[i] += speed;
      }
      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [glyph, color, density, speed]);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.22,
      }}
    />
  );
}
