const getNumbers = () => {
  return document.querySelector("input").value.split(" ");
};
let h2 = document.querySelector("h2");
let p = document.querySelector("p");
const findMax = () => {
  let max = 0;
  for (const numb of getNumbers()) { 
    if (Number(numb) > max) {
      max = numb;
    }
  }
  printer("max : ", max);
};
const findMin = () => {
  let min = Infinity;
  for (const numb of getNumbers()) {
    if (Number(numb) < min) {
      min = numb;
    }
  }
  printer("min : ", min);
};
const findDuplicates = () => {
  let numbers = getNumbers();
  const res = numbers.filter(
    (item, index) =>
      numbers.indexOf(item) !== index &&
      numbers.lastIndexOf(item) === index &&
      item !== ""
  );
  printer("found Duplicates : ", res);
};
const removeDuplicate = () => {
  let numbers = getNumbers();
  let res = numbers.filter((item, index) => numbers.indexOf(item) === index);
  printer("without duplicate : ", res);
};
const printer = (h2_v, p_v) => {
  h2.innerHTML = h2_v;
  p.innerHTML = p_v;
};

// ----------------------------------------------------------
// const names = ['ali', 'mohammad', 'reza', 'mohammad']
// const res = names.find(name => name === 'mohammad')
// const res_1 = names.filter(name => name === 'mohammad')
// console.log(`${res} \n ${res_1}`)
// // method filter & find build a new array and
// // push data to in filter method check condition
// // for all elements but find method get break
// // when find first item
// // findIndex method as find method but return
// // index of first item founded
// names.forEach((item, index) => {
//     return names[index] = { name: item }
// })
// const numbers = [1, 4, 6, 37, 16]
// numbers.map((item) => {
//     return item * 3
// })
// console.log(names)
// console.log(numbers)
// // we use foreach method when we want
// // add any operation or etc
// // but we use map when we want add any
// // operation or etc snd push it to new array
// const users = [
//     { name: 'reza', age: 19 },
//     { name: 'ali', age: 25 },
//     { name: 'amir', age: 42 },
//     { name: 'mohammad', age: 37 }
// ]
// const userName = users.some(user => user.name == 'reza' ? true : false)
// const userNameE = users.every(user => user.name == 'reza' ? true : false)
// const userOlder = users.every(user => user.age > 18 ? true : false)
// console.log(userOlder)
// console.log(userName)
// console.log(userNameE)
// // in some method if one item accept condition ,
// //  some method return true
// // in every method all item must
// //  accept condition
// // to every method return true
// const namesForIn = {
//     name: 'ali',
//     lastName: 'mohammadi',
//     age: 16
// }
// const namesForOf = ['ali', 'mohammadi', 16]
// for (const att in namesForIn) {
//     console.log(`${att} : ${namesForIn[att]}`)
// }
// for (const att of namesForOf) {
//     console.log(namesForOf)
// }
// console.log('\n')
// for (const user of users) {
//     for (const att in user) {
//         console.log(`${att} : ${user[att]}`);
//     }
// }
// // use for-of for arrays
// // use for-in for objects
// --------------------------------------
// فرم های تعاملی با جاواسکریپت 30