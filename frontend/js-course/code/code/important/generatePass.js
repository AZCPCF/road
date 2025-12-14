var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";
var password ="";
for (var i = 0; i < 12; i++) {
    password += characters[Math.floor(Math.random() * 70)];
}
console.log(password);