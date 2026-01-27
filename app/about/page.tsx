export const metadata = {
  title: "About - Orange Hat Marketing",
  description:
    "Since 2012, OrangeHat has built growth infrastructure for service businesses — brand positioning, outbound demand generation and automation.",
};

export default function AboutPage() {
  copnst BOOK_URL =
   
       "https://api.leadconnectorhq.com/widget/booking/CPADDn4nnIu2we1sni9z";

  return 
    <div className="min-h-screen py-24 px-6 md:px-12 text-white bg-black">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">About OrangeHat</h1>

      <p className="mb-6 text-lg md:text-xl max-w-4xl">
        Since 2012, OrangeHat has built growth infrastructure for service businesses — integrating brand positioning,
        outbound demand generation and automation. Our mission is to install systems that convert attention into booked
        appointments so you never waste another lead again.
      </p>

      <p className="mb-6 text-lg md:text-xl max-w-4xl">
        We don’t sell tactics. We build the stack: a clear brand that converts, outbound outreach that creates demand,
        and automation that qualifies and books — consistently.
      </p>

      <p className="text-lg md:text-xl">
        Ready to start?{" "}
        <a href={BOOK_URL} target="_blank" rel="noopener" className="text-[--oh-orange] underline">
          Book your free strategy session
        </a>{" "}
        to see how our growth system can work for you.
      </p>
    </div>
  );
}
