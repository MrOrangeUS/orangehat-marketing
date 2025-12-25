"use client";

import { useEffect } from "react";
import MatrixRain from "../components/MatrixRain";

export default function Home() {
  useEffect(() => {
    // Intersection observer for animations
    const elements = document.querySelectorAll(".animate");
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    // trigger hero animations after slight delay
    const heroElements = document.querySelectorAll("#hero .animate");
    const timer = setTimeout(() => {
      heroElements.forEach((el) => el.classList.add("in-view"));
    }, 100);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      clearTimeout(timer);
    };
  }, []);

  const CTA_URL = "https://getorangehat.ai";

  const openCta = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(CTA_URL, "_blank");
  };

  return (
    <main className="text-white bg-[#050505]">
      {/* Matrix background */}
      <MatrixRain
        color="#E05A1E"
        glyph="01ΩΞ₪⟁∴"
        fontSize={12}
        speed={0.16}
        tailLength={16}
        injectChance={0.008}
        background="rgb(0,0,0)"
      />

      {/* Badge drift */}
      <style>{`
        @keyframes floatBadge {
          0%   { transform: translate3d(0,0,0) rotate(-0.4deg); }
          50%  { transform: translate3d(0,-6px,0) rotate(0.4deg); }
          100% { transform: translate3d(0,0,0) rotate(-0.4deg); }
        }
        .badge-float {
          animation: floatBadge 6.5s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>

      {/* HEADER (leave as-is) */}
      <header className="fixed w-full top-0 z-50 border-b border-[#1a1a1a] bg-[#050505]/90 backdrop-blur">
        <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <a href={CTA_URL} onClick={openCta} className="flex items-center gap-3">
            <div className="badge-float drop-shadow-[0_0_14px_rgba(224,90,30,0.28)]">
              <img
                src="/orange-hat-poster.png"
                alt="Orange Hat"
                className="h-12 w-10 sm:h-14 sm:w-12 object-contain"
                draggable={false}
              />
            </div>

            <div className="leading-tight">
              <div className="text-sm sm:text-base font-semibold tracking-wide">
                OrangeHat Marketing
              </div>
              <div className="text-[10px] sm:text-xs text-white/60">
                AI-driven growth systems
              </div>
            </div>
          </a>

          <ul className="hidden md:flex gap-8">
            <li>
              <a href="#services" className="hover:text-[#E05A1E]">
                Services
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-[#E05A1E]">
                Pricing
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-[#E05A1E]">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#E05A1E]">
                Contact
              </a>
            </li>
          </ul>

          <a
            href={CTA_URL}
            onClick={openCta}
            className="hidden md:inline-block bg-[#E05A1E] text-white px-4 py-2 rounded-full hover:bg-[#b9450e]"
          >
            Book a Strategy Call
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative z-10 pt-32 pb-20 px-4 flex items-center justify-center text-center"
      >
        <div className="max-w-5xl mx-auto space-y-6 animate">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight animate">
            A 24/7 Sales System for Construction &amp; Energy Companies.
          </h1>

          <p className="text-lg sm:text-xl text-white/85 max-w-3xl mx-auto animate">
            We capture real on-site media, upgrade your website to convert, and
            install an AI agent + automated follow-up so leads get answered,
            qualified, and booked—even when you’re on a job.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate">
            <a
              href={CTA_URL}
              onClick={openCta}
              className="bg-[#E05A1E] text-white px-7 py-3 rounded-full font-semibold inline-block hover:bg-[#b9450e]"
            >
              Book a Strategy Call
            </a>

            <a
              href="#system"
              className="border border-[#E05A1E] text-[#E05A1E] px-7 py-3 rounded-full font-semibold inline-block hover:bg-[#E05A1E] hover:text-white"
            >
              See What’s Included
            </a>
          </div>

          <p className="text-sm text-white/70 animate">
            Setup + monthly support. Built for busy crews. No “marketing mystery box.”
          </p>

          {/* Industry imagery strip (PNG-only) */}
          <div className="mt-10 animate">
            <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { src: "/industry/roofing-crew.png", label: "Roofing" },
                { src: "/industry/hvac-tech.png", label: "HVAC" },
                { src: "/industry/solar-install.png", label: "Solar" },
                { src: "/industry/luxury-renovation.png", label: "Construction" },
              ].map((img) => (
                <div
                  key={img.src}
                  className="relative rounded-xl overflow-hidden border border-[#1f1f1f] bg-[#0b0b0b]"
                >
                  <img
                    src={img.src}
                    alt={`${img.label} crew on site`}
                    className="h-28 sm:h-32 w-full object-cover opacity-90"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute bottom-2 left-2 text-xs font-semibold tracking-wide text-white/90">
                    {img.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-3 text-xs text-white/60">
              Real crews. Real jobsites. Built for contractors who don’t sit at a desk all day.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="relative z-10 py-16 px-4 max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 animate">
            If you miss calls, you miss money.
          </h2>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 animate">
            Most construction and energy businesses don’t have a lead problem—they have a response and follow-up
            problem. The phone rings while you’re on a ladder or in a truck. A potential customer hits your site,
            doesn’t see proof, and bounces. Then the follow-up is “when there’s time,” which means your best leads
            quietly choose the next company that answers fast and looks legit.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/85 animate">
            <li className="bg-[#1a1a1a] rounded-lg px-4 py-3">Calls go to voicemail</li>
            <li className="bg-[#1a1a1a] rounded-lg px-4 py-3">Websites don’t build trust</li>
            <li className="bg-[#1a1a1a] rounded-lg px-4 py-3">No system to qualify leads</li>
            <li className="bg-[#1a1a1a] rounded-lg px-4 py-3">Follow-up is inconsistent</li>
            <li className="bg-[#1a1a1a] rounded-lg px-4 py-3 sm:col-span-2">
              Your best leads leak out of the bucket
            </li>
          </ul>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="relative z-10 py-16 px-4 max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 animate">
            OrangeHat installs the system that closes the gap.
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed animate">
            We don’t “run marketing.” We build sales infrastructure: real-world credibility, a conversion-focused
            website, a 24/7 AI agent that answers and qualifies, and automated follow-up that keeps leads moving
            until they’re booked.
          </p>
        </div>
      </section>

      {/* SYSTEM */}
      <section
        id="services"
        className="relative z-10 py-16 px-4 max-w-6xl mx-auto"
        aria-labelledby="system-title"
      >
        <div id="system" />

        <div className="text-center mb-10">
          <h2 id="system-title" className="text-3xl font-bold mb-3 animate">
            The OrangeHat Growth System™
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto animate">
            Everything you need for a website that looks legit, answers leads instantly, and follows up automatically.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-5 items-start">
          {/* Proof image */}
          <div className="lg:col-span-2 bg-[#0b0b0b] border border-[#1f1f1f] rounded-2xl overflow-hidden animate">
            <img
              src="/industry/luxury-renovation.png"
              alt="Construction crew renovating a luxury home interior"
              className="w-full h-64 lg:h-full object-cover opacity-90"
              loading="lazy"
              draggable={false}
            />
            <div className="p-5">
              <div className="text-sm font-semibold">Proof wins jobs.</div>
              <p className="mt-1 text-sm text-white/70">
                We capture real visuals that build trust, then turn your website into a conversion machine.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="lg:col-span-3 grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="bg-[#1a1a1a] p-7 rounded-xl animate hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold mb-2">On-Site Photo + Recording</h3>
              <p className="text-white/80">
                Real job-site visuals that build trust fast—so prospects feel confident choosing you before they ever
                call.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-7 rounded-xl animate hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold mb-2">Conversion Website Build (or Upgrade)</h3>
              <p className="text-white/80">
                Clear offer, proof, and calls-to-action—built to turn site visitors into booked estimates.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-7 rounded-xl animate hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold mb-2">AI Sales &amp; Support Agent</h3>
              <p className="text-white/80">
                Answers questions instantly, routes the right requests, and keeps leads engaged 24/7.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-7 rounded-xl animate hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold mb-2">Automated Follow-Up</h3>
              <p className="text-white/80">
                Missed-call text back, email/SMS sequences, reminders, and simple qualification—so leads don’t go cold.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-7 rounded-xl animate hover:-translate-y-1 transition-transform md:col-span-2">
              <h3 className="text-xl font-semibold mb-2">Launch + Optimization</h3>
              <p className="text-white/80">
                We test everything—message, flow, conversion points—then optimize so performance improves month after
                month.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 animate">
          <a
            href={CTA_URL}
            onClick={openCta}
            className="bg-[#E05A1E] text-white px-7 py-3 rounded-full font-semibold inline-block hover:bg-[#b9450e]"
          >
            Book a Strategy Call
          </a>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="relative z-10 py-16 px-4 max-w-6xl mx-auto"
        aria-labelledby="how-title"
      >
        <div className="text-center mb-10">
          <h2 id="how-title" className="text-3xl font-bold mb-3 animate">
            How it works
          </h2>
        </div>

        <ol className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <li className="bg-[#1a1a1a] p-8 rounded-xl animate">
            <div className="text-[#E05A1E] font-bold mb-2">1. Capture</div>
            <h3 className="text-xl font-semibold mb-2">Capture</h3>
            <p className="text-white/80">
              We record real visuals and proof—so your site instantly feels credible.
            </p>
          </li>

          <li className="bg-[#1a1a1a] p-8 rounded-xl animate">
            <div className="text-[#E05A1E] font-bold mb-2">2. Build</div>
            <h3 className="text-xl font-semibold mb-2">Build</h3>
            <p className="text-white/80">
              We upgrade your website to convert with clear offers, trust, and simple actions.
            </p>
          </li>

          <li className="bg-[#1a1a1a] p-8 rounded-xl animate">
            <div className="text-[#E05A1E] font-bold mb-2">3. Convert</div>
            <h3 className="text-xl font-semibold mb-2">Convert</h3>
            <p className="text-white/80">
              Leads get answered, qualified, and followed up with automatically—until they’re booked.
            </p>
          </li>
        </ol>
      </section>

      {/* WHO IT'S FOR */}
      <section
        id="testimonials"
        className="relative z-10 py-16 px-4 max-w-6xl mx-auto"
        aria-labelledby="who-title"
      >
        <div className="text-center mb-10">
          <h2 id="who-title" className="text-3xl font-bold mb-3 animate">
            Built for businesses that live in the real world.
          </h2>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="bg-[#1a1a1a] p-8 rounded-xl animate">
            <h3 className="text-xl font-semibold mb-4">Perfect if you’re…</h3>
            <ul className="space-y-2 text-white/80">
              <li>• Contractor / trades company</li>
              <li>• Roofing, HVAC, electrical, plumbing</li>
              <li>• Solar / energy services</li>
              <li>• General construction / remodel / concrete</li>
              <li>• Field-service teams that run on calls + estimates</li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-xl animate">
            <h3 className="text-xl font-semibold mb-4">Not a fit if…</h3>
            <ul className="space-y-2 text-white/80">
              <li>• You want “likes” instead of booked work</li>
              <li>• You don’t answer calls at all (we can’t fix zero effort)</li>
              <li>• You’re not ready for consistent lead flow</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="relative z-10 py-16 px-4 max-w-6xl mx-auto"
        aria-labelledby="pricing-title"
      >
        <div className="text-center mb-10">
          <h2 id="pricing-title" className="text-3xl font-bold mb-3 animate">
            Simple pricing. Real results.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a] animate">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <div className="text-4xl font-bold text-[#E05A1E]">$5,000</div>
              <div className="text-white/80">Setup</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#E05A1E]">$750</div>
              <div className="text-white/80">/ month</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="bg-[#121212] border border-[#2a2a2a] rounded-xl p-5">
              <h3 className="font-semibold mb-2">Setup includes</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Media capture + website build/upgrade + AI agent + CRM/automation + launch
              </p>
            </div>

            <div className="bg-[#121212] border border-[#2a2a2a] rounded-xl p-5">
              <h3 className="font-semibold mb-2">Monthly includes</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Hosting/support + ongoing optimization + AI + workflow upkeep
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={CTA_URL}
              onClick={openCta}
              className="bg-[#E05A1E] text-white px-7 py-3 rounded-full font-semibold inline-block hover:bg-[#b9450e]"
            >
              Book a Strategy Call
            </a>
            <div className="text-xs text-white/65 mt-3">
              If we’re not a fit, we’ll tell you fast.
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="contact"
        className="relative z-10 py-20 px-4 max-w-4xl mx-auto text-center"
        aria-labelledby="final-cta-title"
      >
        <h2 id="final-cta-title" className="text-3xl font-bold mb-4 animate">
          Want your website to act like a sales rep?
        </h2>
        <p className="text-white/80 mb-8 animate">
          Let’s build the system once—then let it run every day.
        </p>
        <a
          href={CTA_URL}
          onClick={openCta}
          className="bg-[#E05A1E] text-white px-8 py-4 rounded-full font-semibold inline-block animate hover:bg-[#b9450e]"
        >
          Book a Strategy Call
        </a>
      </section>

      {/* FOOTER (leave as-is) */}
      <footer className="bg-[#1a1a1a] py-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p>&copy; 2025 Orangehat Marketing LLC. All rights reserved.</p>
          <ul className="flex justify-center gap-6 text-[#E05A1E]">
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
          <address className="not-italic">
            920 Dolphin Dr, Upper Grand Lagoon, FL 32407
          </address>
        </div>
      </footer>
    </main>
  );
}
