"use client";

import Link from "next/link";
import MatrixRain from "../../components/MatrixRain";

const CTA_URL =
  process.env.NEXT_PUBLIC_BOOK_URL ||
  "https://api.leadconnectorhq.com/widget/booking/CPADDn4nnIu2we1sni9z";

export default function PayPerLeadPage() {
  return (
    <main className="text-white bg-[#050505] min-h-screen">
      <MatrixRain
        color="#E05A1E"
        glyph="01ΩΞ₪⛁∴"
        fontSize={12}
        speed={0.1}
        tailLength={16}
        injectChance={0.008}
        background="rgb(0,0,0)"
      />

      <header className="sticky top-0 z-20 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-wide">
            Orange Hat
          </Link>

          <nav className="hidden md:flex space-x-6 items-center text-sm">
            <Link href="/solutions" className="hover:text-[--oh-orange]">Solutions</Link>
            <Link href="/how-it-works" className="hover:text-[--oh-orange]">How&nbsp;It&nbsp;Works</Link>
            <Link href="/add-ons" className="hover:text-[--oh-orange]">Add-Ons</Link>
            <Link href="/industry" className="hover:text-[--oh-orange]">Industries</Link>
          </nav>

          <a href={CTA_URL} target="_blank" rel="noopener" className="oh-pill hidden md:inline-block">
            Request Qualification
          </a>
        </div>
      </header>

      <section className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Pay-Per-Lead</h1>
        <p className="text-lg md:text-xl text-white/85 mb-14">
          Not a commodity. Not for everyone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-[#151515] p-8 rounded-lg border border-white/10">
            <h2 className="text-xl font-semibold mb-3 text-[--oh-orange]">How It Works</h2>
            <ul className="space-y-2 text-white/85">
              <li>• Leads delivered after qualification</li>
              <li>• Territory-based availability</li>
              <li>• Integrated into your automation stack</li>
            </ul>
          </div>

          <div className="bg-[#151515] p-8 rounded-lg border border-white/10">
            <h2 className="text-xl font-semibold mb-3 text-[--oh-orange]">Requirements</h2>
            <ul className="space-y-2 text-white/85">
              <li>• Active OrangeHat system</li>
              <li>• Fast response capability</li>
              <li>• Clear service offering</li>
            </ul>
          </div>

          <div className="bg-[#151515] p-8 rounded-lg border border-white/10">
            <h2 className="text-xl font-semibold mb-3 text-[--oh-orange]">Why It’s Limited</h2>
            <p className="text-white/85">
              We don’t flood markets. We protect performance.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
          <a href={CTA_URL} target="_blank" rel="noopener" className="oh-pill">
            Request Qualification
          </a>
          <Link
            href="/solutions"
            className="oh-pill bg-transparent border border-[--oh-orange] text-[--oh-orange] hover:bg-[--oh-orange] hover:text-black transition-colors"
          >
            Build My Growth System
          </Link>
        </div>
      </section>
    </main>
  );
}
