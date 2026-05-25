"use client";
import { useState } from "react";
import { data } from "@/lib/data";

const linkStyle = {
    fontFamily: "var(--mono)",
    fontSize: "0.62rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "var(--text)",
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    padding: "8px 16px",
    border: "1px solid var(--border)",
    borderRadius: "3px",
    background: "var(--bg)",
};

const dropdownStyle = {
    borderTop: "1px solid var(--border)",
    background: "var(--bg-alt)",
    display: "flex",
    gap: "12px",
    padding: "16px 40px 16px calc(48px + 240px + 72px)",
    alignItems: "center",
    boxSizing: "border-box" as const,
};

function ExpandableRow({
    item,
    hovered,
    open,
    onHoverEnter,
    onHoverLeave,
    onToggle,
    children,
}: {
    item: { num: string; name: string; desc: string };
    hovered: string | null;
    open: boolean;
    onHoverEnter: () => void;
    onHoverLeave: () => void;
    onToggle: () => void;
    children: React.ReactNode;
}) {
    return (
        <div>
            <div
                onMouseEnter={onHoverEnter}
                onMouseLeave={onHoverLeave}
                onClick={onToggle}
                style={{
                    borderTop: "1px solid var(--border)",
                    background: hovered === item.num ? "var(--surface)" : "transparent",
                    transition: "background 0.2s",
                    cursor: "pointer",
                }}
            >
                <div
                    className="proj-row"
                    style={{ display: "grid", gridTemplateColumns: "48px 240px 1fr 100px", alignItems: "center", gap: "24px", padding: "24px 40px" }}
                >
                    <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--muted)" }}>{item.num}</span>
                    <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem", fontWeight: 400, color: "var(--text)" }}>{item.name}</span>
                    <span className="proj-desc" style={{ fontSize: "0.82rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.65 }}>{item.desc}</span>
                    <span style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", textAlign: "right" }}>
                        {open ? "Close ✕" : "View ↗"}
                    </span>
                </div>
            </div>
            {open && (
                <div className="drox-links" style={dropdownStyle}>
                    {children}
                </div>
            )}
        </div>
    );
}

function LinkBtn({ href, label }: { href: string; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={linkStyle}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--surface)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--bg)"; }}
        >
            {label}
        </a>
    );
}

export default function Awards() {
    const [hovered, setHovered] = useState<string | null>(null);
    const [droxOpen, setDroxOpen] = useState(false);
    const [credgateOpen, setCredgateOpen] = useState(false);
    const [ozonOpen, setOzonOpen] = useState(false);

    return (
        <>
            <section id="awards" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
                <div style={{ padding: "60px 40px 0" }} className="section-pad">
                    <span style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", color: "var(--muted)", letterSpacing: "0.05em", display: "block", marginBottom: "12px" }}>03</span>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1, letterSpacing: "-0.01em", color: "var(--text)" }}>Projects</h2>
                </div>
                <div style={{ marginTop: "48px" }}>
                    {data.awards.map((item) => {
                        const isLP12 = item.name === "Awarded Logos LP-0012: Event/Log Mechanism";

                        if (isLP12) {
                            return (
                                <ExpandableRow
                                    key={item.num}
                                    item={item}
                                    hovered={hovered}
                                    open={droxOpen}
                                    onHoverEnter={() => setHovered(item.num)}
                                    onHoverLeave={() => setHovered(null)}
                                    onToggle={() => setDroxOpen(!droxOpen)}
                                >
                                    <LinkBtn href="https://github.com/logos-co/lambda-prize/pull/14" label="Merged PR ↗" />
                                    <LinkBtn href="https://github.com/bristinWild/logos-execution-zone" label="Forked Repository ↗" />
                                </ExpandableRow>
                            );
                        }

                        return (
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
                                <div
                                    className="proj-row"
                                    style={{ display: "grid", gridTemplateColumns: "48px 240px 1fr 100px", alignItems: "center", gap: "24px", padding: "24px 40px" }}
                                >
                                    <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--muted)" }}>{item.num}</span>
                                    <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem", fontWeight: 400, color: "var(--text)" }}>{item.name}</span>
                                    <span className="proj-desc" style={{ fontSize: "0.82rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.65 }}>{item.desc}</span>
                                    <span style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", textAlign: "right" }}>View ↗</span>
                                </div>
                            </a>
                        );
                    })}
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
          .drox-links {
            padding: 14px 24px !important;
            flex-wrap: wrap !important;
            justify-content: flex-start !important;
          }
          .drox-links a {
            flex: 1 1 auto !important;
            text-align: center !important;
          }
        }
      `}</style>
        </>
    );
}