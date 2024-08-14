var second = document.getElementById('second');
var secondV = 1;
var minute = document.getElementById('minute');
var minuteV = 1;
var hour = document.getElementById('hour');
var hourV = 1;

var stop = document.getElementById(`stop`);
var start = document.getElementById(`start`);
var intervalL;
function startFN() {
    intervalL = setInterval(timer, 1000);
    console.log(`start`);
}
function stopFN() {
    clearInterval(intervalL);
    console.log(`stop`);
}
function resetFN() {
    second.innerHTML = 0;
    secondV = 0;
    minute.innerHTML = 0;
    minuteV = 0;
    hour.innerHTML = 0;
    hourV = 0;
    console.log(`reset`);
}
function timer() {
    second.innerHTML = secondV++;
    if (secondV >= 60) {
        secondV = 0;
        minute.innerHTML = minuteV += 1;
        second.innerHTML = secondV++;
    }
    if (minuteV >= 60) {
        minuteV = 0;
        hour.innerHTML = hourV += 1;
        minute.innerHTML = minuteV++;
        second.innerHTML = secondV++;
    }
}