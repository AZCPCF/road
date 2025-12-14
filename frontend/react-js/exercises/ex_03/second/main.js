const rNumber = () => [13, 12];
const swapNum = () => {
  let num1 = [13, 27, 5, 32, 53];
  let num2 = [12, 32, 3, 32, 23];
  [num1, num2] = [num2, num1];
  console.log(
    `\nnumber 1 : ${num1} \nnumber 2 : ${num2} \n---------------------------`
  );
};
const addNum = (p, p2) => {
  let number = rNumber();
  let res = [];
  if (p == 0) {
    res = [p2, ...number];
    console.log(
      `new number : ${res[0]} \nnumbers : ${res}\n---------------------------`
    );
  } else {
    res = [...number, p2];
    console.log(
      `new number : ${
        res[res.length - 1]
      } \nnumbers : ${res}\n---------------------------`
    );
  }
};
const names = () => {
  let user = {
    fname: "ali",
    lname: "z",
  };
  let { fname, lname } = user;
  console.log(`fname : ${fname} \nlname : ${lname}`);
};
swapNum();
addNum(0, 12345);
addNum(1, 54321);
names();
