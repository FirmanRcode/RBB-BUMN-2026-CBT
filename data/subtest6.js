// Sub-Tes 6: Tes Wawasan Kebangsaan (TWK) - 10 soal (10 menit)
const subtest6 = [
  {
    id: 1,
    question: "Pancasila sebagai dasar negara Republik Indonesia disahkan oleh Panitia Persiapan Kemerdekaan Indonesia (PPKI) pada tanggal...",
    options: {
      A: "17 Agustus 1945",
      B: "18 Agustus 1945",
      C: "1 Juni 1945",
      D: "22 Juni 1945",
      E: "19 Agustus 1945"
    },
    answer: "B",
    explanation: "Pancasila disahkan sebagai dasar negara dan UUD 1945 disahkan sebagai konstitusi dalam sidang pertama PPKI pada 18 Agustus 1945.",
    trick: "Perhatikan kata 'disahkan sebagai dasar negara'. Lahir: 1 Juni, Piagam Jakarta: 22 Juni, Disahkan: 18 Agustus."
  },
  {
    id: 2,
    question: "Sikap rela berkorban demi kepentingan negara dan bangsa menunjukkan implementasi dari Pancasila sila ke...",
    options: {
      A: "Pertama",
      B: "Kedua",
      C: "Ketiga",
      D: "Keempat",
      E: "Kelima"
    },
    answer: "C",
    explanation: "Rela berkorban untuk kepentingan negara merupakan butir dari sila ke-3 (Persatuan Indonesia), yang mengutamakan kepentingan nasional di atas kepentingan pribadi/golongan.",
    trick: "Nasionalisme, rela berkorban, cinta tanah air, persatuan = Sila ke-3."
  },
  {
    id: 3,
    question: "Dalam sejarah ketatanegaraan Indonesia, konstitusi yang pernah berlaku pada periode 27 Desember 1949 sampai 17 Agustus 1950 adalah...",
    options: {
      A: "UUD 1945 periode pertama",
      B: "UUDS 1950",
      C: "Konstitusi RIS",
      D: "Amandemen UUD 1945",
      E: "Dekrit Presiden 1959"
    },
    answer: "C",
    explanation: "Konstitusi Republik Indonesia Serikat (RIS) berlaku sejak 27 Desember 1949 (pasca KMB) hingga pembubarannya pada 17 Agustus 1950.",
    trick: "Hafalkan periode konstitusi: 45 awal -> RIS (49-50) -> UUDS (50-59) -> 45 kembali (59-skrg)."
  },
  {
    id: 4,
    question: "Tokoh kemerdekaan yang merumuskan Piagam Jakarta (Jakarta Charter) yang menjadi cikal bakal Pembukaan UUD 1945 berjumlah...",
    options: {
      A: "7 orang (Panitia Tujuh)",
      B: "9 orang (Panitia Sembilan)",
      C: "11 orang",
      D: "17 orang",
      E: "21 orang"
    },
    answer: "B",
    explanation: "Panitia Sembilan yang dibentuk oleh BPUPKI merumuskan Piagam Jakarta pada 22 Juni 1945.",
    trick: "Piagam Jakarta selalu identik dengan Panitia Sembilan. Diingat!"
  },
  {
    id: 5,
    question: "Sistem pemerintahan dimana menteri-menteri bertanggung jawab kepada parlemen (DPR), bukan kepada Presiden, disebut sistem pemerintahan...",
    options: {
      A: "Presidensial",
      B: "Monarki Konstitusional",
      C: "Parlementer",
      D: "Serikat/Federal",
      E: "Oligarki"
    },
    answer: "C",
    explanation: "Dalam sistem parlementer, kekuasaan eksekutif (kabinet/menteri) bertanggung jawab kepada legislatif (parlemen).",
    trick: "Tanggung jawab ke parlemen = Parlementer. Tanggung jawab ke Presiden = Presidensial."
  },
  {
    id: 6,
    question: "Hubungan antara Pemerintah Pusat dan Daerah di Indonesia dalam bingkai otonomi daerah diatur dalam UUD 1945 Pasal...",
    options: {
      A: "Pasal 1",
      B: "Pasal 18",
      C: "Pasal 27",
      D: "Pasal 29",
      E: "Pasal 33"
    },
    answer: "B",
    explanation: "Pasal 18 UUD 1945 mengatur tentang pemerintahan daerah, termasuk provinsi, kabupaten, dan kota, serta asas otonomi.",
    trick: "Hafalan pasal vital: 18=Pemda, 27=HAM Warga, 29=Agama, 33=Ekonomi."
  },
  {
    id: 7,
    question: "Tujuan nasional bangsa Indonesia secara eksplisit tercantum dalam Pembukaan UUD 1945 alinea ke...",
    options: {
      A: "Satu",
      B: "Dua",
      C: "Tiga",
      D: "Empat",
      E: "Bukan di Pembukaan, tapi di Batang Tubuh"
    },
    answer: "D",
    explanation: "Alinea keempat mumpunyai muatan: Tujuan nasional, dasar falsafah Pancasila, dan konstitusi dasar (UUD).",
    trick: "Alinea 4 memuat: Tujuan (melindungi segenap, dll), Pancasila, dan bentuk negara Republik."
  },
  {
    id: 8,
    question: "Paham kebangsaan yang menganggap bangsa sendiri unggul secara berlebihan sambil merendahkan bangsa lain disebut...",
    options: {
      A: "Patriotisme",
      B: "Bela Negara",
      C: "Chauvinisme",
      D: "Pluralisme",
      E: "Etnosentrisme"
    },
    answer: "C",
    explanation: "Chauvinisme adalah bentuk nasionalisme ekstrem yang mengagungkan bangsa sendiri dan merendahkan bangsa lain (nasionalisme sempit).",
    trick: "Cinta berlebihan/merendahkan bangsa lain = Chauvinisme."
  },
  {
    id: 9,
    question: "Bhinneka Tunggal Ika diambil dari kitab Sutasoma karangan...",
    options: {
      A: "Mpu Prapanca",
      B: "Mpu Sedah",
      C: "Mpu Panuluh",
      D: "Mpu Tantular",
      E: "Mpu Kanwa"
    },
    answer: "D",
    explanation: "Bhinneka Tunggal Ika tertulis dalam Kitab Sutasoma karya Mpu Tantular pada masa Kerajaan Majapahit.",
    trick: "Sutasoma = Tantular. Negarakertagama = Prapanca."
  },
  {
    id: 10,
    question: "Lembaga negara yang berwenang menguji undang-undang (UU) terhadap Undang-Undang Dasar (UUD) adalah...",
    options: {
      A: "Mahkamah Agung (MA)",
      B: "Komisi Yudisial (KY)",
      C: "Mahkamah Konstitusi (MK)",
      D: "DPR",
      E: "MPR"
    },
    answer: "C",
    explanation: "MK berwenang menguji UU terhadap UUD (Judicial Review). MA menguji peraturan di bawah UU terhadap UU.",
    trick: "Review UU vs UUD = MK. Review Peraturan di Bawah UU vs UU = MA."
  }
];

module.exports = subtest6;
