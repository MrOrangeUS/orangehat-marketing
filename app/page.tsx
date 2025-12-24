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
      {/* Matrix background (denser + buzzwords supported) */}
      <MatrixRain color="#E05A1E" density={12} injectChance={0.006} />

      {/* Drift animation for the floating badge */}
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

      {/* Header */}
      <header className="fixed w-full top-0 z-50 border-b border-[#1a1a1a] bg-[#050505]/90 backdrop-blur">
        <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
          {/* ✅ Propaganda poster badge */}
          <a href={CTA_URL} onClick={openCta} className="flex items-center gap-3">
            <div className="badge-float drop-shadow-[0_0_14px_rgba(224,90,30,0.28)]">
              {/* Put your file in /public as: /orange-hat-poster.png */}
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
              <a href={CTA_URL} onClick={openCta} className="hover:text-[#E05A1E]">
                Book
              </a>
            </li>
          </ul>

          <a
            href={CTA_URL}
            onClick={openCta}
            className="hidden md:inline-block bg-[#E05A1E] text-white px-4 py-2 rounded-full hover:bg-[#b9450e]"
          >
            Book a Demo
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="relative z-10 hero-section pt-32 pb-32 flex items-center justify-center text-center"
      >
        <div className="hero-content space-y-6 animate">
          <h1 className="text-5xl font-bold animate">Orangehat Marketing</h1>
          <p className="text-xl max-w-xl mx-auto animate">
            Grow your business with AI-driven lead management, creative services,
            and social media that converts.
          </p>
          <a
            href={CTA_URL}
            onClick={openCta}
            className="bg-[#E05A1E] text-white px-6 py-3 rounded-full font-semibold inline-block animate hover:bg-[#b9450e]"
          >
            Book a Demo
          </a>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="services-section py-16 px-4 max-w-6xl mx-auto relative z-10"
      >
        <h2 className="text-3xl font-bold text-center mb-8 animate">
          Our Services
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="service-card bg-[#1a1a1a] p-8 rounded-xl animate hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-semibold mb-2">
              AI-Driven Lead Management
            </h3>
            <p>
              Automate lead capture, qualify with AI, route instantly, and nurture
              with smart sequences. Dashboards show funnel health, SLAs, and
              conversions in real time.
            </p>
            <a
              href={CTA_URL}
              onClick={openCta}
              className="mt-5 inline-block text-[#E05A1E] hover:underline"
            >
              Get a Demo →
            </a>
          </div>

          <div className="service-card bg-[#1a1a1a] p-8 rounded-xl animate hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Creative Services</h3>
            <p>
              Brand systems, identity refresh, ad creative, landing pages, and
              content that actually sells. Strategy → design → ship, with fast
              iteration loops.
            </p>
            <a
              href={CTA_URL}
              onClick={openCta}
              className="mt-5 inline-block text-[#E05A1E] hover:underline"
            >
              Get a Demo →
            </a>
          </div>

          <div className="service-card bg-[#1a1a1a] p-8 rounded-xl animate hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-semibold mb-2">
              Social Media Management &amp; Engagement
            </h3>
            <p>
              Daily posting cadence, UGC frameworks, comment engagement, DM flows,
              and paid social that compounds organic reach.
            </p>
            <a
              href={CTA_URL}
              onClick={openCta}
              className="mt-5 inline-block text-[#E05A1E] hover:underline"
            >
              Get a Demo →
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="pricing-section py-16 px-4 max-w-6xl mx-auto relative z-10"
      >
        <h2 className="text-3xl font-bold text-center mb-8 animate">Pricing</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {[
            {
              name: "Starter",
              price: "$299",
              items: ["Lead management automation", "Standard reporting", "Email support"],
              featured: false,
            },
            {
              name: "Growth",
              price: "$499",
              items: ["All Starter features", "Creative services", "Priority support"],
              featured: true,
            },
            {
              name: "Scale",
              price: "$799",
              items: ["All Growth features", "Social media management", "Dedicated success manager"],
              featured: false,
            },
          ].map((tier) => (
            <div
              key={tier.name}
              className={`pricing-card bg-[#1a1a1a] p-8 rounded-xl text-center animate ${
                tier.featured ? "border-2 border-[#E05A1E]" : ""
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
              <p className="price text-3xl text-[#E05A1E] my-2">{tier.price}</p>
              <ul className="space-y-1 mb-6">
                {tier.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <a
                href={CTA_URL}
                onClick={openCta}
                className="bg-[#E05A1E] text-white px-5 py-2 rounded-full inline-block hover:bg-[#b9450e]"
              >
                Book a Demo
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="testimonials-section py-16 px-4 max-w-6xl mx-auto relative z-10"
      >
        <h2 className="text-3xl font-bold text-center mb-8 animate">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <blockquote className="bg-[#1a1a1a] p-6 border-l-4 border-[#E05A1E] rounded-md italic animate">
            <p>
              Since partnering with Orangehat, our entire operation has transformed.
              We&apos;re scaling without the chaos.
            </p>
            <footer className="mt-4 not-italic text-[#E05A1E]">
              &mdash; Jordan M., Clearplex
            </footer>
          </blockquote>

          <blockquote className="bg-[#1a1a1a] p-6 border-l-4 border-[#E05A1E] rounded-md italic animate">
            <p>
              The creative assets from Orangehat delivered conversions we thought
              were impossible.
            </p>
            <footer className="mt-4 not-italic text-[#E05A1E]">
              &mdash; Sam R., Growthify
            </footer>
          </blockquote>

          <blockquote className="bg-[#1a1a1a] p-6 border-l-4 border-[#E05A1E] rounded-md italic animate">
            <p>
              Our leads have never been more qualified. It&apos;s like having a
              superpower.
            </p>
            <footer className="mt-4 not-italic text-[#E05A1E]">
              &mdash; Alex B., ByteLabs
            </footer>
          </blockquote>
        </div>

        <div className="text-center mt-10">
          <a
            href={CTA_URL}
            onClick={openCta}
            className="bg-[#E05A1E] text-white px-6 py-3 rounded-full font-semibold inline-block hover:bg-[#b9450e]"
          >
            Book a Demo
          </a>
        </div>
      </section>

      {/* Contact section replaced with CTA only (no forms/boxes) */}
      <section
        id="contact"
        className="py-20 px-4 max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-3xl font-bold mb-4 animate">Ready to Grow?</h2>
        <p className="mb-8 text-white/80 animate">
          Skip the forms. Click below and book instantly.
        </p>
        <a
          href={CTA_URL}
          onClick={openCta}
          className="bg-[#E05A1E] text-white px-8 py-4 rounded-full font-semibold inline-block animate hover:bg-[#b9450e]"
        >
          Book Your Demo Now
        </a>
      </section>

      {/* Footer */}
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
