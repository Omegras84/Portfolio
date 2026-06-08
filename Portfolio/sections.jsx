/* ============================================================
   SECTIONS — Hero, À propos, Projets, Compétences, AC, Stack, Contact
   ============================================================ */

const NAV_ITEMS = [
  { id: "accueil", label: "Accueil" },
  { id: "apropos", label: "À propos" },
  { id: "projets", label: "Projets" },
  { id: "competences", label: "Compétences" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" }
];

/* ------------------------------------------------------------ NAV */
function Nav() {
  const active = useActiveSection(NAV_ITEMS.map(n => n.id));
  return (
    <nav className="nav" role="navigation">
      <div className="container nav-inner">
        <button className="nav-brand" onClick={() => smoothTo("accueil")}>
          <span className="nav-brand-mark" />
          <span>TG</span>
        </button>
        <div className="nav-links">
          {NAV_ITEMS.map(n => (
            <button
              key={n.id}
              className={`nav-link ${active === n.id ? "is-active" : ""}`}
              onClick={() => smoothTo(n.id)}
            >
              {n.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------ HERO */
function Hero({ d }) {
  const i = d.identity;
  return (
    <section id="accueil" className="hero">
      <div className="container hero-grid">
        <div>
          {i.available && (
            <Reveal as="p" className="hero-status">
              <span className="hero-status-dot" />
              {i.availableLabel}
            </Reveal>
          )}
          <Reveal as="h1" className="hero-title" delay={80}>
            {i.name.split(" ")[0]} <span className="hero-title-accent">{i.name.split(" ").slice(1).join(" ")}</span>
          </Reveal>
          <Reveal as="p" className="hero-role" delay={140}>
            {i.role} · {i.formation}
          </Reveal>
          <Reveal as="p" className="hero-tagline" delay={200}>
            {i.tagline}
          </Reveal>
          <Reveal className="hero-actions" delay={260}>
            <button className="btn-primary" onClick={() => smoothTo("projets")}>
              Voir mes projets <Arrow size={16} />
            </button>
            <button className="btn-ghost" onClick={() => smoothTo("contact")}>
              Me contacter
            </button>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <CharacterCard d={d} />
        </Reveal>
      </div>

      <div className="container">
        <Reveal className="hero-facts" delay={360}>
          {d.about.facts.map((f) => (
            <div className="hero-fact" key={f.k}>
              <span className="hero-fact-v">{f.v}</span>
              <span className="hero-fact-k">{f.k}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function CharacterCard({ d }) {
  const i = d.identity;
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setTimeout(() => setAnimated(true), 250); });
    }, { threshold: 0.4 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="character-card" ref={ref}>
      <span className="character-card-corner tl" />
      <span className="character-card-corner tr" />
      <span className="character-card-corner bl" />
      <span className="character-card-corner br" />

      <span className="onomatopee top-right">POW!</span>

      <div className="character-card-banner">Fiche personnage · v2026</div>

      <div className="character-card-body">
        <h2 className="character-name">Tristan<br/>GOUJAN</h2>
        <p className="character-alias">alias « le héros de l'ombre »</p>

        <div className="character-stats">
          {(i.stats || []).map((s) => (
            <div className="character-stat" key={s.label}>
              <span className="character-stat-label">{s.label}</span>
              <div className="character-stat-bar">
                <div
                  className="character-stat-fill"
                  style={{ width: animated ? `${s.value}%` : "0%" }}
                />
              </div>
              <span className="character-stat-val">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ À PROPOS */
function About({ d }) {
  return (
    <section id="apropos" className="about">
      <div className="container">
        <Reveal as="p" className="eyebrow">À propos</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>Le parcours</Reveal>

        <div className="about-grid">
          <Reveal delay={120}>
            <p className="about-lead">{d.about.lead}</p>
          </Reveal>
          <Reveal as="div" className="about-body" delay={180}>
            {d.about.body.map((para, i) => <p key={i}>{para}</p>)}
          </Reveal>
        </div>

        <Reveal as="div" className="timeline" delay={240}>
          {d.timeline.map((t, i) => (
            <div key={i} className="timeline-item">
              <span className="timeline-period">{t.period}</span>
              <h3 className="timeline-title">{t.title}</h3>
              <p className="timeline-desc">{t.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ PROJETS */
function Projects({ d, onOpen, highlightId }) {
  /* Variantes de taille pour la grille asymétrique style BD */
  const sizes = ["size-md", "size-md", "size-lg", "size-md", "size-md", "size-lg", "size-md", "size-md"];

  return (
    <section id="projets" className="projects">
      <div className="container">
        <Reveal as="p" className="eyebrow">Issue · Projets phares</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>Huit missions</Reveal>
        <Reveal as="p" className="section-lead" delay={120}>
          Huit projets sélectionnés sur deux ans de formation. Stage en entreprise, SAE en groupe, projets personnels. Chacun est analysé en détail avec la méthode STAR — clique sur une carte pour ouvrir le dossier complet.
        </Reveal>

        <div className="projects-grid">
          {d.projects.map((p, i) => (
            <button
              key={p.id}
              className={`project-card ${sizes[i] || "size-md"} ${highlightId && highlightId !== p.id ? "is-dimmed" : ""} ${highlightId === p.id ? "is-highlight" : ""}`}
              onClick={() => onOpen(p)}
            >
              <div className={`project-card-corner color-${p.heroColor || "red"}`} />
              <span className="project-card-year">{p.year}</span>
              <h3 className="project-card-name">{p.name}</h3>
              <span className="project-card-type">{p.type}</span>
              <p className="project-card-blurb">{p.blurb}</p>
              <div className="project-card-tags">
                {(p.stack || []).slice(0, 4).map(s => <span key={s} className="tag">{s}</span>)}
              </div>
              <span className="project-card-more">
                Ouvrir le dossier <Arrow size={14} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ COMPÉTENCES + AC */
function Competences({ d, onOpen, highlightId, setHighlightId }) {
  const [filter, setFilter] = useState("all");

  const filteredAc = filter === "all"
    ? d.apprentissagesCritiques
    : d.apprentissagesCritiques.filter(a => a.competence === filter);

  const projectById = (id) => d.projects.find(p => p.id === id);

  return (
    <section id="competences" className="competences">
      <div className="container">
        <Reveal as="p" className="eyebrow">Référentiel · Compétences</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>Cinq compétences</Reveal>
        <Reveal as="p" className="section-lead" delay={120}>
          Les cinq grandes compétences du référentiel MMI, et la façon dont je les ai mobilisées sur mes projets. Le tableau interactif plus bas relie chaque apprentissage critique aux projets qui le démontrent.
        </Reveal>

        <Reveal as="div" className="competences-grid" delay={180}>
          {d.competences.map((c) => (
            <div key={c.id} className="competence-card">
              <h3 className="competence-label">{c.label}</h3>
              <p className="competence-summary">{c.summary}</p>
              <span className={`competence-level ${c.level}`}>
                {c.level === "maitrise" ? "Maîtrisé" : "En voie d'acquisition"}
              </span>
            </div>
          ))}
        </Reveal>

        {/* ===== Tableau AC ↔ projets ===== */}
        <div className="ac-section">
          <Reveal as="h3" className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
            Apprentissages critiques
          </Reveal>
          <Reveal as="p" className="section-lead" delay={60}>
            Filtre par compétence. Clique sur un projet pour ouvrir son dossier.
          </Reveal>

          <Reveal as="div" className="ac-toolbar" delay={120}>
            <button
              className={`ac-filter-btn ${filter === "all" ? "is-active" : ""}`}
              onClick={() => setFilter("all")}
            >
              Tous ({d.apprentissagesCritiques.length})
            </button>
            {d.competences.map(c => {
              const count = d.apprentissagesCritiques.filter(a => a.competence === c.id).length;
              return (
                <button
                  key={c.id}
                  className={`ac-filter-btn ${filter === c.id ? "is-active" : ""}`}
                  onClick={() => setFilter(c.id)}
                >
                  {c.label} ({count})
                </button>
              );
            })}
          </Reveal>

          <Reveal as="div" delay={180} style={{ overflowX: "auto" }}>
            <table className="ac-table">
              <thead>
                <tr>
                  <th style={{ width: "100px" }}>Code</th>
                  <th>Apprentissage critique</th>
                  <th style={{ width: "30%" }}>Projets démonstrateurs</th>
                </tr>
              </thead>
              <tbody>
                {filteredAc.map((ac) => (
                  <tr
                    key={ac.code}
                    onMouseEnter={() => setHighlightId(ac.projects[0])}
                    onMouseLeave={() => setHighlightId(null)}
                  >
                    <td><span className="ac-code">{ac.code}</span></td>
                    <td>{ac.label}</td>
                    <td>
                      <div className="ac-projects-cell">
                        {ac.projects.map(pid => {
                          const p = projectById(pid);
                          if (!p) return null;
                          return (
                            <button
                              key={pid}
                              className="ac-project-chip"
                              onClick={(e) => { e.stopPropagation(); onOpen(p); }}
                              title={`Ouvrir ${p.name}`}
                            >
                              {p.name}
                            </button>
                          );
                        })}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ STACK */
function Stack({ d }) {
  return (
    <section id="stack" className="stack">
      <div className="container">
        <Reveal as="p" className="eyebrow">Boîte à outils</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>Stack technique</Reveal>
        <Reveal as="p" className="section-lead" delay={120}>
          Les technologies que j'utilise au quotidien, et celles que j'explore en parallèle des cours.
        </Reveal>

        <div className="stack-grid">
          {d.stack.map((g, i) => (
            <Reveal as="div" className="stack-group" key={g.group} delay={i * 60}>
              <h3>{g.group}</h3>
              <ul className="stack-list">
                {g.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ CONTACT */
function Contact({ d }) {
  return (
    <section id="contact" className="contact">
      <SpiderwebCorner corner="br" size={300} />
      <div className="container">
        <Reveal as="p" className="eyebrow">Bat-signal</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>Travaillons ensemble</Reveal>
        <Reveal as="p" className="section-lead" delay={120}>
          {d.contact.cta}
        </Reveal>

        <div className="contact-grid">
          <Reveal delay={180}>
            <p className="contact-cta">{d.identity.quote}</p>
            <p style={{ marginTop: "1.5rem", opacity: 0.8 }}>{d.contact.location}</p>
          </Reveal>

          <Reveal className="contact-info" delay={240}>
            <a href={`mailto:${d.contact.email}`} className="contact-link">
              {d.contact.email}
            </a>
            {d.contact.socials.map(s => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="contact-link">
                {s.label} <span style={{ opacity: 0.6, fontSize: "0.85em" }}>· {s.handle}</span>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ FOOTER */
function Footer({ d }) {
  return (
    <footer className="footer">
      <p style={{ margin: 0 }}>
        © 2026 Tristan Goujan · Portfolio MMI
      </p>
      <span className="footer-egg">{d.comicsLore.footerQuote}</span>
    </footer>
  );
}
