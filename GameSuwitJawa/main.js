let tanya = true;
while (tanya) {
  // menangkap pilihan player
  let p = prompt("pilih: gajah, semut, orang");

  // menangkap pilihan komputer
  // membangkitkan bilangan random
  let comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp <= 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  let hasil = "";
  // console.log(comp);

  // menentukan rules
  if (p == comp) {
    hasil = "Seri!";
  } else if (p == "gajah") {
    // if(comp == "orang"){
    //     hasil = "Menang!";
    // }else{
    //     hasil = "Kalah :(";
    // }
    hasil = comp == "orang" ? "Menang" : "Kalah :(";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "Kalah :(" : "Menang";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "Kalah :(" : "Menang";
  } else {
    hasil = "Anda memasukkan pilihan yang salah";
  }
  // tampilkan hasilnya
  alert("Kamu memilih : " + p + " dan komputer memilih : " + comp + "\nMaka hasilnya : Kamu " + hasil);

  tanya = confirm("Lagi?");
}
alert("terima kasih sudah bermain!");
