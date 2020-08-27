// Soal 1
var nomor = 2;
var kelipatan = 2;

console.log('LOOPING PERTAMA');

while(nomor <= 20) {
    console.log(nomor + ' - I love coding') ;
    nomor += kelipatan;
}

var nomor = 20;
var kelipatan = 2;

console.log('LOOPING KEDUA');

while(nomor >= 2) {
    console.log(nomor + ' - I will become a frontend developer');
    nomor -= kelipatan;
}

console.log('\n');

// Soal 2
nomor = 0;
for(i = 1; i <= 20; i++) {
    nomor += 1;
    if((nomor % 3 == 0) && (nomor % 2 == 1)) {
        console.log(nomor + ' - I Love Coding');
    }else
    if((nomor % 2) == 1) {
        console.log(nomor + ' - Santai');
    }else
    if((nomor % 2) === 0) {
        console.log(nomor + ' - Berkualitas');
    }
}

console.log('\n');

// Soal 3
var pagar = '';

for(i = 1; i <= 7; i++) {
    for(m = 0; m < i; m++) {
        pagar += '#';
    }
    pagar += '\n';   
}
console.log(pagar);

console.log('\n');

// Soal 4
var kalimat = "saya sangat senang belajar javascript";
var arayKalimat = [];
arayKalimat.push(kalimat.substr(0, 4), kalimat.substr(5, 6), kalimat.substr(12, 6), kalimat.substr(19, 7), kalimat.substr(27, 10));
console.log(arayKalimat);

console.log('\n');

// Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();

for(var nomor = 0; nomor <= 4; nomor++) {
    console.log(daftarBuah[nomor]);
}