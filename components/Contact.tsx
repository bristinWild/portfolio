"use client";
import { data } from "@/lib/data";

const contacts = [
  { label: "Email", value: data.email, href: `mailto:${data.email}` },
  { label: "Phone", value: data.phone, href: `tel:${data.phone}` },
  { label: "GitHub", value: "github.com/bristinWild", href: data.github, external: true },
  { label: "LinkedIn", value: "linkedin.com/in/bristin-borah-739b63179/", href: data.linkedin, external: true },
  { label: "X", value: "   x.com/borah_bristin", href: data.twitter, external: true },
  { label: "crates.io", value: "https://crates.io/users/bristinWild", href: data.cratesio, external: true },
  { label: "npmjs", value: "https://www.npmjs.com/~bristinwild", href: data.cratesio, external: true },


];
export default function Contact() {
  return (
    <>
      <section id="contact" style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ padding: "60px 40px 0" }} className="section-pad">
          <span style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", color: "var(--muted)", letterSpacing: "0.05em", display: "block", marginBottom: "12px" }}>04</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1, letterSpacing: "-0.01em", color: "var(--text)" }}>Contact</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginTop: "48px" }} className="two-col-grid">
          <div style={{ padding: "0 40px 60px", borderRight: "1px solid var(--border)" }} className="col-left col-pad">
            <p style={{ fontSize: "0.875rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.85, maxWidth: 380 }}>
              Open to full-time Web3 roles, protocol engineering contracts, and long-term technical collaborations.
              Based in Guwahati, Assam, India — available globally, remote-first.
              Let&apos;s build something meaningful together.
            </p>
          </div>
          <div style={{ padding: "0 40px 60px" }} className="col-pad">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderBottom: "1px solid var(--border)", textDecoration: "none", color: "inherit", transition: "opacity 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.5")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", flexShrink: 0 }}>{c.label}</span>
                <span className="contact-value" style={{ fontFamily: "var(--mono)", fontSize: "0.7rem", color: "var(--text)", textAlign: "center", flex: 1, padding: "0 12px" }}>{c.value}</span>
                <span style={{ color: "var(--muted)", flexShrink: 0 }}>⌯⌲</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-value { font-size: 0.6rem !important; }
        }
      `}</style>
    </>
  );
}
