"use client";
import { useState } from "react";
import { data } from "@/lib/data";

export default function Experience() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <>
      <section id="experience" style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ padding: "60px 40px 0" }} className="section-pad">
          <span style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", color: "var(--muted)", letterSpacing: "0.05em", display: "block", marginBottom: "12px" }}>02</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1, letterSpacing: "-0.01em", color: "var(--text)" }}>Experience</h2>
        </div>
        <div style={{ marginTop: "48px" }}>
          {data.experience.map((item) => (
            <div
              key={item.num}
              onMouseEnter={() => setHovered(item.num)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderTop: "1px solid var(--border)",
                background: hovered === item.num ? "var(--surface)" : "transparent",
                transition: "background 0.2s",
              }}
            >
              <div className="exp-row" style={{ display: "grid", gridTemplateColumns: "48px 200px 1fr 180px", alignItems: "start", gap: "24px", padding: "28px 40px" }}>
                <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--muted)", paddingTop: "4px" }}>{item.num}</span>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.2rem", fontWeight: 400, color: "var(--text)" }}>{item.role}</div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", marginTop: "4px" }}>{item.company}</div>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {item.bullets.map((b, i) => (
                    <li key={i} style={{ position: "relative", paddingLeft: "16px", fontSize: "0.82rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.65, paddingTop: "3px", paddingBottom: "3px" }}>
                      <span style={{ position: "absolute", left: 0, color: "var(--border)" }}>—</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <span className="exp-period" style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", color: "var(--muted)", textAlign: "right", paddingTop: "4px", letterSpacing: "0.05em" }}>{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .exp-row {
            grid-template-columns: 36px 1fr !important;
            grid-template-rows: auto auto auto !important;
            padding: 20px 24px !important;
            gap: 6px !important;
          }
          .exp-row > ul { grid-column: 2; }
          .exp-period {
            grid-column: 2;
            text-align: left !important;
            padding-top: 8px !important;
          }
        }
      `}</style>
    </>
  );
}
