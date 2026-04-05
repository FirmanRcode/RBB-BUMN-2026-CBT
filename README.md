# 🚀 RBB BUMN 2026 CBT Simulator

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FFirmanRcode%2FRBB-BUMN-2026-CBT)

Aplikasi Web Simulasi Computer Based Test (CBT) Rekrutmen Bersama BUMN 2026 tingkat mahir yang dirancang secara profesional dengan akurasi antarmuka, *timer*, dan navigasi layaknya sistem resmi BUMN.

Desain antarmuka responsif mengusung tema *Dark Mode* premium dengan pengalaman interaktif terintegrasi untuk mempersiapkan calon peserta menghadapi tekanan ujian sesungguhnya.

## ✨ Fitur Unggulan (Enterprise CBT Experience)

- **👀 Anti-Cheating Engine & Tracker**: Sensor pengawas digital terintegrasi layar. Sistem secara otomatis mewajibkan mode *Fullscreen* dan menggunakan pelacak `visibilitychange`—melacak dan memberikan peringatan keras jika peserta berpindah tab atau membuka *browser* lain.
- **📈 Professional Radar Chart Analytics**: Menyematkan kurva Grafik Laba-laba *Real-time* (*Recharts*) pada dasbor hasil untuk memetakan spesialisasi skor dan kelemahan secara visual komprehensif.
- **🏆 Peringkat Nasional (Percentile Leaderboard)**: Algoritma cerdas yang dapat mengestimasi *ranking* nasional Anda (Misal: *Top 15%*) tanpa memerlukan *backend/database* menggunakan perhitungan normal distribusi, serta evaluasi **Passing Grade** otomatis standar BUMN (minimal 65%).
- **📱 Dukungan Progressive Web App (PWA) Offline**: Aplikasi dapat di-klik *"Install"* pada *browser* Android, iOS, maupun Windows untuk menjadi *Native App* yang dapat dimainkan **100% tanpa internet (Offline Mode)**.
- **⌨️ Keyboard Shortcuts Navigation**: Dirancang khusus bagi pengguna Laptop, peserta dapat menekan tombol huruf `A, B, C, D, E` dan `Panah Kanan/Kiri` pada papan ketik (*keyboard*) layaknya sistem tes standar asli.
- **🖨️ Native Print-to-PDF Export**: Cetak *Score Card* langsung menjadi *PDF Report* berdesain bersih (*print watermark*) tanpa tombol navigasi yang berantakan, sempurna untuk diunggah ke *LinkedIn*.
- **📝 Sistem Navigasi Soal Asli BUMN**: Fitur penanda warna soal (Sudah, Belum, Ragu-ragu) dan navigasi panel identik dengan *engine* CBT BUMN. Ditambah **Question Shuffler** cerdas yang mengacak letak seluruh dari 350+ pangkalan data soal setiap kali disetel ulang!
- **🎯 Review Mode & Speed Pacing**: Menghitung kecepatan jawab Anda (Contoh: "⏱️ 40 dtk/soal") dan hadir dengan sakelar filter cerdas: *Tampilkan Semua Soal*, *Hanya Soal Salah*, atau *Berdasarkan Ragu*.

## 🛠 Instalasi dan Konfigurasi Lokal

Pastikan komputer Anda sudah terinstal **Node.js (versi 18.x atau terbaru)**.

1. Lakukan *clone repository* ini:
   ```bash
   git clone https://github.com/FirmanRcode/RBB-BUMN-2026-CBT.git
   cd RBB-BUMN-2026-CBT
   ```

2. Instalasi dependensi:
   ```bash
   npm install
   ```

3. Jalankan *development server*:
   ```bash
   npm run dev
   ```

4. Buka peramban di alamat `http://localhost:3000`.

## 🚀 Panduan Deployment (Vercel)

Aplikasi ini menggunakan framework Next.js sehingga sangat cocok di-deploy ke **Vercel** secara cuma-cuma:
1. Buka [Vercel Dashboard](https://vercel.com/new) dan *Sign In* menggunakan akun GitHub Anda.
2. Impor (Import) repositori `RBB-BUMN-2026-CBT` dari GitHub.
3. Biarkan konfigurasi bawaan (Next.js preset) dan klik **Deploy**.
4. Dalam waktu singkat, aplikasi Web Simulasi CBT Anda akan *live* ke publik!

## © Hak Cipta
**All Rights Reserved - Restu Firmansyah 2026**
*Proyek ini merupakan portofolio simulasi pengembangan web edukasional interaktif.*
