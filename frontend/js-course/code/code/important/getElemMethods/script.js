let pElement = document.getElementById("p2");
console.log(pElement);
// with id
let liElements = document.getElementsByClassName("li");
console.log(liElements);
//  with className
let ulElement = document.getElementsByTagName("ul");
console.log(ulElement);
// with tagName
let liFirst = document.querySelector('.li');
//  first className or tagName or id
console.log(liFirst);
let ulAll = document.querySelectorAll('.li');
// all className or tagName or id
console.log(ulAll); 