"use client";

import Link from "next/link";
import MatrixRain from "../../components/MatrixRain";

const CTA_URL =
  process.env.NEXT_PUBLIC_BOOK_URL ||
  "https://api.leadconnectorhq.com/widget/booking/CPADDn4nnIu2we1sni9z";

export default function SolutionsPage() {
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

 /
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Solutions</h1>
        <p className="text-lg md:text-xl text-white/85 mb-14">
          Growth infrastructure for businesses that depend on conversations turning into revenue.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <div className="bg-[#151515] p-8 rounded-lg border border-white/10">
            <h3 className="text-2xl font-semibold mb-4 text-[--oh-orange]">Brand Builder</h3>
            <ul className="space-y-2 text-white/85">
              <li>• Positioning & messaging</li>
              <li>• Conversion-focused websites</li>
              <li>• Trust & authority signals</li>
              <li>• Clear offers that sell</li>
            </ul>
          </div>

          <div className="bg-[#151515] p-8 rounded-lg border border-white/10">
            <h3 className="text-2xl font-semibold mb-4 text-[--oh-orange]">Outreach Engine</h3>
            <ul className="space-y-2 text-white/85">
              <li>• Email, SMS, chat, social</li>
              <li>• AI-assisted personalization</li>
              <li>• Smart sequencing</li>
              <li>• Demand creation</li>
            </ul>
          </div>

          <div className="bg-[#151515] p-8 rounded-lg border border-white/10">
            <h3 className="text-2xl font-semibold mb-4 text-[--oh-orange]">Automation Backbone</h3>
            <ul className="space-y-2 text-white/85">
              <li>• CRM & pipeline automation</li>
              <li>• AI qualification</li>
              <li>• Routing & booking</li>
              <li>• Follow-up intelligence</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
          <a href={CTA_URL} target="_blank" rel="noopener" className="oh-pill">
            Build My Growth System
          </a>
          <Link
            href="/how-it-works"
            className="oh-pill bg-transparent border border-[--oh-orange] text-[--oh-orange] hover:bg-[--oh-orange] hover:text-black transition-colors"
          >
            See How It Works
          </Link>
        </div>
      </section>
    </main>
  );
}
