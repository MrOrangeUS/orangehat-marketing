"use client";

import Link from "next/link";

type SiteHeaderProps = {
  subtitle?: string;
  ctaLabel?: string;
  showCTA?: boolean;
};

const CTA_URL =
  process.env.NEXT_PUBLIC_BOOK_URL ||
  "https://api.leadconnectorhq.com/widget/booking/CPADDn4nnIu2we1sni9z";

export default function SiteHeader({
  subtitle = "Brand · Outreach · Automation",
  ctaLabel = "Book a Call",
  showCTA = true,
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-4">
          <img
            src="/orange-hat-header.png"
            alt="OrangeHat Marketing"
            width={160}
            height={64}
            className="object-contain block"
          />
          <div className="leading-tight">
            <div className="text-xl font-bold tracking-tight">
              OrangeHat
            </div>
            <div className="text-sm text-white/70">
              {subtitle}
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
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
        </nav>

        {/* Desktop CTA */}
        {showCTA && (
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full bg-[--oh-orange] text-black font-medium hover:opacity-90 transition"
          >
            {ctaLabel}
          </a>
        )}
      </div>

      {/* Mobile Navigation */}
      <nav className="flex md:hidden flex-wrap gap-x-4 gap-y-2 px-6 pb-4 text-sm">
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

        {showCTA && (
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full text-center px-5 py-2 rounded-full bg-[--oh-orange] text-black font-medium hover:opacity-90 transition"
          >
            {ctaLabel}
          </a>
        )}
      </nav>
    </header>
  );
}
