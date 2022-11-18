// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuelle à l'aide de l'objet Date()
const start = new Date();
console.log(start);

//Stocker l'heure , minute , seconde  dans des varaiables
let seconds= start.getSeconds();
console.log(seconds);

let minutes= start.getMinutes();
console.log(minutes);

let hours= start.getHours();
console.log(hours);

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

/* heures: angle=30° ;  minutes: angle= 6° ; secondes : angle = 6)
*/


// Déplacer les aiguilles 
function demarrerLaMontre() {

}

// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);