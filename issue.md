# Epic: Frontend UI Aplikasi POS Restoran & Pemesanan Customer

## Deskripsi Singkat
Tujuan dari task ini adalah membangun antarmuka pengguna (UI) untuk aplikasi Point of Sale (POS) yang akan digunakan oleh staf restoran, serta aplikasi pemesanan untuk pelanggan. Pada tahap ini, **fokus pengembangan murni pada sisi frontend**. Tidak perlu ada implementasi backend nyata; semua data harus berasal dari *dummy data* dan diakses melalui Mock API untuk kebutuhan testing.

## Tech Stack
- **Build Tool:** Vite
- **Framework:** React
- **Styling:** Tailwind CSS

## Referensi Desain
Gunakan referensi desain UI berikut sebagai acuan utama dalam pembuatan komponen, layout, dan interaksi:
👉 [Link Desain UI (Stitch)](https://stitch.withgoogle.com/u/1/projects/12941796155516667293?pli=1)

## Instruksi High-Level

### 1. Inisialisasi Proyek
- Buat proyek baru menggunakan Vite dengan template React.
- Instal dan lakukan konfigurasi dasar Tailwind CSS.
- Siapkan struktur folder (misal: `src/components`, `src/pages`, `src/api` untuk mock, dll).
- Konfigurasi *router* (misal: React Router) untuk memisahkan jalur (route) aplikasi customer dan aplikasi POS.

### 2. Persiapan Mock API & Dummy Data
- Buat modul/service Mock API sederhana. Anda dapat menggunakan fungsi *asynchronous* yang mengembalikan (return) JSON statis untuk mensimulasikan jeda jaringan (network delay).
- Sediakan *dummy data* yang representatif untuk:
  - **Katalog Menu:** ID, nama item, harga, deskripsi, kategori, dan URL gambar dummy.
  - **Keranjang (Cart) / Order:** Status pesanan, item yang dipesan, dan total harga.

### 3. Aplikasi Pemesanan Customer (Customer App)
- **Halaman Menu:** Menampilkan daftar kategori dan produk makanan/minuman. Menyediakan fungsi untuk menambah produk ke keranjang.
- **Halaman Keranjang (Cart):** Menampilkan ringkasan pesanan, fungsi ubah kuantitas (+/-), perhitungan total harga otomatis, dan tombol untuk mengonfirmasi pesanan.
- *Catatan:* Aplikasi customer umumnya berfokus pada desain *mobile-first*.

### 4. Aplikasi POS Restoran (POS App)
- **Halaman Utama POS:** Antarmuka katalog yang dioptimalkan untuk kasir/staf agar dapat mencari dan memilih item dengan cepat.
- **Panel Bill / Order Aktif:** Area persisten di layar yang menampilkan pesanan pelanggan saat ini beserta subtotal, pajak, dan total keseluruhan.
- **Simulasi Pembayaran:** Modal atau halaman untuk mengonfirmasi metode pembayaran dan mensimulasikan transaksi berhasil.
- *Catatan:* Aplikasi POS umumnya berfokus pada desain layar lebar (*tablet/desktop*).

## Aturan Implementasi Tambahan
- **Jangan bangun backend.** Semua proses (seperti "fetching" menu atau "menyimpan" pesanan) cukup disimulasikan (mocking) di level frontend.
- Terapkan prinsip komponen modular (seperti merancang *Button*, *Card*, *Input* yang reusable).
- Pastikan tampilan *pixel-perfect* semaksimal mungkin mengacu pada tautan desain yang diberikan.

## Kriteria Penerimaan (Acceptance Criteria)
- [ ] Proyek berjalan normal di mode *development* (`npm run dev`).
- [ ] Komponen menggunakan Tailwind CSS dengan *styling* yang mengacu pada desain.
- [ ] Terdapat simulasi data (mock API) sehingga UI tidak kosong.
- [ ] Alur utama pengguna (Pilih Menu -> Masuk Keranjang -> Checkout/Bayar) dapat disimulasikan dari awal hingga akhir tanpa *error*.
