const daysNumber = document.getElementById('top-days-number');
const botDaysNumber = document.getElementById('bot-days-number')

const hoursNumber = document.getElementById('top-hours-number');
const botHoursNumber = document.getElementById('bot-hours-number');

const minutesNumber = document.getElementById('top-minutes-number');
const botMinutesNumber = document.getElementById('bot-minutes-number');

const secondsNumber = document.getElementById('top-seconds-number');
const newSecondsNumber = document.getElementById('new-top-seconds-number'); 
const newSecondsNumberBack = document.getElementById('new-top-back-seconds-number');
const botSecondsNumber = document.getElementById('bot-seconds-number');

var countDownDate = new Date("September 26, 2021 23:59:59").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    /* JOURS */
    daysNumber.innerHTML = days;
    botDaysNumber.innerHTML = days;

    if (days < 10) {
        daysNumber.innerHTML = "0" + days;
        botDaysNumber.innerHTML = "0" + days;
    }

    /* HEURES */
    hoursNumber.innerHTML = hours;
    botHoursNumber.innerHTML = hours;
    
    if (hours < 10) {
        hoursNumber.innerHTML = "0" + hours;
        botHoursNumber.innerHTML = "0" + hours;
    }

    /* MINUTES */
    minutesNumber.innerHTML = minutes;
    botMinutesNumber.innerHTML = minutes;

    if (minutes < 10) {
        minutesNumber.innerHTML = "0" + minutes;
        botMinutesNumber.innerHTML = "0" + minutes;
    }

    /* SECONDES */
    secondsNumber.innerHTML = seconds;
    newSecondsNumber.innerHTML = seconds;
    newSecondsNumberBack.innerHTML = seconds;
    botSecondsNumber.innerHTML = seconds;

    if (seconds < 10) {
        secondsNumber.innerHTML = "0" + seconds;
        newSecondsNumber.innerHTML = "0" + seconds;
        newSecondsNumberBack.innerHTML = "0" + seconds;
        botSecondsNumber.innerHTML = "0" + seconds;
    }

    

}, 1000);