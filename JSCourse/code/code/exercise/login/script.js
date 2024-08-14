let username = document.querySelector(".username");
let password = document.querySelector(".password");
function submitFunc() {
    let usernameValue = username.value;
    let passwordValue = password.value;
    if (usernameValue === "" || passwordValue === "") {
        alert("please fill out inputs")
    }else if (usernameValue.length < 12) {
        alert(`username length can't under 12`);
    } else if (passwordValue.length < 8) {
        alert(`password length can't under 8`);
    } else if (passwordValue.length < 8 && usernameValue.length < 12) {
        alert(`username length can't under 12 & password length can't under 8`);
    } else {
        alert("you logged in successfully");
    }
}