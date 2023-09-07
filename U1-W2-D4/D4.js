/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
  return l1 * l2;
}

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return;
  }
  if (n1 !== n2) {
    return n1 + n2;
  }
  return (n1 + n2) * 3;
}

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n) {
  if (n <= 19) {
    return 19 - n;
  } else {
    return (n - 19) * 3;
  }
}

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  }
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str) {
  if (str.length < 7) {
    return;
  }
  const inizio = str.slice(0, 7);
  console.log("inizio", inizio);
  if (inizio === "EPICODE") {
    return str;
  } else {
    return "EPICODE".concat(str);
  }
}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n) {
  if (typeof n !== "number") {
    return;
  }
  if (n < 0) {
    return;
  }
  if (n % 3 === 0) {
    console.log("il numero è multiplo di 3");
  }
  if (n % 7 === 0) {
    console.log("il numero è multiplo di 7");
  }
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
  if (typeof str !== "string") {
    return;
  }
  const array = [];
  for (let i = str.length - 1; i >= 0; i--) {
    array.push(str.charAt(i));
  }
  return array.join("");
}

console.log("stringa inversa", reverseString("EDOCIPE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(str) {
  if (typeof str !== "string") {
    return;
  }
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase().concat(words[i].slice(1));
  }
  return words.join(" ");
}

console.log(
  upperFirst(
    "Scrivi una funzione di nome upperFirst, che riceve come parametro una stringa formata" +
      "da diverse parole.La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa."
  )
);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str) {
  if (typeof str !== "string") {
    return;
  }
  return str.slice(1, -1);
}

console.log(cutString("Ecco un esempio di stringa"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 11));
  }
  return array;
}

console.log(giveMeRandom(5));
