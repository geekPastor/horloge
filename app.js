
let email = "15mm306@esisalama.org"
let heure = document.querySelector('.heure');

let minutes = document.querySelector('.minutes');

let secondes = document.querySelector('.secondes');

let t = 10;


let nom__jour = document.querySelector('.nom__jour');
let jour = document.querySelector('.jour');
let mois = document.querySelector('.mois');
let annee = document.querySelector('.annee');

function dateActuelle(){
    let maintenant = new Date();

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
    console.log(seconde)



    let day = maintenant.getDate();
    let month = maintenant.getMonth() + 1;
    if(day < 10){
        day = "0"+day
    }

    if(month < 10){
        month = "0"+month
    }
    jour.textContent = day;
    mois.textContent = month;
    annee.textContent = maintenant.getFullYear();
}

setInterval(
    dateActuelle
    , t);
    