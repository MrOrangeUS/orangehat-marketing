export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="flex flex-col items-center justify-center py-20">
        <h1 className="text-5xl font-bold mb-4 text-center">Orange Hat Marketing</h1>
        <p className="text-xl text-center max-w-2xl mb-6">
          We make your marketing impossible to ignore. Our team delivers results that make saying
          &quot;yes&quot; the only option.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_BOOK_URL || "#"}
          className="bg-[--oh-orange] text-white py-3 px-6 rounded-xl font-semibold hover:opacity-90"
        >
          Book Now
        </a>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
            <ul className="space-y-4">
              <li>
                <span className="font-bold text-[--oh-orange]">AI-driven Lead Management:</span> Automate lead capture, nurturing, and conversion with advanced AI workflows.
              </li>
              <li>
                <span className="font-bold text-[--oh-orange]">Creative Services:</span> Professional branding, design, and content to make your business unforgettable.
              </li>
              <li>
                <span className="font-bold text-[--oh-orange]">Social Media Management & Engagement:</span> Build and engage your audience across platforms with curated content and active community management.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Why Orange Hat?</h2>
            <ul className="space-y-4">
              <li>
                <span className="font-bold text-[--oh-orange]">Confidence:</span> We bet on ourselves.
              </li>
              <li>
                <span className="font-bold text-[--oh-orange]">Clarity:</span> No BS, just ROI.
              </li>
              <li>
                <span className="font-bold text-[--oh-orange]">Creativity:</span> Campaigns people can’t ignore.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Stand Out?</h2>
          <p className="text-lg mb-6">Take the first step toward results you can’t say no to.</p>
          <a
            href={process.env.NEXT_PUBLIC_BOOK_URL || "#"}
            className="bg-[--oh-orange] text-white py-3 px-6 rounded-xl font-semibold hover:opacity-90"
          >
            Book Your Free Strategy Session
          </a>
        </div>
      </section>
    </main>
  );
}
