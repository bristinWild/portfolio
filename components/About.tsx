import { data } from "@/lib/data";

export default function About() {
  return (
    <>
      <section id="about" style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ padding: "60px 40px 0" }} className="section-pad">
          <span style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", color: "var(--muted)", letterSpacing: "0.05em", display: "block", marginBottom: "12px" }}>00</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1, letterSpacing: "-0.01em", color: "var(--text)" }}>About</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginTop: "48px" }} className="two-col-grid">
          <div style={{ padding: "0 40px 52px", borderRight: "1px solid var(--border)" }} className="col-left col-pad">
            {data.about.slice(0, 2).map((p, i) => (
              <p key={i} style={{ fontSize: "0.875rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.85, marginBottom: "1rem" }}>{p}</p>
            ))}
          </div>
          <div style={{ padding: "0 40px 52px" }} className="col-pad">
            {data.about.slice(2).map((p, i) => (
              <p key={i} style={{ fontSize: "0.875rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.85, marginBottom: "1rem" }}>{p}</p>
            ))}
            <a href={data.github} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              github.com/bristinWild ↗
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .section-pad { padding: 40px 24px 0 !important; }
          .two-col-grid { grid-template-columns: 1fr !important; }
          .col-left { border-right: none !important; border-bottom: 1px solid var(--border) !important; }
          .col-pad { padding-left: 24px !important; padding-right: 24px !important; padding-bottom: 36px !important; }
        }
      `}</style>
    </>
  );
}
