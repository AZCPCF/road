let pElement = document.getElementById("pId");

pElement.setAttribute(
    'color' //key
    ,
    'red' //value
);

// attribute 1 item with id

let liElements = document.getElementsByClassName('li');

for (let i = 0; i < liElements.length; i++) {
    liElements[i].setAttribute('color','blue');
}
// set attribute for all items  with for

liElements[0].setAttribute('color', 'yellow');
// set attribute for 1 item with index

// attribute array with class

console.log(pElement.getAttribute('class'));
// log attribute 