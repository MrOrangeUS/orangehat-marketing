export default function DemoPage() {
  return (
    <main className="text-white bg-black min-h-screen flex items-center justify-center">
      <section className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Try the Self-Serve Demo</h1>
        <p className="text-lg mb-8">
          Experience our growth system in action. See how we convert dormant leads into conversations and booked
          appointments using brand alignment, outreach sequencing and AI-driven automation.
        </p>

        <a
          href="https://api.leadconnectorhq.com/widget/booking/CPADDn4nnIu2we1sni9z"
          target="_blank"
          rel="noopener"
          className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700"
        >
          Start Demo
        </a>

        <p className="mt-4 text-sm text-gray-400">
          Have questions?{" "}
          <a href="/" className="underline">
            Return to Home
          </a>
        </p>
      </section>
    </main>
  );
}
