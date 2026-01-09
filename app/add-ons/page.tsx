import Link from "next/link";
import MatrixRain from "../../components/MatrixRain";

const CTA_URL =
  process.env.NEXT_PUBLIC_BOOK_URL ||
  "https://api.leadconnectorhq.com/widget/booking/CPADDn4nnIu2we1sni9z";

export default function AddOnsPage() {
  return (
    <main className="text-white bg-[#050505] min-h-screen">
      <header className="sticky top-0 z-20 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-wide">
            Orange Hat
          </Link>
          <nav className="hidden md:flex space-x-6 items-center text-sm">
            <Link href="/solutions" className="hover:text-[--oh-orange]">Solutions</Link>
            <Link href="/how-it-works" className="hover:text-[--oh-orange]">How&nbsp;It&nbsp;Works</Link>
            <Link href="/add-ons" className="hover:text-[--oh-orange]">Add-Ons</Link>
            <Link href="/industry" className="hover:text-[--oh-orange]">Industries</Link>
          </nav>
          <a href={CTA_URL} target="_blank" rel="noopener" className="oh-pill hidden md:inline-block">
            See If You Qualify
          </a>
        </div>
      </header>

      <div className="relative overflow-hidden">
        <MatrixRain className="absolute inset-0 pointer-events-none" />
        <section className="relative z-10 max-w-5xl mx-auto text-center px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Revenue Accelerators</h1>
          <p className="text-lg md:text-xl text-white/85">
            Optional services that plug into your existing OrangeHat system. These are multipliers — not the foundation.
          </p>
        </section>
      </div>

      <section className="py-24 px-6 bg-[#0f0f0f] border-t border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          <div className="bg-[#151515] p-8 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold mb-3 text-[--oh-orange]">AI Lead Recovery</h2>
            <p className="text-white/85 mb-4">
              Turn lost leads into booked appointments. Reactivate old CRM lists, missed calls, and dormant contacts automatically — no ad spend required.
            </p>
            <Link href="/ai-lead-recovery" className="underline hover:text-[--oh-orange]">
              Learn more →
            </Link>
          </div>

          <div className="bg-[#151515] p-8 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold mb-3 text-[--oh-orange]">Pay-Per-Lead</h2>
            <p className="text-white/85 mb-4">
              Done-for-you lead delivery after your core system is installed. Limited availability, territory-based, qualification required.
            </p>
            <Link href="/pay-per-lead" className="underline hover:text-[--oh-orange]">
              Learn more →
            </Link>
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={CTA_URL} target="_blank" rel="noopener" className="oh-pill">
              See If You Qualify
            </a>
            <Link
              href="/how-it-works"
              className="oh-pill bg-transparent border border-[--oh-orange] text-[--oh-orange] hover:bg-[--oh-orange] hover:text-black transition-colors"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
