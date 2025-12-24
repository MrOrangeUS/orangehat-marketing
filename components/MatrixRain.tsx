"use client";
import { useEffect, useRef } from "react";

export default function MatrixRain({
  glyph = "01ΩΞ₪⟁∴",
  color = "#E05A1E",
  density = 20,
  speed = 0.22,              // crawl speed (0.10–0.35)
  injectChance = 0.006,      // buzzword frequency (0.003–0.02)
  trail = 0.32,              // higher = less smear (0.22–0.55)
}: {
  glyph?: string;
  color?: string;
  density?: number;
  speed?: number;
  injectChance?: number;
  trail?: number;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;

    // Make canvas crisp
    (ctx as any).imageSmoothingEnabled = false;

    // Vertical “buzzword columns” – each column can temporarily render a word vertically
    type ColumnState = { word: string | null; idx: number; cooldown: number };
    let cols = 0;
    let drops: number[] = [];
    let colState: ColumnState[] = [];

    const BUZZWORDS = [
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
      "AB TEST",
      "LANDING PAGES",
      "EMAIL SEQUENCES",
      "WORKFLOWS",
      "FOLLOW UP",
      "NURTURE",
      "QUALIFY",
      "CHAT AGENTS",
      "24 7 SALES",
      "LOCAL DOMINATION",
    ];

    const pick = (arr: string[]) => arr[(Math.random() * arr.length) | 0];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      cols = Math.floor(canvas.width / density);
      drops = Array(cols).fill(1);

      // per-column word rendering state
      colState = Array(cols)
        .fill(null)
        .map(() => ({ word: null, idx: 0, cooldown: 0 }));
    }

    resize();
    window.addEventListener("resize", resize);

    function draw() {
      // Stronger fade = crisper characters, less blending
      ctx.fillStyle = `rgba(0,0,0,${trail})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `600 ${density}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const x = i * density;
        const y = drops[i] * density;

        const state = colState[i];

        // If we're not currently rendering a word in this column, maybe start one
        if (!state.word && state.cooldown <= 0 && Math.random() < injectChance) {
          // Make a compact vertical word: remove spaces, keep it short-ish
          const raw = pick(BUZZWORDS).replace(/\s+/g, "");
          const maxLen = 12;
          state.word = raw.length > maxLen ? raw.slice(0, maxLen) : raw;
          state.idx = 0;

          // prevent spam in same column
          state.cooldown = 120 + ((Math.random() * 120) | 0); // frames until next word allowed
        }

        // Render either word (vertically) or normal glyph
        if (state.word) {
          // One letter per row, vertical in this same column
          const ch = state.word[state.idx] ?? null;

          if (ch) {
            ctx.save();
            ctx.globalAlpha = 0.95;
            ctx.shadowColor = color;
            ctx.shadowBlur = 6; // subtle glow, still crisp due to stronger fade
            ctx.fillText(ch, x, y);
            ctx.restore();

            state.idx += 1;

            // If finished, stop rendering word (let rain continue normally)
            if (state.idx >= state.word.length) {
              state.word = null;
              state.idx = 0;
            }
          } else {
            state.word = null;
            state.idx = 0;
          }
        } else {
          // normal glyph
          const char = glyph[(Math.random() * glyph.length) | 0];
          ctx.save();
          ctx.globalAlpha = 0.9;
          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;
          ctx.fillText(char, x, y);
          ctx.restore();
        }

        // Reset drop randomly after it goes off screen
        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;

        // Crawl speed: fractional increment
        drops[i] += speed;

        // Reduce cooldown
        if (state.cooldown > 0) state.cooldown -= 1;
      }

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [glyph, color, density, speed, injectChance, trail]);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.26,
      }}
    />
  );
}
