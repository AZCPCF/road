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
// function checkSizeMillisecond(params) {
//     if (params < 10) {
//         var x = `000${params}`;
//         return x;
//     } if(params < 100){
//         var y = `00${params}`;
//         return y;
//     } if(params < 1000){
//         var a  = `0${params}`;
//         return a;
//     }else{
//         return params;
//     }
// }
function timer2() {
    // var year = myDate.getFullYear();
    // document.getElementById("year").innerHTML = checkSize(year);
    // var month = myDate.getMonth();
    // document.getElementById("month").innerHTML = checkSize(month);
    // var day = myDate.getDay();
    // document.getElementById("day").innerHTML = checkSize(day);
    var hour = myDate.getHours();
    document.getElementById("hour").innerHTML = checkSize(hour);
    var minute = myDate.getMinutes();
    document.getElementById("minute").innerHTML = checkSize(minute);
    var second = myDate.getSeconds();
    document.getElementById("second").innerHTML = checkSize(second);
    // var millisecond = myDate.getMilliseconds();
    // document.getElementById("millisecond").innerHTML = checkSizeMillisecond(millisecond);
}

function timer() {
    myDate = new Date();
}

timeInterval = setInterval(timer, 1);
setTimeInterval = setInterval(timer2, 1);