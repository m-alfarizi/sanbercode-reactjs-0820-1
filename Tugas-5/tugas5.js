// Soal 1
function halo() {
    return "Halo Sanbers!";
}

console.log(halo());

console.log('\n');

// Soal 2
function kalikan(num1, num2) {
    return num1 * num2;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

console.log('\n');

// Soal 3
function introduce(name, age, address, hobby) {
    return "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!";  
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalkan = introduce(name, age, address, hobby);
console.log(perkenalkan);

console.log('\n');

// Soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];

var objectDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    "jenis kelamin": arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    "tahun lahir": arrayDaftarPeserta[3]
}

console.log(objectDaftarPeserta);

console.log('\n');

// Soal 5
var dataBuah = [{nama: "strawberry", warna: "merah", "ada bijinya": "tidak", harga: 9000}, 
                {nama: "jeruk", warna: "oranye", "ada bijinya": "ada", harga: 8000}, 
                {nama: "Semangka", warna: "Hijau & Merah", "ada bijinya": "ada", harga: 10000}, 
                {nama: "Pisang", warna: "Kuning", "ada bijinya": "tidak", harga: 5000}];

console.log(dataBuah[0]);

console.log('\n');

// Soal 6
var dataFilm = [];

function tambahDataFilm(namaFilm, durasiFilm, genreFilm, tahunFilm) {
    dataFilm.push({nama: namaFilm, durasi: durasiFilm, genre: genreFilm, tahun: tahunFilm});
}

tambahDataFilm("Avengers : Endgame", "3 jam 2 menit", "Action", 2019);
console.log(dataFilm);