import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    document.title = "QaritsaDEV | Software Developer";
  }, []);

  return (
    <div className="app-container">
      {/* HERO SECTION */}
      <section className="hero-section">
        <h1 className="hero-title">
          Software developer building <br />
          <span className="text-accent">practical software products.</span>
        </h1>
        <p className="hero-subtitle">
          Saya Naufal, pengembang independen di balik QaritsaDEV. Berawal dari membangun sistem informasi dan administrasi pendidikan, saya kini berfokus merancang aplikasi desktop, bot otomatisasi, dan sistem manajemen dengan pendekatan rekayasa (engineering) yang pragmatis.
        </p>
        <div className="hero-actions">
          <Link to="/projects/prorp" className="btn btn-primary">
            Lihat Project PRORP
          </Link>
          <a href="mailto:emailanda@domain.com" className="btn btn-outline">
            Hubungi Saya
          </a>
        </div>
      </section>

      {/* ABOUT & TECH STACK SECTION */}
      <section className="section-spacing">
        <h2 className="section-title">Teknologi & Fokus</h2>
        <p className="section-description">
          Fokus saya adalah memecahkan masalah nyata melalui kode—baik itu merancang pipeline terjemahan real-time berbasis Tesseract OCR, maupun membangun aplikasi single-page (SPA) yang ringan dan efisien.
        </p>
        <ul className="tech-list">
          <li><strong>Bahasa & Inti:</strong> C++, TypeScript, JavaScript, Python</li>
          <li><strong>Desktop & Otomatisasi:</strong> Qt6, CMake, OpenCV, PyAutoGUI</li>
          <li><strong>Web & Ekosistem:</strong> React, Vite, Google Apps Script, Bootstrap 5</li>
          <li><strong>Distribusi & Tools:</strong> Git, Cloudflare Pages, Inno Setup, WeasyPrint</li>
        </ul>
      </section>

      {/* FEATURED PROJECT SECTION */}
      <section className="section-spacing">
        <h2 className="section-title">Featured Project</h2>
        
        <div className="project-card">
          <div className="project-card-header">
            <h3>PRORP Translator v3.0</h3>
            <span className="project-badge">Desktop App</span>
          </div>
          <p className="project-tech">C++ • Qt6 • Tesseract OCR • HMAC Licensing</p>
          <p className="project-desc">
            Aplikasi penerjemah overlay yang dirancang khusus untuk skenario Roleplay. Memiliki pipeline pemrosesan gambar, deteksi teks duplikat, dan sistem lisensi yang terintegrasi aman menggunakan Google Sheets.
          </p>
          <Link to="/projects/prorp" className="btn btn-outline">
            Baca Case Study Tekninya
          </Link>
        </div>
      </section>
    </div>
  );
}