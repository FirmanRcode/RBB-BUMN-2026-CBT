// Sub-Tes 8: Learning Agility Test - 50 soal (30 menit)
// Mengukur kemampuan belajar hal baru, resiliensi, dan adaptasi.
// Format sering berupa skala sikap (Sangat Setuju - Sangat Tidak Setuju) atau pilihan perilaku.
// Dalam simulasi ini, kita berikan 10 soal dengan format best response (Skor 5-4-3-2-1, namun agar simpel, kita tetapkan 1 jawaban BENAR utama yang bernilai penuh)

const subtest8 = [
  {
    id: 1,
    question: "Ketika Anda menghadapi masalah teknis yang belum pernah Anda temui sebelumnya dalam pekerjaan, reaksi pertama Anda adalah...",
    options: {
      A: "Menunggu atasan memberikan instruksi karena takut salah melangkah.",
      B: "Mencari informasi di internet atau manual book untuk mencari tahu solusinya sambil menganalisis penyebabnya.",
      C: "Seketika merasa cemas dan stres karena merasa tidak mampu.",
      D: "Meminta rekan kerja yang lebih senior untuk mengerjakannya.",
      E: "Mencoba berbagai cara secara acak sampai berhasil tanpa strategi."
    },
    answer: "B",
    explanation: "Learning Agility menilai kemampuan menemukan solusi secara mandiri dan cepat pada situasi baru (Mental Agility). Mencari informasi dan menganalisis adalah respons terbaik.",
    trick: "Pilih opsi PROAKTIF MENCARI TAHU. Jangan pasrah, jangan asal coba tanpa strategi, dan jangan langsung lempar tanggung jawab."
  },
  {
    id: 2,
    question: "Anda ditugaskan memimpin proyek dengan metode kerja *Agile* yang benar-benar baru bagi Anda dan tim. Apa yang Anda lakukan?",
    options: {
      A: "Mempelajari fundamental metode tersebut secara cepat dan perlahan menerapkannya sambil mengevaluasi progres tim.",
      B: "Menolak tugas tersebut dan meminta proyek dengan metode yang sudah biasa digunakan.",
      C: "Mengubah metode *Agile* tersebut agar lebih mirip dengan metode lama supaya tim nyaman.",
      D: "Memaksakan metode *Agile* dengan ketat sejak hari pertama dan menghukum tim yang tidak patuh.",
      E: "Mengerjakan seluruh tanggung jawab manajerial sendiri karena tim belum paham."
    },
    answer: "A",
    explanation: "Change Agility mencakup kesediaan memimpin perubahan, bereksperimen, dan mengevaluasi. Mempelajari dan menerapkannya sambil evaluasi adalah sikap learning agility yang kuat.",
    trick: "Pilih MEMPELAJARI HAL BARU + PENERAPAN BERTAHAP + EVALUASI (Iterative learning)."
  },
  {
    id: 3,
    question: "Dalam sebuah meeting evaluasi, atasan memberikan kritik tajam terhadap ide yang baru saja Anda presentasikan dengan penuh semangat. Respons Anda?",
    options: {
      A: "Membela diri dengan keras karena Anda merasa ide itu sudah sempurna.",
      B: "Menerima kritik tersebut dengan lapang dada, mencatat poin kelemahannya, dan menggunakan itu untuk memperbaiki ide Anda.",
      C: "Merasa tersinggung dan diam sepanjang sisa meeting.",
      D: "Menyetujui semua kritiknya dan langsung membuang ide tersebut tanpa dianalisis lebih lanjut.",
      E: "Menyamarkan kekecewaan walau dalam hati menyalahkan atasan yang tidak paham ide milenial."
    },
    answer: "B",
    explanation: "Self-Awareness dan Feedback Responsiveness. Learning agility tinggi ditunjukkan dari kemampuan menerima feedback negatif (resilience) dan mengubahnya menjadi insight produktif.",
    trick: "Kritik = DATA UNTUK PERBAIKAN. Jangan defensif, buang ego, dan jadikan kritik sebagai ruang belajar."
  },
  {
    id: 4,
    question: "Perusahaan Anda memindahkan Anda ke departemen baru yang budaya kerjanya jauh lebih cepat dan minim panduan tertulis (SOP) dibandingkan departemen lama Anda. Anda akan...",
    options: {
      A: "Secara aktif membangun relasi dengan rekan baru untuk memahami cara kerja informal dan proaktif bertanya jika ada yang tidak jelas.",
      B: "Protes ke HRD karena merasa dijebak ke lingkungan yang tidak terstruktur.",
      C: "Bekerja pelan-pelan seperti di departemen lama dan menunggu instruksi detail.",
      D: "Menyusun SOP sendiri secara kaku dan memaksa orang lain mengikutinya agar Anda nyaman.",
      E: "Berusaha tampil hebat dengan mengerjakan semuanya sendiri agar diakui."
    },
    answer: "A",
    explanation: "People Agility dan Change Agility. Di lingkungan ambigu, kemampuan membangun network untuk belajar informal dan bertanya proaktif sangat penting.",
    trick: "Lingkungan baru/ambigu = TANYA SEKITAR, BANGUN NETWORK, OBSERVASI. Jangan mendirikan tembok."
  },
  {
    id: 5,
    question: "Anda mengalami kegagalan besar dalam proyek akibat kesalahan strategi yang Anda buat. Apa tindakan lanjutan Anda?",
    options: {
      A: "Menutup-nutupi detail kegagalan agar karir tidak hancur.",
      B: "Menyedihkan kegagalan berhari-hari sebelum berani mengambil proyek baru.",
      C: "Menulis laporan 'post-mortem' untuk menganalisis letak kesalahan, membagikan pelajarannya ke tim, lalu move on.",
      D: "Menyalahkan keadaan ekonomi atau vendor luar agar beban kesalahan terbagi.",
      E: "Mengundurkan diri dari jabatan *team leader* karena merasa gagal."
    },
    answer: "C",
    explanation: "Results Agility membutuhkan resiliensi (bangkit dari kegagalan) dan memetik insight dari kegagalan untuk performa di masa depan.",
    trick: "Kegagalan = REFLEKSI/ANALISIS ROOT CAUSE -> MOVE ON. Jangan lari dari tanggung jawab."
  },
  {
    id: 6,
    question: "Sebuah tren teknologi baru muncul dan berpotensi mendisrupsi cara kerja departemen Anda dalam 2 tahun ke depan. Anda saat ini masih sibuk dengan rutinitas harian. Tindakan Anda?",
    options: {
      A: "Fokus saja pada kerjaan harian, 2 tahun masih lama.",
      B: "Menunggu perusahaan memberikan pelatihan resmi tentang teknologi tersebut.",
      C: "Menyisihkan sedikit waktu setiap minggu (misal baca artikel/video) untuk memahami dasar-dasar teknologi baru tersebut mulai sekarang.",
      D: "Panik dan menyarankan perusahaan segera memecat tim lama sebelum tren itu datang.",
      E: "Menolak teknologi baru karena Anda merasa cara manual masih mumpuni."
    },
    answer: "C",
    explanation: "Mental Agility: Rasa ingin tahu (curiosity) terhadap tren masa depan dan inisiatif belajar mandiri di tengah kesibukan.",
    trick: "Future-ready = ANTISIPATIF DAN BELAJAR MANDIRI. Sisihkan waktu untuk hal berdampak jangka panjang."
  },
  {
    id: 7,
    question: "Rekan satu tim Anda memiliki gaya kerja yang bertolak belakang dengan Anda: Anda sangat terstruktur, dia sangat spontan. Hal ini sering menimbulkan tegangan. Bagaimana Anda mengatasinya?",
    options: {
      A: "Berusaha bekerja sendiri-sendiri saja pembagian tugasnya agar tidak bergesekan.",
      B: "Mempelajari gaya kerjanya, berdiskusi terbuka mencari kompromi, dan melihat keunggulan spontanitasnya di situasi tertentu.",
      C: "Memintanya mengubah gayanya menjadi terstruktur karena itu cara profesional yang benar.",
      D: "Melaporkannya ke atasan karena menghambat produktivitas Anda.",
      E: "Mengalah sepenuhnya dan meniru gaya spontannya meskipun banyak *deadline* terlewat."
    },
    answer: "B",
    explanation: "People Agility: Mampu bekerja dengan beragam tipe orang, mencari _win-win solution_, dan melihat keragaman sebagai kekuatan.",
    trick: "Konflik interpersonal = DISKUSI TERBUKA, CARI TITIK TEMU, MANFAATKAN KELEBIHAN MASING-MASING."
  },
  {
    id: 8,
    question: "Anda sering merasa bosan jika mengerjakan pekerjaan rutinitas (repetitive) untuk waktu yang lama. Atasan baru saja memberikan tugas rutinitas berat untuk 3 bulan ke depan. Anda akan...",
    options: {
      A: "Mengerjakannya dengan asal-asalan karena tidak sesuai minat.",
      B: "Meminta atasan menugaskannya ke anak magang.",
      C: "Menerima tugas tersebut, namun mencoba mencari cara otomatisasi, membuat _template_, atau *shortcut* agar prosesnya lebih cepat dan menarik.",
      D: "Mengeluh setiap hari di kantor agar atasan segera memindahkannya.",
      E: "Mengerjakan secara konvensional sambil menghitung hari sampai tugas itu selesai."
    },
    answer: "C",
    explanation: "Mental Agility & Results Agility: Mengubah situasi membosankan menjadi peluang inovasi (process improvement).",
    trick: "Tugas repetitif = CARI CARA INOVATIF (Otomatisasi/Efisienisasi), bukan dihindari."
  },
  {
    id: 9,
    question: "Peran Anda di perusahaan mengalami perubahan mendadak akibat restrukturisasi. 50% deskripsi kerja Anda yang lama hilang, digantikan tanggung jawab baru yang asing. Sikap Anda:",
    options: {
      A: "Kecewa karena keahlian lama Anda tidak dihargai lagi.",
      B: "Menganggap ini sebagai tantangan karir baru, mengidentifikasi apa yang perlu dipelajari, dan meminta bimbingan.",
      C: "Mengancam akan *resign* jika tidak dikembalikan ke posisi semula.",
      D: "Hanya fokus pada sisa 50% pekerjaan lama dan mengabaikan pekerjaan baru.",
      E: "Mencoba membujuk atasan bahwa Anda lebih baik di pekerjaan lama."
    },
    answer: "B",
    explanation: "Change Agility: Melihat perubahan sebagai peluang perkembangan diri dan meresponsnya secara positif (Growth Mindset).",
    trick: "Perubahan Job Desk = GROWTH MINDSET, KESEMPATAN BELAJAR BARU."
  },
  {
    id: 10,
    question: "Anda menyadari bahwa *skill* industri yang selama ini Anda banggakan perlahan mulai kedaluwarsa. Apa yang Anda lakukan?",
    options: {
      A: "Mengingat masa kejayaan *skill* tersebut dan berharap masih ada perusahaan yang mencarinya.",
      B: "Secara proaktif melakukan *unlearn* (meninggalkan praktik lawas) dan *relearn* (mempelajari keahlian baru) agar tetap relevan di industri.",
      C: "Menyembunyikan fakta tersebut dari HRD agar tidak dipecat.",
      D: "Merasa sudah terlalu tua/senior untuk belajar *skill* dari nol lagi.",
      E: "Mempelajari keahlian baru hanya jika dipaksa oleh KPI atasan."
    },
    answer: "B",
    explanation: "Mental Agility: Kemampuan *unlearn* (melupakan cara lama yang tidak relevan) sama pentingnya dengan *learn*. Ini adalah puncak dari Learning Agility.",
    trick: "Pilih opsi UNLEARN & RELEARN. Dunia berubah, kita yang harus menyesuaikan diri (Proaktif)."
  },
  {
    id: 11,
    question: "Perusahaan Anda memperkenalkan perangkat lunak baru yang kompleks dan wajib digunakan minggu depan. Anda belum pernah menggunakannya. Apa langkah pertama Anda?",
    options: {
      A: "Mencoba login dan mengeksplorasi fitur-fiturnya secara mandiri, lalu mencari tutorial jika terjebak.",
      B: "Menunggu diundang sesi pelatihan resmi dari IT.",
      C: "Meminta staf junior untuk mempelajari seluk-beluknya lalu mengajarkannya kepada Anda.",
      D: "Mengomel tentang betapa seringnya perusahaan mengganti sistem.",
      E: "Tetap menggunakan perangkat lunak lama sampai secara teknis tidak bisa lagi digunakan."
    },
    answer: "A",
    explanation: "Mental Agility: Menunjukkan inisiatif belajar otodidak (self-directed learning) dan rasa ingin tahu saat menghadapi teknologi baru.",
    trick: "Software baru = EKSPLORASI MANDIRI / COBA LANGSUNG (Proaktif)."
  },
  {
    id: 12,
    question: "Anda dipindahkan ke sebuah tim di mana mayoritas anggotanya jauh lebih muda dan cara kerjanya lebih santai/informal dibanding Anda. Anda merasa kurang cocok di awal. Bagaimana Anda menyikapinya?",
    options: {
      A: "Tetap dengan gaya kaku Anda dan menuntut mereka bersikap lebih formal.",
      B: "Membatasi interaksi dengan mereka hanya sebatas urusan mutlak pekerjaan.",
      C: "Mengamati dinamika mereka, mencoba gaya komunikasi santai namun tetap profesional, dan mengambil pelajaran dari cara kerja cepat mereka.",
      D: "Meminta atasan memindahkan Anda ke tim yang isinya seumuran.",
      E: "Selalu menasihati mereka setiap hari agar berperilaku layaknya era Anda dulu."
    },
    answer: "C",
    explanation: "People Agility: Mampu beradaptasi dengan berbagai jenis profil, umur, dan dinamika budaya kerja tanpa kehilangan profesionalisme.",
    trick: "Beda umur/budaya = OBSERVASI & ADAPTASI GAYA KOMUNIKASI (Toleransi & Flexibility)."
  },
  {
    id: 13,
    question: "Proyek inovasi yang Anda gagas dan kerjakan selama 3 bulan dibatalkan sepihak oleh direksi karena perubahan arah bisnis. Perasaan Anda saat ini?",
    options: {
      A: "Sangat terpukul dan berjanji tidak akan mau mencoba ide inovasi lagi.",
      B: "Merasa wajar, dan segera melakukan refleksi tentang apa ilmu baru yang tetap berguna untuk karier Anda walau proyek batal.",
      C: "Marah dan mencari tahu siapa direksi yang membatalkannya.",
      D: "Diam saja namun secara perlahan mencari pekerjaan di tempat lain.",
      E: "Memprovokasi tim agar ikut protes terhadap keputusan direksi."
    },
    answer: "B",
    explanation: "Results Agility: Menjaga resiliensi setelah kegagalan mendadak dan memanen hikmah (*harvesting learning*) dari sebuah kegagalan/pembatalan.",
    trick: "Proyek dibatalkan = RELAKAN DAN AMBIL ILMUNYA (Resiliensi + Growth Mindset)."
  },
  {
    id: 14,
    question: "Anda menghadapi kebuntuan (stuck) pada sebuah masalah teknis operasional. Anda sudah mencoba 3 pendekatan yang diajarkan dalam manual, tetapi tetap gagal. Tindakan Anda selanjutnya?",
    options: {
      A: "Menunda pekerjaan itu sampai tiba-tiba muncul inspirasi.",
      B: "Mengerjakan ulang ke-3 langkah tersebut berkali-kali berharap hasilnya beda.",
      C: "Menulis laporan bahwa masalah tersebut Mustahil diselesaikan.",
      D: "Mulai bertanya ke kolega dari divisi lain, mencari tahu di forum online, atau mencari perspektif di luar kebiasaan standar.",
      E: "Melemparkan masalah ini ke atasan karena Anda sudah melakukan sesuai manual."
    },
    answer: "D",
    explanation: "Mental Agility: Berpikir di luar kotak (*Out of the box/Lateral thinking*) ketika metode konvensional gagal.",
    trick: "Stuck/Buntu = CARI PERSPEKTIF BARU (Luar divisi/Forum/Out of box)."
  },
  {
    id: 15,
    question: "Saat mendengarkan paparan dari seorang ahli, Anda merasa ada beberapa hal yang tidak berjalan sesuai dengan keyakinan lama yang terbukti sukses di industri Anda. Anda akan...",
    options: {
      A: "Menutup telinga karena cara Anda sudah terbukti paling benar selama 10 tahun.",
      B: "Langsung memotong dan mendebat ahli tersebut di tengah presentasinya.",
      C: "Mendengarkan dengan pikiran terbuka, membuat catatan, dan bersedia menguji coba hipotesis baru tersebut di skala kecil nanti.",
      D: "Manut-manut saja meskipun tidak berniat mengaplikasikannya.",
      E: "Mencari kelemahan presentasinya untuk menjatuhkannya saat sesi QnA."
    },
    answer: "C",
    explanation: "Change Agility: Keterbukaan terhadap ide baru (Open-mindedness) dan keberanian menguji atau bereksperimen.",
    trick: "Ide dari Ahli (Beda prinsip) = DENGARKAN DENGAN TERBUKA & UJI COBA (Experimental Mindset)."
  },
  {
    id: 16,
    question: "Di era AI (Artificial Intelligence), banyak pekerja yang takut tergantikan. Bagaimana pandangan dan tindakan riil Anda terhadap hal ini?",
    options: {
      A: "Turut menyebarkan bahaya AI dan menghindari penggunaannya di kantor.",
      B: "Menganggap pekerjaan saya terlalu kompleks sehingga tidak mungkin digantikan AI.",
      C: "Mulai mempelajari *prompt engineering* dasar dan mencari jalan bagaimana AI justru bisa mengotomatisasi bagian membosankan dari kerjaan saya.",
      D: "Pasrah pada keadaan dan menunggu kebijakan pemerintah untuk membatasi AI.",
      E: "Memecat AI dari diskusi karena itu hanya tren sesaat."
    },
    answer: "C",
    explanation: "Mental Agility & Change Agility: AI dipandang sebagai *co-pilot*, bukan kompetitor. Memiliki kepekaan teknologi (*Tech-saviness*).",
    trick: "Tren Kecerdasan Buatan (AI) = PELAJARI & JADIKAN ALAT BANTU (Embrace early)."
  },
  {
    id: 17,
    question: "Atasan menugaskan sebuah pelaporan dengan format pelaporan yang menurut Anda rancunya minta ampun, sangat konvensional dan bertele-tele. Anda sudah pernah melihat format *dashboard* interaktif yang jauh lebih baik.",
    options: {
      A: "Langsung menggunakan *dashboard* interaktif tersebut saat lapor ke atasan tanpa memberitahunya.",
      B: "Mengirim format lawas sesuai permintaan, namun melampirkan versi *dashboard* mini sebagai opsi tambahan, lalu menanyakan pendapatnya.",
      C: "Mengerjakan pelaporan format konvensional secepatnya dan melupakan soal *dashboard*.",
      D: "Mengkritik atasan bahwa formatnya sudah tidak zaman dan memaksa pakai *dashboard*.",
      E: "Beralasan data tidak bisa diambil karena format lama merusak tatanan data."
    },
    answer: "B",
    explanation: "Change Agility: Cara terbaik me- *manage up* (mengurus ekspektasi atasan) tanpa melukai egonya, sekaligus menawarkan inovasi.",
    trick: "Ingin mengubah cara Atasan = BERIKAN YANG DIMINTA + LAMPIRKAN OPSI INOVASINYA SEBAGAI ALTERNATIF."
  },
  {
    id: 18,
    question: "Anda merasa sudah menjadi ahlinya di bidang Anda, ketika tiba-tiba perusahaan membawa konsultan ahli dari luar yang merekomendasikan banyak perombakan sistem di area pengerjaan Anda. Anda bereaksi dengan...",
    options: {
      A: "Merasa tersinggung karena perusahaan menganggap Anda kurang kompeten.",
      B: "Mencari celah pada setiap rekomendasi konsultan agar gagasannya gugur.",
      C: "Meresponsnya dengan *curiosity*, menjadwalkan diskusi santai dengannya untuk belajar mengapa ia merekomendasikan hal tersebut.",
      D: "Secara pasif mengikuti arahannya tanpa memberinya masukan situasional lokal.",
      E: "Mengancam pindah bagian karena otonomi dikurangi."
    },
    answer: "C",
    explanation: "People Agility & Mental Agility: Membuang rasa senioritas demi kesempatan mengeksplorasi wawasan konsultan (Growth Mindset).",
    trick: "Pakar/Konsultan luar datang = JANGAN TERSINGGUNG, JADIKAN SUMBER BELAJAR BARU."
  },
  {
    id: 19,
    question: "Tim sedang dihadapkan pada target akhir bulan dan kondisinya 'chaotic', informasi sangat samar dan atasan sedang cuti. Apa yang Anda lakukan?",
    options: {
      A: "Menunggu instruksi jelas karena Anda tidak mau berbuat salah saat cuti atasan.",
      B: "Mengambil inisiatif mengoordinasikan teman satu tim, membedah prioritas berdasarkan info sekecil apapun, dan membagikan tugas.",
      C: "Mengerjakan bagian Anda saja yang sudah jelas, yang lain biar terurus sendiri.",
      D: "Membatalkan semua eksekusi dan menjadwalkan ulang bulan depan.",
      E: "Terus menelepon atasan yang sedang cuti sampai dia menjawab untuk memutuskan."
    },
    answer: "B",
    explanation: "Results Agility: Menunjukkan kepemimpinan di situasi ambigu/chaotic (Managing Ambiguity).",
    trick: "Situasi Kacau/Ambigu/Tanpa Pemimpin = AMBIL INISIATIF KERAS, BAGI PRIORITAS, TAKE CHARGE."
  },
  {
    id: 20,
    question: "Anda sadar Anda sering emosional dan reaktif ketika mendapat *feedback* mendadak. Anda ingin memperbaiki aspek (self-awareness) ini. Langkah konkrit Anda?",
    options: {
      A: "Meminta orang lain untuk mulai sekarang memberikan *feedback* lewat surat saja agar Anda tidak reaktif spontan.",
      B: "Berusaha meyakinkan diri bahwa reaksi emosional itu wajar bagi manusia asalkan tidak ada kontak fisik.",
      C: "Sengaja meminta *feedback* dari kolega terpercaya, berlatih jeda napas 3 detik sebelum menjawab, agar Anda terbiasa mengelola respon.",
      D: "Menghindari segala macam rapat evaluasi.",
      E: "Hanya meminta *feedback* positif dari teman."
    },
    answer: "C",
    explanation: "Self-Awareness: Mengetahui kelemahan emosional, mengatur strategi jeda (*pause*), dan sengaja berlatih meminta *feedback*.",
    trick: "Tahu diri kurang toleran ke kritik = MINTA KRITIK SECARA SENGAJA UNTUK BERLATIH (Exposure)."
  },
  {
    id: 21,
    question: "Anda ditugaskan mendalami *market* di regional baru yang sama sekali berbeda secara tren konsumsi. Informasi data sekunder yang ada sangat minim. Tindakan Anda?",
    options: {
      A: "Menolak karena informasinya tidak lengkap.",
      B: "Menggunakan asumsi dari *market* lama karena pasti sifat manusia mirip-mirip.",
      C: "Terjun langsung (*go-to-gemba*) atau mewawancari sampel pelanggan lokal untuk menemukan wawasan mendasar sebelum menyusun strategi.",
      D: "Berhenti dan meminta dana besar untuk menyewa lembaga riset pasar termahal.",
      E: "Meluncurkan produk asal-asalan untuk _testing the water_ besar-besaran."
    },
    answer: "C",
    explanation: "Mental Agility: Ketangkasan mental saat data minim adalah dengan mencari realitas sesungguhnya secara pragmatis dan mandiri.",
    trick: "Data/Info minim di cabang baru = TERJUN LANGSUNG / WAWANCARA SAMPEL (Cepat & Praktis)."
  },
  {
    id: 22,
    question: "Setiap selesai fase kerja besar (*milestone*), apa rutinitas yang terbiasa Anda lakukan?",
    options: {
      A: "Mengadakan perayaan dan meliburkan tim berhari-hari.",
      B: "Segera melompat ke *milestone* berikutnya agar terlihat sibuk di mata direktur.",
      C: "Menulis status kesuksesan di platform profesional seperti *LinkedIn*.",
      D: "Melakukan sesi 'Lesson Learned' singkat bersama tim untuk mencatat hal apa yang sangat efektif dan hal apa yang jadi *bottleneck*.",
      E: "Membuat laporan 100 lembar untuk mendokumentasikan segalanya agar aman secara audit."
    },
    answer: "D",
    explanation: "Results Agility: Menghargai proses retrospektif/evaluasi 'Lesson Learned' agar kesuksesan/kegagalan berikutnya bisa dinavigasi lebih baik.",
    trick: "Selesai sebuah Milestone = LAKUKAN EVALUASI 'LESSON LEARNED' (Retrospektif)."
  },
  {
    id: 23,
    question: "Sebagai seorang Generalis, Anda biasa memegang berbagai departemen. Suatu hari, perusahaan memutuskan spesialisasi mendalam dan menunjuk Anda mengerucut di satu bidang *niche* (sangat spesifik). Tanggapan karir Anda:",
    options: {
      A: "Merasa kehilangan kekuasaan yang sebelumnya terbentang luas.",
      B: "Menolak tawaran itu karena merasa lebih hebat jika tahu segalanya sedikit demi sedikit.",
      C: "Menelaah dan melihat arah karir *niche* ini, serta segera meluangkan waktu mendalami skill level pakar (deep dive) di bidang spesifik tersebut.",
      D: "Keluar lalu mencari perusahaan berskala kecil yang masih butuh generalis.",
      E: "Mengerjakan tugas *niche* tersebut namun secara diam-diam campur tangan di divisi lama."
    },
    answer: "C",
    explanation: "Change Agility: Fleksibilitas mengubah spektrum kompetensi (Generalis -> Spesialis) jika itu arah adaptasi yang diminta perusahaan.",
    trick: "Perubahan jalur karier (Rotasi/Spesialisasi) = ADAPTASI DAN LAKUKAN DEEP DIVE SKILL BARU."
  },
  {
    id: 24,
    question: "Salah satu inisiatif bisnis Anda mendulang omset tinggi berturut-turut. Anda merasa di puncak. Apa yang Anda waspadai?",
    options: {
      A: "Mewaspadai rekan kerja yang iri akan prestasi saya.",
      B: "Rasa puas diri berlebihan (*complacency*) dari saya maupun tim yang akan membuat kami malas mencari terobosan selanjutnya.",
      C: "Mewaspadai target perusahaan yang bakal ditertinggikan tahun depan.",
      D: "Mewaspadai tidak ada turunnya bonus dari HRD atas keringat saya.",
      E: "Tidak perlu mewaspadai apapun, saatnya menuai hasil bersantai."
    },
    answer: "B",
    explanation: "Self-Awareness: Kesadaran bahwa *comfort zone* dan rasa puas (*complacency*) adalah musuh utama dari agilitas/kelincahan belajar.",
    trick: "Bila sedang sukses besar = WASPADA SIKAP CEPAT PUAS (Complacency)."
  },
  {
    id: 25,
    question: "Pertanyaan yang paling sering muncul di kepala Anda saat menemui kebijakan operasional yang terkesan lambat dan *bureaucratic* di kantor?",
    options: {
      A: "Siapa sih yang bikin aturan merepotkan ini di masa lalu?",
      B: "Gimana saya bermanuver di bawah radar agar pekerjaan saya cepat selesai?",
      C: "Apakah ada ruang untuk men-simplifikasi alur proses ini tanpa menghilangkan esensi kontrol keamanannya?",
      D: "Lebih baik saya diam, kalau atasan saya santai, buat apa saya repot?",
      E: "Bagaimana cara menyindir HRD secara elegan di email bersama?"
    },
    answer: "C",
    explanation: "Mental Agility: Merupakan dorongan *Process Improvement* yang peduli pada efisiensi (simplifikasi) tanpa mengorbankan stabilitas (*control*).",
    trick: "Menghadapi Birokrasi lambat = BERPIKIR UNTUK SIMPLIFIKASI PROSES (Tanpa abai pada keamanan)."
  },
  {
    id: 26,
    question: "Seseorang memberi Anda *mentoring* yang sangat *direct* (langsung tanpa basa-basi) hingga terkesan seperti interogasi. Meski cara bahasanya tajam, substansinya berbobot. Bagaimana Anda menyikapinya?",
    options: {
      A: "Menolak *mentoring*-nya karena Anda menjunjung etika kesopanan berbahasa di atas segalanya.",
      B: "Tersakiti secara ego, meski perlahan mencoba menuliskannya di buku sebagai pengingat pahit.",
      C: "Mengabaikan gayanya yang tajam (Noise) dan mengekstraksi emas (Signal/Substansi) dari nasehat operasionalnya untuk perbaikan saya.",
      D: "Menasihati baliknya agar dia mengubah gaya bicaranya baru Anda mau mendengarkannya.",
      E: "Hanya mengambil nasihat yang disampaikan saat dia memakai bahasa halus."
    },
    answer: "C",
    explanation: "Self-Awareness & Resilience: Fokus memisahkan intonasi sang mentor (yang mungkin tajam) dari isi nasihat (yang berharga) untuk diserap (*filtering signal from noise*).",
    trick: "Dikritik dengan kasar/tajam = FILTER GAYANYA, AMBIL SUBSTANSI EMASNYA."
  },
  {
    id: 27,
    question: "Dalam diskusi *brainstorming*, ide rekan kerja yang secara logis jauh lebih masuk akal telah menggugurkan ide cemerlang Anda yang sudah Anda siapkan berhari-hari. Sikap Anda:",
    options: {
      A: "Tetap mempertahankan ide Anda menggunakan argumen asumsional.",
      B: "Mendukung ide rekan tersebut sepenuhnya secara objektif dan menyumbangkan pemikiran logis tambahan ke ide tersebut.",
      C: "Setuju pada idenya namun secara pasif duduk diam di ujung meja rapat hingga akhir.",
      D: "Memuji idenya hanya untuk mencari muka di depan pimpinan rapat.",
      E: "Mengungkit bahwa ide dia tidak orisinal."
    },
    answer: "B",
    explanation: "People Agility: Mampu membunuh ide kesayangan ('Kill your darlings') jika memang ide kolega lebih brilian dan rasional, plus ikut mengembangkannya.",
    trick: "Ide sendiri dikalahkan ide lebih masuk akal = DUKUNG SEPENUHNYA DAN TINGKATKAN IDE TEMAN (Objektif)."
  },
  {
    id: 28,
    question: "Anda menerima *assignment* (tugas) khusus ke luar negeri namun dengan peringatan masa kerjanya akan sangat *unpredictable* (tidak tentu beban kerjanya). Profil Anda:",
    options: {
      A: "Hanya akan ambil jika *benefit* luar-negerinya miliaran.",
      B: "Menolak karena saya selalu mendewakan *predictable work-life balance*.",
      C: "Mengambil peluang *assignment* tersebut karena hal *unpredictable* justru menawarkan lompatan pengalaman dan kompetensi lintas budaya secara drastis.",
      D: "Mengambilnya namun jika ternyata beban berat, langsung minta pulang di bulan kedua.",
      E: "Saya ambil asalkan bisa membawa semua asisten lama saya."
    },
    answer: "C",
    explanation: "Change Agility: Fleksibilitas dalam melihat ambiguitas (*unpredictability*) sebagai wahana pengembangan kompetensi lintas global.",
    trick: "Tugas Ambigu Luar Negeri = AMBIL DEMI PENGALAMAN DAN LOMPATAN KARIER (Seek out challenge)."
  },
  {
    id: 29,
    question: "Apa pola dominan yang Anda pakai sewaktu belajar menguasai suatu aplikasi korporat/skill berat sejak dahulu?",
    options: {
      A: "Membaca rentetan buku teori tebal sebelum sekalipun memegang praktek di lapangan.",
      B: "Belajar teori dasarnya saja malamnya, dan esok harinya terjun mempraktikkan perlahan agar tangan saya mengingat.",
      C: "Membayar orang lain yang bisa, saya fokus jadi penonton sambil memberi komentar teori.",
      D: "Melakukan modifikasi sana-sini tanpa tahu dasar sama sekali sampai alat aplikasinya rusak.",
      E: "Hanya mengambil kursus bersertifikasi mahal, menolak belajar di *YouTube*."
    },
    answer: "B",
    explanation: "Mental Agility: Pembelajaran yang seimbang (*balance*) antara kerangka konsep singkat dan praktik eksekusi langsung (*experiential learning*).",
    trick: "Metode paling *Agile* = BELAJAR TEORI SEDIKIT + LANGSUNG PRAKTIK (Hands-on Experiential Learning)."
  },
  {
    id: 30,
    question: "Akhir tahun, banyak sekali *lesson learned* yang didapat. Bagaimana cara Anda membagikan agar *Agility* ini menular secara kultural ke tim Anda?",
    options: {
      A: "Membuat dokumen Wiki setebal 100 lembar dan mengirim *link*-nya ke orang-orang lalu membiarkan mereka.",
      B: "Menyimpannya sendiri karena itu senjata rahasia *survival* saya di korporat.",
      C: "Menyelenggarakan sesi *sharing & coffee* bulanan informal yang seru, dimana semua bercerita soal kegagalan/kebodohan terbanyak secara lepas dan membedahnya asyik.",
      D: "Menyewa pelatih mahal untuk mengajari tim pelajaran itu.",
      E: "Meminta HRD membuatkan kuis wajib tutup tahun."
    },
    answer: "C",
    explanation: "People Agility & Kolaborator Aktif: Mendesain *environment* aman (*psychological safety*) untuk berbagi kegagalan secara informal namun bermakna (*Sharing Culture*).",
    trick: "Membagikan insight/lesson learned = LAKUKAN SHARING SESSION INFORMAL & PSIKOLOGIS AMAN."
  },
  {
    id: 31,
    question: "Anda mempresentasikan visi besar departemen Anda di tahun ini. Salah satu anggota tim menyela, mengkritik bahwa visi tersebut tidak realistis di lapangan. Reaksi Anda:",
    options: {
      A: "Berdebat dan membuktikan secara teori bahwa visi saya sudah diverifikasi manajemen.",
      B: "Tersinggung dan mencatat anggota tersebut ke daftar staf yang sulit diatur.",
      C: "Tersenyum dan menanyakan secara spesifik bagian mana yang menurutnya kurang realistis agar visi bisa divalidasi dengan data empiris.",
      D: "Menghentikan presentasi untuk menyelidiki maksud aslinya menyela saya.",
      E: "Langsung mengganti visi saya mengikuti apa yang dikatakannya."
    },
    answer: "C",
    explanation: "Change Agility & Self-Awareness: Bersedia memvalidasi grand vision yang dikritik staf alih-alih bersikap defensif. Kritik dari orang lapangan seringkali kaya konteks.",
    trick: "Dikritik bawahan soal Visi = BERIKAN RUANG DISKUSI, TANYA BALIK SPESIFIKNYA DENGAN POSITIF."
  },
  {
    id: 32,
    question: "Terdapat perombakan direksi. Direktur baru menghilangkan kebijakan insentif akhir tahun yang sudah jadi tradisi. Banyak rekan Anda yang berencana unjuk rasa mogok kerja. Anda akan...",
    options: {
      A: "Ikut mogok kerja demi mengamankan hak finansial yang terancam hilang.",
      B: "Memprovokasi diam-diam di belakang agar mogoknya makin besar.",
      C: "Melakukan _wait and see_, serta mecoba mengatur dialog resmi tanpa mogok kerja untuk mendengarkan visi strategis direktur baru.",
      D: "Tidak peduli dengan kondisi kantor, mulai mengirim CV ke perusahaan kompetitor.",
      E: "Marah-marah di media sosial agar kisahnya viral dan direktur dikecam."
    },
    answer: "C",
    explanation: "Results Agility: Menghindari aksi reaktif dan impulsif saat pergantian kekuasaan. Fokus pada diplomasi korporat yang rasional.",
    trick: "Perubahan kebijakan bikin heboh = JANGAN IKUT REAKTIF (Cari dialog objektif dan pahami konteks besar)."
  },
  {
    id: 33,
    question: "Seseorang memberi tahu Anda bahwa *style* presentasi Anda dinilai sangat kaku dan membosankan, berbeda dengan rekan setim Anda yang karismatik. Langkah Anda?",
    options: {
      A: "Merasa minder dan selanjutnya selalu meminta rekan tersebut yang melakukan presentasi.",
      B: "Mengabaikannya karena yang penting adalah isi presentasinya, bukan gayanya.",
      C: "Meniru gaya presentasi rekan tersebut 100% pada presentasi esok harinya.",
      D: "Mengevaluasi rekaman presentasi saya, meminta tips dari rekan karismatik tersebut, lalu melatih penyesuaian gaya saya tanpa kehilangan otentisitas.",
      E: "Langsung membeli pakaian mahal agar presentasi terlihat meyakinkan."
    },
    answer: "D",
    explanation: "Self-Awareness & Mental Agility: Keinginan mengeksplorasi kelemahan diri, lalu belajar dari kompetitor (rekan) dengan pendekatan sadar tanpa kehilangan jati diri.",
    trick: "Cara kerja kita kalah dari teman = BELAJAR DARI DIA TAPI TETAP OTENTIK."
  },
  {
    id: 34,
    question: "Sebuah unit bisnis dalam perusahaan ditutup, mengharuskan Anda melakukan PHK terhadap staf di bawah Anda. Insting *Agility* Anda memandu Anda untuk...",
    options: {
      A: "Mengirim email massal pemberitahuan pemecatan dari jarak jauh agar menghindari drama emosi.",
      B: "Melemparkan eksekusi keputusan tersebut murni kepada tim HR supaya Anda tidak dibenci.",
      C: "Melupakan empati layaknya robot yang mengeksekusi perintah manajemen dengan muka tegas tanpa simpati.",
      D: "Menyampaikannya secara personal dengan empati maksimal, menjelaskan konteks bisnis yang memaksa, dan menawarkan surat referensi kerja.",
      E: "Sengaja memperlambat prosesnya melawan perintah direksi."
    },
    answer: "D",
    explanation: "People Agility: Mampu menyampaikan kabar buruk namun tetap menjunjung martabat manusiawi dan manajemen empati.",
    trick: "Konflik atau PHK = KOMUNIKASI EMPATIK SECARA LANGSUNG, JELASKAN KONTEKS."
  },
  {
    id: 35,
    question: "Dalam dua hari, Anda harus menyajikan makalah yang jauh di luar kompetensi inti Anda ke Kementrian. Semua kolega terlalu sibuk. Apa strategi lincah (*Agile strategy*) Anda?",
    options: {
      A: "Mengerjakannya semampu saya saja biarpun acak-acakan karena bukan *domain* saya.",
      B: "Membayar agen *freelancer* untuk membuatnya diam-diam.",
      C: "Mencari *Key Opinion Leader* dari jurnal kredibel dan platform riset, mengurasi gagasan intinya menjadi kerangka berpikir singkat, kemudian memvalidasinya ke atasan sesegera mungkin.",
      D: "Membatalkan janji ke Kementrian menggunakan alasan teknis logistik.",
      E: "Meminta penambahan waktu 2 minggu meski menunda Kementrian."
    },
    answer: "C",
    explanation: "Mental Agility & Results Agility: Mengabstraksi informasi yang rumit (Complex information gathering) menjadi kerangka (*framework*) praktis di bawah tekanan tenggat waktu.",
    trick: "Tugas di luar kepala + Waktu mepet = KUMPULKAN INTO INTI + BUAT FRAMEWORK/KERANGKA CEPAT + VALIDASI ATASAN."
  },
  {
    id: 36,
    question: "Anda baru diangkat menjadi supervisor dan langsung melihat bahwa bawahan sering mengeluh tentang lamanya alur persetujuan (approval). Pendekatan *Agile* Anda:",
    options: {
      A: "Berdiam diri saja karena itu adalah kebijakan saklek direktur.",
      B: "Menuntut tim bersabar karena di masa Anda merintis juga begini keadaannya.",
      C: "Membedah alur historisnya, mengidentifikasi titik botol (*bottleneck*), dan mengajukan uji coba pemangkasan satu lapis birokrasi ke direktur.",
      D: "Merobohkan semua prosedur karena bawahan Anda setuju.",
      E: "Anda mengabaikan keluhan karena wajar sebuah staf mengeluh."
    },
    answer: "C",
    explanation: "Change Agility: Orientasi pada proses improvement dengan metode analitikal, tidak meruntuhkan semua sekaligus, melainkan tes uji coba (*pilot test*).",
    trick: "Alur birokrasi diprotes tim = IDENTIFIKASI BOTTLENECK + USULKAN UJI COBA REVISI. Jangan rombak total seketika."
  },
  {
    id: 37,
    question: "Keberagaman ide dalam rapat sedang tinggi. Diskusi melampaui waktu dan saling bertentangan tiada ujung. Sebagai moderator pimpinan, Anda...",
    options: {
      A: "Memilih ide yang paling disukai atasan saja biar aman.",
      B: "Mereduksi poin-poin yang ada menjadi 2 opsi final rasional, dan mengambil keputusan cepat untuk dieksekusi secara iteratif (perbaikan jalan).",
      C: "Menunda keputusan ke minggu depan terus-menerus.",
      D: "Meninggalkan ruangan agar pimpinan rapat menjadi orang lain.",
      E: "Memakai satu opsi buatan Anda sendiri karena Anda moderator."
    },
    answer: "B",
    explanation: "Results Agility: Kecepatan dalam bergerak. Eksekusi lebih baik dari kesempurnaan ide namun lamban. (Done is better than perfect).",
    trick: "Rapat memanas tanpa ujung = RANGKUM OPSI TERKUAT + PILIH + LANGSUNG EKSEKUSI ITERATIF."
  },
  {
    id: 38,
    question: "Perusahaan menjadwalkan program *upskilling* (pelatihan skill lanjutan) khusus di hari Sabtu selama 2 bulan. Beberapa orang menolaknya. Bagaimana Anda memposisikan program tersebut?",
    options: {
      A: "Menolak ikut karena Sabtu mutlak libur keluarga.",
      B: "Ikut hanya sesi pembukaan demi formalitas daftar hadir.",
      C: "Mengambil peluang ini karena disrupsi *skill* sangat nyata dan Anda butuh relevansi di masa depan walau memotong waktu akhir pekan.",
      D: "Memrotes program tersebut langsung kepada CEO.",
      E: "Meminta rekan membocorkan materi saja tanpa datang langsung agar tidak kelelahan."
    },
    answer: "C",
    explanation: "Mental Agility: Proaktif mencari sumber pelajaran walau menuntut pengorbanan sesaat (*Delaying gratification*).",
    trick: "Pelatihan Hari Libur = IKUT UNTUK UPSKILLING."
  },
  {
    id: 39,
    question: "Pandemi global usai, perusahaan meminta mode transisi ke operasional *Hybrid* (sebagian pabrik, sebagian online). Apa yang pertama Anda siapkan di tim Anda?",
    options: {
      A: "Membiarkan saja karena hybrid sebenarnya tidak akan berjalan efisien.",
      B: "Merombak langsung keseluruhan job-deck sebelum berdiskusi.",
      C: "Mengadakan survei pada tim terkait kapasitas kerjanya, menyusun aturan komunikasi baru, dan me-reset sistem manajemen kinerja (*Performance KPI*).",
      D: "Langsung mencabut tunjangan online yang pernah diberikan.",
      E: "Semua difokuskan kerja fisik lagi, online sekedar teori."
    },
    answer: "C",
    explanation: "Change Agility: Di situasi Hybrid/Perpindahan, menyusun protokol norma kerja (communication protocol) yang baru sangat esensial.",
    trick: "Model kerja berubah (Hybrid/WFH/WFO) = RESET SISTEM & ATUR PROTOKOL KOMUNIKASI BARU."
  },
  {
    id: 40,
    question: "Manakah hal yang seringkali Anda pikirkan ketika Anda telah merasa menguasai zona pekerjaan Anda saat ini selama bertahun-tahun?",
    options: {
      A: "\u0022Saya hebat sekali, tidak ada yang bisa menggeser fungsi saya di sini.\u0022",
      B: "\u0022Saya paling tau seluk-beluknya, direktur takkan pernah tahu rahasianya.\u0022",
      C: "\u0022Apa lagi yang luput dari pandangan saya untuk diimprovisasi? Apakah fungsi saya sudah usang karena tidak pernah menemui kendala?\u0022",
      D: "\u0022Biarkan yang muda mengerjakan porsi sulit, asalkan tanda tangan di tangan saya.\u0022",
      E: "\u0022Zona ini sangat menyenangkan, saya harap waktu berhenti.\u0022"
    },
    answer: "C",
    explanation: "Self-Awareness & Change Agility: Mampu curiga terhadap rutinitas *comfort zone* yang terlalu lama aman.",
    trick: "Bila terlalu lama aman (Comfort Zone) = CARI KELEMAHAN DIRI, LAKUKAN INTROSPEKSI."
  },
  {
    id: 41,
    question: "Anda dan tim memenangkan penghargaan Inovasi terbaik BUMN se-nasional. Perayaan bergemuruh. Langkah esok paginya yang Anda lakukan?",
    options: {
      A: "Membuat jadwal pesta besar selama sebulan penuh.",
      B: "Merasa jemawa dan berhenti bekerja keras selama berbulan-bulan berikutnya.",
      C: "Mensyukuri apresiasi tersebut, namun esok paginya kembali 'kosong', menetapkan ekspektasi tantangan (*baseline*) baru untuk tidak terlena.",
      D: "Menyimpan seluruh hadiah tersebut hanya untuk divisi saya bukan untuk karyawan lain.",
      E: "Mengungkit kemenangan itu setiap rapat dengan divisi lain demi prestise."
    },
    answer: "C",
    explanation: "Results Agility: Menghindari piala masa lalu menjadi 'bebannya' masa depan (*Past success paradox*). Selalu me- *reset* ruang ambisi menjadi gelas yang dikosongkan.",
    trick: "Juara / Sukses Besar = RELAKAN PRESTASINYA, KOSONGKAN GELAS HARI ESOK (Mulai dari Nol)."
  },
  {
    id: 42,
    question: "Seseorang memberi Anda tugas manajerial yang sama persis profil kesulitannya dengan tugas yang pernah membuat Anda gagal 2 tahun lalu. Reaksi Anda:",
    options: {
      A: "Trauma dan menolak keras demi kesehatan mental saya.",
      B: "Menerima tugas tersebut, tapi dari dalam hati sudah yakin 100% bakal gagal lagi.",
      C: "Melihatnya sebagai arena penebusan, membuka kembali rekam analisis penyebab kegagalan lampau, dan merencakan eksekusi taktis yang lebih presisi.",
      D: "Memaksa atasan memberikan *brief* baru yang sama sekali tidak mirip tugas lama.",
      E: "Mengerjakannya sendirian agar tidak ada saksi saat saya gagal nanti."
    },
    answer: "C",
    explanation: "Mental Resilience: Mampu kembali ke arena yang sama, dilengkapi instrumen kebijaksanaan (wisdom) masa lalu.",
    trick: "Kerjakan area dimana pernah Gagal = JADIKAN ARENA PENEBUSAN DENGAN EVALUASI MASA LALU."
  },
  {
    id: 43,
    question: "Kolega lama dari masa awal merintis karier mendadak diangkat menjadi Bos Eksekutif di atas Anda. Selama ini kalian suka bercanda santai *blak-blakan*. Apa sikap Anda kepadanya saat di forum rapat ekskutif selanjutnya?",
    options: {
      A: "Memanggilnya dengan nama julukan tongkrongan untuk menunjukkan kedekatan Anda.",
      B: "Langsung bersikap kaku dan sangat serba formal layaknya orang terintimidasi.",
      C: "Mampu membedakan dengan luwes ranah interaksi: memposisikannya sangat profesional di forum kantor, dan santai di sesi *personal break*.",
      D: "Membencinya akibat rasa sebal karena dialah yang naik pangkat.",
      E: "Sering menceritakan masa lalunya yang konyol di depan staf lain agar wibawanya luntur."
    },
    answer: "C",
    explanation: "People Agility: Mampu berganti topi peran sosial dengan tangkas sesuai dengan konteks (*Contextual interaction*).",
    trick: "Sahabat jadi Atasan = BEDAKAN RANAH PROFESIONAL VS RANAH PERSONAL (Adaptasi Relasi)."
  },
  {
    id: 44,
    question: "Terdapat pelatihan aplikasi keuangan mahal ke mancanegara, yang dipilih adalah rekan yang tidak begitu menguasai komputer, bukan Anda. Padahal Anda lebih pantas. Bagaimana kelanjutan sikap Anda ke depan?",
    options: {
      A: "Langsung meminta *resign* dari posisi ini akibat nepotisme.",
      B: "Mengecam rekan tersebut di forum publik dengan cara melontarkan pertanyaan aplikasi yang Anda tahu takkan ia bisa.",
      C: "Memahami keputusan organisasi secara matang (mungkin itu bagian diversifikasi fungsi), lalu tetap proaktif meminta *knowledge transfer* sesaat rekan Anda pulang.",
      D: "Berhenti belajar karena perusahaan ternyata tidak suka pada orang yang rajin seperti Anda.",
      E: "Membuat aplikasi tandingan yang lebih canggih untuk menjatuhkan prestisenya."
    },
    answer: "C",
    explanation: "Mental Agility & Resiliency: Melihat kesempatan belajar bisa via saluran orang lain (*Knowledge Transfer*), tidak ego-sentris dan baper.",
    trick: "Kalah saing ikut pelatihan/Tender = MINTA KNOWLEDGE TRANSFER (Ilmunya tetap Anda ambil)."
  },
  {
    id: 45,
    question: "Terdapat konflik opini radikal antar dua vendor perusahaan saat sedang mempresentasikan desain inti produk andalan Anda. Anda harus mengintervensi dengan Agilitas seorang manajer?",
    options: {
      A: "Membiarkan mereka berdua baku hantam fisik agar terlihat ide siapa yang direstui.",
      B: "Masuk menengahi perdebatan bukan soal memihak desain siapa, melainkan segera mensintesis poin plus dari kedua pihak untuk melebur menjadi *Minimum Viable Product* yang solid.",
      C: "Memotong keras dan memutuskan bahwa rancangan pribadi Anda lah yang dipakai.",
      D: "Mengusir vendor satunya yang berasal tidak searah pemikirannya dengan Anda.",
      E: "Berdoa saja dalam hati dan membatalkan kedua desain."
    },
    answer: "B",
    explanation: "People Agility & Results Agility: Mengkapitalkan kekuatan konflik orang lain menjadi sintesa solusi inovatif (Managing complexity).",
    trick: "Dua pihak memanas = TAMPIL JADI MODERATOR YANG SINTESIS POIN PLUS KEDUANYA (Win-win synergy)."
  },
  {
    id: 46,
    question: "Anda ditugaskan mendirikan posko layanan BUMN peduli pada wilayah bencana. Sumber daya dan infrastruktur komunikasi nyaris lumpuh total. Karakter unggulan Anda sewaktu mengambil peran:",
    options: {
      A: "Selalu menuntut kantor pusat untuk memulihkan *Wi-Fi* terlebih dahulu baru Anda bersedia bergerak.",
      B: "Berkonsentrasi membagikan bantuan tanpa target spesifik karena suasananya darurat parah.",
      C: "Bersinergi dengan institusi prajurit lokal, menggunakan pola logistik konservatif (Kertas-pen) namun bertindak seketika menyasar skala prioritas (balita & medis).",
      D: "Sibuk mengontak wartawan agar citra saya diliput meski korban tidak segera diurus.",
      E: "Bersembunyi saja akibat trauma kegelapan zona bencana."
    },
    answer: "C",
    explanation: "Change Agility & Results Agility: Mengganti instrumen menjadi alat apa saja (*tools agnostics*), asalkan parameter operasional (*agility speed*) tercapai di masa genting.",
    trick: "Kondisi darurat tak ada fasilitas = BEROPERASI MODE MANUAL, FOKUS PRIORITAS PALING URGENT."
  },
  {
    id: 47,
    question: "Performa kerja tim Anda memburuk semenjak direksi merubah struktur penilaian *KPI (Key Performance Indicator)* ke sistem matriks kompleks. Respons kelincahan organisasi Anda?",
    options: {
      A: "Sebisa mungkin mengakali angka-angka matriks KPI tanpa mengubah hasil riil di pabrik sehingga semua selamat.",
      B: "Terus memboikot *KPI* matriks tersebut dalam laporan bulanan.",
      C: "Secara sadar mengadakan kelas intensif mingguan di internal tim mengenai cara membedah cara pikir di balik parameter *KPI* baru ini, sehingga *mindset* kerja tim pun tereset.",
      D: "Melaporkan semua anggota tim saya payah agar mereka di-PHK.",
      E: "Saya mengerjakan seluruh matriksnya saja sendiri."
    },
    answer: "C",
    explanation: "Change Agility: Alih-alih takut akibat sistem penilaian baru, membangun literasi pemahaman terhadap sistem (membuka *back-end* logic-nya) merupakan bentuk transisi sistemik yang sejati.",
    trick: "Sistem Indikator (KPI) Berubah dan Menyulitkan = VEDAH FILOSOFINYA & EDUKASI TIM CARA KERJA SISTEMNYA."
  },
  {
    id: 48,
    question: "Pilihan yang paling mewakili karakter Anda dalam mencari tantangan di BUMN adalah...",
    options: {
      A: "Semakin mapan karir saya, tantangan yang pas harusnya semakin sedikit dan bisa diserahkan ke pion staf.",
      B: "Tantangan harusnya linear pada gaji: apabila gaji menanjak pelan, tantangan jangan berat-berat.",
      C: "Secara persisten dan pro-aktif mencari *cross-role assignment* (penugasan silang peran) demi memastikan nalar *survival insting* wawasan korporasi saya tetap menyala.",
      D: "Tantangan tidak diciptakan, ditunggu saja karena resiko salah ambil penugasan bisa berdampak buruk.",
      E: "Saya menghindari zona baru, jika terpaksa saya meminta dikawal teman akrab saya."
    },
    answer: "C",
    explanation: "Mental Agility & Growth: Insting kelestarian evolusioner *(evolutionary survival strategy)* di karir hanya bisa tetap nyala lewat penugasan yang meresapkan disrupsi (keluar dari zona nyaman).",
    trick: "Apa makna tantangan bagi Anda? = ALAT BERTUMBUH. WAJIB PROAKTIF CARI TUGAS LINTAS DIVISI/PERAN."
  },
  {
    id: 49,
    question: "Ada seorang kolega lama Anda menelpon. Dia sedang mengalami fase gagal pada proyek serupa yang dulu sukses membesarkan nama Anda. Apa intisari wawasan Anda padanya?",
    options: {
      A: "Langsung mengirimkan resep taktis proyek lama Anda secara total sambil menyindir dirinya kurang jago.",
      B: "Menghiburnya tanpa solusi lalu mendoakannya agar urusannya berlalu bahagia selalu.",
      C: "Terdapat perbedaan parameter momentum waktu. Ia direkomendasikan melihat ulang akar fundamental saat ini dan tidak menelan mentah-mentah resep sukses lama Anda karena variabel konteks sudah bergeser.",
      D: "Menyuruhnya menemui klien yang dulu Anda dampingi agar proyeknya ditolong secara ajaib.",
      E: "Berpura-pura pulsa Anda habis di tengah telepon."
    },
    answer: "C",
    explanation: "Results Agility: Menyadari bahwa menjiplak murni kisah kesuksesan zaman dulu (Anachronism) di masa sekarang sering gagal. Kepekaan adaptif terhadap '*moving context*'.",
    trick: "Mengulang jurus masa lalu di masa sekarang = BAHAYA. SELALU KALIBRASI ULANG VARIABEL KONTEKS TERKINI (Konteks Berubah)."
  },
  {
    id: 50,
    question: "Anda mendapat tawaran karier akselerasi posisi Manajer Utama anak perusahaan *BUMN*. Syaratnya harus membangun struktur total sendirian dalam enam bulan tanpa banyak bimbingan di pulau terluar negara. Kecepatan reaksi respons Anda?",
    options: {
      A: "Berdebat mempertanyakan detail segala keuntungannya terlebih dahulu sebelum menjawab siap.",
      B: "Dengan determinasi tinggi menerima tantangan tersebut seketika secara antusias sebagai bentuk bakti diri dan unjuk ketangkasan sejati melampaui keragu-raguan geografis.",
      C: "Menolaknya namun tidak melapor pada bos, sekedar merespon lamban.",
      D: "Mengatakan siap asalkan dikembalikan di waktu tiga bulan saja ke Jakarta secara dinas.",
      E: "Trauma, memohon diberikan ke kolega rival saya di kantor demi membuat ia ditendang jauh ujung pulau sekembalinya ia."
    },
    answer: "B",
    explanation: "Change Agility & Resilience: Ini manifestasi utuh dari karakter lincah (Agile): Kecepatan respon inisiatif dengan determinasi saat menyongsong disrupsi radikal di pelosok demi lompatan kepemimpinan nasional (National Leadership Spirit).",
    trick: "Tantangan Mustahil + Di Pelosok / Luar Teritorial = TERIMA SEKETIKA, TUNJUKAN SEMANGAT KEPELOPORAN (Agility)."
  }
];

module.exports = subtest8;
