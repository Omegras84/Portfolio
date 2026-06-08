/* ============================================================
   MODALE PROJET — affiche un projet en STAR détaillé + AC
   ============================================================ */

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (!project) return null;

  const star = project.star || {};

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fermer">×</button>

        <header className="modal-header">
          <span className="modal-year">{project.year}</span>
          <h2 id="modal-title" className="modal-name">{project.name}</h2>
          <p className="modal-type">{project.type}</p>

          <dl className="modal-meta">
            {project.context && (
              <div className="modal-meta-item">
                <dt>Contexte</dt>
                <dd>{project.context}</dd>
              </div>
            )}
            {project.duration && (
              <div className="modal-meta-item">
                <dt>Durée</dt>
                <dd>{project.duration}</dd>
              </div>
            )}
            {project.role && (
              <div className="modal-meta-item">
                <dt>Rôle</dt>
                <dd>{project.role}</dd>
              </div>
            )}
            {project.stack && (
              <div className="modal-meta-item">
                <dt>Stack</dt>
                <dd>{project.stack.join(" · ")}</dd>
              </div>
            )}
          </dl>
        </header>

        <div className="modal-body">
          <div className="modal-narrative">
            {[star.situation, star.tache].filter(Boolean).map((t, i) => (
              <p key={`p-${i}`} className="modal-narrative-p">{t}</p>
            ))}
            {star.action && (
              <p className="modal-narrative-p">
                {Array.isArray(star.action) ? star.action.join(" ") : star.action}
              </p>
            )}
            {star.resultat && (
              <p className="modal-narrative-p">{star.resultat}</p>
            )}
          </div>

          {project.ac && project.ac.length > 0 && (
            <div className="modal-ac">
              <h3 className="modal-ac-title">Apprentissages critiques démontrés</h3>
              <div className="modal-ac-list">
                {project.ac.map((code) => (
                  <span key={code} className="modal-ac-chip">{code}</span>
                ))}
              </div>
            </div>
          )}

          {project.autoEval && (
            <div className="modal-eval">
              <h3 className="modal-eval-title">Auto-évaluation</h3>
              <span className={`modal-eval-level ${project.autoEval.level}`}>
                {project.autoEval.level === "maitrise" ? "Maîtrisé" : "En voie d'acquisition"}
              </span>
              <p style={{ margin: 0 }}>{project.autoEval.comment}</p>
            </div>
          )}

          {project.links && (
            <div className="modal-links">
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Voir le projet en ligne <Arrow size={15} />
                </a>
              )}
              {project.links.oldSite && (
                <a href={project.links.oldSite} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  Ancien site
                </a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  Code source GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StarBlock({ letter, label, content }) {
  if (!content) return null;
  return (
    <div className="modal-star-block">
      <div className="modal-star-letter" aria-hidden="true">{letter}</div>
      <h3 className="modal-star-label">{label}</h3>
      <div className="modal-star-content">
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        ) : (
          <p style={{ margin: 0 }}>{content}</p>
        )}
      </div>
    </div>
  );
}
