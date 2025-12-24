"use client";
import { useEffect, useRef } from "react";

export default function MatrixRain({
  glyph = "01ΩΞ₪⟁∴",
  color = "#12ff9c",
  density = 20,
  speed = 0.15,
  messages = DEFAULT_MARKETING_MESSAGES,
  messageChance = 0.012, // ~1.2% per column per frame (tune down to hide more)
}: {
  glyph?: string;
  color?: string;
  density?: number;
  speed?: number;
  messages?: string[];
  messageChance?: number;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;

    let cols = 0;
    let drops: number[] = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.floor(canvas.width / density);
      drops = Array(cols).fill(1);
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${density}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const x = i * density;
        const y = drops[i] * density;

        const injectMessage =
          messages.length > 0 && Math.random() < messageChance;

        if (injectMessage) {
          const word = messages[(Math.random() * messages.length) | 0];

          // Make it "hidden": slightly dimmer and clipped so it feels embedded
          ctx.save();
          ctx.globalAlpha = 0.18; // lower than canvas opacity; subtle
          const maxChars = 18; // prevents huge words breaking the look
          const text = word.length > maxChars ? word.slice(0, maxChars) : word;

          // Draw at the column position; it will overflow right a bit (intended)
          ctx.fillText(text, x, y);
          ctx.restore();
        } else {
          const char = glyph[(Math.random() * glyph.length) | 0];
          ctx.fillText(char, x, y);
        }

        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += speed;
      }

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [glyph, color, density, speed, messages, messageChance]);

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

const DEFAULT_MARKETING_MESSAGES = [
  "AI AUTOMATION",
  "LEAD GEN",
  "CONVERSION",
  "RETARGETING",
  "FUNNELS",
  "PIPELINE",
  "CRM",
  "BOOK MORE CALLS",
  "INBOUND LEADS",
  "OUTBOUND",
  "APPOINTMENTS",
  "ROI",
  "SCALE",
  "GROWTH",
  "SEO",
  "PPC",
  "CRO",
  "OMNICHANNEL",
  "ATTRIBUTION",
  "ANALYTICS",
  "A/B TEST",
  "LANDING PAGES",
  "EMAIL SEQUENCES",
  "WORKFLOWS",
  "FOLLOW-UP",
  "NURTURE",
  "QUALIFY",
  "CLOSER READY",
  "CHAT AGENTS",
  "24/7 SALES",
  "BOOKED TODAY",
  "LOCAL DOMINATION",
];
