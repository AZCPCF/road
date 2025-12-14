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
console.log(userInfo.some(
    function (user) {
        return user.name == `twos`;
    }
));