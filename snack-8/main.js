//Chiedi un numero di 4 cifre all’utente
var userNumber = prompt('Inserisci un numero a quattro cifre: ');
//e calcola la somma di tutte le cifre che compongono il numero

numberArray = userNumber.split('');
var sum = 0;

for (var i = 0; i < numberArray.length; i++) {
    var el = numberArray[i];
    sum += Number(el);
}

console.log(sum);

