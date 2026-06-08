/* ============================================================
   UI — composants partagés et utilitaires
   ============================================================ */

const { useState, useEffect, useRef } = React;

/* Reveal — animation simple d'apparition au scroll. */
function Reveal({ as = "div", children, className = "", delay = 0, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setVisible(true); });
      },
      { threshold: 0.12 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const Tag = as;
  const style = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 520ms ease ${delay}ms, transform 520ms ease ${delay}ms`,
  };
  return (
    <Tag ref={ref} className={className} style={style} {...rest}>
      {children}
    </Tag>
  );
}

/* useActiveSection — détecte quelle section est à l'écran. */
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 200;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids.join(",")]);
  return active;
}

/* smoothTo — scroll fluide vers une section. */
function smoothTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* Arrow — flèche SVG simple. */
function Arrow({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* SpiderwebCorner — décor SVG discret façon toile dans un coin. */
function SpiderwebCorner({ corner = "tr", size = 220 }) {
  const positions = {
    tr: { top: 0, right: 0, transform: "rotate(0deg)" },
    tl: { top: 0, left: 0, transform: "rotate(90deg)" },
    br: { bottom: 0, right: 0, transform: "rotate(-90deg)" },
    bl: { bottom: 0, left: 0, transform: "rotate(180deg)" }
  };
  return (
    <svg
      className="webdecor"
      aria-hidden="true"
      width={size} height={size}
      viewBox="0 0 200 200"
      style={{
        position: "absolute",
        opacity: "calc(var(--comic-strength) / 100 * 0.18)",
        pointerEvents: "none",
        zIndex: 0,
        ...positions[corner]
      }}
    >
      <g stroke="currentColor" fill="none" strokeWidth="1.2">
        <line x1="0" y1="0" x2="200" y2="200" />
        <line x1="0" y1="0" x2="170" y2="200" />
        <line x1="0" y1="0" x2="200" y2="170" />
        <line x1="0" y1="0" x2="140" y2="200" />
        <line x1="0" y1="0" x2="200" y2="140" />
        <line x1="0" y1="0" x2="110" y2="200" />
        <line x1="0" y1="0" x2="200" y2="110" />
        <path d="M 35,0 Q 28,28 0,35" />
        <path d="M 70,0 Q 56,56 0,70" />
        <path d="M 110,0 Q 88,88 0,110" />
        <path d="M 150,0 Q 120,120 0,150" />
        <path d="M 190,0 Q 152,152 0,190" />
      </g>
    </svg>
  );
}
