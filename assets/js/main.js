var deadLine = new Date("April 23, 2021 17:00:00").getTime();

/*console.log(deadLine);*/

var card = document.getElementById('tCard');
card.addEventListener("click", () => {
    card.classList.toggle('flip');
}, false);

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

    document.getElementById('cntDownDays').innerHTML = days;
    document.getElementById('cntDownHours').innerHTML = hours;
    document.getElementById('cntDownMin').innerHTML = minutes;
    document.getElementById('cntDownSec').innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('cntDown').innerHTML = "Terminé !";
    }
}, 1000);