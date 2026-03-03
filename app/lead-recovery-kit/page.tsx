"use client";

import Link from "next/link";

const KIT_LINK = "https://buy.stripe.com/9B6dR37M17ed0yj56Z9sk00";
const SUB_LINK = "https://buy.stripe.com/bJe9ANgix8ih1Cn8jb9sk01";

const kitIncludes = [
  "Missed-call SMS recovery scripts",
  "7-day follow-up sequences (SMS + email)",
  "Old-lead reactivation templates",
  "No-show recovery workflows",
  "Setup SOPs for fast implementation",
  "KPI tracker to monitor booked appointments",
];

export default function LeadRecoveryKitPage() {
  return (
    <main className="text-white bg-[#050505] min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-xs tracking-widest uppercase text-white/65">
          OrangeHat Digital Product
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl">
          OrangeHat Lead Recovery Kit
        </h1>

        <p className="mt-5 text-lg md:text-2xl text-white/85 max-w-4xl">
          You don&apos;t need more leads. You need a better follow-up system.
        </p>

        <p className="mt-6 text-base md:text-lg text-white/75 max-w-3xl">
          Recover missed revenue fast with a plug-and-play framework built for local service businesses and agencies. Turn missed calls, stale leads, and weak follow-up into booked appointments.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href={KIT_LINK} target="_blank" rel="noopener noreferrer" className="oh-pill text-center">
            Get the Kit — $49
          </a>
          <a
            href={SUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="oh-pill bg-transparent border border-[--oh-orange] text-[--oh-orange] hover:bg-[--oh-orange] hover:text-black transition-colors text-center"
          >
            Join Updates Club — $4/mo
          </a>
        </div>

        <p className="mt-3 text-sm text-white/55">3-day refund window · Support: support@getorangehat.ai</p>
      </section>

      <section className="border-t border-white/10 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">What&apos;s inside the kit</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {kitIncludes.map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-[#121212] p-5 text-white/85">
                • {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg border border-white/10 bg-[#121212] p-7">
            <h3 className="text-xl font-semibold text-[--oh-orange]">One-Time Kit ($49)</h3>
            <p className="mt-3 text-white/80">
              Buy once and implement immediately. Includes core scripts, templates, and SOPs to launch your lead recovery process fast.
            </p>
            <a href={KIT_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex mt-5 underline hover:text-[--oh-orange]">
              Buy the Lead Recovery Kit →
            </a>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#121212] p-7">
            <h3 className="text-xl font-semibold text-[--oh-orange]">Updates Club ($4/mo)</h3>
            <p className="mt-3 text-white/80">
              Monthly updates with new scripts, niche templates, optimization playbooks, and ongoing improvements. Cancel anytime.
            </p>
            <a href={SUB_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex mt-5 underline hover:text-[--oh-orange]">
              Join Updates Club →
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/40">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-4xl font-bold">Stop leaking money from bad follow-up.</h2>
          <p className="mt-4 text-white/80 text-lg">
            Install the OrangeHat Lead Recovery Kit and convert the leads you already paid for.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a href={KIT_LINK} target="_blank" rel="noopener noreferrer" className="oh-pill">
              Get Started — $49
            </a>
            <Link
              href="/"
              className="oh-pill bg-transparent border border-[--oh-orange] text-[--oh-orange] hover:bg-[--oh-orange] hover:text-black transition-colors"
            >
              Back to OrangeHat
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
