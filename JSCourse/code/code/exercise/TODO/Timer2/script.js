// 
// variable
// 
var hour = Math.round(prompt('hour', 0));
var minute = Math.round(prompt('minute', 0));
var second = Math.round(prompt('second', 0));
checkNull(hour);
isNumber(hour);
console.log(hour);
checkNull(minute);
isNumber(minute);
under60(minute);
checkNull(second);
isNumber(second);
under60(second);
// 
// interval
// 
var intervalL;
intervalL = setInterval(timer, 1000);
function timer() {
    second.innerHTML = second--;
    if (second == 0 && minute > 0) {
        minute = minute - 1;
        second = 59;
    } else if (minute < 0 && hour > 0) {
        hour = hour - 1;
        minute = 59;
        second = 59;
    } else if (hour > 0 && minute <= 0 && second <= 0) {
        hour = hour - 1;
        minute = 59;
        second = 59;
    } else if (minute >= 1 && second <= 0) {
        second = 59;
        minute = minute - 1;
    }
    if (second === -1) {
        console.log("finished");
        alert("timer finished");
        clearInterval(intervalL);
        location.reload();
    }
    document.getElementById("hour").innerHTML = checkSize(hour);
    document.getElementById("minute").innerHTML = checkSize(minute);
    document.getElementById("second").innerHTML = checkSize(second);

}
// 
// function
// 
function checkNull(params) {
    if (params === '' || params == ' ' || params == null) {
        document.getElementById(`${params}`).innerHTML = 0;
    }
}
function checkSize(params) {
    if (params < 10) {
        var x = `0${params}`;
        return x;
    } else {
        return params;
    }
}
function isNumber(params) {
    if (isNaN(params) !== false) {
        alert("you didn't enter number");
        location.reload();
    }
}
function under60(params) {
    if (params > 59) {
        alert("you only can enter number 0 to 59");
        location.reload();
    }
}
//
// time left
//
var widthH = 1000;
var time = (hour * 60 * 60) + (minute * 60) + second;
var of100 = (time / 1000);
console.log("time (second) : " + time);
console.log("every px-- in time : " + of100 * ten);
var ten = 0;
if (time >= 60) {
    ten = 100;
} else {
    ten = 1000;
}
var box = document.getElementById("box2");
var intervalLL = setInterval(function () {
    if (time == 0) {
        clearInterval(intervalLL);
    }
    else if (widthH >= 0) {
        box.style.width = widthH-- + "px";
    }

}, of100 * ten);