# PANCA NEXORA — E-CV Tim

Website E-CV/portofolio tim dengan HTML, CSS, dan JavaScript murni. Desain light premium menggunakan putih, navy, dan silver.

## Struktur proyek

```text
panca-nexora-ecv/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── panca-nexora-mark.svg
└── README.md
```

## Menjalankan di VS Code

1. Ekstrak folder proyek.
2. Buka folder `panca-nexora-ecv` di Visual Studio Code.
3. Pasang ekstensi **Live Server** jika belum ada.
4. Klik kanan `index.html`, lalu pilih **Open with Live Server**.

Alternatif: buka `index.html` langsung di browser. Live Server direkomendasikan untuk pengalaman pengembangan yang lebih nyaman.

## Data yang perlu diganti

Buka `js/script.js`:

- `teamMembers`: ubah nama, jabatan/peran, pendidikan, deskripsi, keahlian, pengalaman, foto, email, LinkedIn, dan GitHub untuk kelima anggota.
- `projects`: ubah nama proyek, kategori, status/tahun, deskripsi, ikon, dan tautan proyek.
- `teamContactEmail`: ganti `email.tim@example.com` dengan email resmi tim.

Bagian keahlian pada halaman utama juga memiliki contoh tag di `index.html`. Sesuaikan agar mencerminkan kemampuan asli tim.

### Menambahkan foto anggota

1. Buat folder atau gunakan folder `assets/`.
2. Simpan foto misalnya sebagai `anggota-1.jpg`, `anggota-2.jpg`, dan seterusnya.
3. Isi properti `photo` pada data anggota, misalnya:

```js
photo: "assets/anggota-1.jpg",
```

Pilih foto dengan pencahayaan yang baik dan rasio portrait. Untuk performa yang lebih baik, optimalkan ukuran gambar sebelum digunakan.

### Menambahkan tautan proyek

Isi properti `link` pada data proyek dengan URL lengkap yang diawali `https://`. Jika dikosongkan, tombol hanya tampil sebagai label nonaktif.

## Deploy ke Vercel

### Cara yang direkomendasikan: GitHub + Vercel

1. Buat akun atau masuk ke [GitHub](https://github.com/).
2. Buat repository baru, misalnya `panca-nexora-ecv`.
3. Unggah semua file dan folder proyek dengan struktur yang sama.
4. Masuk ke [Vercel](https://vercel.com/) dan pilih **Continue with GitHub**.
5. Pilih **Add New → Project**, lalu impor repository `panca-nexora-ecv`.
6. Untuk website statis HTML/CSS/JS:
   - Framework Preset: **Other**
   - Build Command: kosongkan
   - Output Directory: kosongkan atau gunakan default root
   - Install Command: tidak diperlukan
7. Klik **Deploy**.
8. Setelah selesai, buka URL `.vercel.app` yang diberikan Vercel.

Setiap perubahan yang dikirim ke branch produksi yang terhubung akan memicu deployment baru secara otomatis.

## Catatan

- Website ini tidak memerlukan backend atau database untuk versi statis.
- Google Fonts dan ikon Lucide memerlukan koneksi internet. Jika ingin semua aset lokal, unduh dan sertakan aset yang sesuai.
- Pastikan izin penggunaan foto, informasi kontak, dan portofolio telah diperoleh dari setiap anggota.
- Ganti semua data contoh sebelum membagikan website sebagai profil resmi.
