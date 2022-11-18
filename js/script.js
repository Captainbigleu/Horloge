// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuelle à l'aide de l'objet Date()
const start = new Date();
console.log(start);

//Stocker l'heure , minute , seconde  dans des varaiables
let seconds = start.getSeconds();
console.log(seconds);

let minutes = start.getMinutes();
console.log(minutes);

let hours = start.getHours();
console.log(hours);

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

/* heures: angle=30° ;  minutes: angle= 6° ; secondes : angle = 6)
*/


// Déplacer les aiguilles 
function demarrerLaMontre() {
    console.log("corriger l'affichage des aiguilles");
    AIGUILLESEC.style.transform = `rotate(${seconds*6}deg)`
    AIGUILLEMIN.style.transform = `rotate(${minutes*6}deg)`
    AIGUILLEHR.style.transform = `rotate(${hours*30}deg)`
    secondUp();
}

function secondUp() {
    seconds++;
    console.log(`maintenant les secondes sont de ${seconds}`);
    if (seconds == 60) {
        console.log(`secondes à zero et on incrémente les minutes`);
        seconds = 0;
        minuteUp();
    } else {
        console.log("continue d'incrementer");
    }
}

function minuteUp() {
    minutes++;
    console.log(`maintenant les minutes sont de ${minutes}`)
    if (minutes == 60){
        console.log("minutes = 0");
        minutes = 0;
        heureUp();
    } else {
        console.log("continue d'incrémenter");
    }

}

function heureUp(){
    heures++;
    console.log(`maintenant les heures sont de ${heures}`)
    if (heures == 12){
        console.log("heures = 0");
        heures = 0;
    } else {
        console.log("continue d'incrémenter");
    }
}

// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);