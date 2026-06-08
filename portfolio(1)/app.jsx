/* ============================================================
   APP — composant racine + toggle Mode comics ON/OFF
   ============================================================ */

function ModeToggle({ mode, onToggle }) {
  return (
    <button
      className="mode-toggle"
      onClick={onToggle}
      aria-label={mode === "comics" ? "Désactiver le mode comics" : "Activer le mode comics"}
      title={mode === "comics" ? "Désactiver le mode comics" : "Activer le mode comics"}
    >
      <span className="mode-toggle-label">Mode comics</span>
      <span className="mode-toggle-switch" />
    </button>
  );
}

function App() {
  const d = window.PORTFOLIO;
  const [mode, setMode] = useState(() => localStorage.getItem("pf-mode") || "comics");
  const [fading, setFading] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [highlightId, setHighlightId] = useState(null);

  const toggleMode = () => {
    const next = mode === "comics" ? "pro" : "comics";
    setFading(true);
    setTimeout(() => {
      setMode(next);
      localStorage.setItem("pf-mode", next);
      requestAnimationFrame(() => setFading(false));
    }, 280);
  };

  return (
    <div id="stage" data-mode={mode}>
      <div className={`stage-fade ${fading ? "is-fading" : ""}`}>
        <Nav />
        <Hero d={d} />
        <About d={d} />
        <Projects
          d={d}
          onOpen={setActiveProject}
          highlightId={highlightId}
        />
        <Competences
          d={d}
          onOpen={setActiveProject}
          highlightId={highlightId}
          setHighlightId={setHighlightId}
        />
        <Stack d={d} />
        <Contact d={d} />
        <Footer d={d} />
      </div>

      <ModeToggle mode={mode} onToggle={toggleMode} />

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
