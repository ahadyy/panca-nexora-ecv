
const teamMembers = [
  {
    number: "01", name: "Abdul Hady (NIM: 19230136)", role: "Anggota Tim", study: "Program Studi: Sistem Informasi",
    shortBio: "Mahasiswa Sistem Informasi yang tertarik pada pengembangan sistem, pengolahan data, dan perancangan solusi digital.",
    photo: "assets/hadyy.jpg", education: "Universitas Bina Sarana Informatika | Tahun Masuk 2023",
    skills: ["Programming", "Analisis", "Perancangan Sistem"],
    email: "19230136@bsi.ac.id"
  },
  {
    number: "02", name: "Bebi Kurniawan Hura (NIM: 19231395)", role: "Anggota Tim", study: "Program Studi: Sistem Informasi",
    shortBio: "Mahasiswa Sistem Informasi yang dapat menampilkan minat, keterampilan teknis, dan kontribusi proyek sesuai pengalaman nyata.",
    photo: "assets/bebi.jpg", education: "Universitas Bina Sarana Informatika | Tahun Masuk 2023.",
    skills: ["Programming", "Problem Solving", "Riset"],
    email: "19231395@bsi.ac.id"
  },
  {
    number: "03", name: "Lestin Nurhadia Wati Hulu (NIM: 19231252)", role: "Anggota Tim", study: "Program Studi: Sistem Informasi",
    shortBio: "Mahasiswa Sistem Informasi dengan ruang untuk menampilkan minat pada analisis, dokumentasi, riset, atau bidang lain yang relevan.",
    photo: "assets/lestin.jpg", education: "Universitas Bina Sarana Informatika | Tahun Masuk 2023.",
    skills: ["Analisis Data", "Dokumentasi", "Riset"],
    email: "19231252@bsi.ac.id"
  },
  {
    number: "04", name: "Moh Azzam Abulkhoir (NIM: 19231445)", role: "Anggota Tim", study: "Program Studi: Sistem Informasi",
    shortBio: "Mahasiswa Sistem Informasi yang dapat menampilkan ketertarikan pada desain, pengalaman pengguna, atau pengembangan produk.",
    photo: "assets/azam.jpg", education: "Universitas Bina Sarana Informatika | Tahun Masuk 2023i.",
    skills: ["Komunikasi", "Presentasi", "Kreativitas"],
    email: "19231445@bsi.ac.id"
  },
  {
    number: "05", name: "Riski Abimur Adiansyah (NIM: 19230319)", role: "Anggota Tim", study: "Program Studi: Sistem Informasi",
    shortBio: "Mahasiswa Sistem Informasi yang dapat menampilkan minat pada komunikasi, presentasi, koordinasi, atau bidang lainnya.",
    photo: "assets/riskii.jpg", education: "Universitas Bina Sarana Informatika | Tahun Masuk 2023.",
    skills: ["UI/UX", "Prototyping", "Kreativitas"],
    email: "19230319@bsi.ac.id"
  }
];

