let jumlahAngkot = 10;
let angkotBeroperasi = 6;

for (let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " Beroperasi dengan baik!");
  } else {
    console.log("Angkot No. " + noAngkot + " Sedang tidak beroperasi!");
  }
}
