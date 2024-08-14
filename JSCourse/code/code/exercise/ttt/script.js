let firstPlayer = Math.round(Math.random() + 1)
let X = []
let O = []
let parentDiv = document.getElementById('parent')
firstPlayer === 1 ? firstPlayer = 'X' : firstPlayer = 'O'
alert(`first player : ${firstPlayer}`)
const gameFunc = (e) => {
    e.target.innerHTML = firstPlayer
    e.target.disabled = true;
    if (firstPlayer === 'X') {
        firstPlayer = 'O'
        X.push(e.target.id)
    } else {
        firstPlayer = 'X'
        O.push(e.target.id)
    }
    if (isWin(X)) {
        parentDiv.innerHTML = 'X is winner'
    } else if (isWin(O)) {
        parentDiv.innerHTML = 'O is winner'
    } else if ((O.length + X.length) == 9) {
        parentDiv.innerHTML = 'draw'
    }
}
const isWin = (params) => {
    const include = (param) => params.includes(param)
    if (
        include('1') && include('2') && include('3') ||
        include('4') && include('5') && include('6') ||
        include('7') && include('8') && include('9') ||
        include('1') && include('4') && include('7') ||
        include('2') && include('5') && include('8') ||
        include('3') && include('6') && include('9') ||
        include('1') && include('5') && include('9') ||
        include('3') && include('5') && include('7')
    ) return true
    else return false
}