const projects = [
  {
  number: "PROJECT / 01",
  title: "SatSet",
  category: "UI / UX DESIGN",
  status: "2024",
  subtitle: "Perancangan Antarmuka & Pengalaman Pengguna Aplikasi E-Wallet",
  
  description: "SatSet adalah rancangan aplikasi dompet digital (E-Wallet) yang berfokus pada kecepatan, kemudahan, dan efisiensi transaksi harian pengguna. Berawal dari permasalahan kompleksnya alur pembayaran digital, proyek UI/UX ini mengusung pendekatan 'SatSet'—menghadirkan navigasi yang intuitif, alur transaksi serba cepat, serta visual yang bersih agar pengguna dapat menyelesaikan pembayaran, transfer, dan pengelolaan uang tanpa hambatan.",
  
  overview: "Proyek ini memvisualisasikan proses eksplorasi desain E-Wallet dari tahap riset kebutuhan pengguna hingga pembuatan prototype interaktif di Figma. Konsep utama SatSet dibangun untuk memangkas langkah-langkah redundan dalam transaksi digital, seperti pembayaran via QRIS, transfer antarbank/sesama pengguna, dan top-up saldo. Melalui rancangan antarmuka yang modern dan responsif, SatSet menyajikan sistem navigasi yang ringkas, hirarki informasi yang jelas, serta kepastian visual (visual feedback) saat transaksi berhasil.",
  
  features: [
    "Alur Transaksi Cepat & Bebas Hambatan (Seamless E-Wallet Flow)",
    "Integrasi Pembayaran QRIS & Transfer Kilat",
    "Struktur Dasbor Keuangan & Catatan Riwayat yang Intuitif",
    "Desain Komponen Visual & Design System Berbasis Figma",
    "Prototype Interaktif Uji Coba Pengalaman Pengguna"
  ],
  
  technologies: [
    "Figma",
    "UI/UX Design",
    "User Flow & Information Architecture",
    "Wireframing & Prototyping",
    "Design System & Component Library"
  ],
  
  contribution: "Bertanggung jawab penuh dalam seluruh proses UI/UX Design menggunakan Figma—mulai dari tahap pencarian ide (ideation), penyusunan wireframe (lo-fi), perancangan sistem komponen visual (design system), hingga pengembangan prototype high-fidelity interaktif untuk pengujian alur E-Wallet.",
  
  thumbnail: "assets/projects/satset/tn.jpg",
    screenshots: [
      { src: "assets/projects/satset/splashscreen.jpg", caption: "On Boarding" },
      { src: "assets/projects/satset/registrasi.jpg", caption: "Registrasi dan Login" },
      { src: "assets/projects/satset/halaman_utama.png", caption: "Halaman Utama" },
      { src: "assets/projects/satset/riwayat.png", caption: "Riwayat" },
      { src: "assets/projects/satset/pemberitahuan.png", caption: "Pemberitahuan" },
      { src: "assets/projects/satset/profil.png", caption: "Profil" },
      { src: "assets/projects/satset/scan.png", caption: "Scan" },
      { src: "assets/projects/satset/layanan.png", caption: "Layanan" },
      { src: "assets/projects/satset/topup.png", caption: "Top Up" }

    ], link: "", linkLabel: "Lihat detail proyek", icon: "panels-top-left"
  },
 {
  number: "PROJECT / 02", 
  title: "Analisis Sentimen Ulasan Pengguna E-Commerce Blibli di Google Play", 
  category: "DATA SCIENCE & MACHINE LEARNING", 
  status: "2025",
  subtitle: "Penerapan Algoritma Naïve Bayes & SVM dengan Penanganan Imbalance Data (SMOTE)",
  
  description: "Proyek ini bertujuan untuk menganalisis opini dan ulasan pengguna aplikasi Blibli di Google Play Store guna memahami tingkat kepuasan pelanggan. Mengingat distribusi ulasan yang sering kali tidak seimbang (mayoritas cenderung berat sebelah), proyek ini menerapkan metode Synthetic Minority Over-sampling Technique (SMOTE) untuk menyeimbangkan data, lalu membandingkan performa klasifikasi antara algoritma Naïve Bayes dan Support Vector Machine (SVM) dalam mengkategorikan sentimen positif dan negatif.",
  
  overview: "Alur pengerjaan proyek ini dimulai dari tahap pengumpulan data (Web Scraping) ulasan pengguna Blibli dari Google Play. Data mentah kemudian melalui tahap text preprocessing (cleaning, case folding, tokenization, stopword removal, dan stemming). Untuk mengatasi masalah ketidakseimbangan kelas data, diterapkan metode SMOTE sebelum masuk ke tahap pemodelan machine learning (Training & Testing). Performa kedua model kemudian dievaluasi dan divisualisasikan untuk melihat sebaran sentimen positif serta negatif secara komprehensif.",
  
  features: [
    "Pengambilan Data Otomatis (Web Scraping) Ulasan Google Play Store",
    "Tahapan Text Preprocessing & Text Cleansing yang Komprehensif",
    "Penanganan Imbalance Data Menggunakan Metode SMOTE",
    "Pemodelan & Komparasi Performa Algoritma Naïve Bayes vs Support Vector Machine (SVM)",
    "Evaluasi Model (Confusion Matrix, Akurasi, Precision, Recall, F1-Score)",
    "Visualisasi Data Sentimen Positif dan Negatif"
  ],
  
  technologies: [
    "Python",
    "Scikit-Learn",
    "Natural Language Processing (NLP)",
    "Naïve Bayes",
    "Support Vector Machine (SVM)",
    "SMOTE (Imbalanced-Learn)",
    "Pandas & NumPy",
    "Matplotlib & Seaborn"
  ],
  
  contribution: "Bertanggung jawab penuh atas seluruh tahapan pipeline data science—mulai dari scraping ulasan Blibli, pembersihan teks (preprocessing), penerapan teknik SMOTE untuk balancing data, pelatihan serta pengujian model Naïve Bayes dan SVM, hingga evaluasi dan visualisasi hasil akhir sentimen.",
  
  thumbnail: "assets/projects/analisis_sentimen/tn.jpg",
  
  screenshots: [
    { src: "assets/projects/analisis_sentimen/scraping.png", caption: "Proses Scrapping Ulasan Google Play" },
    { src: "assets/projects/analisis_sentimen/preparationa.png", caption: "Tahap Data Preprocessing (Text Cleansing)" },
    { src: "assets/projects/analisis_sentimen/preparationb.png", caption: "Tahap Text Processing lanjutan & Pembobotan Kata" },
    { src: "assets/projects/analisis_sentimen/trainingtesting.png", caption: "Proses Training dan Testing Model" },
    { src: "assets/projects/analisis_sentimen/hasil.png", caption: "Hasil Evaluasi Performa Model" },
    { src: "assets/projects/analisis_sentimen/positif.jpg", caption: "Visualisasi Sentimen Positif" },
    { src: "assets/projects/analisis_sentimen/negatif.jpg", caption: "Visualisasi Sentimen Negatif" }
  ],
  
  link: "", 
  linkLabel: "Lihat detail proyek", 
  icon: "chart-no-axes-combined"
},
  {
  number: "PROJECT / 03", 
  title: "Engine Master", 
  category: "WEB DEVELOPMENT & INFORMATION SYSTEM", 
  status: "2024",
  subtitle: "Sistem Informasi Penjualan dan Pembelian Sparepart Mobil Berbasis Website",
  
  description: "Engine Master adalah aplikasi berbasis web yang dirancang untuk mengotomatisasi dan mengelola proses bisnis operasional bengkel atau toko suku cadang (sparepart) mobil. Sistem ini mencakup manajemen data master (barang, supplier, customer, pengguna), pengelolaan transaksi pembelian dari supplier, transaksi penjualan ke pelanggan, pencetakan invoice otomatis, hingga rekapitulasi laporan keuangan dan inventaris secara akurat.",
  
  overview: "Proyek ini dikembangkan menggunakan framework Laravel dan Bootstrap untuk memastikan performa yang handal, keamanan data, serta tampilan antarmuka (UI) yang responsif dan ramah pengguna. Sistem mengintegrasikan alur kerja dari hulu ke hilir: mulai dari pencatatan barang masuk saat pembelian, pengelolaan stok data barang, transaksi kasir/penjualan, pembuatan invoice resmi, hingga penyediaan laporan periodik (laporan penjualan dan pembelian) untuk memudahkan pemilik usaha mengambil keputusan bisnis.",
  
  features: [
    "Autentikasi & Manajemen Data Pengguna (Hak Akses Multi-Level)",
    "Dashboard Utama dengan Ringkasan Aktivitas Sistem",
    "Manajemen Data Master: Supplier, Customer, dan Data Barang (Sparepart)",
    "Pencatatan Transaksi Pembelian Barang dari Supplier",
    "Pencatatan Transaksi Penjualan & Pembuatan Invoice Penjualan Otomatis",
    "Laporan Komprehensif: Laporan Penjualan dan Laporan Pembelian Berkala",
    "Pengaturan Profil Sistem & Toko"
  ],
  
  technologies: [
    "PHP",
    "Laravel Framework",
    "Bootstrap",
    "MySQL / Relational Database",
    "HTML5 & CSS3",
    "JavaScript"
  ],
  
  contribution: "Bertanggung jawab penuh dalam perancangan arsitektur sistem, pengembangan backend menggunakan Laravel, integrasi antarmuka dengan Bootstrap, pembuatan struktur database relasional untuk stok dan transaksi, hingga implementasi fitur laporan penjualan dan pembelian.",
  
  thumbnail: "assets/projects/engine_master/tn.jpeg",
  
  screenshots: [
    { src: "assets/projects/engine_master/login.jpeg", caption: "Halaman Login Sistem" },
    { src: "assets/projects/engine_master/dashboard.jpeg", caption: "Halaman Dashboard Utama" },
    { src: "assets/projects/engine_master/supp.jpeg", caption: "Manajemen Data Supplier" },
    { src: "assets/projects/engine_master/cust.jpeg", caption: "Manajemen Data Customer" },
    { src: "assets/projects/engine_master/data_barang.jpeg", caption: "Manajemen Data Barang (Sparepart)" },
    { src: "assets/projects/engine_master/pembelian.jpeg", caption: "Transaksi Pembelian Stok" },
    { src: "assets/projects/engine_master/penjualan.jpeg", caption: "Transaksi Penjualan (POS)" },
    { src: "assets/projects/engine_master/inv_penjualan.jpeg", caption: "Halaman Invoice / Faktur Penjualan" },
    { src: "assets/projects/engine_master/user.jpeg", caption: "Manajemen Data Pengguna" },
    { src: "assets/projects/engine_master/profil.jpeg", caption: "Halaman Pengaturan Profil" },
    { src: "assets/projects/engine_master/lap_penjualan.jpeg", caption: "Laporan Penjualan Bulanan/Harian" },
    { src: "assets/projects/engine_master/lap_pembelian.jpeg", caption: "Laporan Pembelian Barang" }
  ],
  
  link: "", 
  linkLabel: "Lihat detail proyek", 
  icon: "settings"
},
 {
  number: "PROJECT / 04", 
  title: "Prediksi Cuaca Berbasis Machine Learning", 
  category: "DATA SCIENCE & PREDICTIVE ANALYTICS", 
  status: "2024",
  subtitle: "Komparasi Algoritma Decision Tree & Random Forest dengan Deployment Sistem",
  
  description: "Proyek ini berfokus pada pembangunan model prediktif untuk mengklasifikasikan dan memprediksi kondisi cuaca berdasarkan parameter historis. Melalui tahapan pengolahan data yang komprehensif, proyek ini membandingkan performa dua algoritma klasifikasi populer yaitu Decision Tree dan Random Forest. Berdasarkan hasil evaluasi pengujian, algoritma Decision Tree menunjukkan tingkat akurasi yang lebih unggul, sehingga dipilih dan diimplementasikan ke dalam sistem siap pakai (deployment).",
  
  overview: "Alur pengerjaan proyek ini dimulai dari pengumpulan dataset cuaca, melakukan data encoding untuk mengubah variabel kategorikal, serta menganalisis hubungan antar-variabel menggunakan Heatmap Matriks korelasi. Selanjutnya, data dilatih dan diuji menggunakan algoritma Decision Tree dan Random Forest. Model Decision Tree yang terpilih karena tingkat akurasinya yang lebih tinggi kemudian di-deploy ke dalam antarmuka aplikasi agar dapat diakses dan digunakan untuk prediksi cuaca secara real-time.",
  
  features: [
    "Pengolahan & Transformasi Data Cuaca (Data Encoding)",
    "Analisis Hubungan Fitur Menggunakan Heatmap Korelasi",
    "Pemodelan Klasifikasi dengan Algoritma Decision Tree & Random Forest",
    "Evaluasi & Komparasi Performa Akurasi Model",
    "Implementasi Model Terbaik (Deployment Berbasis Decision Tree untuk Prediksi Cuaca)"
  ],
  
  technologies: [
    "Python",
    "Scikit-Learn",
    "Decision Tree Classifier",
    "Random Forest Classifier",
    "Pandas & NumPy",
    "Matplotlib & Seaborn",
    "Machine Learning Deployment"
  ],
  
  contribution: "Bertanggung jawab penuh dalam seluruh tahapan pipeline machine learning—mulai dari pembersihan dan encoding data cuaca, pembuatan matriks korelasi (heatmap), pelatihan dan pengujian model menggunakan Decision Tree serta Random Forest, melakukan evaluasi akurasi, hingga proses deployment model terpilih ke dalam sistem aplikasi.",
  
  thumbnail: "assets/projects/prediksi_cuaca/tn.png",
  
  screenshots: [
    { src: "assets/projects/prediksi_cuaca/data_cuaca.png", caption: "Tampilan Dataset & Informasi Cuaca" },
    { src: "assets/projects/prediksi_cuaca/tbl_encoding.png", caption: "Proses & Tabel Data Encoding" },
    { src: "assets/projects/prediksi_cuaca/data_pengkodean.png", caption: "Hasil Akhir Data Pengkodean" },
    { src: "assets/projects/prediksi_cuaca/heatmap.png", caption: "Heatmap Matriks Korelasi Fitur" },
    { src: "assets/projects/prediksi_cuaca/hasil_dt.png", caption: "Hasil Pengujian Algoritma Decision Tree" },
    { src: "assets/projects/prediksi_cuaca/hasil_rf.png", caption: "Hasil Pengujian Algoritma Random Forest" },
    { src: "assets/projects/prediksi_cuaca/hasil.png", caption: "Deployment & Antarmuka Sistem Prediksi" }
  ],
  
  link: "", 
  linkLabel: "Lihat detail proyek", 
  icon: "cloud-sun"
},
 {
  number: "PROJECT / 05", 
  title: "SiLaundree", 
  category: "WEB DEVELOPMENT & INFORMATION SYSTEM", 
  status: "2025",
  subtitle: "Sistem Informasi Manajemen Laundry Berbasis Web dengan Integrasi WhatsApp",
  
  description: "SiLaundree adalah aplikasi manajemen operasional usaha laundry berbasis website yang dirancang untuk merapikan pencatatan transaksi dan meningkatkan pelayanan pelanggan. Dikembangkan menggunakan Laravel dan Bootstrap, sistem ini mendukung pengelolaan tarif layanan (kiloan & satuan), pencatatan data pelanggan, pembuatan laporan keuangan, serta pengiriman nota digital dan notifikasi progres pengerjaan secara otomatis langsung ke WhatsApp pelanggan.",
  
  overview: "Proyek ini memodelkan alur kerja bisnis laundry modern untuk mengatasi permasalahan pencatatan manual dan keterlambatan informasi kepada pelanggan. Melalui SiLaundree, kasir atau pengelola usaha dapat menginput transaksi berbasis kiloan maupun satuan secara cepat, mencetak nota fisik maupun digital, serta memanfaatkan integrasi WhatsApp Gateway untuk mengirimkan bukti transaksi dan pembaruan status pengerjaan laundry. Selain itu, sistem menyediakan fitur rekapitulasi laporan transaksi yang dapat dicetak untuk kebutuhan evaluasi keuangan.",
  
  features: [
    "Manajemen Data Pelanggan & Hak Akses Pengguna (Multi-User)",
    "Pengaturan Tarif & Paket Layanan (Kiloan dan Satuan)",
    "Pencatatan Transaksi Laundry & Kalkulasi Biaya Otomatis",
    "Integrasi WhatsApp Gateway (Kirim Nota Digital & Update Progres Laundry)",
    "Pencetakan Nota Transaksi (Resi / Bukti Bayar)",
    "Laporan Transaksi Periodik & Fitur Cetak Laporan Keuangan"
  ],
  
  technologies: [
    "PHP",
    "Laravel Framework",
    "Bootstrap",
    "MySQL / Relational Database",
    "WhatsApp API / Gateway Integration",
    "HTML5 & CSS3",
    "JavaScript"
  ],
  
  contribution: "Bertanggung jawab dalam perancangan arsitektur sistem dan database relasional, pengembangan backend menggunakan Laravel, integrasi UI responsif dengan Bootstrap, serta implementasi fitur unik integrasi WhatsApp API untuk notifikasi otomatis dan pencetakan nota/laporan.",
  
  thumbnail: "assets/projects/laundry/tn.png",
  
  screenshots: [
    { src: "assets/projects/laundry/login.jpg", caption: "Halaman Login Sistem" },
    { src: "assets/projects/laundry/dashboard.jpg", caption: "Halaman Dashboard Utama" },
    { src: "assets/projects/laundry/pelanggan.jpg", caption: "Manajemen Data Pelanggan" },
    { src: "assets/projects/laundry/data_pengguna.jpg", caption: "Manajemen Data Pengguna" },
    { src: "assets/projects/laundry/harga_layanan_stn.jpg", caption: "Pengaturan Paket Layanan Satuan" },
    { src: "assets/projects/laundry/harga_layanan_kln.jpg", caption: "Pengaturan Paket Layanan Kiloan" },
    { src: "assets/projects/laundry/data_transaksi.jpg", caption: "Halaman Pengelolaan Transaksi Laundry" },
    { src: "assets/projects/laundry/lap_transaksi.jpg", caption: "Halaman Rekapitulasi Laporan Transaksi" },
    { src: "assets/projects/laundry/cetak_laporan.jpg", caption: "Halaman Cetak Laporan Keuangan" },
    { src: "assets/projects/laundry/cetak_nota.jpg", caption: "Pratinjau & Cetak Nota Laundry" }
  ],
  
  link: "", 
  linkLabel: "Lihat detail proyek", 
  icon: "washing-machine"
},
{
  number: "PROJECT / 06", 
  title: "SapaID", 
  category: "MOBILE PROGRAMMING & APP DEVELOPMENT", 
  status: "2025",
  subtitle: "Aplikasi Mobile Chat & Komunikasi Real-Time (Replika WhatsApp) Berbasis Flutter",
  
  description: "SapaID adalah aplikasi perpesanan instan (chatting app) berbasis mobile yang dikembangkan menggunakan Flutter dan Dart. Terinspirasi dari aplikasi WhatsApp, SapaID dirancang untuk menghadirkan pengalaman komunikasi digital yang familiar dan responsif—mencakup fitur otentikasi pengguna, ruang obrolan (chat), pembaruan status/cerita (pembaharuan), forum komunitas, riwayat panggilan, hingga halaman pengaturan profil yang interaktif.",
  
  overview: "Proyek ini mengeksplorasi kemampuan pengembangan aplikasi lintas platform (cross-platform) menggunakan framework Flutter untuk membangun antarmuka seluler yang dinamis dan halus. Dari segi alur, aplikasi dimulai dari halaman sambutan (welcome screen) serta proses registrasi/login, lalu mengarahkan pengguna ke navigasi utama yang menyerupai standar aplikasi perpesanan modern seperti daftar chat aktif, pembaruan status, fitur komunitas, menu panggilan suara/video, hingga kustomisasi profil pengguna.",
  
  features: [
    "Sistem Autentikasi Pengguna (Halaman Registrasi & Login)",
    "Antarmuka Navigasi Utama ala Perpesanan Modern (WhatsApp Style)",
    "Menu Chat / Obrolan Interaktif",
    "Menu Pembaharuan (Status / Story Update)",
    "Menu Komunitas untuk Grup & Diskusi",
    "Menu Riwayat Panggilan",
    "Halaman Pengaturan & Kustomisasi Profil Pengguna"
  ],
  
  technologies: [
    "Flutter Framework",
    "Dart Programming Language",
    "Mobile App Development",
    "UI/UX Mobile Design",
    "State Management",
    "Cross-Platform (Android/iOS)"
  ],
  
  contribution: "Bertanggung jawab penuh dalam perancangan antarmuka seluler, penulisan kode program menggunakan Dart dan Flutter, implementasi struktur navigasi antar-halaman, serta pengembangan komponen fitur replika perpesanan instan dari tahap autentikasi hingga menu pengaturan profil.",
  
  thumbnail: "assets/projects/sapa/tn.png",
  
  screenshots: [
    { src: "assets/projects/sapa/selamatdatang.jpg", caption: "Halaman Selamat Datang (Welcome Screen)" },
    { src: "assets/projects/sapa/regislogin.jpg", caption: "Halaman Registrasi dan Login Pengguna" },
    { src: "assets/projects/sapa/menu_chat.jpg", caption: "Halaman Menu Obrolan (Chat)" },
    { src: "assets/projects/sapa/menu_pembaharuan.jpg", caption: "Halaman Menu Pembaharuan (Status)" },
    { src: "assets/projects/sapa/menu_komunitas.jpg", caption: "Halaman Menu Komunitas" },
    { src: "assets/projects/sapa/menu_panggilan.jpg", caption: "Halaman Menu Riwayat Panggilan" },
    { src: "assets/projects/sapa/menu_pengaturan.jpg", caption: "Halaman Menu Pengaturan Sistem" },
    { src: "assets/projects/sapa/profil.jpg", caption: "Halaman Profil Pengguna" }
  ],
  
  link: "", 
  linkLabel: "Lihat detail proyek", 
  icon: "smartphone"
},
 {
  number: "PROJECT / 07", 
  title: "AQ SENSE", 
  category: "FULLSTACK SYSTEM & MACHINE LEARNING", 
  status: "2026",
  subtitle: "Air Quality Intelligence & Decision Support System Berbasis Web & Mobile",
  
  description: "AQ SENSE (Air Quality Intelligence System) adalah platform Sistem Penunjang Keputusan cerdas yang memadukan pengolahan data Indeks Standar Pencemar Udara (ISPU) dengan kecerdasan buatan (Machine Learning). Sistem ini dirancang untuk memantau, mengelola, dan memprediksi kategori kualitas udara secara akurat di masa mendatang, serta menyajikan rekomendasi kesehatan preventif bagi pengguna melalui aplikasi mobile berbasis Flutter dan panel kontrol administrator berbasis web.",
  
  overview: "Proyek ini dibangun dengan arsitektur modern yang memisahkan sisi manajemen admin dan akses pengguna akhir (mobile). Administrator dapat mengelola data kualitas udara, stasiun pemantauan, pengguna, hingga mengatur basis aturan rekomendasi kesehatan berdasarkan parameter ISPU. Di sisi lain, model Machine Learning menggunakan algoritma LightGBM yang terintegrasi pada backend FastAPI memproses data historis untuk menghasilkan prediksi kategori ISPU. Pengguna mobile dapat memantau kondisi beranda secara real-time, melihat hasil prediksi, membaca panduan kesehatan spesifik, hingga mengecek riwayat pemantauan udara dengan mudah.",
  
  features: [
    "Panel Admin Komprehensif (Manajemen Data Udara, Stasiun, Pengguna, & Prediksi)",
    "Integrasi Model Machine Learning LightGBM untuk Prediksi Kategori ISPU",
    "Manajemen & Pengaturan Rekomendasi Berdasarkan Kategori Kesehatan",
    "Aplikasi Mobile Flutter (Autentikasi Pengguna: Login & Register)",
    "Halaman Beranda & Informasi Status Kualitas Udara Real-Time",
    "Fitur Prediksi Kualitas Udara untuk Periode Mendatang",
    "Panduan Kesehatan & Rekomendasi Preventif Pengguna",
    "Riwayat Pemantauan Udara & Pengelolaan Profil Akun Mobile"
  ],
  
  technologies: [
    "Python",
    "FastAPI (Backend API)",
    "LightGBM (Machine Learning Model)",
    "MySQL (Relational Database)",
    "Flutter & Dart (Mobile Application)",
    "Web Administration Dashboard",
    "RESTful API Integration"
  ],
  
  contribution: "Bertanggung jawab secara menyeluruh dalam perancangan arsitektur sistem AQ SENSE—mulai dari pembangunan backend menggunakan FastAPI dan MySQL, implementasi model prediktif LightGBM untuk analisis ISPU, pengembangan panel admin web, hingga pembuatan aplikasi mobile Flutter (beranda, prediksi, kesehatan, riwayat, dan profil).",
  
  thumbnail: "assets/projects/aq_sense/tn.png",
  
  screenshots: [
    { src: "assets/projects/aq_sense/login-admin.png", caption: "Halaman Login Administrator" },
    { src: "assets/projects/aq_sense/dashboard.png", caption: "Halaman Dashboard Utama Admin" },
    { src: "assets/projects/aq_sense/data_udara.png", caption: "Modul Manajemen Data Kualitas Udara" },
    { src: "assets/projects/aq_sense/data_stasiun.png", caption: "Modul Manajemen Data Stasiun Pemantauan" },
    { src: "assets/projects/aq_sense/pengguna.png", caption: "Modul Manajemen Data Pengguna" },
    { src: "assets/projects/aq_sense/data_prediksi.png", caption: "Halaman Kelola & Hasil Data Prediksi" },
    { src: "assets/projects/aq_sense/rekomendasi.png", caption: "Manajemen Rekomendasi Kategori Kesehatan" },
    { src: "assets/projects/aq_sense/login-register-user.jpg", caption: "Halaman Login dan Register Pengguna Mobile" },
    { src: "assets/projects/aq_sense/beranda-mobile-hd.png", caption: "Halaman Beranda Aplikasi Mobile" },
    { src: "assets/projects/aq_sense/prediksi-mobile-hd.png", caption: "Halaman Prediksi Kualitas Udara Mobile" },
    { src: "assets/projects/aq_sense/kesehatan-mobile-hd.png", caption: "Halaman Informasi Kesehatan & Rekomendasi" },
    { src: "assets/projects/aq_sense/riwayat-udara-mobile-hd.png", caption: "Halaman Riwayat Pemantauan Mobile" },
    { src: "assets/projects/aq_sense/profil-mobile-hd.png", caption: "Halaman Profil Akun Pengguna Mobile" }
  ], 
  
  link: "", 
  linkLabel: "Lihat detail proyek", 
  icon: "wind"
}
];

