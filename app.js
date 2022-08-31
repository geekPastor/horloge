/*let nomArray = ["majoie", "chrinovic", "alphonsine", "zaina", "david", "ludovic"]

nomArray.forEach(function(nom){
    console.log(nom);
})*/

let maintenant = new Date();

/*
let jour = maintenant.getDate();
let heure = maintenant.getHours();
let minutes = maintenant.getMinutes();
let seconde = maintenant.getSeconds();
console.log(jour);
console.log(heure);
console.log(minutes);
console.log(seconde)*/

let heure = document.querySelector('.heure');

let minutes = document.querySelector('.minutes');

let secondes = document.querySelector('.secondes');

heure.textContent = maintenant.getHours();
minutes.textContent =" " + maintenant.getMinutes();
secondes.textContent = maintenant.getSeconds();

let jour = document.querySelector('.jour');
let mois = document.querySelector('.mois');
let annee = document.querySelector('.annee');

jour.textContent = maintenant.getDate();
mois.textContent = maintenant.getMonth() + 1;
annee.textContent = maintenant.getFullYear();