# 🚀 RBB BUMN 2026 CBT Simulator

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FFirmanRcode%2FRBB-BUMN-2026-CBT)

Aplikasi Web Simulasi Computer Based Test (CBT) Rekrutmen Bersama BUMN 2026 tingkat mahir yang dirancang secara profesional dengan akurasi antarmuka, *timer*, dan navigasi layaknya sistem resmi BUMN.

Desain antarmuka responsif mengusung tema *Dark Mode* premium dengan pengalaman interaktif terintegrasi untuk mempersiapkan calon peserta menghadapi tekanan ujian sesungguhnya.

## ✨ Fitur Unggulan

- **⏰ Persistent Stage Timer & Auto-Submit**: Timer *real-time* yang independen untuk setiap sub-tes. Jika waktu habis, sistem otomatis beralih ke tes berikutnya tanpa henti (*marathon mode*).
- **📝 Sistem Navigasi Soal Asli BUMN**: Fitur penanda warna soal (Dikerjakan, Belum Dikerjakan, Ragu-ragu) dan navigasi panel yang persis seperti *engine* CBT BUMN.
- **📚 350+ Bank Soal Terstandarisasi**: Dilengkapi dengan ratusan pangkalan data soal lokal untuk **8 Sub-Tes** mencakup:
  - Verbal Logical Reasoning
  - Number Sequence
  - Word Classification
  - Diagram Reasoning
  - Tes AKHLAK (Situational Judgment Test)
  - Wawasan Kebangsaan (TWK)
  - Bahasa Inggris Asli Dunia Kerja
  - Learning Agility
- **🎯 Result & Analytics Mode**: Analisis hasil skor secara langsung setelah tes selesai. Dilengkapi tombol *Review* yang menampilkan **penjelasan logis dan "TRICK/Quick Hack"** pengerjaan dari instruktur simulasi.
- **💾 Session Storage Persistence**: Status ujian disimpan dalam *sessionStorage* sehingga peserta tidak akan kehilangan data meskipun menekan tombol *Refresh* peramban.

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