const teamContactEmail = "pancanexora05@gmail.com";

const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
}[char]));

const iconMarkup = (name) => `<i data-lucide="${escapeHTML(name || "layers-3")}" aria-hidden="true"></i>`;

function safeExternalLink(url) {
  if (!url) return "";
  try {
    const parsed = new URL(url, window.location.href);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return "";
    return parsed.href;
  } catch { return ""; }
}

function renderMemberCard(member) {
  const photoPath = typeof member.photo === "string" && member.photo.startsWith("assets/") ? member.photo : safeExternalLink(member.photo);
  const photo = photoPath
    ? `<img class="member-photo" src="${escapeHTML(photoPath)}" alt="Foto ${escapeHTML(member.name)}" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><div class="member-placeholder" hidden>${iconMarkup("user-round")}</div>`
    : `<div class="member-placeholder">${iconMarkup("user-round")}</div>`;
  return `<article class="member-card">
    <div class="member-photo-wrap">${photo}<span class="member-number">${escapeHTML(member.number)}</span></div>
    <div class="member-content"><span class="member-role">${escapeHTML(member.role || "Anggota Tim")}</span><h3>${escapeHTML(member.name)}</h3><p>${escapeHTML(member.shortBio)}</p>
      <div class="member-card-bottom"><span class="member-field">${escapeHTML(member.study)}</span><button class="member-details-button" type="button" data-member="${escapeHTML(member.number)}">Lihat profil ${iconMarkup("arrow-up-right")}</button></div>
    </div>
  </article>`;
}

