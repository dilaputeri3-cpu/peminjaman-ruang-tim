// Mengembalikan true jika jadwal bentrok
function cekJadwalBentrok(daftarJadwal, tanggal, ruang) {
  return daftarJadwal.some(
    (j) => j.tanggal === tanggal && j.ruang === ruang
  );
}