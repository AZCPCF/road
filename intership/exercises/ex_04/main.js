import  modules from "./functions.js"
const {delDuplicate,result} = modules
let array1 = [1, 2, 3, 3, 4, 6, 6, 7, 8]
let array2 = [0, 0, 1, 5, 5, 5, 6, 8, 10]
result(delDuplicate([...array1, ...array2]))