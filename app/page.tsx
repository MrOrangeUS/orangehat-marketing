"use client";

import { useEffect, useState } from 'react';
import MatrixRain from '../components/MatrixRain';

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const CTA_URL = 'https://api.leadconnectorhq.com/widget/booking/CPADDn4nnIu2we1sni9z';
  const openCta = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(CTA_URL, '_blank');
  };

  const currentYear = new Date().getFullYear();

  return (
    <main className="text-white bg-[#050505]">
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
      <header className="fixed w-full top-0 z-50 border-b border-[#1a1a1a] bg-[#050505]/90 backdrop-blur">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/orange-hat-poster.png"
              alt="OrangeHat"
              className="h-10 sm:h-12 object-contain"
            />
            <div className="leading-tight">
              <div className="text-sm sm:text-base font-semibold tracking-wide">
                OrangeHat
              </div>
              <div className="text-[10px] sm:text-xs text-white/60">
                Lead Reactivation
              </div>
            </div>
          </a>
          <ul className="hidden md:flex gap-8">
            <li>
              <a href="/" className="hover:text-[#E05A1E]">
                Home
              </a>
            </li>
            <li>
              <a href="/demo" className="hover:text-[#E05A1E]">
                Demo
              </a>
            </li>
            <li>
              <a href="/case-studies" className="hover:text-[#E05A1E]">
                Case Studies
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#E05A1E]">
                About
              </a>
            </li>
          </ul>
          <a
            href={CTA_URL}
            onClick={openCta}
            className="hidden md:inline-block bg-[#E05A1E] text-white px-4 py-2 rounded-full hover:bg-[#b9450e]"
          >
            Try the Demo
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Revive Your Existing Leads into Booked Appointments
          </h1>
          <p className="text-lg sm:text-xl text-white/85 mx-auto max-w-3xl">
            Works best if you already have <strong className="text-[#E05A1E]">1,000+ old leads</strong> in your CRM. We convert those dormant contacts into real conversations and appointments using automated SMS/email follow‑up and missed‑call text back — with pay‑per-success or profit‑share options.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={CTA_URL}
              onClick={openCta}
              className="bg-[#E05A1E] text-white px-7 py-3 rounded-full font-semibold inline-block hover:bg-[#b9450e]"
            >
              Try the Self‑Serve Demo
            </a>
            <a
              href={CTA_URL}
              onClick={openCta}
              className="border border-[#E05A1E] text-[#E05A1E] px-7 py-3 rounded-full font-semibold inline-block hover:bg-[#E05A1E] hover:text-black"
            >
              Book a Call
            </a>
          </div>
          <p className="text-sm text-white/70">
            Pilot first: if our system doesn’t generate conversations/appointments, we stop.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 animate">
          It’s Not a Lead Problem — It’s a Response Problem
        </h2>
        <p className="text-white/80 text-center max-w-3xl mx-auto mb-8 animate">
          Most companies spend money acquiring leads but let them rot in the CRM. Sales teams are busy, response times slip, and follow‑up is inconsistent. Your best opportunities quietly go to competitors.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/85 animate">
          <li className="bg-[#1a1a1a] rounded-lg px-4 py-3">Calls and emails go unanswered</li>
          <li className="bg-[#1a1a1a] rounded-lg px-4 py-3">Old leads never get re‑engaged</li>
          <li className="bg-[#1a1a1a] rounded-lg px-4 py-3">No systematic qualification</li>
          <li className="bg-[#1a1a1a] rounded-lg px-4 py-3">Follow‑up stops after the second attempt</li>
          <li className="bg-[#1a1a1a] rounded-lg px-4 py-3 sm:col-span-2">Sales teams burn their best leads without realizing it</li>
        </ul>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 animate">
          Revive, Qualify, and Convert at Scale
        </h2>
        <p className="text-white/80 text-center max-w-3xl mx-auto mb-8 animate">
          We don’t “run marketing.” We install a system that consistently turns dormant leads into booked appointments.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate">
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">AI SMS + Email Sequences</h3>
            <p className="text-sm text-white/80">
              Personalized messages that restart conversations.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Missed-Call Text Back</h3>
            <p className="text-sm text-white/80">
              Responds instantly when your team can’t pick up.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Qualification Flow</h3>
            <p className="text-sm text-white/80">
              Identifies who’s ready to book vs. who needs nurturing.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Appointment Booking & Routing</h3>
            <p className="text-sm text-white/80">
              Auto‑schedules leads into your calendar.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">CRM Tagging & Reporting</h3>
            <p className="text-sm text-white/80">
              Visibility on every step of the pipeline.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Compliance</h3>
            <p className="text-sm text-white/80">
              Opt-out options, permission-based messaging, quiet-hour controls.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 animate">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 animate">
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <div className="text-[#E05A1E] font-bold mb-2">1. Import</div>
            <h3 className="font-semibold text-xl mb-2">Import Leads</h3>
            <p className="text-sm text-white/80">Bring your CRM list via CSV or API.</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <div className="text-[#E05A1E] font-bold mb-2">2. Launch</div>
            <h3 className="font-semibold text-xl mb-2">Launch Pilot</h3>
            <p className="text-sm text-white/80">Start a pilot sequence with AI-driven SMS/email.</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <div className="text-[#E05A1E] font-bold mb-2">3. Engage</div>
            <h3 className="font-semibold text-xl mb-2">Engage & Qualify</h3>
            <p className="text-sm text-white/80">Leads reply, get qualified, and book or move to nurture.</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <div className="text-[#E05A1E] font-bold mb-2">4. Optimize</div>
            <h3 className="font-semibold text-xl mb-2">Optimize</h3>
            <p className="text-sm text-white/80">Refine scripts, cadence, and tagging based on results.</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <div className="text-[#E05A1E] font-bold mb-2">5. Scale</div>
            <h3 className="font-semibold text-xl mb-2">Scale</h3>
            <p className="text-sm text-white/80">Expand to your full database with performance-based pricing.</p>
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 animate">Who This is For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate">
          <div className="bg-[#1a1a1a] p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Perfect If</h3>
            <ul className="space-y-2 text-white/80">
              <li>• You have 1,000–10,000+ leads sitting in your CRM</li>
              <li>• You’re an established service business with a sales team</li>
              <li>• You invest in marketing and want to monetize your pipeline</li>
              <li>• You’re ready to pilot with pay-per-success or profit share</li>
            </ul>
          </div>
          <div className="bg-[#1a1a1a] p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Not a Fit If</h3>
            <ul className="space-y-2 text-white/80">
              <li>• You have fewer than 1,000 contacts (math doesn’t work)</li>
              <li>• You’re looking for quick leads or a generic marketing agency</li>
              <li>• You don’t answer calls or messages at all</li>
              <li>• You’re not ready for consistent lead flow</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 animate">Proof (In Progress)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate">
          <div className="bg-[#1a1a1a] p-6 rounded-xl text-center">
            <h3 className="font-semibold mb-2">Speed-to-Lead Comparison</h3>
            <p className="text-sm text-white/70">Before/After response time (example graphic).</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl text-center">
            <h3 className="font-semibold mb-2">Booked Appointments</h3>
            <p className="text-sm text-white/70">Example screenshot of booked appointments.</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl text-center">
            <h3 className="font-semibold mb-2">Call Recordings / Transcripts</h3>
            <p className="text-sm text-white/70">Placeholder for conversations started by the system.</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl text-center">
            <h3 className="font-semibold mb-2">Client Testimonial</h3>
            <p className="text-sm text-white/70">Placeholder for a client quote or video.</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl text-center md:col-span-2">
            <h3 className="font-semibold mb-2">Pipeline Performance</h3>
            <p className="text-sm text-white/70">Example report showing converted leads and revenue.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 animate">Simple Pricing. Pay for Success.</h2>
        <p className="text-white/80 text-center mb-6 animate">
          We pilot on a small slice of your list. If it doesn’t produce conversations or appointments, we stop.
        </p>
        <div className="max-w-3xl mx-auto bg-[#1a1a1a] p-8 rounded-xl border border-[#2a2a2a] animate">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-[#E05A1E]">Option A</h3>
              <p className="text-white/80 mb-2">Pay‑Per‑Conversation / Appointment</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#E05A1E]">Option B</h3>
              <p className="text-white/80 mb-2">Profit‑Share Model</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#E05A1E]">Setup</h3>
              <p className="text-white/80 mb-2">
                One‑time implementation fee (CRM integration, compliance setup, AI sequence build).
              </p>
            </div>
          </div>
          <div className="text-center mt-6">
            <a
              href={CTA_URL}
              onClick={openCta}
              className="bg-[#E05A1E] text-white px-8 py-3 rounded-full font-semibold inline-block hover:bg-[#b9450e]"
            >
              Try the Self‑Serve Demo
            </a>
            <p className="text-xs text-white/65 mt-2">
              If it doesn't produce conversations or appointments, we stop.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 animate">FAQ</h2>
        <div className="space-y-6 animate">
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Is this legal?</h3>
            <p className="text-sm text-white/80">
              Our sequences are permission‑based with clear opt‑out instructions and quiet-hour controls. We provide best‑practice guidance — consult your counsel for legal advice.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Will this spam my leads?</h3>
            <p className="text-sm text-white/80">
              No. Our flows are conversational and compliant. We throttle messaging, include opt‑outs, and tag responses to avoid over-contacting anyone.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Does it integrate with my CRM?</h3>
            <p className="text-sm text-white/80">
              Yes. We integrate with major CRMs like Salesforce, HubSpot, Pipedrive and can use CSV imports. Custom integrations are available.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <h3 className="font-semibold mb-2">How long until we see results?</h3>
            <p className="text-sm text-white/80">
              A pilot can show initial conversations within a week. Full rollout depends on your list size and your team’s availability.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <h3 className="font-semibold mb-2">What happens if it doesn’t work?</h3>
            <p className="text-sm text-white/80">
              If the pilot doesn’t produce conversations or appointments, we stop and you owe nothing beyond the setup fee.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className="py-20 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 animate">
          Turn Dormant Leads Into Appointments
        </h2>
        <p className="text-white/80 mb-8 animate">
          Stop leaving money on the table. Let’s revive your existing pipeline.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CTA_URL}
            onClick={openCta}
            className="bg-[#E05A1E] text-white px-8 py-4 rounded-full font-semibold inline-block animate hover:bg-[#b9450e]"
          >
            Try the Self‑Serve Demo
          </a>
          <a
            href={CTA_URL}
            onClick={openCta}
            className="border border-[#E05A1E] text-[#E05A1E] px-8 py-4 rounded-full font-semibold inline-block animate hover:bg-[#E05A1E] hover:text-black"
          >
            Book a Call
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p>&copy; {currentYear} OrangeHat Marketing LLC. All rights reserved.</p>
          <ul className="flex justify-center gap-6 text-[#E05A1E]">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/demo" className="hover:underline">
                Demo
              </a>
            </li>
            <li>
              <a href="/case-studies" className="hover:underline">
                Case Studies
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/privacy.html" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms.html" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
          <address className="not-italic">920 Dolphin Dr, Upper Grand Lagoon, FL 32407</address>
        </div>
      </footer>
    </main>
  );
}
