// var users = [
//     { id: 1, name: `ali`, lastName: `white`, age: 14, email: `s@gmail.com` },
//     { id: 2, name: `amin`, lastName: `white`, age: 14, email: `s@gmail.com` },
//     { id: 3, name: `alison`, lastName: `white`, age: 14, email: `s@gmail.com` }
// ];
// var userName = prompt(`enter name : `);
// var userLast = prompt(`enter last name : `);
// var userAge = prompt(`enter age : `);
// var userEmail = prompt(`enter email : `);
// if (userName.length < 3 || userName.length > 10) {
//     alert(`your name can min 3 and max 10 char :)`);
// } else if (userLast.length < 3 || userLast.length > 15) {
//     alert(`your last name can min 3 and max 10 char :)`);
// } else if (isNaN(userAge) || userAge.length > 3) {
//     alert("enter true age");
// } else {
//     var newUser = {
//         id: 4,
//         name: userName,
//         lastName: userLast,
//         age: userAge,
//         email: userEmail
//     };
//     users.push(newUser);
// };

var x = "developer Studio";
var sliceX = x.slice(2,6);
document.write(sliceX);