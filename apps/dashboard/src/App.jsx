import { useMemo, useState } from "react";
import "./App.css";

const steps = [
  { key: "upload", title: "Upload Inputs" },
  { key: "review", title: "Review & Confirm" },
  { key: "generate", title: "Generate Project" },
  { key: "done", title: "Done" },
];

export default function App() {
  const [stepIndex, setStepIndex] = useState(0);
  const step = steps[stepIndex];

  const [whitePaper, setWhitePaper] = useState(null);
  const [readme, setReadme] = useState(null);

  const canNext = useMemo(() => {
    if (step.key === "upload") return !!whitePaper && !!readme;
    if (step.key === "review") return true;
    if (step.key === "generate") return true;
    return false;
  }, [step.key, whitePaper, readme]);

  const next = () => setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  const back = () => setStepIndex((i) => Math.max(i - 1, 0));

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">AI‑OS</div>
        <div className="stepper">
          {steps.map((s, i) => (
            <div key={s.key} className={`step ${i === stepIndex ? "active" : i < stepIndex ? "done" : ""}`}>
              <span className="dot">{i + 1}</span>
              <span className="label">{s.title}</span>
            </div>
          ))}
        </div>
      </header>

      <main className="card">
        <h1>{step.title}</h1>

        {step.key === "upload" && (
          <>
            <p className="muted">Provide exactly two files. AI‑OS will build everything from them.</p>

            <div className="field">
              <label>White Paper (PDF/MD)</label>
              <input
                type="file"
                onChange={(e) => setWhitePaper(e.target.files?.[0] || null)}
              />
              <div className="hint">{whitePaper ? `Selected: ${whitePaper.name}` : "No file selected"}</div>
            </div>

            <div className="field">
              <label>README.md</label>
              <input
                type="file"
                onChange={(e) => setReadme(e.target.files?.[0] || null)}
              />
              <div className="hint">{readme ? `Selected: ${readme.name}` : "No file selected"}</div>
            </div>
          </>
        )}

        {step.key === "review" && (
          <>
            <p className="muted">Confirm inputs before generation.</p>
            <div className="summary">
              <div><b>White Paper:</b> {whitePaper?.name || "—"}</div>
              <div><b>README:</b> {readme?.name || "—"}</div>
            </div>
            <p className="muted">Next we’ll validate and extract intent/constraints.</p>
          </>
        )}

        {step.key === "generate" && (
          <>
            <p className="muted">
              This step will call the orchestrator API to validate → parse → scaffold.
              For now, we simulate the pipeline click.
            </p>
            <button
              className="primary"
              onClick={() => {
                // placeholder click
                setTimeout(() => next(), 300);
              }}
            >
              Run Generation (Simulated)
            </button>
          </>
        )}

        {step.key === "done" && (
          <>
            <h2>✅ Project Generated (Simulated)</h2>
            <p className="muted">Next we wire a real backend endpoint.</p>
          </>
        )}

        <div className="nav">
          <button onClick={back} disabled={stepIndex === 0}>Back</button>
          <button className="primary" onClick={next} disabled={!canNext || stepIndex === steps.length - 1}>
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
