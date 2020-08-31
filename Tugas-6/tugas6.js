// Soal 1
const luasLingkaran = (jariJari) => {
    let luas = '';
    const phi = 3.14;
    return luas = phi * (jariJari*jariJari);
}

console.log(luasLingkaran(5));

const kelilingLingkaran = (jariJari) => {
    let keliling = '';
    const phi = 3.14;
    return keliling = 2 * phi * jariJari;
}

console.log(kelilingLingkaran(5));

console.log('\n');

// Soal 2
let kalimat = "";

let tambahKata = () => {
    const kataPertama = "saya";
    const kataKedua = "adalah";
    const kataKetiga = "seorang";
    const kataKeempat = "frontend";
    const kataKelima = "developer";
    let kalimat = "";
    return kalimat = `${kataPertama} ${kataKedua} ${kataKetiga} ${kataKeempat} ${kataKelima}`;
}

kalimat = tambahKata();
console.log(kalimat);

console.log('\n');

// Soal 3
const newFunction = function literal(firstName, lastName){
    return {
      firstName,
      lastName,
      fullName: function(){
        console.log(firstName + " " + lastName)
        return 
      }
    }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName() 

console.log('\n');

// Soal 4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation, spell } = newObject;

console.log(firstName, lastName, destination, occupation);

console.log('\n');

// Soal 5
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];

console.log(combined);