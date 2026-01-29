"use client";

import Link from "next/link";
import MatrixRain from "../../components/MatrixRain";

const CTA_URL = "https://api.leadconnectorhq.com/widget/booking/CPADDn4nnIu2we1sni9z";

const industries = [
  { name: "Construction & Trades", desc: "General contractors, remodels, concrete, field crews." },
  { name: "Energy & Solar", desc: "Solar installs, battery, energy services, utilities-adjacent." },
  { name: "Roofing", desc: "Storm work, residential/commercial roofing, inspection-first sales." },
  { name: "HVAC", desc: "Service calls, installs, maintenance plans, high-volume inbound." },
  { name: "Professional Services", desc: "Appointments, consultations, high-intent follow-up." },
  { name: "Hospitality", desc: "Hotels, resorts, property groups, guest experience workflows." },
];

export default function IndustriesPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Background rain effect */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <MatrixRain color="#E05A1E" glyph="01ΩΞ₪⛁∴" />
      </div>
      {/* Content */}
      <section className="relative z-10 px-6 py-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Industries</h1>
        <p className="text-lg md:text-xl text-white/85 mb-8">
          If you rely on conversations → appointments → jobs, this system fits.
        </p>
        {/* Cards */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {industries.map(({ name, desc }) => (
            <div
              key={name}
              className="rounded-xl border border-white/10 bg-black/60 p-6"
            >
              <h3 className="text-xl font-semibold text-[--oh-orange] mb-2">
                {name}
              </h3>
              <p className="text-white/80">{desc}</p>
            </div>
          ))}
        </div>
        {/* CTA buttons */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4 relative z-[9999]">
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="oh-pill bg-transparent border border-[--oh-orange] text-[--oh-orange] hover:bg-[--oh-orange] hover:text-black transition-colors"
          >
            Book a Strategy Call
          </a>
          <Link href="/solutions">
            <span className="oh-pill bg-transparent border border-[--oh-orange] text-[--oh-orange] hover:bg-[--oh-orange] hover:text-black transition-colors cursor-pointer">
              View Solutions
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
