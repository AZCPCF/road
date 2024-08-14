let result = document.getElementById("result");
function max() {
    var input = document.getElementById("input").value;
    const number = input.split(" ");
    const max = result.innerHTML = "max : " + Math.max(...number);
}
function min() {

    var input = document.getElementById("input").value;
    const number = input.split(" ");
    const min = result.innerHTML = "min : " + Math.min(...number);
    
}
function deleteDuplicate() {
    var input = document.getElementById("input").value;
    const number = input.split(" ");
    // 
    var deleteDuplicateSet = new Set(number);
    result.innerHTML = "numbers without duplicate : " + [...deleteDuplicateSet];
}