function renderProjectCard(project, index) {
  const firstScreenshot = project.screenshots?.[0]?.src;
  const thumbnail = project.thumbnail || firstScreenshot;
  const visual = thumbnail
    ? `<img class="project-thumb" src="${escapeHTML(thumbnail)}" alt="Pratinjau ${escapeHTML(project.title)}" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false;this.parentElement.classList.remove('has-thumb')"><div class="project-image-fallback" hidden>${iconMarkup(project.icon)}<span>Screenshot proyek belum ditambahkan</span></div>`
    : `<div class="project-image-fallback">${iconMarkup(project.icon)}<span>Screenshot proyek belum ditambahkan</span></div>`;
  return `<article class="project-card">
    <div class="project-visual ${thumbnail ? "has-thumb" : ""}">${visual}<span class="project-number">${escapeHTML(project.number || `PROJECT / ${String(index + 1).padStart(2, "0")}`)}</span><span class="project-status">${escapeHTML(project.status || "Proyek")}</span></div>
    <div class="project-content"><span class="project-category">${escapeHTML(project.category)}</span><h3>${escapeHTML(project.title)}</h3><p>${escapeHTML(project.description)}</p>
      <button class="project-link project-link-button" type="button" data-project="${index}">${escapeHTML(project.linkLabel || "Lihat detail proyek")} ${iconMarkup("arrow-up-right")}</button>
    </div>
  </article>`;
}

