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
      title: "ERP & POS System (Malaysia)",
      category: "Enterprise",
      tech: "React • Node.js • PostgreSQL",
      description: "Sistem Enterprise Resource Planning dan Point of Sales yang dirancang untuk klien di Malaysia. Memfasilitasi manajemen stok lintas cabang, kasir multi-mata uang, dan pelaporan keuangan real-time.",
      features: ["Multi-branch Inventory", "Real-time Analytics", "Role-based Access Control"]
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