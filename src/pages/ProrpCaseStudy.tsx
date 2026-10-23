import { useEffect } from "react";

export default function ProrpCaseStudy() {
  useEffect(() => {
    document.title = "PRORP Translator Case Study | QaritsaDEV";
  }, []);

  return (
    <div className="app-container case-study-container">
      <header className="cs-header">
        <h1 className="cs-title">PRORP Translator v3.0</h1>
        <p className="project-tech">
          C++ • Qt6 • Tesseract OCR • Llama-3 AI • GAS
        </p>
        <p className="cs-subtitle">
          Studi kasus teknis pengembangan aplikasi penerjemah overlay berbasis
          OCR dan integrasi AI cerdas untuk skenario game Roleplay.
        </p>
      </header>

      <article className="cs-content">
        <section className="cs-section">
          <h2>1. Overview</h2>
          <p>
            PRORP Translator v3.0 adalah aplikasi desktop Windows yang menjembatani kendala bahasa dalam game GTA Roleplay. Berjalan di atas fondasi C++ (Qt6), aplikasi ini tidak sekadar menerjemahkan layar melalui OCR, tetapi menggunakan Llama-3 AI untuk menganalisis konteks permainan, memahami <em>slang</em>, dan bahkan melakukan injeksi pengetikan otomatis (auto-typing) kembali ke dalam game.
          </p>
        </section>

        <section className="cs-section">
          <h2>2. Problem & 3. Goal</h2>
          <p>
            <strong>Problem:</strong> Pemain GTA Roleplay sering kesulitan berinteraksi di server internasional. Menerjemahkan manual via Alt-Tab akan merusak imersi dan konteks RP (terutama perintah <code>/me</code> dan <code>/do</code>). Selain itu, terjemahan harfiah sering kali gagal menangkap makna <em>slang</em> atau gaya bicara faksi tertentu.
          </p>
          <p>
            <strong>Goal:</strong> Membangun sistem yang ringan di sisi klien (aman dari <em>packet sniffer</em>), merespons pesan secara <em>real-time</em>, dan mampu mengubah bahasa Indonesia jalanan menjadi bahasa Inggris dengan <em>grammar</em> dan ejaan fonetik (<em>eye-dialect</em>) setara film layar lebar.
          </p>
        </section>

        <section className="cs-section">
          <h2>4. Solution & 5. Architecture</h2>
          <p>
            Solusinya adalah aplikasi <em>native</em> bertenaga Qt6 yang membagi beban kerja ke dalam empat arsitektur utama:
            <strong>Sistem Trial & Lisensi (Gatekeeper)</strong>, 
            <strong>Sistem Incoming (OCR ke ID)</strong>, 
            <strong>Sistem Outcoming (ID ke EN)</strong>, dan 
            <strong>Sistem Suggest Answer (Smart AI Co-Pilot)</strong>. Semua pemrosesan berat dilempar ke API AI eksternal agar klien tetap ringan.
          </p>
        </section>

        <section className="cs-section">
          <h2>6. OCR & 7. Translation Pipeline</h2>
          <p>
            Berikut adalah alur data terpadu (Hulu ke Hilir) dari saat pesan diterima hingga pengguna membalas pesan tersebut ke dalam game:
          </p>

          <div className="pipeline-diagram">
            <div className="pipeline-step">
              SCREEN CAPTURE <span>(Sistem Incoming: Hotkey memicu tangkapan layar chat)</span>
            </div>
            <div className="pipeline-arrow">↓</div>
            <div className="pipeline-step">
              TESSERACT OCR <span>(Ekstraksi piksel gambar menjadi teks mentah)</span>
            </div>
            <div className="pipeline-arrow">↓</div>
            <div className="pipeline-step">
              AI INCOMING <span>(Llama-3 mengoreksi typo & terjemahkan ke bahasa ID)</span>
            </div>
            <div className="pipeline-arrow">↓</div>
            <div className="pipeline-step">
              SMART AI CO-PILOT <span>(Analisis konteks: Buat 3 opsi balasan sesuai persona)</span>
            </div>
            <div className="pipeline-arrow">↓</div>
            <div className="pipeline-step">
              USER INTERACTION <span>(Pilih opsi balasan AI atau ketik manual via UI)</span>
            </div>
            <div className="pipeline-arrow">↓</div>
            <div className="pipeline-step">
              ASSEMBLY & OUTCOMING <span>(Injeksi parameter: Target Style, Slang Level, Tone)</span>
            </div>
            <div className="pipeline-arrow">↓</div>
            <div className="pipeline-step">
              AI OUTCOMING <span>(Llama-3 meramu Stylized English secara presisi)</span>
            </div>
            <div className="pipeline-arrow">↓</div>
            <div className="pipeline-step highlight">
              GAME INJECTION <span>(Auto-typing simulasi keyboard & Enter ke GTA V)</span>
            </div>
          </div>
        </section>

        <section className="cs-section">
          <h2>8. UI / UX</h2>
          <p>
            Antarmuka pengguna didesain dengan tema gelap yang tidak mencolok di layar kedua <em>gamer</em>. Fitur <strong>Smart AI Co-Pilot</strong> diintegrasikan secara mulus; ketika AI mendeteksi sapaan atau pertanyaan, UI langsung memunculkan 3 tombol opsi bahasa Indonesia (contoh: gaya "Mafia Italy"). Sekali klik, aplikasi langsung mengeksekusi pengetikan ke dalam game.
          </p>
        </section>

        <section className="cs-section">
          <h2>9. Engineering Challenges & 10. Technical Decisions</h2>
          <ul>
            <li>
              <strong>Integrasi Game Engine:</strong> Memasukkan teks terjemahan ke GTA V tidak bisa menggunakan <em>clipboard paste</em> biasa. <em>Keputusan:</em> Menggunakan <em>keyboard simulation library</em> untuk mengambil alih fokus ke <em>window</em> game, menekan tombol 'T', mengetik teks <em>array</em> secara natural (dalam milidetik), lalu menekan 'Enter'.
            </li>
            <li>
              <strong>Migrasi Ekosistem:</strong> Python memakan memori besar dan lambat saat memproses <em>hook</em> sistem. <em>Keputusan:</em> Penulisan ulang penuh ke C++ dan Qt6 untuk latensi yang jauh lebih rendah dan keamanan binari (dikompilasi dengan MSVC).
            </li>
          </ul>
        </section>

        <section className="cs-section">
          <h2>11. Licensing System (Gatekeeper)</h2>
          <p>
            Alih-alih menggunakan database SQL yang mahal, PRORP diamankan menggunakan arsitektur verifikasi ringan. Aplikasi merangkai <em>Hardware ID (HWID)</em> PC pengguna, Versi, dan Endpoint, lalu mengenkripsinya dengan <strong>HMAC signature</strong>. Data ini dikirim ke <strong>Google Apps Script (GAS)</strong> yang terhubung ke <strong>Google Sheets</strong>. Sistem ini mampu mengelola skenario <em>Trial 24-jam</em> hingga verifikasi nama pembeli berdasarkan kalibrasi zona waktu WIB, dan mengunci UI di sisi C++ jika lisensi tidak valid.
          </p>
        </section>

        <section className="cs-section">
          <h2>12. Result & 13. Future Improvements</h2>
          <p>
            <strong>Result:</strong> PRORP v3.0 telah berevolusi dari sekadar aplikasi OCR menjadi asisten Roleplay komprehensif yang mampu menangani input/output multibahasa dengan pemahaman konteks faksi (seperti slang dan <em>emotional tone</em>) tanpa terdeteksi sebagai <em>cheat</em>.
          </p>
          <p>
            <strong>Future Improvements:</strong> Mengoptimalkan metode <em>screen hooking</em> dengan integrasi DirectX langsung (mem-<em>bypass</em> Desktop API), serta memperluas pustaka <code>slang_library.json</code> untuk mencakup lebih banyak faksi dan dialek internasional.
          </p>
        </section>
      </article>
    </div>
  );
}