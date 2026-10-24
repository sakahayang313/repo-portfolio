import { useEffect } from "react";
import { Link } from "react-router-dom";

import prorpInGame from "../assets/projects/prorp/prorp-ingame.webp";
import prorpUiDemo from "../assets/projects/prorp/prorp-ui-demo.mp4";
import prorpOcrDemo from "../assets/projects/prorp/prorp-ocr-demo.mp4";
import prorpAutoTypeDemo from "../assets/projects/prorp/prorp-autotype.mp4";

export default function ProrpCaseStudy() {
  useEffect(() => {
    document.title = "PRORP Translator Case Study | QaritsaDEV";
  }, []);

  return (
    <div className="app-container case-study-container section-spacing">
      <Link
        to="/projects"
        style={{
          display: "inline-block",
          marginBottom: "2rem",
          color: "var(--accent-color)",
        }}
      >
        ← Back to Projects
      </Link>

      {/* A. CASE STUDY HERO */}
      <header className="cs-header">
        <h1 className="cs-title">PRORP Translator v3.0</h1>
        <span className="project-badge">Desktop Application</span>
        <p className="project-tech" style={{ marginTop: "1rem" }}>
          C++ • Qt 6 • Tesseract OCR • Groq API
        </p>
      </header>

      <div className="cs-hero-visual">
        <img src={prorpInGame} alt="PRORP in-game overlay demonstration" />
        <p className="cs-caption">
          Fig 1. PRORP translation overlay actively translating Russian chat to
          Indonesian in RedM.
        </p>
      </div>

      <article className="cs-content">
        {/* B. APPLICATION INTERFACE */}
        <section className="cs-section">
          <h2>1. Desktop Interface & Control</h2>
          <div className="cs-visual-grid">
            <div>
              <p>
                Unlike standard web translators, PRORP is a native desktop
                application designed to run alongside heavy 3D applications. The
                control panel is built using Qt 6, providing a lightweight
                footprint.
              </p>
              <p>
                Users can select target languages, toggle the overlay state, and
                manage their license keys securely through the interface.
              </p>
            </div>
            <div>
              <video
                src={prorpUiDemo}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  border: "1px solid var(--border-color)",
                }}
              />
              <p className="cs-caption">
                Fig 2. The main Qt 6 control interface.
              </p>
            </div>
          </div>
        </section>
        {/* C. OCR WORKFLOW */}
        <section className="cs-section">
          <h2>2. OCR Workflow & Region of Interest</h2>
          <div className="cs-visual-grid">
            <div style={{ order: 2 }}>
              <p>
                To maintain high performance and avoid reading the entire 1080p
                screen, users define a specific Region of Interest (ROI)
                bounding box over the game's chat area.
              </p>
              <p>
                Tesseract OCR continuously polls this specific region. Once text
                is detected, the string is sanitized and pushed to the Groq API
                for rapid, context-aware translation.
              </p>
            </div>
            <div style={{ order: 1 }}>
              <video
                src={prorpOcrDemo}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  border: "1px solid var(--border-color)",
                }}
              />
              <p className="cs-caption">
                Fig 3. User setting the OCR detection bounding box over the chat
                area.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION BARU: AUTO-TYPING */}
        <section className="cs-section">
          <h2>3. Auto-Typing Injection</h2>
          <div className="cs-visual-grid">
            <div>
              <p>
                Translating text is only half the problem. PRORP uses OS-level
                keyboard hooks to inject the translated text directly back into
                the game's chat input field.
              </p>
              <p>
                This completely eliminates the need for manual window-switching
                or copy-pasting, keeping the user fully immersed in the roleplay
                scenario without breaking character.
              </p>
            </div>
            <div>
              <video
                src={prorpAutoTypeDemo}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  border: "1px solid var(--border-color)",
                }}
              />
              <p className="cs-caption">
                Fig 4. Automated keystroke injection pushing text directly into
                the game.
              </p>
            </div>
          </div>
        </section>

        {/* D. ENGINEERING DETAILS */}
        <section className="cs-section">
          <h2>4. Licensing & Cloud Infrastructure</h2>
          <p>
            <strong>License Verification & Trial System:</strong> To protect the
            software and manage user access, PRORP integrates a custom
            cloud-based licensing system. The desktop client generates a unique
            Hardware ID (HWID) and sends an encrypted payload to a Google Apps
            Script backend. This serverless backend queries a Google Sheets
            database to verify active subscriptions (weekly/lifetime) or
            automatically provisions a time-bound 24-hour trial for first-time
            hardware before enforcing access restrictions.
          </p>
        </section>
      </article>
    </div>
  );
}
