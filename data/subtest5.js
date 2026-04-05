// Sub-Tes 5: Tes AKHLAK - 90 soal (30 menit) -> Wajib berupa studi kasus situasi dunia kerja/perilaku (Situational Judgment Test).
// Saat ini menggunakan 10 soal contoh sebagai fondasi, yang lain dilanjutkan bertahap
const subtest5 = [
  {
    id: 1,
    question: "Anda adalah ketua tim proyek yang sedang menghadapi tenggat waktu (deadline) yang sangat ketat. Salah satu anggota tim Anda, yang biasanya berkinerja baik, tampak kelelahan dan kinerjanya menurun drastis minggu ini. Apa yang akan Anda lakukan?",
    options: {
      A: "Menegurnya di depan tim agar dia segera memperbaiki kinerjanya demi mencapai target.",
      B: "Melaporkan penurunan kinerjanya kepada manajer HRD agar diberikan sanksi yang sesuai.",
      C: "Mengambil alih semua tugasnya agar proyek selesai tepat waktu, tanpa banyak bertanya.",
      D: "Mengajaknya bicara empat mata, menanyakan kendalanya, dan mencari solusi bersama.",
      E: "Membiarkannya saja karena ini sudah jadi tanggung jawab profesionalnya, harus siap capek."
    },
    answer: "D",
    explanation: "Nilai AKHLAK: Kolaboratif dan Amanah. Mengajak bicara secara personal menunjukkan empati dan kemauan untuk menyelesaikan masalah bersama (Kolaboratif) sekaligus peduli pada anggota tim (Amanah dalam memimpin).",
    trick: "Pilih opsi yang menunjukkan EMPATI, KOMUNIKASI yang baik, dan SOLUTIF. Hindari konfrontasi publik atau sikap lepas tangan."
  },
  {
    id: 2,
    question: "Perusahaan Anda sedang menerapkan sistem teknologi baru yang sama sekali belum Anda pahami. Anda diwajibkan menggunakan sistem ini mulai minggu depan. Sikap Anda adalah...",
    options: {
      A: "Protes kepada atasan karena pergantian sistem terlalu mendadak dan merepotkan.",
      B: "Diam saja dan coba gunakan sistem lama selama masih bisa, menunda memakai yang baru.",
      C: "Mempelajari sistem tersebut secara mandiri dan meminta bantuan rekan yang sudah mengerti.",
      D: "Meminta atasan menunda implementasi agar semua orang siap terlebih dahulu.",
      E: "Menyuruh rekan kerja yang lebih muda/paham IT untuk mengerjakan bagian Anda."
    },
    answer: "C",
    explanation: "Nilai AKHLAK: Kompeten dan Adaptif. Sikap mau belajar hal baru dan menyesuaikan diri dengan perubahan teknologi menunjukkan nilai Adaptif dan kemauan meningkatkan Kompetensi diri.",
    trick: "Pilih opsi yang menunjukkan ADAPTASI, INISIATIF BELAJAR, dan PROAKTIF menghadapi perubahan."
  },
  {
    id: 3,
    question: "Anda menemukan bahwa rekan kerja Anda sering menggunakan kendaraan dinas perusahaan untuk keperluan pribadi pada akhir pekan, yang jelas melanggar peraturan perusahaan. Apa yang akan Anda lakukan?",
    options: {
      A: "Mengingatkannya secara baik-baik bahwa hal tersebut melanggar aturan dan memintanya berhenti.",
      B: "Membiarkannya saja karena bukan kendaraan Anda sendiri dan Anda tidak ingin ikut campur.",
      C: "Ikut menggunakan fasilitas yang ada karena toh tidak ada yang tahu.",
      D: "Langsung melaporkannya ke komite etik atau HRD tanpa bicara kepadanya terlebih dahulu.",
      E: "Menyindirnya di grup WhatsApp kantor agar dia merasa malu."
    },
    answer: "A",
    explanation: "Nilai AKHLAK: Loyal dan Amanah. Menegur rekan secara asertif menunjukkan integritas (Amanah) dan menjaga nama baik perusahaan (Loyal), tanpa langsung meloncat ke eskalasi yang mungkin destruktif jika belum ditegur.",
    trick: "Pilih opsi INTEGRITAS (menjaga aturan) yang dilakukan melalui KOMUNIKASI ASERTIF namun tetap menjaga hubungan baik."
  },
  {
    id: 4,
    question: "Saat presentasi proyek di depan direksi, Anda menyadari ada kesalahan data yang cukup signifikan pada slide yang sedang Anda tampilkan. Kesalahan tersebut sebelumnya tidak disadari oleh tim Anda. Tindakan terbaik adalah...",
    options: {
      A: "Terus lanjut presentasi seolah data itu benar agar terlihat percaya diri di depan direksi.",
      B: "Lempar kesalahan ke anggota tim yang menyiapkan slide tersebut di depan direksi.",
      C: "Panik dan menghentikan presentasi untuk mencari data yang benar.",
      D: "Mengakui kesalahan data secara profesional, menyampaikan poin esensinya, dan janji mengirim revisi data secepatnya.",
      E: "Membatalkan presentasi dengan alasan slide kurang siap."
    },
    answer: "D",
    explanation: "Nilai AKHLAK: Amanah dan Kompeten. Mengakui kesalahan secara profesional menunjukkan integritas (Amanah) dan memberikan solusi tindak lanjut menunjukkan profesionalisme (Kompeten).",
    trick: "Pilih tindakan yang JUJUR, BERTANGGUNG JAWAB (tidak menyalahkan orang lain), dan SOLUTIF."
  },
  {
    id: 5,
    question: "Anda ditempatkan di sebuah tim lintas departemen yang anggotanya memiliki latar belakang suku, agama, dan budaya yang sangat beragam. Terkadang, terjadi miskomunikasi karena gaya bicara yang berbeda. Sikap yang harus Anda tunjukkan adalah...",
    options: {
      A: "Hanya bergaul dengan orang yang satu daerah dengan Anda karena lebih nyaman.",
      B: "Menyamakan persepsi, menghargai perbedaan gaya komunikasi, dan fokus pada tujuan tim.",
      C: "Memaksa anggota tim lain untuk mengikuti gaya komunikasi yang Anda anggap paling benar.",
      D: "Menghindari komunikasi jika tidak terlalu penting untuk mencegah salah paham.",
      E: "Sering menjadikan perbedaan budaya sebagai bahan bercandaan agar tidak kaku."
    },
    answer: "B",
    explanation: "Nilai AKHLAK: Harmonis dan Kolaboratif. Menghargai perbedaan dan fokus pada tujuan bersama mencerminkan nilai Harmonis di tempat kerja.",
    trick: "Pilih opsi TOLERANSI, MENGHARGAI KEBERAGAMAN, dan MENGUTAMAKAN TUJUAN BERSAMA."
  },
  {
    id: 6,
    question: "Seorang pelanggan mengajukan komplain dengan nada marah karena pelayanan yang diberikan kurang memuaskan, padahal kesalahan sebenarnya bukan dari divisi Anda, melainkan divisi teknis. Anda akan...",
    options: {
      A: "Menolak disalahkan dan menyuruh pelanggan komplain ke divisi teknis.",
      B: "Mendengarkan dengan empati, meminta maaf atas ketidaknyamanan, dan membantu mengoordinasikan masalahnya dengan divisi terkait.",
      C: "Membiarkan pelanggan tersebut marah-marah sampai selesai lalu meninggalkannya.",
      D: "Memarahi balik pelanggan karena dia bersikap tidak sopan di area kerja Anda.",
      E: "Abaikan saja karena itu bukan tupoksi kerja Anda."
    },
    answer: "B",
    explanation: "Nilai AKHLAK: Kolaboratif dan Amanah (Orientasi Pelayanan). Membantu dan berkoordinasi meskipun bukan kesalahan Anda menunjukkan Collaborative problem solving dan pelayanan prima (Customer focus).",
    trick: "Pilih opsi MENDENGARKAN, BEREMPATI, dan BERI SOLUSI (meski butuh koordinasi antar divisi)."
  },
  {
    id: 7,
    question: "Perusahaan Anda memberikan target penjualan yang sangat tinggi bulan ini dan sepertinya mustahil tercapai. Atasan mengisyaratkan bahwa 'cara apa pun' boleh dilakukan asal target tembus. Anda tahu beberapa kompetitor melakukan cara-cara abu-abu. Sikap Anda?",
    options: {
      A: "Memanipulasi sedikit laporan penjualan agar terlihat lebih baik di mata atasan.",
      B: "Melakukan praktik abu-abu seperti kompetitor karena atasan sudah memberi lampu hijau.",
      C: "Tetap bekerja dengan cara yang etis dan sah, serta memberikan evaluasi objektif tentang pencapaian riil.",
      D: "Berhenti bekerja dan langsung mencari pekerjaan baru karena tidak tahan tekanan.",
      E: "Meminta atasan menurunkan target karena jelas mustahil dicapai."
    },
    answer: "C",
    explanation: "Nilai AKHLAK: Amanah dan Loyal. Menjaga integritas moral tanpa tawar-menawar (Amanah) serta tetap bekerja memberikan evaluasi riil (Loyal kepada kebenaran perusahaan).",
    trick: "Pilih INTEGRITAS TINGGI. Jangan pernah memilih opsi manipulasi, suap, atau abu-abu meski situasinya 'memaksa'."
  },
  {
    id: 8,
    question: "Anda dipromosikan menjadi manajer, namun ada rekan sejawat Anda yang lebih senior dan merasa dia yang lebih layak. Dia mulai bersikap dingin dan kurang suportif. Cara Anda menghadapinya?",
    options: {
      A: "Menggunakan jabatan baru Anda untuk memberinya tugas-tugas berat sebagai balasan.",
      B: "Langsung me-mutasi dia ke departemen lain agar tidak menjadi toxic di tim.",
      C: "Tetap bersikap profesional, merangkulnya secara personal, dan menunjukkan komitmen Anda membangun tim.",
      D: "Mengabaikan sikapnya selama dia masih menyelesaikan pekerjaannya.",
      E: "Menegurnya di depan umum agar dia menghormati posisi Anda yang baru."
    },
    answer: "C",
    explanation: "Nilai AKHLAK: Harmonis dan Kolaboratif. Menjaga lingkungan kerja tetap kondusif (Harmonis) dengan cara profesional dan merangkul rekan (Kolaboratif) adalah ciri leader yang baik.",
    trick: "Pilih sikap MERANGKUL, TIDAK PENDENDAM, dan MEMBANGUN LINGKUNGAN KERJA KONDUSIF."
  },
  {
    id: 9,
    question: "Anda ditugaskan di kantor cabang terpencil yang fasilitasnya sangat minim dibandingkan kantor pusat tempat Anda sebelumnya. Tindakan yang Anda lakukan?",
    options: {
      A: "Mengeluh di media sosial tentang minimnya fasilitas di cabang terpencil tersebut.",
      B: "Bekerja seadanya karena fasilitasnya juga seadanya.",
      C: "Meminta segera dipindahkan kembali ke pusat dengan alasan kesehatan kurang cocok.",
      D: "Bekerja maksimal dengan fasilitas yang ada serta memberikan inovasi untuk perbaikan secara bertahap.",
      E: "Sering bolos kerja karena merasa tidak termotivasi."
    },
    answer: "D",
    explanation: "Nilai AKHLAK: Adaptif dan Kompeten. Mampu bekerja di lingkungan sulit dengan inisiatif perbaikan (Adaptif & Kompeten) mencerminkan ketangguhan (resilience).",
    trick: "Pilih TAHAN BANTING (Resilience), MENYESUAIKAN DIRI CEPAT, dan MEMBERI INOVASI."
  },
  {
    id: 10,
    question: "Sebuah vendor menawarkan hadiah pribadi (gratifikasi) berupa paket liburan keluarga jika Anda membantu memenangkan tender mereka. Vendor tersebut memang kompeten. Respon Anda?",
    options: {
      A: "Menerima hadiah tersebut toh vendornya memang berkualitas dan pasti menang.",
      B: "Menolak hadiah secara halus namun tetap memprioritaskan vendor tersebut di tender.",
      C: "Menolak dengan tegas hadiah tersebut dan tetap memproses seleksi tender secara transparan dan objektif.",
      D: "Melaporkan vendor ke KPK tanpa memberitahu atasan Anda.",
      E: "Menerima, namun uang senilai liburan itu disumbangkan ke panti asuhan."
    },
    answer: "C",
    explanation: "Nilai AKHLAK: Amanah. Menolak segala bentuk gratifikasi secara tegas dan tetap objektif dalam menjalankan prosedur perusahaan adalah inti dari Amanah (Integritas dan GCG).",
    trick: "Pilih NOL TOLERANSI PADA KORUPSI DAN GRATIFIKASI. Jangan ragu, pilih tolak mentah-mentah secara profesional!"
  },
  {
    id: 11,
    question: "Tim Anda sedang dipersiapkan untuk merger dengan perusahaan lain yang memiliki budaya kerja bertolak belakang. Anda merasa cemas karena khawatir posisi Anda terancam. Sikap terbaik Anda adalah...",
    options: {
      A: "Mulai mencari lowongan di perusahaan lain sebagai langkah antisipasi gagal merger.",
      B: "Membangun kubu dengan rekan-rekan pro-karyawan lama untuk mencegah budaya baru masuk.",
      C: "Secara proaktif mempelajari proses dan budaya perusahaan baru guna mengoptimalkan nilai tambah Anda dalam tim gabungan.",
      D: "Melakukan pekerjaan minimal sambil memantau situasi ke depan.",
      E: "Meyakinkan atasan bahwa budaya perusahaan Anda lebih unggul dibanding perusahaan lain."
    },
    answer: "C",
    explanation: "Nilai AKHLAK: Adaptif dan Kompeten. Merger menuntut adaptasi. Mempelajari dan menyesuaikan diri dengan budaya baru menunjukkan resiliensi dan inisiatif.",
    trick: "Situasi MERGER/RESTRUKTURISASI = ADAPTASI PROAKTIF (bukan defensif/menolak perubahan)."
  },
  {
    id: 12,
    question: "Anda mengetahui bahwa rekan kerja satu kubikel Anda sedang mengalami masalah keluarga yang berat sehingga akhir-akhir ini sering melakukan kesalahan fatal dalam dokumen. Tindakan Anda?",
    options: {
      A: "Melaporkan kesalahan-kesalahannya ke atasan karena berakibat fatal.",
      B: "Berempati kepadanya namun tetap mendiskusikan dampaknya ke pekerjaan, serta menawarkan bantuan *back-up* sementara jika diperlukan.",
      C: "Memperbaiki seluruh kesalahannya secara diam-diam agar ia tidak dipecat.",
      D: "Menghindarinya karena tidak ingin tertular energi negatif dari masalah pribadinya.",
      E: "Menyuruhnya untuk mengambil cuti tanpa dibayar sampai masalahnya selesai."
    },
    answer: "B",
    explanation: "Nilai AKHLAK: Harmonis dan Kolaboratif. Kombinasi antara empati (Harmonis) namun tetap menjaga profesionalitas target kerja dengan kolaborasi *back-up*.",
    trick: "Ada masalah pribadi rekan = EMPATI + BANTU BACK-UP SEMENTARA + TETAP JAGA STANDAR."
  },
  {
    id: 13,
    question: "Atasan menugaskan Anda sebuah pekerjaan yang sebenarnya adalah di luar *job description* Anda dan Anda kurang menguasai bidang tersebut. Tanggapan Anda sebaiknya...",
    options: {
      A: "Menerima tugas tersebut sebagai kesempatan belajar dan meminta bimbingan jika menemui kesulitan.",
      B: "Menerima tugas tersebut tapi beralasan teknis jika hasilnya nanti tidak memuaskan.",
      C: "Menolak secara halus dengan menunjukkan *job description* resmi yang ditandatangani.",
      D: "Mendelegasikannya kepada rekan yang kebetulan ahli di bidang tersebut.",
      E: "Mengerjakannya sembarangan agar ke depan tidak diberi tugas di luar *jobdesc* lagi."
    },
    answer: "A",
    explanation: "Nilai AKHLAK: Kompeten (Growth mindset) dan Loyal. Menerima tugas di luar *jobdesc* sebagai kesempatan belajar adalah representasi dari inisiatif untuk tumbuh.",
    trick: "Tugas luar jobdesc = KESEMPATAN BELAJAR + GROWTH MINDSET. Jangan langsung ditolak pakai tameng SOP."
  },
  {
    id: 14,
    question: "Kantor Anda sedang mewajibkan program efisiensi anggaran ketat. Anda terbiasa melakukan perjalanan dinas dengan penerbangan *Business Class*. Peraturan baru mengharuskan level manajer turun kelas ke *Economy Class*. Reaksi Anda?",
    options: {
      A: "Membayar selisihnya menggunakan uang pribadi agar tetap terbang di kelas bisnis.",
      B: "Tunduk pada peraturan baru dengan ikhlas demi mendukung program efisiensi perusahaan.",
      C: "Protes ke direksi karena level Anda sudah sepantasnya di kelas bisnis.",
      D: "Mengurangi jadwal dinas luar kota karena standar fasilitas yang menurun.",
      E: "Mengakali laporan keuangan agar *business class* dimasukkan ke dalam pos anggaran lain."
    },
    answer: "B",
    explanation: "Nilai AKHLAK: Loyal dan Amanah. Patuh pada kebijakan efisiensi perusahaan di waktu krisis menunjukkan *ownership* (rasa memiliki) dan keselarasan dengan kepentingan organisasi.",
    trick: "Efisiensi perusahaan = PATUH TANPA SYARAT UNTUK KEPENTINGAN BERSAMA."
  },
  {
    id: 15,
    question: "Dalam proyek kelompok perusahaan, Anda merasa memiliki ide yang jauh lebih cemerlang dibandingkan ide yang disetujui mayoritas. Apa yang harus Anda lakukan saat implementasi?",
    options: {
      A: "Menerapkan ide Anda secara diam-diam meskipun kelompok menyepakati ide lain.",
      B: "Mengerjakan tugas dengan setengah hati karena tidak sepakat dengan ide kelompok.",
      C: "Tetap berkomitmen mengeksekusi ide kelompok yang disepakati dengan upaya maksimal.",
      D: "Terus-menerus mengkritik ide tersebut sepanjang tahap implementasi.",
      E: "Keluar dari tim proyek agar tidak terseret kegagalan."
    },
    answer: "C",
    explanation: "Nilai AKHLAK: Kolaboratif dan Harmonis. Sinergi mengharuskan kita *commit* kepada keputusan tim meskipun keputusan itu bukanlah pilihan pribadi kita (disagree and commit).",
    trick: "Jika keputusan telah bulat = DUKUNG SEPENUHNYA MESKI BEDA PENDAPAT (Disagree but commit)."
  },
  {
    id: 16,
    question: "Anda menemukan celah keamanan dalam sistem operasional perusahaan yang jika dimanfaatkan bisa memberi keuntungan finansial bagi Anda tanpa terdeteksi. Sikap Anda:",
    options: {
      A: "Menguji celah tersebut sedikit demi sedikit untuk memastikan tidak ada yang sadar.",
      B: "Membiarkan celah tersebut karena memperbaiki sistem bukan wewenang Anda.",
      C: "Segera melaporkan celah tersebut ke departemen IT dan manajemen agar segera diperbaiki.",
      D: "Bercerita ke teman-teman agar mereka berhati-hati namun tidak mau melapor resmi.",
      E: "Meminta imbalan kepada perusahaan sebelum membocorkan letak celah tersebut."
    },
    answer: "C",
    explanation: "Nilai AKHLAK: Amanah dan Loyal. Menempatkan kepentingan dan perlindungan aset perusahaan di atas kepentingan (atau apatisme) pribadi.",
    trick: "Celah keamanan/Error sistem = SEGERA LAPORKAN (Eskalasi)."
  },
  {
    id: 17,
    question: "Setelah menyelesaikan sebuah proyek besar dengan sukses, atasan Anda memberikan seluruh kredit/pujian secara publik kepada Anda, tanpa menyebut anggota tim Anda yang lain. Padahal mereka sangat berjasa. Anda akan...",
    options: {
      A: "Berdiam diri saja menikmati pujian dari atasan untuk mendongkrak karir.",
      B: "Mengucapkan terima kasih sambil secara publik memuji dan mendedikasikan keberhasilan itu pada kontribusi luar biasa dari para anggota tim Anda.",
      C: "Menegur atasan Anda secara tertutup karena melupakan anggota tim Anda.",
      D: "Mengirimi tim Anda pesan singkat berisi ucapan terima kasih secara privat sesudahnya.",
      E: "Merasa bahwa wajar *leader* mendapatkan seluruh kredit karena risikonya juga di *leader*."
    },
    answer: "B",
    explanation: "Nilai AKHLAK: Kolaboratif dan Harmonis. Penghargaan terbuka pada kontribusi tim akan menjaga moral *teamwork* dan menunjukkan sosok pemimpin yang adil.",
    trick: "Keberhasilan proyek = BERIKAN KREDIT PADA TIM (Hargai kerja keras kolektif)."
  },
  {
    id: 18,
    question: "Anda ditunjuk memimpin proyek digitalisasi, sementara setengah dari staf yang harus melakukan transisi adalah pegawai senior yang gagap teknologi dan enggan berubah. Apa strategi Anda?",
    options: {
      A: "Merekomendasikan manajemen untuk memberhentikan pegawai yang tidak mau berubah.",
      B: "Melakukan persuasi personal, menunjukkan manfaat praktis sistem baru, serta memberikan pendampingan *hands-on* secara bertahap.",
      C: "Bekerja sama hanya dengan pegawai-pegawai muda yang lebih mudah diarahkan.",
      D: "Memaksakan sanksi berupa potongan gaji bagi siapa saja yang terlambat adopt.",
      E: "Mengerjakan tugas pegawai senior tersebut secara diam-diam agar proyek tetap jalan."
    },
    answer: "B",
    explanation: "Nilai AKHLAK: Adaptif, Kolaboratif, Kompeten. Mendorong perubahan (*change agent*) secara asertif melalui bukti riil dan empati untuk membangun ekosistem digital.",
    trick: "Pegawai senior menolak perubahan = PERSUASI PERSONAL + PENDAMPINGAN (Mentoring)."
  },
  {
    id: 19,
    question: "Dalam evaluasi kinerja tahunan, atasan memberi nilai Anda 'Cukup' dan menyampaikan area yang perlu diperbaiki. Anda terbiasa mendapat nilai 'Sangat Baik' bertahun-tahun. Bagaimana reaksi Anda?",
    options: {
      A: "Segera mencari tahu siapa rekan yang menjelek-jelekkan Anda di belakang.",
      B: "Marah dan mengancam akan mencari pekerjaan lain jika penilaiannya tidak direvisi.",
      C: "Merasa terpukul dan demotivasi selama berbulan-bulan.",
      D: "Meminta penjelasan rinci untuk perbaikan diri lalu membuat *action plan* secara objektif.",
      E: "Menolak menandatangani dokumen evaluasi tersebut sebagai bentuk protes keras."
    },
    answer: "D",
    explanation: "Nilai AKHLAK: Kompeten. Menjadikan kritik sebagai motivasi dan umpan balik (*Growth mindset*).",
    trick: "Kritik & Nilai Jelek = MINTA FEEDBACK RINCI + BUAT ACTION PLAN (Jangan reaktif)."
  },
  {
    id: 20,
    question: "Anda diminta oleh kerabat dekat untuk membocorkan kriteria spesifik tes rekrutmen perusahaan agar anaknya bisa lolos. Padahal data tersebut diklasifikasikan *Rahasia Perusahaan*. Sikap Anda:",
    options: {
      A: "Menolak tegas karena melanggar pakta integritas dan memberikan nasehat agar anaknya belajar wajar.",
      B: "Memberi kisi-kisi umum saja yang sebenarnya sudah ada di internet agar ia tidak tersinggung.",
      C: "Memberikan seluruh informasinya, lagipula kalau anaknya pintar tidak akan merugikan perusahaan.",
      D: "Berpura-pura tidak tahu lalu tidak membalas pesannya sama sekali.",
      E: "Melaporkan sang kerabat ke pihak berwajib atas tuduhan percobaan suap."
    },
    answer: "A",
    explanation: "Nilai AKHLAK: Amanah dan Harmonis. Menjaga rahasia jabatan merupakan core dari integritas (Amanah). Memberi nasehat secara etis menjaga silaturahmi (Harmonis).",
    trick: "Konflik kepentingan (Keluarga vs Aturan) = TETAP IKUT ATURAN DENGAN PENOLAKAN ETIS."
  },
  {
    id: 21,
    question: "Di tengah presentasi besar antar divisi, salah satu data yang dibaca tim divisi lain secara tajam mendiskreditkan kinerja Divisi Anda. Anda tahu data tersebut pengambilannya keliru. Apa yang Anda lakukan?",
    options: {
      A: "Langsung menyela dengan keras bahwa data tersebut sampah dan tidak valid.",
      B: "Tersenyum dan mencatat hal itu dalam hati untuk membalas dendam di rapat berikutnya.",
      C: "Meminta waktu dengan sopan untuk meluruskan asumsi data tersebut secara objektif dengan bukti perbandingan yang sesuai.",
      D: "Langsung keluar ruangan sebagai bentuk protes dari tindakan 'menikam' di rapat terbuka.",
      E: "Mengakui kelemahan divisi Anda demi tidak memperpanjang perdebatan di depan manajemen."
    },
    answer: "C",
    explanation: "Nilai AKHLAK: Harmonis dan Kompeten. Menyampaikan koreksi/klarifikasi berdasarkan data yang solid dengan tetap menjaga etika forum.",
    trick: "Dikritik salah kaprah = KLARIFIKASI DENGAN DATA SECARA PROFESIONAL (Asertif tapi tetap sopan)."
  },
  {
    id: 22,
    question: "Anda merupakan karyawan Gen Z yang dinamis. Namun atasan Anda (Boomers) sering meminta *print out* fisik tebal dan revisi berulang secara manual, sangat berbeda dari kebiasaan Anda yang serba *paperless*. Reaksi Anda:",
    options: {
      A: "Memposting *ranting* tentang kebijakan kuno atasan Anda ke media sosial 'Close Friends'.",
      B: "Memenuhi permintaannya sambil perlahan mengedukasi dan menawarkan opsi efisiensi digital sistematis kepadanya.",
      C: "Menolak keras mencetak laporan karena berdalih Go-Green dan tidak efisien.",
      D: "Melakukan pencetakan setengah hati sambil menunda-nunda pengerjaannya.",
      E: "Meminta mutasi ke atasan yang usianya lebih sebaya."
    },
    answer: "B",
    explanation: "Nilai AKHLAK: Kolaboratif, Adaptif, dan Harmonis. Menjembatani kesenjangan generasi dengan cara memenuhi ekspektasinya sambil mengedukasi digitalisasi.",
    trick: "Beda gaya generasi = HORMATI CARANYA + EDUKASI BERTAHAP."
  },
  {
    id: 23,
    question: "Perusahaan menjanjikan bonus tahunan besar, namun karena krisis moneter global, Direktur Utama menyampaikan bahwa bonus ditiadakan tahun ini demi mencegah PHK besar-besaran. Tanggapan Anda:",
    options: {
      A: "Mogok kerja karena itu hak yang telah dijanjikan sebelumnya.",
      B: "Memahami keputusan krusial tersebut sebagai bentuk keberpihakan pada kelangsungan hidup para pegawai, dan tetap bekerja produktif.",
      C: "Pura-pura kerja sambil mendirikan *side hustle* (bisnis sampingan) menggunakan fasilitas kantor.",
      D: "Menyebarkan gosip bahwa perusahaan akan bangkrut di grup-grup tak resmi.",
      E: "Mencari kambing hitam terhadap kinerja salah satu divisi yang menyebabkan krisis."
    },
    answer: "B",
    explanation: "Nilai AKHLAK: Loyal dan Amanah. Memahami gambaran besar (*helicopter view*) dari keputusan manajemen (Loyal) untuk menyelamatkan kelangsungan perusahaan.",
    trick: "Kebijakan pahit perusahaan untuk cegah PHK = PAHAMI DAN TETAP PRODUKTIF (Rasa memiliki perusahaan)."
  },
  {
    id: 24,
    question: "Anda dipercaya merangkap jabatan selama posisi fungsional sedang kosong, namun tidak ada tambahan kompensasi (hanya tambahan beban kerja). Tanggapan pertama Anda adalah...",
    options: {
      A: "Menolak karena tidak ada uang insentif tambahan (No pay, no gain).",
      B: "Menerima jabatan rangkap itu secara sementara dan melihatnya sebagai ajang pamer unjuk kemampuan (*show-case*) agar dilirik direktur.",
      C: "Mengambil tanggung jawab tersebut karena komitmen kepada tim, dan berfokus pada target organisasi agar tetap berjalan baik.",
      D: "Mengerjakan tugas rangkap tersebut namun dengan performa asal-asalan.",
      E: "Melakukan protes resmi melalui Serikat Pekerja."
    },
    answer: "C",
    explanation: "Nilai AKHLAK: Loyal dan Amanah. Bersedia mengambil beban ekstra saat perusahaan membutuhkan tanpa syarat finansial demi kesinambungan operasional.",
    trick: "Rangkap jabatan sementara = AMBIL SEBAGAI KOMITMEN DAN BENTUK LOYALITAS KEPADA TIM."
  },
  {
    id: 25,
    question: "Rekan kerja di divisimu berbeda pandangan politik secara ekstrem saat momen pemilu. Ruangan selalu panas karena ia sering menyindir pandangan politik Anda. Apa yang Anda lakukan?",
    options: {
      A: "Membawa pendukung lain untuk mendebatnya setiap hari.",
      B: "Melaporkannya ke atasan agar ia pindah dari ruangan Anda.",
      C: "Menyampaikan batasan tegas agar lingkungan kantor, terutama ruangan kalian, diutamakan murni untuk urusan profesional, bukan debat politik.",
      D: "Berdiam diri saja walaupun merasa sangat muak setiap masuk kantor.",
      E: "Mengikuti pandangan politiknya demi menghindari keributan."
    },
    answer: "C",
    explanation: "Nilai AKHLAK: Harmonis. Berani menetapkan batasan (*boundary*) secara profesional demi menjaga lingkungan kerja bebas toksik.",
    trick: "Perbedaan SARA atau Politik = SEPAKATI BATASAN (Pisahkan ranah personal dengan profesional)."
  },
  {
    id: 26,
    question: "Dalam implementasi kebijakan *Work From Anywhere* (WFA), produktivitas tim Anda malah menurun drastis karena banyak yang terlena. Sebagai supervisor, tindakan Anda adalah...",
    options: {
      A: "Langsung mencabut kebijakan WFA sepihak hari itu juga dan mewajibkan masuk kantor.",
      B: "Membiarkan karena Anda juga menikmati kelonggaran dari WFA.",
      C: "Menegur keras di grup besar dan memberikan SP (Surat Peringatan) kepada semua staf.",
      D: "Mengevaluasi sistem monitoring, mengomunikasikan target harian yang terukur dan menetapkan pakta integritas baru WFA bersama tim.",
      E: "Mengerjakan semua pekerjaan yang belum beres dengan mengorbankan waktu tidur Anda."
    },
    answer: "D",
    explanation: "Nilai AKHLAK: Kompeten dan Kolaboratif. Menindaklanjuti kegagalan regulasi tim dengan pendekatan perbaikan sistem monitoring dan komitmen bersama, bukan sekadar penalti.",
    trick: "Sistem baru (WFA) gagal = EVALUASI + RESET SISTEM KONTROL GABUNGAN."
  },
  {
    id: 27,
    question: "Saat bertugas di *front desk*, Anda menghadapi komplain pelanggan luar negeri yang sama sekali tidak bisa bahasa Inggris atau bahasa Indonesia (misal: berbahasa Jepang). Sementara Anda hanya bisa Inggris. Sikap Anda:",
    options: {
      A: "Mengabaikannya dan beralih ke pelanggan lain yang lebih mudah dilayani.",
      B: "Menunjukkan gestur bingung, menolak membantunya dan menyuruh *Security* menangani.",
      C: "Tetap tenang, mencoba menggunakan aplikasi penerjemah (*translator*) di ponsel untuk berkomunikasi dan memberikan layanan.",
      D: "Mencari-cari staf lain yang bisa bahasa Jepang sampai klien menunggu puluhan menit.",
      E: "Berbahasa Indonesia dengan suara keras agar dia perlahan paham."
    },
    answer: "C",
    explanation: "Nilai AKHLAK: Adaptif dan Kompeten (Customer Service Excellent). Sigap menggunakan instrumen *tech* demi *problem solving* yang *agile*.",
    trick: "Hambatan bahasa/komunikasi pelayanan = GUNAKAN TEKNOLOGI/ALAT BANTU (Solutif)."
  },
  {
    id: 28,
    question: "Terdapat proyek CSR (Corporate Social Responsibility) untuk memperbaiki sanitasi desa pelosok di akhir pekan (di luar waktu kerja resmi). Partisipasi bersifat opsional. Apakah Anda akan ikut?",
    options: {
      A: "Tidak ikut karena akhir pekan wajarnya menjadi waktu pribadi saya tanpa kompromi.",
      B: "Ikut, tapi memastikan nama dan wajah saya difoto masuk di Instagram perusahaan agar terlihat atasan.",
      C: "Mendaftarkan diri untuk turut berkontribusi sosial sebagai representasi BUMN untuk rakyat kecil.",
      D: "Menyumbang sedikit uang saja tanpa perlu datang secara fisik.",
      E: "Hanya ikut apabila ada uang lemburnya."
    },
    answer: "C",
    explanation: "Nilai AKHLAK: Amanah (Tanggung jawab sosial BUMN/BUMN untuk Indonesia). Rasa terpanggil secara ikhlas mendukung program kontributif negara.",
    trick: "CSR/Program Sosial Perusahaan Opsi = TAMPILKAN KESEDIAAN MENGABDI (AKHLAK BUMN yang Paripurna)."
  },
  {
    id: 29,
    question: "Sebuah program *software* yang divisimu beli dengan anggaran mahal terbukti tidak berguna sama sekali dan *user-unfriendly*. Anda ditunjuk melaporkan *progress* adopsinya ke *Board of Directors*. Posisi Anda adalah...",
    options: {
      A: "Melaporkan kemajuan fiktif agar tidak ada divisi yang dimarahi karena buang-buang *budget*.",
      B: "Melaporkan kondisi asli, menjelaskan analisa *barrier* ketidakbergunaannya secara objektif, dan mengajukan evaluasi opsi penghentian sistem tersebut.",
      C: "Menyalahkan vendor seutuhnya di depan direktur agar divisi Anda lepas tangan.",
      D: "Protes kenapa bukan atasan Anda saja yang presentasi fakta pahit tersebut.",
      E: "Meminta tim untuk memaksakan pemakaian biarpun proyek sering gagal hanya demi membuat presentasi terlihat hijau (Sukses)."
    },
    answer: "B",
    explanation: "Nilai AKHLAK: Amanah dan Kompeten. Menyampaikan kebenaran pahit (*brutal facts*) secara profesional dan berani (*Crucial conversation*) tanpa memanipulasi laporan.",
    trick: "Proyek/software gagal dilaporkan = KATAKAN KEBENARAN + DATA ANALISIS OBJEKTIF (No sugarcoating)."
  },
  {
    id: 30,
    question: "Anda merupakan karyawan unggulan dengan ritme cepat. Diberikan mitra tandem *fresh-graduate* yang ritme belajarnya sangat lamban karena gugup. Anda akan...",
    options: {
      A: "Membiarkan dia mengerjakan tugas administratif saja, sementara core *project* Anda tuntaskan sendiri.",
      B: "Terus memarahinya agar terbangun *sense of urgency* khas *corporate*.",
      C: "Melakukan komplain ke HRD menuntut pergantian mitra, karena beban divisi terlampau berat.",
      D: "Menurunkan kecepatan Anda sesaat untuk membedah instruksi yang rumit dan melatihnya percaya diri sampai ia bisa lari bersama Anda.",
      E: "Menghindarinya selama jam kerja."
    },
    answer: "D",
    explanation: "Nilai AKHLAK: Kolaboratif dan Harmonis. Membimbing (mentoring/coaching) junior yang sedang *struggling* adalah tanda kepemimpinan kolaboratif sejati.",
    trick: "Rekan/Junior lamban belajar = LAKUKAN COACHING / MENTORING (Bantu bangun skill set)."
  }
];

module.exports = subtest5;
