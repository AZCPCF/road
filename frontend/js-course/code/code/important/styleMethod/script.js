let pElement = document.getElementById('pId');
pElement.style.background = "red";

//  styling 1 item

let liElements = document.getElementsByClassName('li');

for (const iterator of liElements) {
    iterator.style.color = "yellow";
}
// styling array items with for-of