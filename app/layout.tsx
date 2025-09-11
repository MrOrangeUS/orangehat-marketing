import "./styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orange Hat Marketing",
  description: "We make your marketing impossible to ignore.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
