export const metadata = {
  title: 'About - Orange Hat Marketing',
  description: 'Learn more about Mr. Orange, the persona behind Orange Hat Marketing.',
};

export default function AboutPage() {
  const BOOK_URL = process.env.NEXT_PUBLIC_BOOK_URL || '#';
  return (
    <div className="min-h-screen py-24 px-6 md:px-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Meet Mr. Orange</h1>
      <p className="mb-6 text-lg md:text-xl">
        Mr. Orange is the rebellious spirit behind Orange Hat Marketing. He's the persona
        who refuses to take no for an answer, insists on clarity over jargon, and always
        delivers results that make your marketing impossible to ignore.
      </p>
      <p className="mb-6 text-lg md:text-xl">
        Embodying confidence, clarity, and creativity, Mr. Orange represents our promise to you:
        no BS, just ROI. When you work with Orange Hat Marketing, you're teaming up with Mr. Orange's
        mindset—fearless, disruptive, and relentlessly focused on making you stand out.
      </p>
      <p className="mb-6 text-lg md:text-xl">
        Ready to partner with Mr. Orange?{' '}
        <a href={BOOK_URL} target="_blank" rel="noopener" className="text-[--oh-orange] underline">
          Book your free strategy session
        </a>
        {' '}to get started.
      </p>
    </div>
  );
}
