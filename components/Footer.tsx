import { data } from "@/lib/data";

export default function Footer() {
  return (
    <>
      <footer style={{ padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }} className="footer-pad">
        <span style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{data.name}</span>
        <p style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>© 2026 · Full Stack Web3 Developer · Guwahati, India</p>
        <p style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Built with Next.js</p>
      </footer>
      <style>{`
        @media (max-width: 768px) {
          .footer-pad { padding: 20px 24px !important; flex-direction: column !important; align-items: flex-start !important; gap: 6px !important; }
        }
      `}</style>
    </>
  );
}
