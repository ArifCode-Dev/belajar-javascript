let jumlahAngkot = 10;
let angkotBeroperasi = 6;
let noAngkotLembur1 = 8;
let noAngkotLembur2 = 10;
let noAngkotLembur3 = 5;

for (let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && noAngkot !== noAngkotLembur3) {
    console.log("Angkot No. " + noAngkot + " Sedang beroperasi dengan baik!");
  } else if (noAngkot === noAngkotLembur3 || noAngkot === noAngkotLembur1 || noAngkot === noAngkotLembur2) {
    console.log("Angkot No. " + noAngkot + " Sedang Lembur!");
  } else {
    console.log("Angkot No. " + noAngkot + " Sedang tidak beroperasi!");
  }
}
