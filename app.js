let displayDay = document.getElementById('day');
let displayHour = document.getElementById('hours');
let displayMinutes = document.getElementById('minutes');
let displaySeconds = document.getElementById('seconds');

var countDownDate = new Date("Feb 14, 2022 00:00:00").getTime();
// to update the countdown every seconds
var interval = setInterval(myfunction, 1000);
 function myfunction() {
    // getting the current date of the day
    var now = new Date().getTime();
    // getting the distance of between the countdown date and the current date
    var distance = countDownDate - now;
    //converting time
    var days = Math.floor(distance / (1000*60*60*24));

    var hour = Math.floor((distance % (1000*60*60*24)/  (1000*60*60)));

    var minutes = Math.floor((distance % (1000*60*60*24) / (1000*60)));

    var seconds = Math.floor((distance % (1000*60)) / 1000);

    // displaying the countdown
    displayDay.innerText = days;
    displayHour.innerText = hour;
    displayMinutes.innerText = minutes;
    displaySeconds.innerText = seconds;

    // display text when count down get to 0
    if ( distance < 0) {
        clearInterval(interval);
        document.getElementById('demo').innerText = "Happy Valentine day to all programer in the world"
    }
};