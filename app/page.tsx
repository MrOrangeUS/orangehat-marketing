'use client';

import Image from 'next/image';

const CTA_URL = 'https://getorangehat.ai';

export default function HomePage() {
  return (
    <main className="bg-[#050505] text-white">

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-24 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto">
          A 24/7 Sales System for Construction & Energy Companies.
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          We capture real on-site media, upgrade your website to convert, and install an AI agent +
          automated follow-up so leads get answered, qualified, and booked — even when you’re on a job.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={CTA_URL}
            target="_blank"
            className="bg-[#E05A1E] px-8 py-4 rounded-full font-semibold hover:bg-[#b9450e]"
          >
            Book a Strategy Call
          </a>

          <a
            href="#system"
            className="border border-[#E05A1E] text-[#E05A1E] px-8 py-4 rounded-full hover:bg-[#E05A1E] hover:text-black"
          >
            See What’s Included
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Setup + monthly support. Built for busy crews. No “marketing mystery box.”
        </p>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <p className="text-center text-gray-400 mb-8">
          Real crews. Real job sites. Built for contractors who don’t sit at a desk all day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <IndustryCard
            title="Roofing"
            src="/industry/roofing-crew.png"
          />
          <IndustryCard
            title="HVAC"
            src="/industry/hvac-tech.png"
          />
          <IndustryCard
            title="Solar"
            src="/industry/solar-install.png"
          />
          <IndustryCard
            title="Construction"
            src="/industry/luxury-renovation.png"
          />
        </div>
      </section>

      {/* ================= PROBLEM ================= */}
      <section className="py-20 bg-[#0b0b0b] px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            If you miss calls, you miss money.
          </h2>

          <p className="text-gray-300 mb-6">
            Most construction and energy companies don’t have a lead problem —
            they have a response and follow-up problem.
          </p>

          <ul className="space-y-2 text-gray-400 list-disc pl-5">
            <li>Calls go to voicemail</li>
            <li>Websites don’t build trust</li>
            <li>No system to qualify leads</li>
            <li>Follow-up is inconsistent</li>
            <li>Your best leads leak out of the bucket</li>
          </ul>
        </div>
      </section>

      {/* ================= SYSTEM ================= */}
      <section id="system" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          The OrangeHat Growth System™
        </h2>

        <p className="text-gray-400 mb-10">
          Everything you need for a website that looks legit, answers leads instantly,
          and follows up automatically.
        </p>

        <div className="grid md:grid-cols-5 gap-6">
          <SystemCard title="On-Site Media">
            Real job-site photos and video that instantly build trust.
          </SystemCard>

          <SystemCard title="Conversion Website">
            Clear offer, proof, and calls-to-action that turn traffic into calls.
          </SystemCard>

          <SystemCard title="AI Sales Agent">
            Answers questions, qualifies leads, and books jobs 24/7.
          </SystemCard>

          <SystemCard title="Automated Follow-Up">
            Missed-call text back, email, and reminders that don’t forget.
          </SystemCard>

          <SystemCard title="Launch + Optimize">
            We test, refine, and improve so it performs long-term.
          </SystemCard>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="py-20 bg-[#0b0b0b] px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Simple pricing. Real results.
          </h2>

          <p className="text-4xl text-[#E05A1E] font-bold my-6">
            $5,000 Setup + $750 / month
          </p>

          <p className="text-gray-400 mb-8">
            Setup includes media capture, website build or upgrade, AI agent, automation, and launch.
            Monthly includes hosting, support, optimization, and AI upkeep.
          </p>

          <a
            href={CTA_URL}
            target="_blank"
            className="inline-block bg-[#E05A1E] px-8 py-4 rounded-full font-semibold hover:bg-[#b9450e]"
          >
            Book a Strategy Call
          </a>

          <p className="mt-4 text-sm text-gray-500">
            If we’re not a fit, we’ll tell you fast.
          </p>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Want your website to act like a sales rep?
        </h2>

        <p className="text-gray-400 mb-8">
          Let’s build the system once — then let it run every day.
        </p>

        <a
          href={CTA_URL}
          target="_blank"
          className="bg-[#E05A1E] px-8 py-4 rounded-full font-semibold hover:bg-[#b9450e]"
        >
          Book a Strategy Call
        </a>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function IndustryCard({ title, src }: { title: string; src: string }) {
  return (
    <div className="relative rounded-xl overflow-hidden bg-black">
      <Image
        src={src}
        alt={title}
        width={600}
        height={400}
        className="object-cover w-full h-56"
        priority
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
        <p className="font-semibold">{title}</p>
      </div>
    </div>
  );
}

function SystemCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#141414] rounded-xl p-6">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{children}</p>
    </div>
  );
}
