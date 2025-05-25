document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formDaftar");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Cegah reload halaman

      const nama = document.getElementById("nama").value.trim();
      const email = document.getElementById("email").value.trim();
      const telepon = document.getElementById("telepon").value.trim();
      const alamat = document.getElementById("alamat").value.trim();
      const jurusan = document.getElementById("jurusan").value;

      const emailRegex = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
      const phoneRegex = /^[0-9]{10,15}$/;

      if (!nama || !email || !telepon || !alamat || !jurusan) {
        alert("Harap lengkapi semua kolom formulir.");
        return;
      }

      if (!emailRegex.test(email)) {
        alert("Email tidak valid.");
        return;
      }

      if (!phoneRegex.test(telepon)) {
        alert("Nomor telepon harus angka 10–15 digit.");
        return;
      }

      // Jika semua valid
      alert("Pendaftaran berhasil dikirim!\nTerima kasih telah mendaftar.");
      form.reset(); // Kosongkan form
    });
  });