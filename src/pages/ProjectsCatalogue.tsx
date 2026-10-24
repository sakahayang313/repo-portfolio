import { useEffect } from "react";
import { Link } from "react-router-dom";

// 1. INI ADALAH DATABASE SEMENTARA KITA (Array of Objects)
const allProjects = [
  {
    id: 10,
    title: "PRORP Translator v3.0",
    category: "Desktop App",
    tech: "C++ • Qt 6 • Tesseract OCR • Groq API",
    desc: "A desktop translation overlay built for GTA, RDR2, Roblox and other. It combines real-time OCR, contextual AI translation, and automatic text input without disrupting game immersion.",
    link: "/projects/prorp-translator",
  },
  {
    id: 13,
    title: "Ranch ERP & Financial System - RedM",
    category: "Enterprise Web App",
    tech: "Google Apps Script • Google Sheets • Bootstrap 5",
    desc: "A comprehensive ranch management system developed for a Malaysian client. The platform streamlines employee activity tracking, livestock inventory, production cycles, payroll processing, and centralized real-time financial reporting.",
    link: "/projects/erp-malaysia",
  },
  {
    id: 11,
    title: "Foundation Accounting App",
    category: "Enterprise",
    tech: "[TECH_STACK]",
    desc: "Aplikasi akuntansi khusus yayasan untuk mengelola arus kas dan pelaporan.",
    link: "#",
  },
  {
    id: 5,
    title: "Question Item Analysis",
    category: "EdTech",
    tech: "[TECH_STACK]",
    desc: "Solusi otomatisasi untuk menganalisis metrik butir soal pendidikan secara algoritmik.",
    link: "#",
  },
  {
    id: 8,
    title: "Roleplay Game Bot",
    category: "Automation",
    tech: "[TECH_STACK]",
    desc: "Bot otomatisasi (2024-2026) untuk mengeksekusi aksi repetitif dalam game berbasis deteksi visual.",
    link: "#",
  },
  {
    id: 7,
    title: "PMB Admissions App",
    category: "EdTech / Web",
    tech: "[TECH_STACK]",
    desc: "Aplikasi web untuk Penerimaan Murid/Mahasiswa Baru dan manajemen data pendaftar.",
    link: "#",
  },
  {
    id: 4,
    title: "Mining Calculator App",
    category: "Logic / Math",
    tech: "[TECH_STACK]",
    desc: "Aplikasi kalkulator dengan algoritma khusus untuk operasional pertambangan.",
    link: "#",
  },
  {
    id: 1,
    title: "Student Violation Recording",
    category: "EdTech",
    tech: "[TECH_STACK]",
    desc: "Aplikasi pencatatan dan manajemen data pelanggaran kedisiplinan siswa.",
    link: "#",
  },
  {
    id: 12,
    title: "Monthly Teacher Performance",
    category: "EdTech",
    tech: "[TECH_STACK]",
    desc: "Aplikasi form penilaian kinerja guru bulanan secara digital.",
    link: "#",
  },
  {
    id: 9,
    title: "Household Financial Tracking",
    category: "App Logic",
    tech: "[TECH_STACK]",
    desc: "Aplikasi pelacakan finansial dan manajemen anggaran untuk skala rumah tangga.",
    link: "#",
  },
  {
    id: 6,
    title: "School Website",
    category: "Web Presence",
    tech: "[TECH_STACK]",
    desc: "Pengembangan dan deployment website profil resmi untuk sekolah.",
    link: "#",
  },
  {
    id: 3,
    title: "MikroTik Landing Page",
    category: "Web Presence",
    tech: "[TECH_STACK]",
    desc: "Halaman landing page (captive portal) terintegrasi dengan jaringan MikroTik.",
    link: "#",
  },
  {
    id: 2,
    title: "SA-MP Game Server",
    category: "Server Mgmt",
    tech: "[TECH_STACK]",
    desc: "Konfigurasi dan manajemen server untuk game San Andreas Multiplayer.",
    link: "#",
  },
];

export default function ProjectsCatalogue() {
  useEffect(() => {
    document.title = "Projects Catalogue | QaritsaDEV";
  }, []);

  return (
    <div className="app-container">
      <header className="cs-header" style={{ marginBottom: "3rem" }}>
        <h1 className="cs-title">Projects Catalogue</h1>
        <p className="cs-subtitle">
          Arsip lengkap seluruh portofolio proyek software, sistem bisnis, dan
          bot otomatisasi yang pernah saya kembangkan.
        </p>
      </header>

      {/* BAGIAN TOMBOL FILTER */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "3rem",
          flexWrap: "wrap",
        }}
      >
        <button className="btn btn-primary">All</button>
        <button className="btn btn-outline">Business & Enterprise</button>
        <button className="btn btn-outline">EdTech & Productivity</button>
        <button className="btn btn-outline">Game Tools & Automation</button>
        <button className="btn btn-outline">Web & Utilities</button>
      </div>

      {/* WADAH GRID UNTUK 13 PROYEK */}
      <div className="projects-grid">
        {allProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card-header">
              <h3>{project.title}</h3>
              <span className="project-badge">{project.category}</span>
            </div>
            <p className="project-tech">{project.tech}</p>
            <p className="project-desc">{project.desc}</p>
            {/* Logika: Jika link bukan '#', tampilkan tombol baca case study, jika '#' tampilkan segera hadir */}

            {project.link !== "#" ? (
              <Link to={project.link} className="btn btn-outline">
                Baca Case Study
              </Link>
            ) : (
              <span
                className="btn btn-outline"
                style={{ opacity: 0.5, cursor: "not-allowed" }}
              >
                Detail Segera Hadir
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
