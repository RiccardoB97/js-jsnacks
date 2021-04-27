// Il software deve chiedere per 10 volte all’utente di inserire un numero.

var sum = 0;

for (var i = 0; i < 10; i++) {
    var userNumber = (Number(prompt("Choose a number")))
    //Il programma stampa la somma di tutti i numeri inseriti.  
    sum += userNumber;
}
console.log(sum);