function renderMemberDialog(member) {
  const photoPath = typeof member.photo === "string" && member.photo.startsWith("assets/") ? member.photo : safeExternalLink(member.photo);
  const avatar = photoPath
    ? `<img class="dialog-avatar" src="${escapeHTML(photoPath)}" alt="Foto ${escapeHTML(member.name)}" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><div class="dialog-avatar dialog-avatar-placeholder" hidden>${iconMarkup("user-round")}</div>`
    : `<div class="dialog-avatar dialog-avatar-placeholder">${iconMarkup("user-round")}</div>`;
  const skills = Array.isArray(member.skills) && member.skills.length ? member.skills.map((skill) => `<span>${escapeHTML(skill)}</span>`).join("") : "<span>Belum ditambahkan</span>";
  const links = [];
  if (member.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(member.email)) links.push(`<a href="mailto:${escapeHTML(member.email)}">${iconMarkup("mail")} Email</a>`);
  const linkedin = safeExternalLink(member.linkedin); if (linkedin) links.push(`<a href="${escapeHTML(linkedin)}" target="_blank" rel="noopener noreferrer">${iconMarkup("linkedin")} LinkedIn</a>`);
  const github = safeExternalLink(member.github); if (github) links.push(`<a href="${escapeHTML(github)}" target="_blank" rel="noopener noreferrer">${iconMarkup("github")} GitHub</a>`);
  return `<div class="dialog-profile-top">${avatar}<div><span class="dialog-role">${escapeHTML(member.role || "Anggota Tim")}</span><h2 id="dialog-name">${escapeHTML(member.name)}</h2><p>${escapeHTML(member.study)}</p></div></div>
    <div class="dialog-body"><p>${escapeHTML(member.shortBio)}</p><div class="dialog-detail"><h3>Pendidikan</h3><p>${escapeHTML(member.education || "Belum ditambahkan.")}</p></div><div class="dialog-detail"><h3>Keahlian</h3><div class="skill-tags">${skills}</div></div><div class="dialog-detail"><h3>Pengalaman & Kontribusi</h3><p>${escapeHTML(member.experience || "Belum ditambahkan.")}</p></div>${links.length ? `<div class="dialog-links">${links.join("")}</div>` : `<p class="member-field">Tautan kontak profesional dapat ditambahkan setelah data anggota dilengkapi.</p>`}</div>`;
}

