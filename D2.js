/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 10;
let number2 = 14;
if (number1 > number2) {
  console.log("Esercizio1", "number1 è maggiore di number2");
} else {
  console.log("Esercizio1", "number2 è maggiore di number1");
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number3 = 7;
if (number3 !== 5) {
  console.log("Esercizio2", "not equal");
} else {
  console.log("Esercizio2", "equal");
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number4 = 100;
if (number4 % 5 === 0) {
  console.log("Esercizio3", "divisibile per 5");
} else {
  console.log("Esercizio3", "non divisibile per 5");
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number5 = 6;
let number6 = 2;
if (number5 === 8 || number6 === 8 || number5 + number6 === 8) {
  console.log("Esercizio4", "Uno dei due numeri o la loro somma è 8");
} else {
  console.log("Esercizio4", "nessuno dei due numeri, ne la loro somma è 8");
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 37;
if (totalShoppingCart >= 50) {
  console.log("Esercizio5", "Hai diritto alla spedizione gratutita");
} else {
  console.log(
    "Esercizio5",
    "Costi di spedizione 10€. Totale carrello",
    totalShoppingCart + 10
  );
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let blackFriday = totalShoppingCart - (totalShoppingCart / 100) * 20;
if (blackFriday >= 50) {
  console.log("Esercizio6", "Hai diritto alla spedizione gratutita");
} else {
  console.log(
    "Esercizio6",
    "Costi di spedizione 10€. Totale carrello",
    blackFriday + 10
  );
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 2;
let num2 = 1;
let num3 = 3;
if (num1 < num2 && num1 < num3 && num2 > num3) {
  console.log("Esercizio7 num1 è il più piccolo, num2>num3", num2, num3, num1);
} else if (num1 > num2 && num1 > num3 && num2 < num3) {
  console.log("Esercizio7 num1 è il più grande, num2<num3", num1, num3, num2);
} else if (num1 < num2 && num1 > num3 && num2 < num3) {
  console.log(
    "Esercizio7 num1 è il numero centrale, num2>num3",
    num2,
    num1,
    num3
  );
} else if (num1 > num2 && num1 < num3 && num3 > num2) {
  console.log(
    "Esercizio7 num1 è il numero centrale, num3>num2",
    num3,
    num1,
    num2
  );
} else if (num1 < num2 && num1 > num3 && num2 > num3) {
  console.log(
    "Esercizio7 num1 è il numero centrale, num2>num3",
    num2,
    num1,
    num3
  );
} else if (num1 < num2 && num1 < num3 && num2 < num3) {
  console.log("Esercizio7 num1 è il più piccolo, num3>num2", num3, num2, num1);
} else if (num1 > num2 && num1 > num3 && num2 > num3) {
  console.log("Esercizio7 num1 è il più grande, num3<num2", num1, num2, num3);
}
/*if (num2 > num3) {
  console.log("num2 è maggiore di num3");
} else {
  console.log("num3 è maggiore di num2");
}*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Anna";
console.log("Esercizio8", typeof myName);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let number7 = 19;
if (number7 % 2 === 0) {
  console.log("Esercizio9", "E'pari");
} else {
  console.log("Esercizio9", "E'dispari");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log("Esercizio11", me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log("Esercizio12", me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log("Esercizio13", me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number = [];
console.log("Esercizio14", number);

number.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("Esercizio14", number);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
number.pop();
number.push(100);
console.log("Esercizio15", number);
