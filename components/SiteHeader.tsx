"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type SiteHeaderProps = {
  subtitle?: string;
  ctaLabel?: string;
};

const CTA_URL =
  process.env.NEXT_PUBLIC_BOOK_URL ||
  "https://api.leadconnectorhq.com/widget/booking/CPADDn4nnIu2we1sni9z";

const NAV = [
  { href: "/solutions", label: "Solutions" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/add-ons", label: "Add‑Ons" },
  { href: "/industry", label: "Industries" },
];

export default function SiteHeader({
  subtitle = "Brand · Outreach · Automation",
  ctaLabel = "Book a Call",
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/10">
      {/* Top bar: logo + desktop nav + mobile toggle */}
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
          {/* Smaller logo keeps header compact */}
          <img
            src="/orange-hat-header.png"
            alt="OrangeHat logo"
            className="h-7 w-7 sm:h-9 sm:w-9 object-contain shrink-0 block"
            style={{ maxWidth: 36, maxHeight: 36 }}
            loading="eager"
          />

          <div className="min-w-0 leading-tight">
            <div className="text-base sm:text-lg font-bold tracking-tight text-white truncate">
              OrangeHat
            </div>
            <div className="text-xs sm:text-sm text-white/70 truncate">
              {subtitle}
            </div>
          </div>
        </Link>

        {/* Desktop nav + CTA */}
        <nav className="hidden md:flex items-center justify-end gap-8 text-sm whitespace-nowrap">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/85 hover:text-[--oh-orange] transition"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[--oh-orange] text-black font-semibold hover:opacity-90 transition"
          >
            {ctaLabel}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/20 bg-white/5 text-white"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#050505]/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3 text-sm">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/85 hover:text-[--oh-orange] transition"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center px-5 py-2 rounded-full bg-[--oh-orange] text-black font-semibold hover:opacity-90 transition"
              onClick={() => setOpen(false)}
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
