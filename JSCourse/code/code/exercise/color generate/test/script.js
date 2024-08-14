const body = document.querySelector('body');
const span = document.querySelector('span');
let characters = "0123456789ABCDEF";
let color = "#";
setInterval(
    function (){
        for (let i = 0; i < 6; i++) {
            color += characters[Math.floor(Math.random() * 16)];
        }
        console.log(color);
        body.style.backgroundColor = color;
        span.innerHTML = color;
        color = "#";
    }
    ,5000);