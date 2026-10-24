import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.title = "QaritsaDEV | Software Developer";
  }, []);

  return (
    <div className="app-container">
      {/* 1. HERO */}
      <section id="hero" className="hero-section">
        <h1 className="hero-title">
          Software developer building <br />
          <span className="text-accent">practical software products.</span>
        </h1>
        <p className="hero-subtitle">
          Saya Naufal, independen developer di balik QaritsaDEV. Saya membangun
          aplikasi desktop, bot otomatisasi, dan sistem manajemen web dengan
          pendekatan engineering yang pragmatis dan terukur.
        </p>
        <div className="hero-actions">
          <a href="/#projects" className="btn btn-primary">
            Lihat Projects
          </a>
          <a href="/#contact" className="btn btn-outline">
            Hubungi Saya
          </a>
        </div>
      </section>

      {/* 2. TECHNOLOGIES */}
      <section id="technologies" className="section-spacing">
        <h2 className="section-title">Technologies</h2>
        <p className="section-description">
          Stack teknologi yang secara aktif saya gunakan untuk membangun
          software dalam fase production.
        </p>
        <ul className="tech-list">
          <li>
            <strong>Core Languages:</strong> C++, TypeScript, JavaScript, Python
          </li>
          <li>
            <strong>Desktop & Automation:</strong> Qt6, CMake, OpenCV, PyAutoGUI
          </li>
          <li>
            <strong>Web & Cloud:</strong> React, Vite, Google Apps Script,
            Bootstrap 5
          </li>
        </ul>
      </section>

      {/* 3. FEATURED PROJECT */}
      <section id="featured-project" className="section-spacing">
        <h2 className="section-title">Featured Project</h2>
        <div className="project-card">
          <div className="project-card-header">
            <h3>PRORP Translator v3.0</h3>
            <span className="project-badge">Desktop App</span>
          </div>
          <p className="project-tech">C++ • Qt6 • Tesseract OCR • Llama-3 AI</p>
          <p className="project-desc">
            Aplikasi penerjemah overlay untuk skenario Roleplay. Dibangun dengan
            pipeline OCR real-time, injeksi auto-typing, koreksi konteks AI
            Llama-3, dan sistem verifikasi lisensi HMAC terintegrasi Google Apps
            Script.
          </p>
          <Link to="/projects/prorp" className="btn btn-outline">
            Baca Engineering Case Study
          </Link>
        </div>
      </section>

      {/* 4. SELECTED PROJECTS */}
      <section id="projects" className="section-spacing">
        <h2 className="section-title">Selected Projects</h2>
        <div className="projects-grid">
          {/* Proyek 1: ERP & POS Malaysia */}
          <div className="project-card">
            <div className="project-card-header">
              <h3>ERP & POS System</h3>
              <span className="project-badge">Enterprise</span>
            </div>
            <p className="project-tech">[TECH_STACK, Cth: React • Node.js]</p>
            <p className="project-desc">
              Sistem Enterprise Resource Planning dan Point of Sales yang
              dirancang untuk [SEBUTKAN_BIDANG_BISNIS] di Malaysia.
              [JELASKAN_FUNGSI_UTAMA_ATAU_PROBLEM_YANG_DISELESAIKAN].
            </p>
            <Link to="/projects/erp-malaysia" className="btn btn-outline">
              Baca Case Study
            </Link>
          </div>

          {/* Proyek 2: Foundation Accounting */}
          <div className="project-card">
            <div className="project-card-header">
              <h3>Foundation Accounting</h3>
              <span className="project-badge">Business Logic</span>
            </div>
            <p className="project-tech">[TECH_STACK, Cth: GAS • Spreadsheet]</p>
            <p className="project-desc">
              Aplikasi akuntansi khusus yayasan untuk mengelola
              [SEBUTKAN_FUNGSI_UTAMA, Cth: arus kas dan pelaporan donatur].
              [JELASKAN_STATUS_IMPLEMENTASINYA].
            </p>
            <a href="#" className="btn btn-outline">
              Detail Segera Hadir
            </a>
          </div>

          {/* Proyek 3: Automated Question Analysis */}
          <div className="project-card">
            <div className="project-card-header">
              <h3>Question Item Analysis</h3>
              <span className="project-badge">EdTech / Logic</span>
            </div>
            <p className="project-tech">[TECH_STACK, Cth: Python • Pandas]</p>
            <p className="project-desc">
              Solusi otomatisasi untuk menganalisis butir soal pendidikan.
              Menggantikan proses manual dengan algoritma yang mengevaluasi
              [SEBUTKAN_METRIK, Cth: tingkat kesulitan].
            </p>
            <a href="#" className="btn btn-outline">
              Detail Segera Hadir
            </a>
          </div>

          {/* Proyek 4: Roleplay Game Bot */}
          <div className="project-card">
            <div className="project-card-header">
              <h3>Roleplay Game Bot</h3>
              <span className="project-badge">Automation</span>
            </div>
            <p className="project-tech">[TECH_STACK, Cth: Python • OpenCV]</p>
            <p className="project-desc">
              Bot otomatisasi yang dikembangkan dan di-maintain secara aktif
              (2024-2026). Menggunakan [SEBUTKAN_TEKNIK_UTAMA, Cth: computer
              vision] untuk mengeksekusi aksi repetitif dalam game.
            </p>
            <a href="#" className="btn btn-outline">
              Detail Segera Hadir
            </a>
          </div>

          {/* Proyek 5: PMB / Student Admissions */}
          <div className="project-card">
            <div className="project-card-header">
              <h3>PMB Admissions</h3>
              <span className="project-badge">Web App</span>
            </div>
            <p className="project-tech">[TECH_STACK, Cth: PHP • MySQL]</p>
            <p className="project-desc">
              Aplikasi Penerimaan Mahasiswa/Murid Baru (PMB). Memfasilitasi
              pendaftaran digital dan manajemen data calon siswa dengan
              [SEBUTKAN_FITUR_UTAMA].
            </p>
            <a href="#" className="btn btn-outline">
              Detail Segera Hadir
            </a>
          </div>

          {/* Proyek 6: Mining Calculator */}
          <div className="project-card">
            <div className="project-card-header">
              <h3>Mining Calculator</h3>
              <span className="project-badge">Logic / Math</span>
            </div>
            <p className="project-tech">
              [TECH_STACK, Cth: JavaScript • React]
            </p>
            <p className="project-desc">
              Aplikasi kalkulator khusus untuk operasional pertambangan.
              Mengimplementasikan algoritma khusus untuk menghitung
              [SEBUTKAN_FUNGSI_KALKULASI_UTAMA] secara akurat.
            </p>
            <a href="#" className="btn btn-outline">
              Detail Segera Hadir
            </a>
          </div>
        </div>
      </section>
      {/* 5. IT INFRASTRUCTURE & FIELD PROJECTS */}
      <section id="infrastructure" className="section-spacing">
        <h2 className="section-title">IT Infrastructure & Field Projects</h2>
        <p
          className="section-description"
          style={{ color: "var(--text-main)", maxWidth: "700px" }}
        >
          Selain pengembangan perangkat lunak, saya juga menangani implementasi
          jaringan fisik, konfigurasi router MikroTik, dan instalasi sistem
          pengawasan (CCTV) yang terdokumentasi untuk mendukung kebutuhan
          operasional infrastruktur IT secara end-to-end.
        </p>
        <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
          {/* GANTI BARIS INI */}
          <Link to="/infrastructure" className="btn btn-outline">
            Lihat Dokumentasi Lapangan
          </Link>
        </div>
      </section>

      {/* 6. ABOUT */}
      <section id="about" className="section-spacing">
        <h2 className="section-title">About</h2>
        <p
          className="section-description"
          style={{
            color: "var(--text-main)",
            maxWidth: "800px",
            lineHeight: "1.8",
          }}
        >
          Fokus pengembangan saya adalah memecahkan masalah operasional nyata
          melalui kode. Saya merancang solusi yang mencakup manajemen data
          administratif hingga pipeline pemrosesan gambar desktop, dengan
          prioritas pada stabilitas arsitektur, keamanan distribusi perangkat
          lunak, dan fungsionalitas yang tepat guna.
        </p>
      </section>

      {/* 7. CONTACT */}
      <section
        id="contact"
        className="section-spacing"
        style={{ marginBottom: "6rem" }}
      >
        <h2 className="section-title">Contact</h2>
        <p className="section-description">
          Mari diskusikan kebutuhan perangkat lunak, kolaborasi teknis, atau
          peluang rekayasa produk Anda.
        </p>
        <div className="hero-actions">
          <a href="mailto:emailanda@domain.com" className="btn btn-primary">
            Kirim Email
          </a>
          <a
            href="https://github.com/sakahayang313"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            GitHub Profile
          </a>
        </div>
      </section>
    </div>
  );
}
