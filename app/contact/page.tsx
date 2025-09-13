export const metadata = {
  title: 'Contact - Orange Hat Marketing',
  description: 'Get in touch with Orange Hat Marketing.',
};

export default function ContactPage() {
  const BOOK_URL = process.env.NEXT_PUBLIC_BOOK_URL || '#';
  return (
    <div className="min-h-screen py-24 px-6 md:px-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
      <p className="mb-6 text-lg md:text-xl">
        Ready to get started? We'd love to hear from you. Whether you have questions, need a custom marketing plan,
        or just want to learn more about what we do, our team is here for you.
      </p>
      <p className="mb-6 text-lg md:text-xl">
        You can reach us at <a href="mailto:hello@orangehatmarketing.com" className="text-[--oh-orange] underline">hello@orangehatmarketing.com</a>.
        Or skip the back-and-forth and book your free strategy session now.
      </p>
      <a
        href={BOOK_URL}
        className="inline-block rounded-2xl bg-[--oh-orange] px-8 py-4 text-lg font-semibold text-white shadow-[0_12px_50px_rgba(224,90,30,0.5)] hover:opacity-90"
      >
        Book Your Free Strategy Session
      </a>
    </div>
  );
}
