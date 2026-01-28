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
  { name: "Hospitality", desc: "Hotels, resorts, travel and tourism businesses." },
];

export default function IndustriesPage() {
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
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-12 text-center">
     
  <h1 className="text-2xl md:text-5xl font-bold mb-6">Industries</h1>
     <p className="text-lg md:text-xl text-white/85 mb-8">If you rely on conversations → appointments → jobs, this system fits.</p>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {industries.map((i) => (
            <div key={i.name} className="bg-[#151515] p-8 rounded-lg border border-white/10">
              <h2 className="text-2xl font-semibold mb-3 text-[--oh-orange]">{i.name}</h2>
              <p className="text-white/85">{i.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener"
            className="oh-pill bg-transparent border border-[--oh-orange] text-[--oh-orange] hover:bg-[--oh-orange] hover:text-black transition-colors"
          >
            Book a Strategy Call
          </a>
          <Link href="/solutions">
            <span className="oh-pill bg-transparent border border-[--oh-orange] text-[--oh-orange] hover:bg-[--oh-orange] hover:text-black transition-colors">
              View Solutions
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
