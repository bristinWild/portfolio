"use client";
import { useRef, useState } from "react";
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
    <div className="project-slide">
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
          style={{
            display: "grid",
            gridTemplateColumns: "48px minmax(210px, 280px) 1fr 100px",
            alignItems: "center",
            gap: "32px",
            padding: "36px 40px",
            minHeight: "230px",
          }}        >
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

export default function Projects() {


  const [hovered, setHovered] = useState<string | null>(null);
  const [openProject, setOpenProject] = useState<string | null>(null);

  const railRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: "left" | "right") => {
    const rail = railRef.current;
    if (!rail) return;

    const amount = rail.clientWidth * 0.72;

    rail.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };




  return (
    <>
      <section id="projects" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="projects-heading section-pad">
          <div>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.68rem",
                color: "var(--muted)",
                letterSpacing: "0.05em",
                display: "block",
                marginBottom: "12px",
              }}
            >
              04
            </span>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                lineHeight: 1,
                letterSpacing: "-0.01em",
                color: "var(--text)",
              }}
            >
              Projects
            </h2>
          </div>

          <div className="project-controls">
            <span className="project-scroll-label">
              SCROLL / DRAG
            </span>

            <button
              type="button"
              onClick={() => scrollProjects("left")}
              aria-label="Previous projects"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => scrollProjects("right")}
              aria-label="Next projects"
            >
              →
            </button>
          </div>
        </div>
        <div
          ref={railRef}
          className="projects-rail"
        >
          {data.projects.map((item) => {
            const isDrox = item.name === "Drox Social";
            const isCredgate = item.name === "Credgate SDKs";
            const isOzon = item.name === "Ozon SDKs & Tool Kits";
            const isTuniq = item.name === "Tuniq - Logos Zk for Solana";
            const isCliper = item.name === "Cliper Memory";
            const isCliperSlack = item.name === "Cliper slack agent";
            const isBruh = item.name === "BruhMarket - Agentic Prediction market";
            const isCredgateProtocol = item.name === "CredGate Protocol";


            if (isDrox) {
              return (
                <ExpandableRow
                  key={item.num}
                  item={item}
                  hovered={hovered}
                  open={openProject === item.num}
                  onToggle={() =>
                    setOpenProject(openProject === item.num ? null : item.num)
                  }
                  onHoverEnter={() => setHovered(item.num)}
                  onHoverLeave={() => setHovered(null)}

                >
                  <LinkBtn href="https://github.com/bristinWild/drox-backend" label="Backend ↗" />
                  <LinkBtn href="https://github.com/bristinWild/Drox" label="Frontend ↗" />
                </ExpandableRow>
              );
            }

            if (isCliper) {
              return (
                <ExpandableRow
                  key={item.num}
                  item={item}
                  hovered={hovered}
                  open={openProject === item.num}
                  onToggle={() =>
                    setOpenProject(openProject === item.num ? null : item.num)
                  }
                  onHoverEnter={() => setHovered(item.num)}
                  onHoverLeave={() => setHovered(null)}

                >
                  <LinkBtn href="https://github.com/bristinWild/cliper-sdk" label="Repo ↗" />
                  <LinkBtn href="https://www.npmjs.com/package/@cliperhq/cliper" label="NPM ↗" />
                  <LinkBtn href="https://youtu.be/oaKzj__pCjs" label="Demo Video" />
                </ExpandableRow>
              );
            }

            if (isCliperSlack) {
              return (
                <ExpandableRow
                  key={item.num}
                  item={item}
                  hovered={hovered}
                  open={openProject === item.num}
                  onToggle={() =>
                    setOpenProject(openProject === item.num ? null : item.num)
                  }
                  onHoverEnter={() => setHovered(item.num)}
                  onHoverLeave={() => setHovered(null)}

                >
                  <LinkBtn href="https://github.com/bristinWild/Cliper-slack-app" label="Repo ↗" />
                  <LinkBtn href="https://youtu.be/t5Tn4W4pEno" label="Demo Video" />
                </ExpandableRow>
              );
            }

            if (isBruh) {
              return (
                <ExpandableRow
                  key={item.num}
                  item={item}
                  hovered={hovered}
                  open={openProject === item.num}
                  onToggle={() =>
                    setOpenProject(openProject === item.num ? null : item.num)
                  }
                  onHoverEnter={() => setHovered(item.num)}
                  onHoverLeave={() => setHovered(null)}

                >
                  <LinkBtn href="https://github.com/bristinWild/bruh" label="Repo ↗" />
                  <LinkBtn href="https://www.npmjs.com/package/@bruhmarket/agent-sdk" label="NPM ↗" />
                  <LinkBtn href="https://youtu.be/dYotA4p5f7Y" label="Demo Video" />
                </ExpandableRow>
              );
            }


            if (isTuniq) {
              return (
                <ExpandableRow
                  key={item.num}
                  item={item}
                  hovered={hovered}

                  onHoverEnter={() => setHovered(item.num)}
                  onHoverLeave={() => setHovered(null)}
                  open={openProject === item.num}
                  onToggle={() =>
                    setOpenProject(openProject === item.num ? null : item.num)
                  }
                >
                  <LinkBtn href="https://github.com/bristinWild/tuniq-experiments" label="Research & Experiments ↗" />
                  <LinkBtn href="https://github.com/bristinWild/Tuniq" label="Main Repository ↗" />
                </ExpandableRow>
              );
            }

            if (isCredgateProtocol) {
              return (
                <ExpandableRow
                  key={item.num}
                  item={item}
                  hovered={hovered}
                  open={openProject === item.num}
                  onToggle={() =>
                    setOpenProject(openProject === item.num ? null : item.num)
                  }
                  onHoverEnter={() => setHovered(item.num)}
                  onHoverLeave={() => setHovered(null)}
                >
                  <LinkBtn
                    href="https://github.com/bristinWild/CredGate"
                    label="Repo ↗"
                  />

                  <LinkBtn href="https://www.npmjs.com/package/credgate-sdk" label="NPM ↗" />

                  <LinkBtn
                    href="https://youtu.be/3tCgcC9Or2k?si=WVEitoDmj9ncwiOO"
                    label="Demo Video ↗"
                  />
                </ExpandableRow>
              );
            }

            if (isCredgate) {
              return (
                <ExpandableRow
                  key={item.num}
                  item={item}
                  hovered={hovered}
                  open={openProject === item.num}
                  onToggle={() =>
                    setOpenProject(openProject === item.num ? null : item.num)
                  }
                  onHoverEnter={() => setHovered(item.num)}
                  onHoverLeave={() => setHovered(null)}

                >
                  <LinkBtn href="https://credgate.vercel.app/docs" label="SDK Docs ↗" />
                  <LinkBtn href="https://github.com/bristinWild/CredGate" label="Repo ↗" />
                </ExpandableRow>
              );
            }

            if (isOzon) {
              return (
                <ExpandableRow
                  key={item.num}
                  item={item}
                  hovered={hovered}
                  open={openProject === item.num}
                  onToggle={() =>
                    setOpenProject(openProject === item.num ? null : item.num)
                  }
                  onHoverEnter={() => setHovered(item.num)}
                  onHoverLeave={() => setHovered(null)}
                >
                  <LinkBtn href="https://crates.io/crates/ozon-cli" label="Ozon CLI ↗" />
                  <LinkBtn href="https://crates.io/crates/operator-nodes-client" label="Operator Nodes Client ↗" />
                  <LinkBtn href="https://crates.io/crates/ozon-oracle-sdk" label="AVS SDK (Oracle) ↗" />
                </ExpandableRow>
              );
            }

            return (
              <a
                className="project-slide project-slide-link"
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
                  style={{
                    display: "grid",
                    gridTemplateColumns: "48px minmax(210px, 280px) 1fr 100px",
                    alignItems: "center",
                    gap: "32px",
                    padding: "36px 40px",
                    minHeight: "230px",
                  }}                >
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
  .projects-heading {
    padding: 60px 40px 0;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 32px;
  }

  .project-controls {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 6px;
  }

  .project-scroll-label {
    font-family: var(--mono);
    font-size: 0.58rem;
    letter-spacing: 0.12em;
    color: var(--muted);
    margin-right: 12px;
  }

  .project-controls button {
    width: 38px;
    height: 38px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--text);
    cursor: pointer;
    font-family: var(--mono);
    font-size: 0.85rem;
    border-radius: 50%;
    transition:
      background 180ms ease,
      color 180ms ease,
      transform 180ms ease;
  }

  .project-controls button:hover {
    background: var(--text);
    color: var(--bg);
    transform: translateY(-2px);
  }


  /* ─────────────────────────────
     HORIZONTAL PROJECT RAIL
     ───────────────────────────── */

  .projects-rail {
    margin-top: 48px;

    display: flex;

    overflow-x: auto;
    overflow-y: hidden;

    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    overscroll-behavior-inline: contain;

    border-top: 1px solid var(--border);

    padding-right: 16vw;

    scrollbar-width: thin;
    scrollbar-color: var(--muted) transparent;
  }

  .projects-rail::-webkit-scrollbar {
    height: 4px;
  }

  .projects-rail::-webkit-scrollbar-track {
    background: transparent;
  }

  .projects-rail::-webkit-scrollbar-thumb {
    background: var(--muted);
  }


  /* Each project */

  .project-slide {
    position: relative;

    flex: 0 0 min(78vw, 1180px);

    scroll-snap-align: start;
    scroll-snap-stop: always;

    border-right: 1px solid var(--border);

    background: var(--bg);

    transition:
      background 250ms ease,
      transform 300ms cubic-bezier(.2,.8,.2,1);
  }

  .project-slide:hover {
    background: var(--surface);
  }


  /*
   * Tiny line animation.
   * Fits your editorial/technical theme without
   * turning the portfolio into a motion demo.
   */

  .project-slide::after {
    content: "";

    position: absolute;
    left: 0;
    bottom: 0;

    width: 0;
    height: 2px;

    background: var(--text);

    transition: width 400ms cubic-bezier(.2,.8,.2,1);

    pointer-events: none;
  }

  .project-slide:hover::after {
    width: 100%;
  }


  .project-slide-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }


  /* Dropdown links stay inside their project slide */

  .project-slide .drox-links {
    border-top: 1px solid var(--border);
  }



  /* ─────────────────────────────
     MOBILE
     ───────────────────────────── */

  @media (max-width: 768px) {

    .projects-heading {
      padding: 48px 24px 0;
      align-items: flex-end;
    }

    .project-scroll-label {
      display: none;
    }

    .project-controls button {
      width: 34px;
      height: 34px;
    }


    .projects-rail {
      margin-top: 36px;
      padding-right: 12vw;
    }


    .project-slide {
      flex-basis: 88vw;
    }


    .proj-row {
      grid-template-columns: 36px 1fr !important;
      grid-template-rows: auto auto !important;

      min-height: 250px !important;

      padding: 24px !important;

      gap: 10px !important;
    }


    .proj-desc {
      grid-column: 2;

      padding-top: 16px;
    }


    .proj-row > span:last-child {
      display: none !important;
    }


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


  @media (prefers-reduced-motion: reduce) {
    .projects-rail {
      scroll-behavior: auto;
    }

    .project-slide,
    .project-slide::after,
    .project-controls button {
      transition: none;
    }
  }
`}</style>
    </>
  );
}