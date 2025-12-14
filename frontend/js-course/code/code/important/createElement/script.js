let username = prompt('enter your username : ');
let pElement = document.createElement('p');
pElement.innerHTML = username;
pElement.setAttribute('id','username');
pElement.setAttribute('class','name');
pElement.style.color = 'blue';
console.log(pElement);