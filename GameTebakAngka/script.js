// mengulangi
let l = true;

while (l) {
  // Tangkap input dari Computer
  var c = Math.floor(Math.random() * 10 + 1);
  console.log("Jangan Kasih Siapa-Siapa, \nKomputer Memilih " + c);

  // Sistem Poin
  var poin = 0;

  for (k = 1; k <= 3; k++) {
    // Tangkap input dari user
    var i = prompt("Masukkan tebakanmu (1 - 10) ");
    i = isNaN(i) ? 0 : i;

    // Rules
    var h = "";

    if (i == c) {
      h = "Benar!!!";
      k += 3;
      poin += 1;
      document.getElementById("selebrasi").innerHTML = "Poinmu : " + poin;
    } else {
      h = i < c ? "Terlalu rendah" : "Terlalu tinggi";
      alert("Tebakanmu " + h);
      alert("Kesempatanmu " + k + "/3");
      h = "Salah :(";
      if (i === null) {
        i = 0;
      }
    }
  }
  alert("Kamu memilih " + i + " dan komputer memilih " + c + " \nJadi Tebakanmu " + h);
  l = confirm("Ulangi Lagi? ");
}
