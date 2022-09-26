// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

const date = new Date();

// console.log("nombres d'heures actuelles", hour);
// console.log("nombres de minutes actuelles", minute);
// console.log("nombres de secondes",second, )

//Stocker l'heure , minute , seconde  dans des varaiables
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
// console.log("nombres d'heures actuelles", hour);
// console.log("nombres de minutes actuelles", minute);
// console.log("nombres de secondes", second);

// let afficherHeure = `$(hour) + $(minute() + $(second))`
// console.log(afficherHeure)

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
let mouvementAiguilleHr = hour * 30;
let mouvementAiguilleMinutes = minute * 6;
let mouvementAiguilleSecondes = second * 6;
// console.log(hours);
// console.log(minutes);
// console.log(secondes);

// Déplacer les aiguilles
function demarrerLaMontre() {
  mouvementAiguilleSecondes += 6;
  mouvementAiguilleMinutes += 6/60;
  mouvementAiguilleHr += 30/42300;
  AIGUILLEHR.style.transform = `rotate(${mouvementAiguilleHr}deg)`;
  AIGUILLEMIN.style.transform = `rotate(${mouvementAiguilleMinutes}deg)`;
  AIGUILLESEC.style.transform = `rotate(${mouvementAiguilleSecondes}deg)`;

  //   console.log("coucou");
  //   console.log(hour);
  //   console.log(minute);
  //   console.log(second);
}
// Exercuter la fonction chaque second
let interval = setInterval(demarrerLaMontre, 1000);
