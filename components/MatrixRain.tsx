"use client";
import { useEffect, useRef } from "react";

type Props = {
  color?: string;
  glyph?: string;

  // ✅ New: keep backwards compatibility
  density?: number;          // alias for fontSize (old prop)

  fontSize?: number;         // smaller = more dense (try 12–16)
  speed?: number;            // drip speed in rows/frame (0.10–0.35)
  tailLength?: number;       // length of the drip tail (8–20)
  injectChance?: number;     // buzzword start chance per column per frame (0.001–0.01)
  background?: string;       // solid background clear
};

export default function MatrixRain({
  glyph = "01ΩΞ₪⟁∴",
  color = "#E05A1E",
  density,                   // ✅ accept density
  fontSize,                  // keep fontSize too
  speed = 0.05,
  tailLength = 14,
  injectChance = 0.009,
  background = "rgb(0,0,0)",
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  // ✅ density maps to effective fontSize; preserves old usage
  const fs = fontSize ?? density ?? 13;

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;

    // Crisp rendering
    (ctx as any).imageSmoothingEnabled = false;

    const BUZZWORDS = [
      "AIAUTOMATION",
      "LEADGEN",
      "CONVERSION",
      "RETARGETING",
      "FUNNELS",
      "PIPELINE",
      "CRM",
      "BOOKMORECALLS",
      "INBOUNDLEADS",
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
      "ABTEST",
      "LANDINGPAGES",
      "EMAILSEQUENCES",
      "WORKFLOWS",
      "FOLLOWUP",
      "NURTURE",
      "QUALIFY",
      "CHATAGENTS",
      "SALES247",
      "LOCALDOMINATION",
    ];

    const pick = <T,>(arr: T[]) => arr[(Math.random() * arr.length) | 0];

    // Column width slightly tighter than fontSize for more density
    const colWidth = Math.max(8, Math.floor(fs * 0.9));

    type Col = {
      y: number;                 // float row position
      lastRow: number;           // last integer row drawn for updates
      stream: string[];          // stable tail characters
      word: string | null;       // active vertical buzzword
      wordIdx: number;
      cooldown: number;
      speedJitter: number;
    };

    let cols = 0;
    let rows = 0;
    let columns: Col[] = [];

    function randGlyph() {
      return glyph[(Math.random() * glyph.length) | 0];
    }

    function nextChar(col: Col) {
      // If we're injecting a buzzword, feed one letter per row
      if (col.word) {
        const ch = col.word[col.wordIdx] ?? null;
        col.wordIdx += 1;
        if (col.wordIdx >= col.word.length) {
          col.word = null;
          col.wordIdx = 0;
        }
        return ch ?? randGlyph();
      }
      return randGlyph();
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      cols = Math.floor(canvas.width / colWidth);
      rows = Math.floor(canvas.height / fs);

      columns = Array.from({ length: cols }, () => {
        const stream = Array.from({ length: tailLength }, randGlyph);
        return {
          y: Math.random() * rows,
          lastRow: -1,
          stream,
          word: null,
          wordIdx: 0,
          cooldown: (Math.random() * 120) | 0,
          speedJitter: 0.7 + Math.random() * 0.8, // natural variance
        };
      });
    }

    resize();
    window.addEventListener("resize", resize);

    function draw() {
      // FULL CLEAR each frame = zero blending/smear
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `700 ${fs}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
      ctx.textBaseline = "top";

      for (let i = 0; i < columns.length; i++) {
        const col = columns[i];

        // chance to start a buzzword (vertical, letter-by-letter)
        if (!col.word && col.cooldown <= 0 && Math.random() < injectChance) {
          col.word = pick(BUZZWORDS);
          col.wordIdx = 0;
          col.cooldown = 160 + ((Math.random() * 180) | 0);
        }

        // update row position smoothly
        col.y += speed * col.speedJitter;

        // when we cross into a new row, advance the stable stream
        const rowNow = Math.floor(col.y);
        if (rowNow !== col.lastRow) {
          col.stream.pop();
          col.stream.unshift(nextChar(col));
          col.lastRow = rowNow;
        }

        // wrap around
        if (col.y > rows + tailLength + 2) {
          col.y = -Math.random() * tailLength;
          col.lastRow = -1;
        }

        // render tail (solid)
        const x = i * colWidth;

        for (let t = 0; t < col.stream.length; t++) {
          const y = (rowNow - t) * fs;
          if (y < -fs || y > canvas.height + fs) continue;

          // Solid opacity gradient down the tail (still crisp because full clear)
          const alpha = t === 0 ? 1 : Math.max(0.15, 1 - t / (tailLength * 1.05));

          ctx.fillStyle = withAlpha(color, alpha);
          ctx.fillText(col.stream[t], x, y);
        }

        if (col.cooldown > 0) col.cooldown -= 1;
      }

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [glyph, color, fs, speed, tailLength, injectChance, background]);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.28,
      }}
    />
  );
}

function withAlpha(hex: string, a: number) {
  // supports #RRGGBB
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}
