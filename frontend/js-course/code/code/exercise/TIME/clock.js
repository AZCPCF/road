var timeInterval, setTimeInterval;
var myDate = new Date();

function checkSize(params) {
    if (params < 10) {
        var x = `0${params}`;
        return x;
    } else {
        return params;
    }
}
function timer2() {
    var hour = myDate.getHours();
    document.getElementById("hour").innerHTML = checkSize(hour);
    var minute = myDate.getMinutes();
    document.getElementById("minute").innerHTML = checkSize(minute);
    var second = myDate.getSeconds();
    document.getElementById("second").innerHTML = checkSize(second);


}

function timer() {
    myDate = new Date();
}

timeInterval = setInterval(timer, 1000);
setTimeInterval = setInterval(timer2, 1000);
document.getElementById("info").innerHTML = myDate;