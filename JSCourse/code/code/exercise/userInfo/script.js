var userInfo = [
    {
        name: `one`,
        lastName: `oneL`,
        id: 1,
        age: 1,
        email: `UserOne@gmail.com`
    },
    {
        name: `two`,
        lastName: `twoL`,
        id: 2,
        age: 2,
        email: `UserTwo@gmail.com`
    },
    {
        name: `three`,
        lastName: `threeL`,
        id: 3,
        age: 3,
        email: `Userthree@gmail.com`
    }
];
var userName = prompt(`enter your name : `);
var userLast = prompt(`enter your last name  : `);
var userAge = Number(prompt(`enter your age : `));
var userMail = prompt(`enter your email : `);
if (userName.length < 3 || userName.length > 10) {
    alert("name min can  3 char and name max can 10 char");
} else if (userLast.length < 3 || userLast.length > 15) {
    alert("name min can  3 char and name max can 10 char");
} else if (isNaN(userAge) || userAge.length > 3) {
    alert("age max can 3 char and you should enter number")
} else {
    var userInfoNew = {
        name: userName,
        lastName: userLast,
        age: userAge,
        mail: userMail
    };
    userInfo.push(userInfoNew);
    console.log(userInfo);
}