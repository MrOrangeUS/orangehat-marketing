import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Orange Hat Marketing",
  description: "We make your marketing impossible to ignore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050505] text-white">
        {/* ✅ ONE header sitewide */}
        <SiteHeader />

        {/* ✅ Push content below sticky header */}
        <main className="pt-24">{children}</main>

        <Script
          id="highlevel-chat-widget"
          strategy="afterInteractive"
          src="https://beta.leadconnectorhq.com/loader.js"
          data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69503f8bcbeed9400fec231e"
        />
      </body>
    </html>
  );
}
