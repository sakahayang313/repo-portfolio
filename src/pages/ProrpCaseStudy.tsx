import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProrpCaseStudy() {
  useEffect(() => {
    document.title = "PRORP Translator Case Study | QaritsaDEV";
  }, []);

  return (
    <div className="app-container case-study-container section-spacing">
      <Link to="/projects" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--accent-color)' }}>
        ← Back to Projects
      </Link>

      {/* A. CASE STUDY HERO */}
      <header className="cs-header">
        <h1 className="cs-title">PRORP Translator v3.0</h1>
        <span className="project-badge">Desktop Application</span>
        <p className="project-tech" style={{ marginTop: '1rem' }}>C++ • Qt 6 • Tesseract OCR • Groq API</p>
      </header>

      <div className="cs-hero-visual">
        <img 
          src="https://placehold.co/1200x600/1e232b/3b82f6?text=Primary+In-Game+Screenshot\n(Showing+Overlay+in+Action)" 
          alt="PRORP in-game overlay demonstration" 
        />
        <p className="cs-caption">Fig 1. PRORP translation overlay actively translating Russian chat to Indonesian in RedM.</p>
      </div>

      <article className="cs-content">
        {/* B. APPLICATION INTERFACE */}
        <section className="cs-section">
          <h2>1. Desktop Interface & Control</h2>
          <div className="cs-visual-grid">
            <div>
              <p>
                Unlike standard web translators, PRORP is a native desktop application designed to run alongside heavy 3D applications. The control panel is built using Qt 6, providing a lightweight footprint.
              </p>
              <p>
                Users can select target languages, toggle the overlay state, and manage their license keys securely through the interface.
              </p>
            </div>
            <div>
              <img 
                src="https://placehold.co/600x450/1e232b/a855f7?text=PRORP+Main+Desktop+GUI" 
                alt="PRORP desktop control panel" 
                style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border-color)' }}
              />
              <p className="cs-caption">Fig 2. The main Qt 6 control interface.</p>
            </div>
          </div>
        </section>

        {/* C. OCR WORKFLOW */}
        <section className="cs-section">
          <h2>2. OCR Workflow & Region of Interest</h2>
          <div className="cs-visual-grid">
            <div style={{ order: 2 }}>
              <p>
                To maintain high performance and avoid reading the entire 1080p screen, users define a specific Region of Interest (ROI) bounding box over the game's chat area.
              </p>
              <p>
                Tesseract OCR continuously polls this specific region. Once text is detected, the string is sanitized and pushed to the Groq API for rapid, context-aware translation.
              </p>
            </div>
            <div style={{ order: 1 }}>
              <img 
                src="https://placehold.co/600x450/1e232b/10b981?text=OCR+ROI+Configuration\nBounding+Box" 
                alt="Configuring the chat detection bounding box" 
                style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border-color)' }}
              />
              <p className="cs-caption">Fig 3. User setting the OCR detection bounding box over the chat area.</p>
            </div>
          </div>
        </section>

        {/* D. ENGINEERING DETAILS */}
        <section className="cs-section">
          <h2>3. Engineering & Architecture</h2>
          <p>
            <strong>License Verification:</strong> To protect the software, PRORP integrates a licensing system. The desktop client sends an encrypted payload to a Google Apps Script backend, which verifies the hardware ID against a Google Sheets database before granting access.
          </p>
          <p>
            <strong>Auto-Typing Injection:</strong> Translating text is only half the problem. The application uses OS-level keyboard hooks to inject the translated text directly back into the game's chat input field, eliminating the need for copy-pasting and keeping the user immersed in the roleplay scenario.
          </p>
        </section>
      </article>
    </div>
  );
}