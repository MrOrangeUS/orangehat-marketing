"use client";

import Link from "next/link";
import { useState } from "react";

export type SiteHeaderProps = {
  subtitle?: string;
  ctaLabel?: string;
};

const CTA_URL =
  process.env.NEXT_PUBLIC_BOOK_URL ||
  "https://api.leadconnectorhq.com/widget/booking/CPADDn4nnIu2we1sni9z";

export default function SiteHeader({
  subtitle = "Brand \u00b7 Outreach \u00b7 Automation",
  ctaLabel = "Book a Call",
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo and brand */}
        <Link href="/" className="flex items-center gap-4">
          <img
            src="/orange-hat-header.png"
            alt="OrangeHat Marketing"
            width={160}
            height={64}
            className="object-contain block"
            loading="eager"
          />
          <div className="leading-tight">
            <div className="text-xl font-bold tracking-tight">OrangeHat</div>
            <div className="text-sm text-white/70">{subtitle}</div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/solutions" className="hover:text-[--oh-orange] transition">
            Solutions
          </Link>
          <Link href="/how-it-works" className="hover:text-[--oh-orange] transition">
            How It Works
          </Link>
          <Link href="/add-ons" className="hover:text-[--oh-orange] transition">
            Add-Ons
          </Link>
          <Link href="/industry" className="hover:text-[--oh-orange] transition">
            Industries
          </Link>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center justify-center px-5 py-2 rounded-full bg-[--oh-orange] text-black font-medium hover:opacity-90 transition whitespace-nowrap"
          >
            {ctaLabel}
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-white/30 text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            // Close icon
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile navigation dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#050505]/95 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 text-sm">
            <Link
              href="/solutions"
              className="hover:text-[--oh-orange] transition"
              onClick={() => setMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/how-it-works"
              className="hover:text-[--oh-orange] transition"
              onClick={() => setMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/add-ons"
              className="hover:text-[--oh-orange] transition"
              onClick={() => setMenuOpen(false)}
            >
              Add-Ons
            </Link>
            <Link
              href="/industry"
              className="hover:text-[--oh-orange] transition"
              onClick={() => setMenuOpen(false)}
            >
              Industries
            </Link>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center px-5 py-2 rounded-full bg-[--oh-orange] text-black font-medium hover:opacity-90 transition whitespace-nowrap"
              onClick={() => setMenuOpen(false)}
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
