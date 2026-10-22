import { useEffect } from "react";

export default function ProrpCaseStudy() {
  useEffect(() => {
    document.title = "QaritsaDEV | Software Developer";
  }, []);

  return (
    <div className="app-container case-study-container">
      <header className="cs-header">
        <h1 className="cs-title">PRORP Translator</h1>
        <p className="project-tech">
          C++ • Qt6 • Tesseract OCR • Windows Desktop
        </p>
        <p className="cs-subtitle">
          Studi kasus teknis pengembangan aplikasi penerjemah overlay berbasis
          OCR untuk skenario game Roleplay.
        </p>
      </header>

      <article className="cs-content">
        <section className="cs-section">
          <h2>1. Overview</h2>
          <p>
            PRORP Translator adalah aplikasi desktop Windows yang membaca teks
            dari layar (khususnya area chat game) menggunakan OCR,
            menerjemahkannya, dan menampilkannya kembali dalam bentuk overlay
            transparan secara mulus. Aplikasi ini baru saja bermigrasi dari
            Python ke C++ (Qt6) untuk peningkatan performa dan stabilitas.
          </p>
        </section>

        <section className="cs-section">
          <h2>2. Problem & 3. Goal</h2>
          <p>
            <strong>Problem:</strong> Pemain GTA Roleplay sering kesulitan
            berinteraksi di server internasional karena kendala bahasa.
            Menerjemahkan manual melalui Alt-Tab merusak imersi permainan dan
            sering kali menghilangkan konteks RP (seperti perintah{" "}
            <code>/me</code> dan <code>/do</code>).
          </p>
          <p>
            <strong>Goal:</strong> Membangun *tool* ringan yang dapat
            menerjemahkan teks *in-game* mendekati *real-time* tanpa mengganggu
            interaksi *keyboard/mouse* pengguna, serta memahami format bahasa
            khusus Roleplay (slang/faksi).
          </p>
        </section>

        <section className="cs-section">
          <h2>4. Solution & 5. Architecture</h2>
          <p>
            Solusi yang dibangun adalah aplikasi desktop *native* menggunakan
            C++ dan kerangka kerja Qt6 untuk mengelola antarmuka dan *overlay*
            transparan. Arsitektur ini memanfaatkan Tesseract OCR yang berjalan
            di *background thread* untuk mencegah UI *freezing*, dan
            berkomunikasi dengan API terjemahan eksternal.
          </p>
        </section>

        <section className="cs-section">
          <h2>6. OCR & 7. Translation Pipeline</h2>
          <p>
            Inti dari aplikasi ini adalah *pipeline* pemrosesan data yang ketat
            untuk mencegah spam terjemahan dan memastikan hasil tangkapan layar
            dapat dibaca oleh *engine* OCR dengan akurat.
          </p>

          <div className="pipeline-diagram">
            <div className="pipeline-step">SCREEN CAPTURE</div>
            <div className="pipeline-arrow">↓</div>
            <div className="pipeline-step">
              CHAT ROI <span>(Region of Interest)</span>
            </div>
            <div className="pipeline-arrow">↓</div>
            <div className="pipeline-step">
              IMAGE PREPROCESSING <span>(Grayscale, Binarization)</span>
            </div>
            <div className="pipeline-arrow">↓</div>
            <div className="pipeline-step">TESSERACT OCR</div>
            <div className="pipeline-arrow">↓</div>
            <div className="pipeline-step">
              NORMALIZATION <span>(Clean up symbols)</span>
            </div>
            <div className="pipeline-arrow">↓</div>
            <div className="pipeline-step">
              FILTERING <span>(Ignore empty/noise)</span>
            </div>
            <div className="pipeline-arrow">↓</div>
            <div className="pipeline-step">STABILITY CHECK</div>
            <div className="pipeline-arrow">↓</div>
            <div className="pipeline-step">
              DUPLICATE CHECK <span>(Prevent re-translation)</span>
            </div>
            <div className="pipeline-arrow">↓</div>
            <div className="pipeline-step">
              TRANSLATION <span>(AI / API Call)</span>
            </div>
            <div className="pipeline-arrow">↓</div>
            <div className="pipeline-step highlight">OUTPUT / OVERLAY</div>
          </div>
        </section>

        <section className="cs-section">
          <h2>8. UI / UX</h2>
          <p>
            Antarmuka pengguna (UI) dirancang dengan tema gelap yang familier
            bagi *gamer*. Konfigurasi *Region of Interest* (ROI) dilakukan
            secara visual, di mana pengguna dapat menarik kotak (*bounding box*)
            di atas area chat game mereka untuk membatasi area tangkapan OCR.
          </p>
        </section>

        <section className="cs-section">
          <h2>9. Engineering Challenges & 10. Technical Decisions</h2>
          <ul>
            <li>
              <strong>Tantangan Kinerja OCR:</strong> Menjalankan Tesseract
              terus-menerus memakan siklus CPU. <em>Keputusan:</em>{" "}
              Mengimplementasikan <em>Stability Check</em> dan pembatasan{" "}
              <em>frame-rate</em> tangkapan agar OCR hanya memproses saat ada
              perubahan piksel yang signifikan di area ROI.
            </li>
            <li>
              <strong>Migrasi Bahasa:</strong> Versi awal menggunakan Python
              (PyQt/CustomTkinter), namun terbentur masalah konsumsi RAM dan
              distribusi (*packaging*). <em>Keputusan:</em> Ditulis ulang
              menggunakan C++ dan Qt6 yang dikompilasi langsung menggunakan MSVC
              dan CMake, didistribusikan via Inno Setup.
            </li>
          </ul>
        </section>

        <section className="cs-section">
          <h2>11. Licensing System</h2>
          <p>
            Untuk komersialisasi, PRORP membutuhkan sistem otentikasi. Ketimbang
            membangun *backend* kompleks dengan database SQL, saya merancang
            sistem verifikasi lisensi ringan menggunakan verifikasi{" "}
            <strong>HMAC</strong> yang terhubung ke{" "}
            <strong>Google Apps Script</strong> dan{" "}
            <strong>Google Sheets</strong> sebagai pusat datanya. Sistem ini
            mencatat tipe lisensi, nama pembeli, dan mengkalibrasi kedaluwarsa
            berdasarkan zona waktu WIB.
          </p>
        </section>

        <section className="cs-section">
          <h2>12. Result & 13. Future Improvements</h2>
          <p>
            <strong>Result:</strong> PRORP v3.0 berhasil dirilis sebagai
            aplikasi mandiri yang stabil, mampu menerjemahkan *roleplay chat*
            dengan mempertahankan integritas format <code>/me</code> dan{" "}
            <code>/do</code>.
          </p>
          <p>
            <strong>Future Improvements:</strong> Rencana ke depan mencakup
            integrasi model OCR lokal yang lebih ringan dari Tesseract, serta
            optimasi metode *screen hooking* (seperti integrasi DirectX) untuk
            menangkap *frame* layar secara lebih efisien.
          </p>
        </section>
      </article>
    </div>
  );
}
