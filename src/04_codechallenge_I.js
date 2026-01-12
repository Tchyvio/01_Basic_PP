
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

let zahl1 = prompt("Erste natürliche Zahl: ");
let zahl2 = prompt("Zweite natürliche Zahl: ");

let num1 = parseInt(zahl1)
let num2 = parseInt(zahl2)
let summe = num1 + num2
 
console.log("Das Ergebnis Ihrer 2 Zahlen ist: " + summe)

