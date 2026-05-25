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
            DeFi · NFTs · GameFi · x402 · Smart Contracts · Anchor Programs<br />
            EVM Chains · Solana · Backend · Frontend ·Remote-first
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
            Bristin<br />
            <em style={{ position: "relative", display: "inline-block", animation: "glitch 2s infinite" }}>
              Borah
              <span aria-hidden="true" style={{
                content: "Borah",
                position: "absolute",
                top: 0, left: 0,
                color: "var(--text)",
                fontFamily: "inherit",
                fontStyle: "inherit",
                fontWeight: "inherit",
                fontSize: "inherit",
                animation: "glitchTop 2s infinite",
                clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)",
                opacity: 0,
              }}>Borah</span>
              <span aria-hidden="true" style={{
                content: "Borah",
                position: "absolute",
                top: 0, left: 0,
                color: "var(--text)",
                fontFamily: "inherit",
                fontStyle: "inherit",
                fontWeight: "inherit",
                fontSize: "inherit",
                animation: "glitchBot 2s infinite",
                clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
                opacity: 0,
              }}>Borah</span>
            </em>
          </h1>

          {/* <style>{`
  @keyframes sketch {
    to { stroke-dashoffset: 0; }
  }
  @keyframes fadeInText {
  to { opacity: 1; }
}
@keyframes svgFadeOut {
  to { opacity: 0; }
}
`}</style> */}
          <p style={{ fontSize: "0.875rem", fontWeight: 300, color: "var(--muted)", maxWidth: 400, lineHeight: 1.8, marginBottom: "32px" }}>
            4+ years building on EVM chains and Solana. From DeFi protocols and Advance NFT projects to Web3 security & Infrastructure layer , I write the contracts, architect
            ideas, build projects and ship product.
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
@keyframes glitch {
  0%, 60%, 100% { transform: none; }
  63% { transform: skew(-0.5deg); }
  66% { transform: skew(0.5deg); }
  69% { transform: skew(-0.3deg); }
}
@keyframes glitchTop {
  0%, 60%, 100% { opacity: 0; transform: none; }
  63% { opacity: 1; transform: translate(-4px, -2px); }
  66% { opacity: 1; transform: translate(4px, 0); }
  69% { opacity: 1; transform: translate(-2px, -1px); }
  72% { opacity: 0; }
}
@keyframes glitchBot {
  0%, 60%, 100% { opacity: 0; transform: none; }
  63% { opacity: 1; transform: translate(4px, 2px); }
  66% { opacity: 1; transform: translate(-4px, 0); }
  69% { opacity: 1; transform: translate(2px, 1px); }
  72% { opacity: 0; }
}
@media (max-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr !important;
    min-height: auto !important;
  }
 .hero-left {
  border-right: none !important;
  border-bottom: 1px solid var(--border) !important;
  min-height: calc(100vh - 61px) !important;
}
  .hero-right {
    padding: 40px 24px 60px !important;
  }
}
`}</style>
    </>
  );
}
