import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bristin Borah — Full Stack Web3 Developer",
  description: "Full Stack Web3 Developer with 3+ years across DeFi, NFTs, GameFi, and DAOs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script id="theme-preference" strategy="beforeInteractive">
        {`(() => {
  try {
    const preference = localStorage.getItem("theme");
    if (preference === "light" || preference === "dark") {
      document.documentElement.dataset.theme = preference;
    }
  } catch {}
})()`}
      </Script>
    </html>
  );
}