function renderProjectDialog(project, index) {
  const screenshots = Array.isArray(project.screenshots) ? project.screenshots : [];
  const features = (project.features || []).map((feature) => `<li>${iconMarkup("check-circle-2")}<span>${escapeHTML(feature)}</span></li>`).join("");
  const technologies = (project.technologies || []).map((tech) => `<span>${escapeHTML(tech)}</span>`).join("");
  const externalLink = safeExternalLink(project.link);
  const actions = externalLink ? `<div class="project-detail-actions"><a class="primary-action" href="${escapeHTML(externalLink)}" target="_blank" rel="noopener noreferrer">Buka proyek ${iconMarkup("arrow-up-right")}</a></div>` : "";
  const gallery = screenshots.length ? `<div class="project-gallery-heading"><div><h3>Dokumentasi Visual</h3><p>Screenshot antarmuka atau hasil pengerjaan proyek.</p></div><span class="gallery-counter" id="gallery-counter">01 / ${String(screenshots.length).padStart(2, "0")}</span></div>
    <div class="project-gallery"><div class="project-gallery-main" id="project-gallery-main"></div><div class="gallery-controls"><button class="gallery-nav" id="gallery-prev" type="button" aria-label="Screenshot sebelumnya">${iconMarkup("chevron-left")}<span>Sebelumnya</span></button><p class="gallery-caption" id="gallery-caption" aria-live="polite"></p><button class="gallery-nav" id="gallery-next" type="button" aria-label="Screenshot berikutnya"><span>Berikutnya</span>${iconMarkup("chevron-right")}</button></div></div>
    <div class="project-thumbnails" id="project-thumbnails" aria-label="Pilih screenshot"></div>`
    : `<div class="project-gallery-placeholder">${iconMarkup("image-off")}<strong>Screenshot belum ditambahkan</strong><span>Tambahkan path gambar asli pada properti <code>screenshots</code> proyek ini di js/script.js.</span></div>`;
  return `<div class="project-detail-header"><div class="project-detail-eyebrow"><span>${escapeHTML(project.number || `PROJECT / ${index + 1}`)}</span><span>${escapeHTML(project.category)}</span><span>${escapeHTML(project.status || "")}</span></div><h2 id="project-dialog-title">${escapeHTML(project.title)}</h2><p class="project-detail-subtitle">${escapeHTML(project.subtitle || "Dokumentasi proyek PANCA NEXORA")}</p><p class="project-detail-summary">${escapeHTML(project.description)}</p></div>
    <div class="project-detail-body"><section class="project-gallery-section" aria-label="Galeri proyek">${gallery}</section>
      <div class="project-detail-columns"><section class="project-detail-section"><h3>Tentang Proyek</h3><p>${escapeHTML(project.overview || project.description)}</p><h3 style="margin-top:24px">Fitur dan Fokus Pengerjaan</h3><ul class="project-feature-list">${features || `<li>${iconMarkup("info")}<span>Detail fitur belum ditambahkan.</span></li>`}</ul></section>
      <div><section class="project-detail-section"><h3>Teknologi & Metode</h3><div class="project-tech-tags">${technologies || "Belum ditambahkan"}</div></section><section class="project-detail-section" style="margin-top:22px"><h3>Kontribusi Tim</h3><p>${escapeHTML(project.contribution || "Tambahkan kontribusi yang sudah dikonfirmasi.")}</p></section></div></div>
    </div>`;
}

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") window.lucide.createIcons();
}

