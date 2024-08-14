// variables

const numbers = "12345567890";
let randomNumber = "";
let userNumber = document.getElementById("input");
let submit = document.getElementById("submit");
let text = document.getElementById("text");
let p = document.getElementById("p");

// loop for build random number

for (var i = 0; i < 4; i++) {
    randomNumber += numbers[Math.floor(Math.random() * 10)];
}

// function for onclick

function submitFunction() {
    console.log(randomNumber);
    var userNumberV = document.getElementById("input").value;
    if (userNumberV == randomNumber) {
        p.innerHTML = "your number is correct";
        text.innerHTML = randomNumber;
        userNumber.disabled = true;
        submit.disabled = true;
        submit.style.color = "#fff";
    } else {
        p.innerHTML = "your number is incorrect";
    }
}
