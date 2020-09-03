// Soal 1
// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
var waktu = 10000

readBooks(waktu, books[0], function(check1) {
    if(check1){
        var sisaWaktu1 = waktu - books[0].timeSpent;
        readBooks(sisaWaktu1, books[1], function(check2) {
            if(check2){
                var sisaWaktu2 = sisaWaktu1 - books[1].timeSpent;
                readBooks(sisaWaktu2, books[2], function(check3) {
                    if(check3) {
                        var sisaWaktu3 = sisaWaktu2 - books[2].timeSpent;
                        readBooks(sisaWaktu3, books[3], function(check4) {
                            if(check4) {
                                
                            }
                        })
                    }
                })
            }
        })
    }   
})
