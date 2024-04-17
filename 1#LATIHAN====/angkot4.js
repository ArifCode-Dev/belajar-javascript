let jumlahAngkot = 10;
let angkotBeroperasi = 6;
let noAngkotLembur = 8;

for (let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " Sedang beroperasi dengan baik!");
  } else if (noAngkot === noAngkotLembur) {
    console.log("Angkot No. " + noAngkot + " Sedang Lembur!");
  } else {
    console.log("Angkot No. " + noAngkot + " Sedang tidak beroperasi!");
  }
}
