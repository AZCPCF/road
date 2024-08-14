var userInfo = [
    {
        id: 1,
        name: `one`,
        lastName: `oneL`,
        age: 1,
        mail: `userOne@email.com`
    }
    ,
    {
        id: 2,
        name: `two`,
        lastName: `twoL`,
        age: 2,
        mail: `userTwo@email.com`
    }
    ,
    {
        id: 3,
        name: `three`,
        lastName: `threeL`,
        age: 3,
        mail: `userThree@email.com`
    }
]
userInfo.forEach(function (userInfo) {
    console.log(`name : `, userInfo.name, ` | last name : `, userInfo.lastName, ` | age : `, userInfo.age, ` | mail : `, userInfo.mail);
})