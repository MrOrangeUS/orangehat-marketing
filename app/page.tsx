'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Intersection observer for animations
    const elements = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach(el => observer.observe(el));

    // trigger hero animations after slight delay
    const heroElements = document.querySelectorAll('#hero .animate');
    const timer = setTimeout(() => {
      heroElements.forEach(el => el.classList.add('in-view'));
    }, 100);

    return () => {
      elements.forEach(el => observer.unobserve(el));
      clearTimeout(timer);
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const formEndpoint = 'https://formspree.io/f/your_form_id';
    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      if (response.ok) {
        alert('Thank you for contacting Orangehat Marketing! We will get back to you soon.');
        form.reset();
      } else {
        alert('There was a problem submitting the form. Please try again later.');
      }
    } catch (error) {
      alert('There was a problem submitting the form. Please check your connection and try again.');
    }
  };

  const handleBookDemo = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  const calendlyUrl = 'https://getorangehat.ai';
    window.open(calendlyUrl, '_blank');
  };

  return (
    <main className="text-white bg-[#050505]">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 border-b border-[#1a1a1a] bg-[#050505]">
        <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <a href="#hero" className="flex items-center">
            <img src="/logo.svg" alt="Orangehat Marketing logo" className="h-10" />
          </a>
          <ul className="hidden md:flex gap-8">
            <li><a href="#services" className="hover:text-[#E05A1E]">Services</a></li>
            <li><a href="#pricing" className="hover:text-[#E05A1E]">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-[#E05A1E]">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-[#E05A1E]">Contact</a></li>
          </ul>
          <a href="#contact" className="hidden md:inline-block bg-[#E05A1E] text-white px-4 py-2 rounded-full hover:bg-[#b9450e]">Book a Demo</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="hero-section pt-32 pb-32 flex items-center justify-center text-center">
        <div className="hero-content space-y-6 animate">
          <h1 className="text-5xl font-bold animate">Orangehat Marketing</h1>
          <p className="text-xl max-w-xl mx-auto animate">Grow your business with AI‑driven lead management, creative services, and social media that converts.</p>
          <a href="#contact" className="bg-[#E05A1E] text-white px-6 py-3 rounded-full font-semibold inline-block animate hover:bg-[#b9450e]">Book a Demo</a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services-section py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 animate">Our Services</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="service-card bg-[#1a1a1a] p-8 rounded-xl animate hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-semibold mb-2">AI‑Driven Lead Management</h3>
            <p>Automate lead capture, qualify with AI, route instantly, and nurture with smart sequences. Dashboards show funnel health, SLAs, and conversions in real time.</p>
          </div>
          <div className="service-card bg-[#1a1a1a] p-8 rounded-xl animate hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Creative Services</h3>
            <p>Brand systems, identity refresh, ad creative, landing pages, and content that actually sells. Strategy → design → ship, with fast iteration loops.</p>
          </div>
          <div className="service-card bg-[#1a1a1a] p-8 rounded-xl animate hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Social Media Management &amp; Engagement</h3>
            <p>Daily posting cadence, UGC frameworks, comment engagement, DM flows, and paid social that compounds organic reach.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing-section py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 animate">Pricing</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="pricing-card bg-[#1a1a1a] p-8 rounded-xl text-center animate">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="price text-3xl text-[#E05A1E] my-2">$299</p>
            <ul className="space-y-1 mb-4">
              <li>Lead management automation</li>
              <li>Standard reporting</li>
              <li>Email support</li>
            </ul>
            <a href="#contact" className="border-2 border-[#E05A1E] text-[#E05A1E] px-4 py-2 rounded-full inline-block hover:bg-[#E05A1E] hover:text-white">Choose Starter</a>
          </div>
          <div className="pricing-card recommended bg-[#1a1a1a] p-8 rounded-xl text-center border-2 border-[#E05A1E] animate">
            <h3 className="text-xl font-semibold mb-2">Growth</h3>
            <p className="price text-3xl text-[#E05A1E] my-2">$499</p>
            <ul className="space-y-1 mb-4">
              <li>All Starter features</li>
              <li>Creative services</li>
              <li>Priority support</li>
            </ul>
            <a href="#contact" className="border-2 border-[#E05A1E] text-[#E05A1E] px-4 py-2 rounded-full inline-block hover:bg-[#E05A1E] hover:text-white">Choose Growth</a>
          </div>
          <div className="pricing-card bg-[#1a1a1a] p-8 rounded-xl text-center animate">
            <h3 className="text-xl font-semibold mb-2">Scale</h3>
            <p className="price text-3xl text-[#E05A1E] my-2">$799</p>
            <ul className="space-y-1 mb-4">
              <li>All Growth features</li>
              <li>Social media management</li>
              <li>Dedicated success manager</li>
            </ul>
            <a href="#contact" className="border-2 border-[#E05A1E] text-[#E05A1E] px-4 py-2 rounded-full inline-block hover:bg-[#E05A1E] hover:text-white">Choose Scale</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials-section py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 animate">What Our Clients Say</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <blockquote className="bg-[#1a1a1a] p-6 border-l-4 border-[#E05A1E] rounded-md italic animate">
            <p>Since partnering with Orangehat, our entire operation has transformed. We're scaling without the chaos.</p>
            <footer className="mt-4 not-italic text-[#E05A1E]">&mdash; Jordan M., Clearplex</footer>
          </blockquote>
          <blockquote className="bg-[#1a1a1a] p-6 border-l-4 border-[#E05A1E] rounded-md italic animate">
            <p>The creative assets from Orangehat delivered conversions we thought were impossible.</p>
            <footer className="mt-4 not-italic text-[#E05A1E]">&mdash; Sam R., Growthify</footer>
          </blockquote>
          <blockquote className="bg-[#1a1a1a] p-6 border-l-4 border-[#E05A1E] rounded-md italic animate">
            <p>Our leads have never been more qualified. It's like having a superpower.</p>
            <footer className="mt-4 not-italic text-[#E05A1E]">&mdash; Alex B., ByteLabs</footer>
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section py-16 px-4 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 animate">Contact Us</h2>
        <p className="mb-8 animate">Have questions? Ready to get started? Reach out and we'll get back to you within 24 hours.</p>
        <form onSubmit={handleSubmit} className="space-y-4 animate">
          <div className="flex flex-col text-left">
            <label htmlFor="name" className="mb-1">Name</label>
            <input id="name" name="name" type="text" required className="p-3 rounded-md bg-[#121212] border border-[#444] focus:outline-none focus:border-[#E05A1E]" />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="email" className="mb-1">Email</label>
            <input id="email" name="email" type="email" required className="p-3 rounded-md bg-[#121212] border border-[#444] focus:outline-none focus:border-[#E05A1E]" />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="message" className="mb-1">Message</label>
            <textarea id="message" name="message" rows={4} required className="p-3 rounded-md bg-[#121212] border border-[#444] focus:outline-none focus:border-[#E05A1E]"></textarea>
          </div>
          <button type="submit" className="bg-[#E05A1E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b9450e]">Send Message</button>
        </form>
        <p className="mt-4 animate">Prefer to chat? <a href="#" onClick={handleBookDemo} className="underline text-[#E05A1E]">Book a demo call</a>.</p>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-8">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p>&copy; 2025 Orangehat Marketing LLC. All rights reserved.</p>
          <ul className="flex justify-center gap-6 text-[#E05A1E]">
            <li><a href="/privacy.html" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms.html" className="hover:underline">Terms of Service</a></li>
          </ul>
          <address className="not-italic">920 Dolphin Dr, Upper Grand Lagoon, FL 32407</address>
        </div>
      </footer>
    </main>
  );
}
