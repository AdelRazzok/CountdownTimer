/*
console.log(deadLine);

var card = document.getElementById('tCard');
card.addEventListener("click", () => {
    card.classList.toggle('flip');
}, false);
*/

var deadLine = new Date("April 25, 2021 18:00:00").getTime();

var daysCard = document.getElementById('cntDownDays');
var hoursCard = document.getElementById('cntDownHours');
var minCard = document.getElementById('cntDownMin');
var secCard = document.getElementById('cntDownSec');

var newTopCardContainer = document.getElementById('newTopCardContainer');
var newTopCard = document.getElementById('newTopCard');
var newCard = document.getElementById('newCard');

var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = deadLine - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (days < 10) {
        days = "0" + days;
    }

    daysCard.innerHTML = days;
    document.getElementById('cntDownDaysFlip').innerHTML = days;

    hoursCard.innerHTML = hours;
    document.getElementById('cntDownHoursFlip').innerHTML = hours

    minCard.innerHTML = minutes;
    document.getElementById('cntDownMinFlip').innerHTML = minutes;
    
    secCard.innerHTML = seconds;
    document.getElementById('cntDownSecFlip').innerHTML = seconds;

    newTopCardContainer.addEventListener("click", () => {
        newTopCardContainer.classList.toggle('flip');
    }, false);

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('cntDown').innerHTML = "Terminé !";
    }
}, 1000);