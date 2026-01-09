"use client";

import Link from "next/link";
import MatrixRain from "../components/MatrixRain";

const CTA_URL =
  process.env.NEXT_PUBLIC_BOOK_URL ||
  "https://api.leadconnectorhq.com/widget/booking/CPADDn4nnIu2we1sni9z";

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <main className="text-white bg-[#050505] min-h-screen flex flex-col">
      {/* Matrix background (uses existing component signature) */}
      <MatrixRain
        color="#E05A1E"
        glyph="01ΩΞ₪⛁∴"
        fontSize={12}
        speed={0.1}
        tailLength={16}
        injectChance={0.008}
        background="rgb(0,0,0)"
      />

      {/* Header */}
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
            Book a Call
          </a>
        </div>

        {/* Mobile nav */}
        <nav className="flex md:hidden flex-wrap gap-x-4 gap-y-2 px-6 pb-4 text-sm">
          <Link href="/solutions" className="hover:text-[--oh-orange]">Solutions</Link>
          <Link href="/how-it-works" className="hover:text-[--oh-orange]">How&nbsp;It&nbsp;Works</Link>
          <Link href="/add-ons" className="hover:text-[--oh-orange]">Add-Ons</Link>
          <Link href="/industry" className="hover:text-[--oh-orange]">Industries</Link>
          <a href={CTA_URL} target="_blank" rel="noopener" className="oh-pill mt-2 w-full text-center">
            Book a Call
          </a>
        </nav>
      </header>

      {/* Hero */}
      <div className="relative flex-1 flex items-center justify-center text-center px-6 py-24 overflow-hidden">
        <section className="relative z-10 max-w-5xl mx-auto">
          <p className="inline-block text-xs tracking-widest uppercase text-white/60 border border-white/15 rounded-full px-3 py-1 mb-5">
            Brand · Outreach · Automation
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            We Build Brands That Create Demand — Then Automate the Follow-Up
          </h1>

          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-white/85">
            OrangeHat installs growth infrastructure: brand positioning, outbound outreach, and AI-driven
            automation that turns attention into booked appointments.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
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
      </div>

      {/* Problem */}
      <section className="py-24 px-6 bg-black border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not a Traffic Problem. Not a Lead Problem. It’s a{" "}
            <span className="text-[--oh-orange]">System</span> Problem.
          </h2>

          <p className="text-lg md:text-xl mb-10 text-white/85">
            Most businesses don’t lose money because they lack leads. They lose money because they lack systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto text-white/85">
            <div className="space-y-3">
              <p>• Missed calls go unanswered</p>
              <p>• Follow-up breaks after day one</p>
              <p>• Outreach is inconsistent or manual</p>
            </div>
            <div className="space-y-3">
              <p>• Branding doesn’t convert attention into action</p>
              <p>• Old leads die quietly inside CRMs</p>
              <p>• No automation or routing</p>
            </div>
          </div>

          <p className="mt-10 text-white/60">Without infrastructure, growth leaks everywhere.</p>
        </div>
      </section>

      {/* Stack */}
      <section className="py-24 px-6 bg-[#0f0f0f] border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">The OrangeHat Growth Stack</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-[#151515] p-8 rounded-lg border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-[--oh-orange]">Brand Builder</h3>
              <ul className="space-y-2 text-left text-white/85">
                <li>• Brand messaging & positioning</li>
                <li>• Conversion-focused websites</li>
                <li>• Authority signals that increase response rates</li>
                <li>• Clear value propositions that sell</li>
              </ul>
            </div>

            <div className="bg-[#151515] p-8 rounded-lg border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-[--oh-orange]">Outreach Engine</h3>
              <ul className="space-y-2 text-left text-white/85">
                <li>• Multi-channel outbound (email, SMS, chat, social)</li>
                <li>• AI-assisted personalization at scale</li>
                <li>• Smart sequencing and targeting</li>
                <li>• Human + AI hybrid workflows</li>
              </ul>
            </div>

            <div className="bg-[#151515] p-8 rounded-lg border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-[--oh-orange]">Automation Backbone</h3>
              <ul className="space-y-2 text-left text-white/85">
                <li>• CRM & pipeline automation</li>
                <li>• AI lead qualification</li>
                <li>• Routing & booking logic</li>
                <li>• Instant follow-up & reminders</li>
              </ul>
            </div>
          </div>

          <p className="mt-10 text-white/60">Everything works together. Nothing runs in isolation.</p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 px-6 bg-black border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Optional Revenue Accelerators</h2>

          <p className="mb-12 text-lg md:text-xl text-white/85">
            Once your growth system is installed, plug in these add-ons to accelerate revenue.
            These are optional multipliers, not the core offer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-[#151515] p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-[--oh-orange]">AI Lead Recovery</h3>
              <p className="mb-4 text-white/85">
                Reactivate old leads, missed calls, and dormant contacts automatically. No ad spend required.
              </p>
              <Link href="/ai-lead-recovery" className="underline hover:text-[--oh-orange]">
                Learn more →
              </Link>
            </div>

            <div className="bg-[#151515] p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-[--oh-orange]">Pay-Per-Lead</h3>
              <p className="mb-4 text-white/85">
                Done-for-you lead delivery — only after your system is built. Limited availability and territory based.
              </p>
              <Link href="/pay-per-lead" className="underline hover:text-[--oh-orange]">
                Learn more →
              </Link>
            </div>
          </div>

          <p className="mt-10 text-white/60">These are add-ons. The system comes first.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-[#0f0f0f] text-center border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Install a Growth System That Actually Converts</h2>
        <p className="text-lg md:text-xl mb-10 text-white/85">
          Brand. Outreach. Automation. Everything else becomes optional.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={CTA_URL} target="_blank" rel="noopener" className="oh-pill">
            Book a Strategy Call
          </a>
          <Link
            href="/how-it-works"
            className="oh-pill bg-transparent border border-[--oh-orange] text-[--oh-orange] hover:bg-[--oh-orange] hover:text-black transition-colors"
          >
            See How It Works
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-black text-center text-sm border-t border-white/10">
        <p className="mb-3 text-[--oh-orange] font-semibold">Brand · Outreach · Automation</p>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link href="/solutions" className="hover:text-[--oh-orange]">Solutions</Link>
          <Link href="/how-it-works" className="hover:text-[--oh-orange]">How&nbsp;It&nbsp;Works</Link>
          <Link href="/add-ons" className="hover:text-[--oh-orange]">Add-Ons</Link>
          <Link href="/industry" className="hover:text-[--oh-orange]">Industries</Link>
          <Link href="/contact" className="hover:text-[--oh-orange]">Contact</Link>
        </nav>

        <p className="mt-4 text-white/50">© {year} Orange Hat Marketing. All rights reserved.</p>
      </footer>
    </main>
  );
}
