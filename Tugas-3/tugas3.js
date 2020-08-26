// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

// Menggabungkan dengan concat
console.log(kataPertama.concat(" ", kataKedua.charAt(0).toUpperCase().concat(kataKedua.substring(1).concat(" ", kataKetiga.concat(" ", kataKeempat.toUpperCase())))));
// ATAU
// Menggabungkan dengan +
console.log(kataPertama + " " + kataKedua.charAt(0).toUpperCase() + kataKedua.substring(1) + " " + kataKetiga + " " + kataKeempat.toUpperCase());

// Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

// Jumlahkan
hasilJumlah = Number(kataPertama) + Number(kataKedua) + Number(kataKetiga) + Number(kataKeempat);
console.log(hasilJumlah);

// Soal 3
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);

// Soal 4
var nilai = 75;

if (nilai >= 80) {
    console.log("A");
} else 
if (nilai >= 70 && nilai < 80) {
    console.log("B");
} else 
if (nilai >= 60 && nilai < 70) {
    console.log("C");
} else 
if (nilai >= 50 && nilai < 60) {
    console.log("D");
} else 
if (nilai < 50) {
    console.log("E");
}

// Soal 5
var tanggal = 7;
var bulan = 8;
var tahun = 1999;

switch(bulan) {
    case 1: strBulan = "Januari"; break;
    case 2: strBulan = "Februari"; break;
    case 3: strBulan = "Maret"; break;
    case 4: strBulan = "April"; break;
    case 5: strBulan = "Mei"; break;
    case 6: strBulan = "Juni"; break;
    case 7: strBulan = "Juli"; break;
    case 8: strBulan = "Agustus"; break;
    case 9: strBulan = "September"; break;
    case 10: strBulan = "Oktober"; break;
    case 11: strBulan = "November"; break;
    case 12: strBulan = "Desember"; break;      
}

// Menggabungkan dengan concat
console.log(tanggal.toString().concat(" ",strBulan.toString().concat(" ",tahun))); 
// ATAU
// Menggabungkan dengan +
console.log(tanggal + " " + strBulan + " " +tahun);

