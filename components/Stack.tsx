"use client";
import { useState } from "react";
import { data } from "@/lib/data";

export default function Stack() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <>
      <section id="skills" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ padding: "60px 40px 0" }} className="section-pad">
          <span style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", color: "var(--muted)", letterSpacing: "0.05em", display: "block", marginBottom: "12px" }}>01</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1, letterSpacing: "-0.01em", color: "var(--text)" }}>Stack</h2>
        </div>
        <div style={{ marginTop: "48px" }}>
          {data.stack.map((item) => (
            <div
              key={item.num}
              onMouseEnter={() => setHovered(item.num)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderTop: "1px solid var(--border)",
                background: hovered === item.num ? "var(--surface)" : "transparent",
                transition: "background 0.2s",
                cursor: "default",
              }}
              className="stack-row"
            >
              {/* Desktop layout */}
              <div className="stack-row-inner" style={{ display: "grid", gridTemplateColumns: "48px 200px 1fr 120px", alignItems: "center", gap: "24px", padding: "20px 40px" }}>
                <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--muted)" }}>{item.num}</span>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem", fontWeight: 400, color: "var(--text)" }}>{item.name}</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {item.tags.map((tag) => (
                    <span key={tag} style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", border: "1px solid var(--border)", padding: "3px 8px", borderRadius: "2px" }}>{tag}</span>
                  ))}
                </div>
                <span style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", textAlign: "right", opacity: hovered === item.num ? 1 : 0, transition: "opacity 0.2s" }}>{item.note}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .stack-row-inner {
            grid-template-columns: 36px 1fr !important;
            grid-template-rows: auto auto !important;
            padding: 16px 24px !important;
            gap: 8px !important;
          }
          .stack-row-inner > span:last-child { display: none !important; }
          .stack-row-inner > div { grid-column: 2; }
        }
      `}</style>
    </>
  );
}
