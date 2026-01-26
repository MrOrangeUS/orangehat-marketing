"use client";

import Link from "next/link";

// Define the props for SiteHeader. Subtitle and CTA label can be customized if needed.
type SiteHeaderProps = {
  subtitle?: string;
  ctaLabel?: string;
};

// Default booking URL for the call-to-action button. Uses environment variable if provided.
const CTA_URL =
  process.env.NEXT_PUBLIC_BOOK_URL ||
  "https://api.leadconnectorhq.com/widget/booking/CPADDn4nnIu2we1sni9z";

/**
 * SiteHeader
 *
 * A reusable header component that displays the OrangeHat logo, brand name,
 * subtitle, navigation links, and a single call-to-action button. It is
 * sticky to the top of the viewport and uses a fixed height to avoid
 * overlapping with the page content. Navigation and CTA are combined into
 * a single responsive row to prevent duplication issues across breakpoints.
 */
export default function SiteHeader({
  subtitle = "Brand · Outreach · Automation",
  ctaLabel = "Book a Call",
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 h-20 bg-[#050505]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
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

        {/* Combined navigation and CTA */}
        <nav className="flex items-center gap-6 text-sm">
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
      </div>
    </header>
  );
}
