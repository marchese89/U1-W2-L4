// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
function giveMeRandom(n) {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 11));
  }
  return array;
}
function checkArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      console.log(
        "l'elemento in pos. " + i + " è maggiore di 5, infatti vale " + arr[i]
      );
    }
  }
}

checkArray(giveMeRandom(7));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

function shoppingCartTotal(shoppingCart) {
  let total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return total;
}

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

function addToShoppingCart(item) {
  shoppingCart.push(item);
  return shoppingCart.length;
}

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart(shoppingCart) {
  let max = shoppingCart[0].price;
  let index = 0;
  for (let i = 1; i < shoppingCart.length; i++) {
    if (shoppingCart[i].price > max) {
      index = i;
      max = shoppingCart[i];
    }
  }
  return max;
}

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart(shoppingCart) {
  return shoppingCart[shoppingCart.length - 1];
}

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

function loopUntil(x) {
  if (x < 0 || x > 9) {
    return;
  }
  let cont = 0;
  while (cont !== 3) {
    let random = Math.floor(Math.random() * 10);
    console.log(random);
    if (random > x) {
      cont++;
    } else {
      cont = 0;
    }
  }
}
//loopUntil(4);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

function average(arr) {
  let somma = 0;
  let totale = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      somma += arr[i];
      totale++;
    }
  }

  return somma / totale;
}

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

function longest(arr) {
  let maxLength = arr[0].length;
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
      index = i;
    }
  }
  return arr[index];
}

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

function antiSpam(emailContent) {
  if (
    emailContent.indexOf("SPAM") === -1 &&
    emailContent.indexOf("SCAM") === -1
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(antiSpam("  cdscvdvd SCAM vcjdsbkvjd kdjhv djvb"));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

function pastDays(date) {
  if (!(date instanceof Date)) {
    return;
  }
  const currentDate = new Date();
  const differenzaInMillisecondi = currentDate - date;
  const millisecondiInGiorni = 24 * 60 * 60 * 1000;
  const giorniPassati = Math.floor(
    differenzaInMillisecondi / millisecondiInGiorni
  );

  return giorniPassati;
}

console.log(
  "sono passati " +
    pastDays(new Date("2023-09-01")) +
    " giorni dalla data inserita"
);

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

function matrixGenerator(x, y) {
  const matrix = new Array(y);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(x);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = i.toString() + j.toString();
    }
  }

  return matrix;
}

console.log(matrixGenerator(5, 3));
