// Crea un array vuoto.
var oddNumbers = []


//Chiedi per 6 volte all’utente di inserire un numero,
for (var i = 0; i < 6; i++) {
    var userNumber = Number(prompt("Insert a number: "))
    if (userNumber % 2 != 0) {
        oddNumbers.push(userNumber)
    }
}
console.log(oddNumbers);

// se è dispari inseriscilo nell’array