function initNavigation() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!links) return;

  const navAnchors = Array.from(links.querySelectorAll('a[href^="#"]'));
  const sectionPairs = navAnchors
    .map((link) => ({ link, section: document.querySelector(link.getAttribute("href")) }))
    .filter((item) => item.section);

  const setActiveLink = (activeLink) => {
    navAnchors.forEach((link) => {
      const isActive = link === activeLink;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  const closeMenu = () => {
    if (!toggle) return;
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Buka menu navigasi");
    document.body.classList.remove("menu-open");
    toggle.innerHTML = iconMarkup("menu");
    refreshIcons();
  };

  if (toggle) {
    toggle.addEventListener("click", () => {
      const willOpen = !links.classList.contains("is-open");
      links.classList.toggle("is-open", willOpen);
      toggle.setAttribute("aria-expanded", String(willOpen));
      toggle.setAttribute("aria-label", willOpen ? "Tutup menu navigasi" : "Buka menu navigasi");
      document.body.classList.toggle("menu-open", willOpen);
      toggle.innerHTML = iconMarkup(willOpen ? "x" : "menu");
      refreshIcons();
    });
  }

  navAnchors.forEach((link) => {
    link.addEventListener("click", () => {
      setActiveLink(link);
      closeMenu();
    });
  });

  // Sorot menu sesuai bagian yang sedang dibaca, bukan hanya saat diklik.
  if ("IntersectionObserver" in window && sectionPairs.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const match = sectionPairs.find((item) => item.section === visible.target);
      if (match) setActiveLink(match.link);
    }, {
      rootMargin: "-24% 0px -58% 0px",
      threshold: [0, 0.1, 0.25, 0.5]
    });
    sectionPairs.forEach(({ section }) => sectionObserver.observe(section));
  }

  // Tandai menu dengan benar ketika halaman dibuka langsung melalui hash.
  const initialLink = navAnchors.find((link) => link.getAttribute("href") === window.location.hash);
  if (initialLink) setActiveLink(initialLink);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}
