let maintenant = new Date();


let heure = document.querySelector('.heure');

let minutes = document.querySelector('.minutes');

let secondes = document.querySelector('.secondes');



let nom__jour = document.querySelector('.nom__jour');
let jour = document.querySelector('.jour');
let mois = document.querySelector('.mois');
let annee = document.querySelector('.annee');

function dateActuelle(){

    let hours = maintenant.getHours();
    let minute = maintenant.getMinutes();
    let seconde = maintenant.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if(minute < 10){
        minute = "0" + minute;
    }

    if(seconde < 10){
        seconde = "0" + seconde
    }

    heure.textContent = hours;
    minutes.textContent = minute;
    secondes.textContent = seconde;

    jour.textContent = maintenant.getDate();
    mois.textContent = maintenant.getMonth() + 1;
    annee.textContent = maintenant.getFullYear();

}


setInterval(
    dateActuelle()
    , 1000);