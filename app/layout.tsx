import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bristin Borah — Full Stack Web3 Developer",
  description: "Full Stack Web3 Developer with 3+ years across DeFi, NFTs, GameFi, and DAOs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
