import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


interface ProjectData {
  title: string;
  category: string;
  tech: string;
  description: string;
  features: string[]; // Ini berarti: daftar teks (array of strings)
}

export default function ProjectDetail() {
  // 1. MEMBACA URL: Jika URL-nya /projects/erp-malaysia, maka 'slug' akan berisi "erp-malaysia"
  const { slug } = useParams();

  // 2. SIMULASI DATABASE SEMENTARA
  // Nanti data ini bisa digabung ke satu file khusus agar lebih rapi
  const projectDB: Record<string, ProjectData> = {
    "erp-malaysia": {
    title: "Ranch ERP & Financial System - RedM",
    category: "Enterprise Web App",
    tech: "Google Apps Script • Google Sheets • Bootstrap 5 ",
    description: "A custom-tailored Enterprise Resource Planning (ERP) and Point of Sales (POS) ecosystem developed for a Malaysian client in the RedM roleplay environment. Built on a serverless Google Cloud infrastructure, the system automates employee activity tracking, dynamic Bill of Materials (BOM) for livestock and production, payroll management, and real-time financial reporting while actively preventing fraud.",
    features: [
      "Role-Based Access Control (RBAC): 5-tier access hierarchy (Owner, Admin, Manager, Staff) with privacy toggles to protect financial data.",
      "Smart Point of Sales (POS): Automated checkout that instantly reduces BOM stock, updates cash balance, and distributes employee incentives.",
      "HR & Automated Payroll: Tracks attendance, calculates role-based incentives, and automates salary payments directly integrated with the Finance Ledger.",
      "Executive Financial Ledger: Centralized digital cash book with real-time Profit & Loss (P&L) reporting calculating Revenue, COGS, Opex, and Net Profit.",
      "Audit & KPI Red Flag: Automated anomaly detection system tracking inventory shrinkage, unusual purchase mark-ups, and productivity issues."
    ]
  },
    "question-analysis": {
      title: "Question Item Analysis",
      category: "EdTech",
      tech: "Python • Pandas • Excel API",
      description: "Aplikasi otomatisasi untuk mengevaluasi kualitas butir soal ujian. Sistem ini menggantikan kalkulasi manual dengan menghitung tingkat kesukaran dan daya pembeda secara instan.",
      features: ["Automated Scoring", "Difficulty Index Calculation", "Export to Excel/PDF"]
    }
  };

  // 3. MENCARI DATA: Ambil data dari database yang cocok dengan slug di URL
  // Jika slug tidak ditemukan, anggap data kosong (undefined)
  const data = slug ? projectDB[slug] : undefined;

  useEffect(() => {
    if (data) {
      document.title = `${data.title} | QaritsaDEV`;
    } else {
      document.title = "Project Not Found | QaritsaDEV";
    }
  }, [data]);

  // 4. JIKA DATA TIDAK DITEMUKAN: Tampilkan halaman error sederhana
  if (!data) {
    return (
      <div className="app-container section-spacing" style={{ textAlign: 'center' }}>
        <h2>Proyek tidak ditemukan</h2>
        <p>Maaf, halaman detail untuk "{slug}" belum tersedia atau data belum dimasukkan.</p>
        <Link to="/projects" className="btn btn-primary" style={{ marginTop: '1rem' }}>Kembali ke Katalog</Link>
      </div>
    );
  }

  // 5. JIKA DATA DITEMUKAN: Cetak template halaman detail
  return (
    <div className="app-container case-study-container">
      <Link to="/projects" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--accent-color)' }}>
        ← Kembali ke Katalog
      </Link>

      <header className="cs-header">
        <h1 className="cs-title">{data.title}</h1>
        <span className="project-badge">{data.category}</span>
        <p className="project-tech" style={{ marginTop: '1rem' }}>{data.tech}</p>
      </header>

      <article className="cs-content">
        <section className="cs-section">
          <h2>Overview</h2>
          <p>{data.description}</p>
        </section>

        <section className="cs-section">
          <h2>Key Features</h2>
          <ul>
            {data.features.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}