function initMemberDialog() {
  const dialog = document.getElementById("member-dialog"), content = document.getElementById("member-dialog-content");
  const close = document.getElementById("dialog-close"), grid = document.getElementById("team-grid");
  if (!dialog || !content || !close || !grid) return;
  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-member]"); if (!button) return;
    const member = teamMembers.find((item) => item.number === button.dataset.member); if (!member) return;
    content.innerHTML = renderMemberDialog(member); refreshIcons(); if (typeof dialog.showModal === "function") dialog.showModal();
  });
  close.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener("close", () => { content.innerHTML = ""; });
}

function initProjectDialog() {
  const dialog = document.getElementById("project-dialog"), content = document.getElementById("project-dialog-content");
  const close = document.getElementById("project-dialog-close"), grid = document.getElementById("project-grid");
  if (!dialog || !content || !close || !grid) return;
  let activeScreenshots = [], activeIndex = 0;

  function showScreenshot(index) {
    const main = document.getElementById("project-gallery-main");
    const caption = document.getElementById("gallery-caption");
    const counter = document.getElementById("gallery-counter");
    const prev = document.getElementById("gallery-prev"), next = document.getElementById("gallery-next");
    const thumbnails = document.getElementById("project-thumbnails");
    if (!main || !activeScreenshots.length) return;
    activeIndex = (index + activeScreenshots.length) % activeScreenshots.length;
    const item = activeScreenshots[activeIndex];
    main.innerHTML = `<div class="project-gallery-placeholder">${iconMarkup("image")}<strong>Memuat screenshot...</strong><span>Jika file tidak tersedia, periksa nama dan lokasi gambar di folder assets/projects.</span></div><img src="${escapeHTML(item.src)}" alt="${escapeHTML(item.caption || "Screenshot proyek")}" hidden>`;
    const img = main.querySelector("img"), placeholder = main.querySelector(".project-gallery-placeholder");
    img.addEventListener("load", () => { img.hidden = false; placeholder.hidden = true; }, { once: true });
    img.addEventListener("error", () => { img.hidden = true; placeholder.hidden = false; placeholder.innerHTML = `${iconMarkup("image-off")}<strong>Screenshot belum tersedia</strong><span>Tambahkan gambar asli di <code>${escapeHTML(item.src)}</code>. Gambar ini tidak dibuat otomatis.</span>`; refreshIcons(); }, { once: true });
    if (img.complete && img.naturalWidth > 0) { img.hidden = false; placeholder.hidden = true; }
    if (caption) caption.textContent = item.caption || `Screenshot ${activeIndex + 1}`;
    if (counter) counter.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(activeScreenshots.length).padStart(2, "0")}`;
    if (prev) prev.disabled = activeScreenshots.length < 2;
    if (next) next.disabled = activeScreenshots.length < 2;
    if (thumbnails) thumbnails.querySelectorAll(".project-thumbnail").forEach((button, i) => button.setAttribute("aria-pressed", String(i === activeIndex)));
    refreshIcons();
  }

  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project]"); if (!button) return;
    const index = Number(button.dataset.project), project = projects[index]; if (!project) return;
    content.innerHTML = renderProjectDialog(project, index); activeScreenshots = Array.isArray(project.screenshots) ? project.screenshots : []; activeIndex = 0;
    if (activeScreenshots.length) {
      const thumbs = document.getElementById("project-thumbnails");
      if (thumbs) thumbs.innerHTML = activeScreenshots.map((item, i) => `<button class="project-thumbnail" type="button" data-gallery-index="${i}" aria-label="Tampilkan ${escapeHTML(item.caption || `screenshot ${i + 1}`)}" aria-pressed="${i === 0}"><img src="${escapeHTML(item.src)}" alt="" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span class="project-thumbnail-placeholder" hidden>${iconMarkup("image")}</span></button>`).join("");
      showScreenshot(0);
    }
    refreshIcons(); if (typeof dialog.showModal === "function") dialog.showModal();
  });
  content.addEventListener("click", (event) => {
    const thumb = event.target.closest("[data-gallery-index]"); if (thumb) showScreenshot(Number(thumb.dataset.galleryIndex));
    if (event.target.closest("#gallery-prev")) showScreenshot(activeIndex - 1);
    if (event.target.closest("#gallery-next")) showScreenshot(activeIndex + 1);
  });
  close.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener("close", () => { content.innerHTML = ""; activeScreenshots = []; activeIndex = 0; });
}

function initReveal() {
  const targets = document.querySelectorAll(".member-card, .expertise-card, .project-card, .values-list article");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  targets.forEach((target) => { target.style.opacity = "0"; target.style.transform = "translateY(14px)"; target.style.transition = "opacity .55s ease, transform .55s ease"; });
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.style.opacity = "1"; entry.target.style.transform = "translateY(0)"; currentObserver.unobserve(entry.target); } });
  }, { threshold: 0.12 });
  targets.forEach((target) => observer.observe(target));
}

document.addEventListener("DOMContentLoaded", () => {
  const teamGrid = document.getElementById("team-grid"), projectGrid = document.getElementById("project-grid");
  if (teamGrid) teamGrid.innerHTML = teamMembers.map(renderMemberCard).join("");
  if (projectGrid) projectGrid.innerHTML = projects.map(renderProjectCard).join("");
  const year = document.getElementById("current-year"); if (year) year.textContent = new Date().getFullYear();
  const emailButton = document.getElementById("contact-email-button");
  if (emailButton) {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(teamContactEmail);
    if (validEmail) { emailButton.href = `mailto:${teamContactEmail}`; emailButton.removeAttribute("aria-disabled"); }
    else { emailButton.href = "#contact"; emailButton.setAttribute("aria-disabled", "true"); emailButton.addEventListener("click", (event) => { event.preventDefault(); alert("Alamat email tim belum diatur. Isi variabel teamContactEmail di js/script.js terlebih dahulu."); }); }
  }
  initNavigation(); initMemberDialog(); initProjectDialog(); refreshIcons(); initReveal();
});
