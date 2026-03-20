import { data } from "@/lib/data";
import HeroAnimation from "./HeroAnimation";

export default function Hero() {
  return (
    <>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "calc(100vh - 61px)",
        borderBottom: "1px solid var(--border)",
      }} className="hero-grid">

        {/* Left — animation top, meta bottom */}
        <div style={{
          borderRight: "1px solid var(--border)",
          padding: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
        }} className="hero-left">

          {/* Animation fills the space */}
          <div style={{ flex: 1, minHeight: 0, position: "relative" }}>
            <HeroAnimation />
          </div>

          {/* Meta pinned to bottom */}
          <div style={{ padding: "32px 40px 40px", borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>
              {data.title}
            </div>
            <div style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>
              {data.location}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)" }}>
              <span className="pulse-dot" style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#5a9e7a", flexShrink: 0 }} />
              Available for opportunities
            </div>
            <a href="#contact" style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              Get in touch ↗
            </a>
          </div>
        </div>

        {/* Right — content pinned to bottom */}
        <div style={{
          padding: "60px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }} className="hero-right">
          <p style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--muted)", marginBottom: "24px", lineHeight: 1.8 }}>
            DeFi · NFTs · GameFi · DAOs · Smart Contracts<br />
            EVM Chains · Solana · Remote-first
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(3rem, 7vw, 5.8rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.01em",
            marginBottom: "40px",
            color: "var(--text)",
          }}>
            Bristin<br /><em>Borah</em>
          </h1>
          <p style={{ fontSize: "0.875rem", fontWeight: 300, color: "var(--muted)", maxWidth: 400, lineHeight: 1.8, marginBottom: "32px" }}>
            3+ years building on EVM chains and Solana. From DeFi protocols and NFT
            marketplaces to DAO governance systems — I write the contracts, architect
            the backend, and ship the product.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <a href="#experience" style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text)", textDecoration: "underline", textUnderlineOffset: "4px" }}>
              View Experience
            </a>
            <a href={data.github} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text)", textDecoration: "underline", textUnderlineOffset: "4px" }}>
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .hero-left {
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
            min-height: 380px !important;
          }
          .hero-right {
            padding: 40px 24px 60px !important;
          }
        }
      `}</style>
    </>
  );
}
