# Cara Mengupload Website ke GitHub

Berikut adalah langkah-langkah untuk mengupload website Anda ke GitHub menggunakan Git dan GitHub CLI:

1. **Cek apakah Git sudah terinstall**  
   Buka terminal dan jalankan:  
   ```
   git --version
   ```  
   Jika muncul versi Git, berarti sudah terinstall. Jika belum, silakan install Git terlebih dahulu dari https://git-scm.com/downloads

2. **Inisialisasi Git repository di folder project Anda**  
   Jalankan perintah:  
   ```
   git init
   ```

3. **Tambahkan semua file ke staging area**  
   Jalankan perintah:  
   ```
   git add .
   ```

4. **Commit file dengan pesan awal**  
   Jalankan perintah:  
   ```
   git commit -m "Initial commit of website files"
   ```

5. **Buat branch baru dengan prefix `blackboxai/`**  
   Contoh:  
   ```
   git checkout -b blackboxai/main
   ```

6. **Cek apakah GitHub CLI (gh) sudah terinstall**  
   Jalankan perintah:  
   ```
   gh --version
   ```  
   Jika belum terinstall, silakan install dari https://cli.github.com/

7. **Buat repository baru di GitHub dan hubungkan dengan folder lokal**  
   Jalankan perintah:  
   ```
   gh repo create nama-repo-anda --public --source=. --remote=origin
   ```  
   Ganti `nama-repo-anda` dengan nama repository yang Anda inginkan.

8. **Push branch ke GitHub**  
   Jalankan perintah:  
   ```
   git push -u origin blackboxai/main
   ```

Setelah langkah-langkah ini selesai, website Anda sudah terupload di GitHub dan dapat diakses melalui repository yang telah dibuat.

Jika Anda membutuhkan bantuan lebih lanjut, silakan tanyakan.
