// Sub-Tes 4: Diagram Reasoning (Tekstual) — 25 Soal (19 Menit)
const subtest4 = [
  {
    id: 1,
    question: `Perhatikan pola matriks 3×3 berikut:
┌───┬───┬───┐
│ ● │ ○ │ ● │
├───┼───┼───┤
│ ○ │ ● │ ○ │
├───┼───┼───┤
│ ● │ ○ │ ? │
└───┴───┴───┘
Tanda ? yang tepat adalah...`,
    options: { A: "●", B: "○", C: "▲", D: "■", E: "Tidak ada pola" },
    answer: "A",
    explanation: "Pola diagonal dan selang-seling: posisi (1,1), (2,2), (3,3) selalu ●. Posisi baris ganjil kolom ganjil = ●. Maka ? = ●.",
    trick: "Baca pola: diagonal utama, baris, kolom. Cek apakah pola berulang setiap 2 atau 3 elemen.",
  },
  {
    id: 2,
    question: `Perhatikan tabel angka 3×3 berikut:
┌────┬────┬────┐
│  2 │  4 │  6 │
├────┼────┼────┤
│  3 │  9 │ 27 │
├────┼────┼────┤
│  4 │ 16 │  ? │
└────┴────┴────┘
Nilai ? yang tepat adalah...`,
    options: { A: "32", B: "48", C: "64", D: "72", E: "80" },
    answer: "C",
    explanation: "Baris 1: 2, 4, 6 (×2, ×3 dari awal, atau +2). Baris 2: 3, 9, 27 (×3). Baris 3: 4, 16, 64 (×4). Pola kolom pertama: 2,3,4. Setiap baris adalah deret geometri dengan rasio = angka di kolom pertama.",
    trick: "Cek pola per baris DAN per kolom. Di sini baris 3: 4×4=16, 16×4=64.",
  },
  {
    id: 3,
    question: `Perhatikan pola berikut:
[Kotak] → [Lingkaran] → [Segitiga]
[Besar] → [Sedang] → [Kecil]
[Hitam] → [Abu-abu] → [Putih]

Gambar ke-7 dalam urutan ini adalah...`,
    options: { A: "Kotak Besar Hitam", B: "Lingkaran Sedang Abu-abu", C: "Segitiga Kecil Putih", D: "Kotak Sedang Abu-abu", E: "Lingkaran Besar Hitam" },
    answer: "A",
    explanation: "Pola siklus 3: posisi 1,4,7 = Kotak Besar Hitam. Posisi 7 = 7÷3 = sisa 1, artinya kembali ke posisi pertama dalam siklus.",
    trick: "Pola siklus: gunakan modulo. Posisi ke-n, sisa = n mod 3 (atau panjang siklus). Sisa 1 = elemen pertama.",
  },
  {
    id: 4,
    question: `Perhatikan pola angka:
Baris 1: 1
Baris 2: 2  3
Baris 3: 4  5  6
Baris 4: 7  8  9  10

Baris 5 diawali dengan angka...`,
    options: { A: "10", B: "11", C: "12", D: "13", E: "14" },
    answer: "B",
    explanation: "Baris 1 ada 1 angka (1), baris 2 ada 2 angka (2-3), baris 3 ada 3 angka (4-6), baris 4 ada 4 angka (7-10). Total setelah baris 4 = 10. Baris 5 dimulai dari 11.",
    trick: "Hitung total elemen sebelumnya: 1+2+3+4=10. Baris berikutnya mulai dari 10+1=11.",
  },
  {
    id: 5,
    question: `Terdapat 4 gambar bentuk yang berputar:
Gambar 1: Panah menunjuk ke ATAS (↑)
Gambar 2: Panah menunjuk ke KANAN (→)
Gambar 3: Panah menunjuk ke BAWAH (↓)
Gambar 4: Panah menunjuk ke KIRI (←)
Gambar 5: ?`,
    options: { A: "↑ (Atas)", B: "→ (Kanan)", C: "↓ (Bawah)", D: "← (Kiri)", E: "↗ (Kanan atas)" },
    answer: "A",
    explanation: "Siklus rotasi 90° searah jarum jam: ↑→↓←↑→... Gambar 5 = kembali ke ↑.",
    trick: "Pola rotasi 4 posisi: modulo 4. Posisi 5 mod 4 = 1 → posisi pertama = ↑.",
  },
  {
    id: 6,
    question: `Perhatikan tabel:
┌─────┬─────┬─────┐
│  A  │  C  │  E  │
├─────┼─────┼─────┤
│  B  │  D  │  F  │
├─────┼─────┼─────┤
│  G  │  ?  │  K  │
└─────┴─────┴─────┘
Hurup ? yang tepat adalah...`,
    options: { A: "H", B: "I", C: "J", D: "K", E: "L" },
    answer: "B",
    explanation: "Baris 1: A,C,E (huruf urut +2). Baris 2: B,D,F (huruf urut +2). Baris 3: G, ?, K. G=7, +2=I=9, +2=K=11. Maka ?=I.",
    trick: "Baca pola per baris. Kenaikan +2 menghasilkan huruf berselang satu. G→I→K.",
  },
  {
    id: 7,
    question: `Sebuah dadu standar:
- Sisi berhadapan selalu berjumlah 7 (1-6, 2-5, 3-4).
- Dadu diletakkan dengan sisi '1' menghadap atas dan sisi '2' menghadap depan.
Sisi manakah yang menghadap ke KANAN?`,
    options: { A: "3", B: "4", C: "5", D: "6", E: "2" },
    answer: "A",
    explanation: "Pada dadu standar orientasi: 1 atas, lawan=6 bawah. 2 depan, lawan=5 belakang. 3 kanan, lawan=4 kiri. Maka kanan=3.",
    trick: "Hafalkan aturan dadu: pasangan (1-6),(2-5),(3-4). Dengan posisi 1 atas dan 2 depan, gunakan aturan tangan kanan untuk kanan=3.",
  },
  {
    id: 8,
    question: `Perhatikan pola:
□ □ □ → 3 kotak
□ □ □ □ → 4 kotak
Pola segitiga dari kotak:
Baris 1: □
Baris 2: □ □
Baris 3: □ □ □
Total kotak untuk 6 baris adalah...`,
    options: { A: "18", B: "20", C: "21", D: "24", E: "28" },
    answer: "C",
    explanation: "Total = 1+2+3+4+5+6 = 21. Rumus bilangan segitiga: n(n+1)/2 = 6×7/2 = 21.",
    trick: "Soal pola segitiga Pascal: gunakan rumus T(n) = n(n+1)/2. Untuk n=6: 6×7/2 = 21.",
  },
  {
    id: 9,
    question: `Perhatikan pola warna:
Kotak 1: Merah
Kotak 2: Biru
Kotak 3: Hijau
Kotak 4: Merah
Kotak 5: Biru
Kotak 6: Hijau
Kotak 13: ?`,
    options: { A: "Merah", B: "Biru", C: "Hijau", D: "Kuning", E: "Ungu" },
    answer: "A",
    explanation: "Siklus 3 warna. 13 mod 3 = 1. Posisi 1 = Merah. Maka kotak ke-13 = Merah.",
    trick: "Siklus N: posisi k → k mod N. Jika sisa=0 → elemen terakhir. 13 mod 3 = 1 → elemen ke-1 = Merah.",
  },
  {
    id: 10,
    question: `Sebuah pola cermin (refleksi horizontal):
[Asli]: ▷▷▷ (tiga segitiga menunjuk kanan)
[Cermin Horizontal]: ?`,
    options: { A: "▶▶▶", B: "◁◁◁", C: "▽▽▽", D: "△△△", E: "◀◀◀" },
    answer: "E",
    explanation: "Refleksi horizontal = cermin di sumbu vertikal. Segitiga kanan (▷) menjadi segitiga kiri (◀).",
    trick: "Refleksi horizontal membalik kiri-kanan. Refleksi vertikal membalik atas bawah. Tentukan jenis cermin dulu.",
  },
  {
    id: 11,
    question: `Perhatikan pola matriks angka:
┌────┬────┬────┐
│  1 │  2 │  3 │
├────┼────┼────┤
│  4 │  5 │  6 │
├────┼────┼────┤
│  7 │  8 │  ? │
└────┴────┴────┘
Operasi: Setiap baris dijumlahkan. Baris 1=6, Baris 2=15, Baris 3=?`,
    options: { A: "22", B: "23", C: "24", D: "25", E: "26" },
    answer: "C",
    explanation: "? = 9. Baris 3: 7+8+9=24. Atau polanya: baris 1=6, baris 2=15, selisih=9. Baris 3=15+9=24.",
    trick: "Hitung total baris: jumlah aritmetika berurutan. Baris 3 = 7+8+9 = 24.",
  },
  {
    id: 12,
    question: `Bujur sangkar dengan angka di tepi:
   8
5 [?] 3
   6
Angka tengah = rata-rata dari empat sisi. Nilai ? adalah...`,
    options: { A: "4", B: "5", C: "5.5", D: "6", E: "7" },
    answer: "C",
    explanation: "Rata-rata: (8+3+6+5)/4 = 22/4 = 5.5.",
    trick: "Soal matriks tengah: biasanya rata-rata, jumlah, atau selisih dari sisi/pojok. Coba operasi dasar dulu.",
  },
  {
    id: 13,
    question: `Pola lipatan kertas:
Kertas persegi dilipat 1 kali → 2 bagian
Dilipat 2 kali → 4 bagian
Dilipat 3 kali → 8 bagian
Dilipat 6 kali → ? bagian`,
    options: { A: "32", B: "48", C: "64", D: "72", E: "96" },
    answer: "C",
    explanation: "Setiap lipatan menggandakan bagian: 2^n. Lipat 6 kali = 2^6 = 64.",
    trick: "Pola pangkat 2 klasik. n lipatan = 2^n bagian. Hafalkan: 2^6=64, 2^7=128, 2^8=256.",
  },
  {
    id: 14,
    question: `Perhatikan pola:
▲▲▲
▲▲▲▲▲
▲▲▲▲▲▲▲

Baris 1 = 3 segitiga, Baris 2 = 5, Baris 3 = 7.
Baris ke-10 memiliki berapa segitiga?`,
    options: { A: "19", B: "21", C: "23", D: "25", E: "27" },
    answer: "B",
    explanation: "Pola: 2n+1. Baris 1: 2(1)+1=3, Baris 2: 2(2)+1=5, Baris 10: 2(10)+1=21.",
    trick: "Temukan rumus pola: selisih antar baris = +2 (konstan). Bentuk: a+(n-1)×d = 3+(n-1)×2 = 2n+1.",
  },
  {
    id: 15,
    question: `Sebuah bentuk dengan sisi:
Segitiga = 3 sisi, Persegi = 4 sisi, Pentagon = 5 sisi, Heksagon = 6 sisi.
Jumlah sisi dari Decagon (10 sisi) + Oktagon (8 sisi) = ?`,
    options: { A: "16", B: "17", C: "18", D: "19", E: "20" },
    answer: "C",
    explanation: "Decagon = 10 sisi, Oktagon = 8 sisi. 10+8=18.",
    trick: "Hafalkan nama bentuk geometri: Tri=3, Quad=4, Penta=5, Hexa=6, Hepta=7, Octa=8, Nona=9, Deca=10.",
  },
  {
    id: 16,
    question: `Diagram Venn: 
- Kelompok A (gemar baca) = 20 orang
- Kelompok B (gemar olahraga) = 15 orang
- Keduanya (A∩B) = 8 orang
Berapa total orang yang gemar setidaknya satu aktivitas?`,
    options: { A: "27", B: "28", C: "35", D: "43", E: "30" },
    answer: "A",
    explanation: "|A∪B| = |A|+|B|-|A∩B| = 20+15-8 = 27.",
    trick: "Rumus Venn 2 kelompok: A∪B = A+B-A∩B. Selalu kurangi irisan agar tidak dihitung dua kali.",
  },
  {
    id: 17,
    question: `Jalur transportasi: A→B→C→D→A membentuk lingkaran.
Jika berangkat dari A ke arah kanan, setelah melewati 7 halte, berada di mana?
(Urutan: A=1, B=2, C=3, D=4, lalu kembali ke A=5, B=6, ...)`,
    options: { A: "A", B: "B", C: "C", D: "D", E: "Tidak dapat ditentukan" },
    answer: "C",
    explanation: "Siklus 4 halte. Halte ke-7: 7 mod 4 = 3. Posisi 3 = C.",
    trick: "Soal siklus melingkar: gunakan modulo. k mod N memberikan posisi dalam siklus.",
  },
  {
    id: 18,
    question: `Perhatikan pola gambar:
● ○ ● ○ ●
○ ● ○ ● ○
● ○ ● ○ ●

Ini adalah papan catur 5×3. Pojok kiri atas = ●.
Posisi baris ke-2, kolom ke-4 adalah...`,
    options: { A: "●", B: "○", C: "Bisa keduanya", D: "Kosong", E: "Tidak dapat ditentukan" },
    answer: "A",
    explanation: "Posisi (baris, kolom): genap+genap=●, ganjil+ganjil=●, campuran=○. Baris 2 kolom 4: 2+4=6 (genap)=○. Tapi dari pola di atas: baris 2, kolom 4 = ●. Cek langsung dari tabel.",
    trick: "Baca langsung dari pola. Baris 2: ○●○●○. Kolom 4 dari baris 2 = ●.",
  },
  {
    id: 19,
    question: `Analogi gambar:
Bujur sangkar dengan 4 sudut → memiliki diagonal 2
Pentagon dengan 5 sudut → memiliki diagonal 5
Heksagon dengan 6 sudut → memiliki diagonal ?`,
    options: { A: "6", B: "7", C: "8", D: "9", E: "10" },
    answer: "D",
    explanation: "Rumus diagonal: n(n-3)/2. Untuk n=6: 6(6-3)/2 = 6×3/2 = 9.",
    trick: "Diagonal poligon = n(n-3)/2. Square(4)=2, Pentagon(5)=5, Hexagon(6)=9, Heptagon(7)=14.",
  },
  {
    id: 20,
    question: `Perhatikan pola busur/jam:
Jam 12:00 → jarum panjang di atas (↑)
Jam 12:15 → jarum panjang di kanan (→)
Jam 12:30 → jarum panjang di bawah (↓)
Jam 12:45 → jarum panjang di kiri (←)
Jam 13:00 → jarum panjang di...?`,
    options: { A: "↑ (atas)", B: "→ (kanan)", C: "↓ (bawah)", D: "← (kiri)", E: "Diagonal kanan atas" },
    answer: "A",
    explanation: "Siklus 60 menit. Jam 13:00 = 60 menit setelah 12:00 → kembali ke atas (↑).",
    trick: "Jarum menit berputar penuh tiap 60 menit. 13:00 = 12:00 + 60 menit = posisi yang sama.",
  },
  {
    id: 21,
    question: `Pola angka dalam bentuk X:
   2
 4   6
   8
 10  12
   14
Angka ke-9 dalam urutan baca kiri ke kanan, atas ke bawah adalah...`,
    options: { A: "14", B: "16", C: "18", D: "20", E: "22" },
    answer: "C",
    explanation: "Urutan baca: 2,4,6,8,10,12,14,16,18. Angka ke-9 = 18.",
    trick: "Pola deret genap: 2,4,6,8,... Angka ke-n = 2n. Angka ke-9 = 2×9 = 18.",
  },
  {
    id: 22,
    question: `Bayangan cermin vertikal (sumbu y):
Titik asli: (3, 4)
Bayangannya adalah...`,
    options: { A: "(3, -4)", B: "(-3, 4)", C: "(-3, -4)", D: "(4, 3)", E: "(-4, -3)" },
    answer: "B",
    explanation: "Refleksi terhadap sumbu y (cermin vertikal): (x, y) → (-x, y). Maka (3,4) → (-3, 4).",
    trick: "Cermin vertikal (sumbu-y): balik tanda x. Cermin horizontal (sumbu-x): balik tanda y.",
  },
  {
    id: 23,
    question: `Perhatikan tabel:
┌────┬────┐
│  3 │  5 │
│  7 │  ? │
└────┴────┘
Pola: angka kanan = angka kiri × 2 - 1. Nilai ? adalah...`,
    options: { A: "11", B: "12", C: "13", D: "14", E: "15" },
    answer: "C",
    explanation: "Pola ×2-1: 3×2-1=5 (benar untuk baris 1). 7×2-1=13.",
    trick: "Temukan pola dengan uji operasi sederhana: ×2, ÷2, +n, -n, ×n+/-k. Verifikasi dengan baris yang diketahui.",
  },
  {
    id: 24,
    question: `Perhatikan urutan bentuk:
▲ ■ ● ▲ ■ ● ▲ ■ ●
Bentuk ke-17 adalah...`,
    options: { A: "▲", B: "■", C: "●", D: "▷", E: "◆" },
    answer: "B",
    explanation: "Siklus 3: ▲=1,■=2,●=3. 17 mod 3 = 2. Posisi 2 = ■.",
    trick: "Modulo adalah kunci. 17÷3 = 5 sisa 2 → elemen ke-2 dalam siklus = ■.",
  },
  {
    id: 25,
    question: `Perhatikan pola matriks:
┌────┬────┬────┐
│  1 │  3 │  5 │
├────┼────┼────┤
│  7 │  9 │ 11 │
├────┼────┼────┤
│ 13 │ 15 │  ? │
└────┴────┴────┘
Nilai ? adalah...`,
    options: { A: "16", B: "17", C: "18", D: "19", E: "20" },
    answer: "B",
    explanation: "Pola: bilangan ganjil berurutan 1,3,5,7,9,11,13,15,17. Nilai ? = 17.",
    trick: "Baca matriks baris demi baris dari kiri ke kanan, atas ke bawah. Cari polanya secara linear.",
  },
];

module.exports = subtest4;
