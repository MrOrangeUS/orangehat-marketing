import dynamic from 'next/dynamic';

const MatrixRain = dynamic(() => import('../components/MatrixRain'), { ssr: false });

export default function Page() {
  const BOOK_URL = process.env.NEXT_PUBLIC_BOOK_URL || "#";

  return (
    <main className="bg-black text-white min-h-screen">
      <MatrixRain glyph="01ΩΞ₪⟃∴" color="#E05A1E" density={18} />
      {/* Hero */}
      <section className="flex flex-col items-center justify-center py-20">
        <h1 className="text-5xl font-bold mb-4 text-center">Orange Hat Marketing</h1>
        <p className="text-xl text-center max-w-2xl mb-6">
          We make your marketing impossible to ignore. Our team delivers results that make saying "yes" the only option.
        </p>
        <a
          href={BOOK_URL}
          target="_blank" rel="noopener"
          className="oh-pill inline-flex items-center justify-center"
        >
          Book Now
        </a>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
            <ul className="space-y-6">
              <li>
                <span className="font-bold text-[--oh-orange]">AI-Driven Lead Management:</span>{" "}
                Automate lead capture, qualify with AI, route instantly, and nurture with smart sequences. Dashboards show
                funnel health, SLAs, and conversions in real time.
              </li>
              <li>
                <span className="font-bold text-[--oh-orange]">Creative Services:</span>{" "}
                Brand systems, identity refresh, ad creative, landing pages, and content that actually sells. Strategy → design →
                ship, with fast iteration loops.
              </li>
              <li>
                <span className="font-bold text-[--oh-orange]">Social Media Management & Engagement:</span>{" "}
                Daily posting cadence, UGC frameworks, comment engagement, DM flows, and paid social that compounds organic reach.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6">Why Orange Hat?</h2>
            <ul className="space-y-4">
              <li><span className="font-bold text-[--oh-orange]">Confidence:</span> We bet on ourselves.</li>
              <li><span className="font-bold text-[--oh-orange]">Clarity:</span> No BS, just ROI.</li>
              <li><span className="font-bold text-[--oh-orange]">Creativity:</span> Campaigns people can’t ignore.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Stand Out?</h2>
          <p className="text-lg mb-6">Take the first step toward results you can’t say no to.</p>
          <a
            href={BOOK_URL}
            target="_blank" rel="noopener"
            className="oh-pill inline-flex items-center justify-center"
          >
            Book Your Free Strategy Session
          </a>
        </div>
      </section>
    </main>
  );
}
