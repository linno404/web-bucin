# Website Interaktif Single-Page

Website interaktif dengan alur bertahap dan backsound yang dapat dijalankan di Acode.

## 📁 Struktur File

```
📁 project-folder/
├── 📄 index.html      (File HTML utama)
├── 📄 style.css       (File CSS untuk styling)
├── 📄 script.js       (File JavaScript untuk logika)
└── 📄 README.md       (File ini - petunjuk)
```

## 🚀 Cara Menjalankan di Acode

1. **Buka Acode** di Android kamu
2. **Buat folder baru** untuk project ini
3. **Copy semua file** (index.html, style.css, script.js) ke folder tersebut
4. **Buka file index.html** di Acode
5. **Klik tombol Play** (▶️) di pojok kanan atas untuk menjalankan
6. Website akan terbuka di browser Android kamu

## 🎵 Fitur Website

### Scene 1 - Pembuka
- Background dengan overlay gelap
- Teks pembuka
- Tombol "Aku siap" untuk memulai

### Scene 2 - Lagu Dimulai
- Audio player dengan kontrol:
  - Play/Pause
  - Progress bar (bisa di-klik untuk seek)
  - Mute/Unmute
- Teks penjelasan makna lagu

### Scene 3 - Kata-kata
- Card dengan kata-kata bersyukur
- Animasi muncul satu per satu
- 10 kata dengan delay 800ms

### Scene 4 - Kenangan
- 3 foto kenangan yang muncul manual
- Tombol "Tampilkan Kenangan" untuk setiap foto
- Deskripsi di bawah setiap foto

### Scene 5 - Penutup
- Teks penutup
- Tombol "Ulangi" untuk restart
- Tombol "Matikan/Hidupkan Lagu"

## 🎨 Design

- **Nuansa**: Kalem, dewasa, modern
- **Warna**: Netral (warm beige, soft black, cream)
- **Efek**: Glass morphism dengan backdrop blur
- **Animasi**: Smooth transitions dan fade effects
- **Responsive**: Berfungsi di mobile dan desktop

## 🔧 Teknologi

- **HTML5**: Struktur konten
- **CSS3**: Styling dan animasi
- **Vanilla JavaScript**: Logika interaktif
- **No Framework**: Murni HTML/CSS/JS

## 📱 Responsive Design

Website ini dirancang untuk bekerja dengan baik di:
- 📱 Smartphone (Android/iOS)
- 📱 Tablet
- 💻 Desktop/Laptop

## 🎵 Audio

- Audio diputar sekali dari awal sampai akhir
- Tidak terputus saat berpindah scene
- Error handling jika audio gagal dimuat
- Kontrol play/pause dan mute

## 🐛 Troubleshooting

### Audio tidak berfungsi?
- Pastikan browser mendukung autoplay
- Coba refresh halaman
- Audio akan tetap berfungsi meskipun gagal dimuat

### Animasi tidak smooth?
- Pastikan JavaScript diaktifkan
- Coba restart browser
- Periksa koneksi internet

### Tampilan tidak benar?
- Pastikan semua file (HTML, CSS, JS) ada di folder yang sama
- Refresh browser dengan Ctrl+F5 (atau refresh di mobile)

## 🎯 Cara Edit

### Mengubah Teks
- Buka `index.html`
- Cari teks yang ingin diubah
- Edit dan simpan

### Mengubah Warna
- Buka `style.css`
- Cari class yang ingin diubah
- Edit nilai CSS-nya

### Mengubah Kata-kata
- Buka `script.js`
- Cari array `thankfulWords`
- Edit atau tambahkan kata-kata baru

### Mengubah Foto Kenangan
- Buka `script.js`
- Cari array `memories`
- Ganti URL `image` dengan foto kamu
- Edit `description` sesuai keinginan

## 🌟 Tips Tambahan

1. **Simpan foto dengan ukuran yang tepat** (max 400x300px untuk optimasi)
2. **Gunakan format WebP** untuk ukuran file lebih kecil
3. **Test di berbagai device** untuk memastikan responsive
4. **Backup file** sebelum melakukan perubahan besar

## 📄 Lisensi

Website ini gratis untuk digunakan dan dimodifikasi sesuai kebutuhan kamu.

---

**Selamat menikmati website interaktif kamu!** 🎉