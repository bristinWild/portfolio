"use client";
import { useState, useEffect } from "react";
import { data } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* NAV BAR */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: "61px",
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "60px",
        paddingRight: "40px",
      }}>
        {/* Brand */}
        <a href="#" style={{
          fontFamily: "var(--mono)",
          fontSize: "0.72rem",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--text)",
          textDecoration: "none",
        }}>
          {data.name}
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
          <ul style={{ display: "flex", gap: "28px", listStyle: "none", margin: 0, padding: 0 }}
            className="hide-mobile">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  textDecoration: "none",
                }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* λ symbol — desktop only */}
          <span className="hide-mobile" style={{
            fontFamily: "var(--mono)",
            fontSize: "1.1rem",
            color: "var(--text)",
          }}>μ</span>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen(!open)}
            className="show-mobile"
            style={{
              background: "none",
              border: "1px solid var(--border)",
              cursor: "pointer",
              padding: "6px 10px",
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
            }}
            aria-label="Toggle menu"
          >
            {open ? (
              <span style={{ fontFamily: "var(--mono)", fontSize: "0.75rem", color: "var(--text)", letterSpacing: "0.05em" }}>✕</span>
            ) : (
              <span style={{ fontFamily: "var(--mono)", fontSize: "0.75rem", color: "var(--text)", letterSpacing: "0.05em" }}>☰</span>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div style={{
          position: "fixed",
          top: "61px",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          background: "var(--bg)",
          borderTop: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          padding: "40px",
          overflowY: "auto",
        }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "2.4rem",
                fontWeight: 300,
                color: "var(--text)",
                textDecoration: "none",
                padding: "16px 0",
                borderBottom: "1px solid var(--border)",
                display: "block",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
