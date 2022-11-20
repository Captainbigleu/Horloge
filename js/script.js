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

// Pour les heures: il faut un angle de 30 ° et qu'en même temps les minutes fassent un tour de (360° / 60)/12.
let angHours = (hours * 360 /12) + (minutes * 6 /12);

//Pour les minutes  : il faut un angle de 6° et qu'en' même temps les secondes fassent un tour de (360° / 60)/60
let angMinutes = (minutes * 6) + (seconds * 6 / 60);

let angSeconds = seconds * 6;


// Déplacer les aiguilles 
function demarrerLaMontre() {
    
    /** 3/360 et la valeur de l'angle que fait l'aiguille des heures pendant le déplacement de l'aiguille des secondes pendant 3600s 
    et des minutes pendant 60 minutes*/
    angHours = angHours + (3/360);

    angMinutes = angMinutes + (6/60); 
    /** 6/360 et la valeur de l'angle que fait l'aiguille des minutes pendant le déplacement de l'aiguille des secondes pendant 60s*/
    angSeconds = angSeconds + 6;

        console.log(`La valeur de l'angle des heures est de ${angHours}`);
        console.log(`La valeur de l'angle des minutes est de ${angMinutes}`);
        console.log(`La valeur de l'angle des secondes est de ${angSeconds}`);

    AIGUILLESEC.style.transform = `rotate(${angSeconds}deg)`;
    AIGUILLEMIN.style.transform = `rotate(${angMinutes}deg)`;
    AIGUILLEHR.style.transform = `rotate(${angHours}deg)`;

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