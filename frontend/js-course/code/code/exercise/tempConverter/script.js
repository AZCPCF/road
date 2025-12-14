const text = "hello world !"; 
const uniqueIndex = Array.from(text).findIndex(
  (item, index) =>
    item !== " " &&
    text.indexOf(item) === index &&
    text.lastIndexOf(item) === index
);
console.log(uniqueIndex);
