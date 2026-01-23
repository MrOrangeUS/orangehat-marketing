'use client';
import Link from 'next/link';
import Image from 'next/image';

type SiteHeaderProps = {
  subtitle?: string;
  ctaLabel?: string;
  showCTA?: boolean;
};

const CTA_URL =
  process.env.NEXT_PUBLIC_BOOK_URL ||
  'https://api.leadconnectorhq.com/widget/booking/CPADDn4nnIu2we1sni9z';

export default function SiteHeader({
  subtitle = 'Brand · Outreach · Automation',
  ctaLabel = 'Book a Call',
  showCTA = true,
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-20 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/orange-hat-header.png"
            alt="OrangeHat Marketing"
            width={160}
            height={64}
            className="object-contain"
            priority
          />
          <div className="leading-tight">
            <div className="text-xl font-bold">OrangeHat</div>
            <div className="text-sm text-white/70">{subtitle}</div>
          </div>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 items-center text-sm">
          <Link href="/solutions" className="hover:text-[--oh-orange]">Solutions</Link>
          <Link href="/how-it-works" className="hover:text-[--oh-orange]">How&nbsp;It&nbsp;Works</Link>
          <Link href="/add-ons" className="hover:text-[--oh-orange]">Add-Ons</Link>
          <Link href="/industry" className="hover:text-[--oh-orange]">Industries</Link>
        </nav>
        {/* Desktop CTA */}
        {showCTA && (
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener"
            className="oh-pill hidden md:inline-block"
          >
            {ctaLabel}
          </a>
        )}
      </div>
      {/* Mobile nav */}
      <nav className="flex md:hidden flex-wrap gap-x-4 gap-y-2 px-6 pb-4 text-sm">
        <Link href="/solutions" className="hover:text-[--oh-orange]">Solutions</Link>
        <Link href="/how-it-works" className="hover:text-[--oh-orange]">How&nbsp;It&nbsp;Works</Link>
        <Link href="/add-ons" className="hover:text-[--oh-orange]">Add-Ons</Link>
        <Link href="/industry" className="hover:text-[--oh-orange]">Industries</Link>
        {showCTA && (
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener"
            className="oh-pill mt-2 w-full text-center"
          >
            {ctaLabel}
          </a>
        )}
      </nav>
    </header>
  );
}
