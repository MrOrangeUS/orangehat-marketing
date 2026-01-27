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
  { href: "/add-ons", label: "Add-Ons" },
  { href: "/industry", label: "Industries" },
];

export default function SiteHeader({
  subtitle = "Brand · Outreach · Automation",
  ctaLabel = "Book a Call",
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent background scroll when mobile menu open
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
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 flex items-center gap-4">
        {/* Brand (left) */}
        <Link href="/" className="flex items-center gap-3 min-w-0 max-w-[320px]">
          <img
            src="/orange-hat-header.png"
            alt="OrangeHat logo"
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain shrink-0 block"
            style={{ maxWidth: 48, maxHeight: 48 }}
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

            {/* Desktop nav (center) */}
          
  <nav className="hidden md:flex items-center gap-8 text-sm mx-auto">
  {NAV.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className="inline-flex text-white/85 hover:text-[--oh-orange] transition whitespace-nowrap"
    >
      {item.label}
    </Link>
  ))}
</nav>         </Link>
          ))}
        </nav>

        {/* Desktop CTA (right) */}
        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex ml-auto oh-pill oh-pill--header whitespace-nowrap"
        >
          {ctaLabel}
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden ml-auto inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/20 bg-white/5 text-white"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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
              className="oh-pill mt-2 inline-flex items-center justify-center whitespace-nowrap"
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
</Link>