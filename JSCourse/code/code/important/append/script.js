let liElement = document.createElement('li');
let liElement2 = document.createElement('li');
let ulElement = document.querySelector('.ul'); 
// variable
liElement.innerHTML = 'security';
liElement2.innerHTML = 'blog';
liElement.style.color = 'red';
liElement2.style.color = 'blue';
// style
ulElement.append(liElement);
ulElement.appendChild(liElement2);
// add to HTML
console.log(liElement);
console.log(ulElement);
// log