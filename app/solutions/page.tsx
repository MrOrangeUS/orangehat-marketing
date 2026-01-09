import Link from "next/link";
import MatrixRain from "../../components/MatrixRain";

const CTA_URL =
  process.env.NEXT_PUBLIC_BOOK_URL ||
  "https://api.leadconnectorhq.com/widget/booking/CPADDn4nnIu2we1sni9z";

export default function SolutionsPage() {
  return (
    <main className="text-white bg-[#050505] min-h-screen">
      <header className="sticky top-0 z-20 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-wide">
            Orange Hat
          </Link>
          <nav className="hidden md:flex space-x-6 items-center text-sm">
            <Link href="/solutions" className="hover:text-[--oh-orange]">
              Solutions
            </Link>
            <Link href="/how-it-works" className="hover:text-[--oh-orange]">
              How&nbsp;It&nbsp;Works
            </Link>
            <Link href="/add-ons" className="hover:text-[--oh-orange]">
              Add-Ons
            </Link>
            <Link href="/industry" className="hover:text-[--oh-orange]">
              Industries
            </Link>
          </nav>
          <a href={CTA_URL} target="_blank" rel="noopener" className="oh-pill hidden md:inline-block">
            Build My Growth System
          </a>
        </div>
      </header>

      <div className="relative overflow-hidden">
        <MatrixRain className="absolute inset-0 pointer-events-none" />
        <section className="relative z-10 max-w-5xl mx-auto text-center px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Solutions</h1>
          <p className="text-lg md:text-xl text-white/85">
            Growth infrastructure for businesses that depend on appointments.
          </p>
        </section>
      </div>

      <section className="py-24 px-6 bg-[#0f0f0f] border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">The 3 Pillars</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div className="bg-[#151515] p-8 rounded-lg border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-[--oh-orange]">Brand Builder</h3>
              <p className="mb-4 text-white/85">
                Your brand is the filter that determines whether outreach converts.
              </p>
              <ul className="space-y-2 text-white/85">
                <li>• Clear positioning</li>
                <li>• Conversion-focused messaging</li>
                <li>• Trust and authority signals</li>
                <li>• Websites designed to turn interest into action</li>
              </ul>
            </div>

            <div className="bg-[#151515] p-8 rounded-lg border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-[--oh-orange]">Outreach Engine</h3>
              <p className="mb-4 text-white/85">Waiting for inbound is optional. Creating demand is not.</p>
              <ul className="space-y-2 text-white/85">
                <li>• AI-assisted outbound campaigns</li>
                <li>• Multi-channel contact strategies</li>
                <li>• Personalized messaging at scale</li>
                <li>• Consistent top-of-funnel activity</li>
              </ul>
            </div>

            <div className="bg-[#151515] p-8 rounded-lg border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-[--oh-orange]">Automation Backbone</h3>
              <p className="mb-4 text-white/85">Speed and consistency win deals.</p>
              <ul className="space-y-2 text-white/85">
                <li>• CRM + pipeline automation</li>
                <li>• AI qualification and routing</li>
                <li>• Calendar booking logic</li>
                <li>• Follow-up systems that never sleep</li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row justify-center gap-4">
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
        </div>
      </section>
    </main>
  );
}
