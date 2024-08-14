const username = document.querySelector('.username');
const password = document.querySelector('.password');
const spanUsername = document.querySelector('.span1');
const spanPassword = document.querySelector('.span2');
function usernameKey() {
    if (username.value.length < 12) {
        spanUsername.style.color = 'red';
        spanUsername.innerHTML = "under 12";
        spanUsername.style.display = 'block';
    } else {
        spanUsername.style.color = 'green';
        spanUsername.innerHTML = "OKAY";
        spanUsername.style.display = 'block';
    }
}
function passwordKey() {
    if (password.value.length < 8) {
        spanPassword.style.color = 'red';
        spanPassword.innerHTML = "under 8";
        spanPassword.style.display = 'block';
    } else {
        spanPassword.style.color = 'green';
        spanPassword.innerHTML = "OKAY";
        spanPassword.style.display = 'block';
    }
}