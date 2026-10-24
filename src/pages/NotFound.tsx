import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    document.title = "404 Not Found | QaritsaDEV";
  }, []);

  return (
    <div className="app-container section-spacing" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontSize: '5rem', color: 'var(--accent-color)', margin: '0' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Halaman Tidak Ditemukan</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '500px', lineHeight: '1.6' }}>
        Maaf, halaman yang Anda cari mungkin salah ketik, telah dipindahkan, atau sudah tidak tersedia di server kami.
      </p>
      <Link to="/" className="btn btn-primary">
        Kembali ke Beranda
      </Link>
    </div>
  );
}