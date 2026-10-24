import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ItInfrastructure() {
  useEffect(() => {
    document.title = "IT Infrastructure & Field Projects | QaritsaDEV";
  }, []);

  return (
    <div className="app-container">
      
      <header className="cs-header" style={{ marginBottom: '3rem' }}>
        <h1 className="cs-title">IT Infrastructure & Field Projects</h1>
        <p className="cs-subtitle">
          Dokumentasi implementasi jaringan fisik, konfigurasi router MikroTik, dan instalasi sistem pengawasan (CCTV) untuk mendukung operasional institusi secara end-to-end.
        </p>
        <Link to="/" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--accent-color)' }}>
          ← Kembali ke Home
        </Link>
      </header>

      <div className="projects-grid">
        
        {/* Kartu 1: MikroTik */}
        <div className="project-card" style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Tempat Foto Placeholder */}
          <div style={{ backgroundColor: '#1e232b', height: '200px', borderRadius: '4px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
            [FOTO DOKUMENTASI MIKROTIK]
          </div>
          
          <div className="project-card-header">
            <h3>MikroTik Network Implementation</h3>
            <span className="project-badge">Networking</span>
          </div>
          <p className="project-desc" style={{ flexGrow: 1 }}>
            Konfigurasi topologi jaringan, manajemen bandwidth, dan instalasi perangkat keras MikroTik untuk memastikan stabilitas koneksi internet di lingkungan [SEBUTKAN_LOKASI/INSTITUSI].
          </p>
        </div>

        {/* Kartu 2: CCTV */}
        <div className="project-card" style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Tempat Foto Placeholder */}
          <div style={{ backgroundColor: '#1e232b', height: '200px', borderRadius: '4px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
            [FOTO DOKUMENTASI CCTV]
          </div>
          
          <div className="project-card-header">
            <h3>CCTV Surveillance System</h3>
            <span className="project-badge">Hardware / Security</span>
          </div>
          <p className="project-desc" style={{ flexGrow: 1 }}>
            Perencanaan tata letak kamera, penarikan kabel, dan konfigurasi DVR/NVR untuk sistem pengawasan keamanan terpadu area publik dan tertutup.
          </p>
        </div>

      </div>

    </div>
  );
}