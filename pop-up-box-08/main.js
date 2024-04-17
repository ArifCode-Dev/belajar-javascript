// POP UP BOX
// alert , prompt , confrim

// alert
alert("hello");
alert("world!");

// prompt
let nama = prompt("masukkan namamu: ");

if (nama === "arif") {
  alert("Selamat Datang Pak Arif");
}if(nama != true){
    alert("selamat datang Orang Asing")
} else {
  alert("selamat datang " + nama);
}

// confrim
let tes = confirm("Apa kamu guy?");
if(tes == true){
    alert("Siap!")
}if(tes == false){
    alert("Halo Canthik:)")
}