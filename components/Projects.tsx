"use client";
import { useState } from "react";
import { data } from "@/lib/data";

export default function Projects() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <>
      <section id="projects" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ padding: "60px 40px 0" }} className="section-pad">
          <span style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", color: "var(--muted)", letterSpacing: "0.05em", display: "block", marginBottom: "12px" }}>03</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1, letterSpacing: "-0.01em", color: "var(--text)" }}>Projects</h2>
        </div>
        <div style={{ marginTop: "48px" }}>
          {data.projects.map((item) => (
            <a
              key={item.num}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              onMouseEnter={() => setHovered(item.num)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderTop: "1px solid var(--border)",
                background: hovered === item.num ? "var(--surface)" : "transparent",
                transition: "background 0.2s",
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div className="proj-row" style={{ display: "grid", gridTemplateColumns: "48px 240px 1fr 100px", alignItems: "center", gap: "24px", padding: "24px 40px" }}>
                <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--muted)" }}>{item.num}</span>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem", fontWeight: 400, color: "var(--text)" }}>{item.name}</span>
                <span className="proj-desc" style={{ fontSize: "0.82rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.65 }}>{item.desc}</span>
                <span style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", textAlign: "right" }}>View ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .proj-row {
            grid-template-columns: 36px 1fr !important;
            grid-template-rows: auto auto !important;
            padding: 18px 24px !important;
            gap: 6px !important;
          }
          .proj-desc { grid-column: 2; }
          .proj-row > span:last-child { display: none !important; }
        }
      `}</style>
    </>
  );
}
