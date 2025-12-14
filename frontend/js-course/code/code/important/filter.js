const user = [
    {name : "acc" , lastName : "add", isLoggedInUser : true, age : 34}
    ,
    {name : "acsc" , lastName : "adsd", isLoggedInUser : true , age : 43}
    ,
    {name : "asssscc" , lastName : "adssd", isLoggedInUser : false , age : 14}
    ,
    {name : "aczdczdc" , lastName : "adcdsdzd" , isLoggedInUser : true , age : 14}
];
const isLoggedInUsers = user.filter((item) => item.age > 13 );

console.log(isLoggedInUsers);
// map 1 to x return
// filter 1 to x log
// find 1 log


