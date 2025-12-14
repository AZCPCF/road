const $ = document
let button = $.querySelector('button')
let input = $.querySelector('input')
button.onclick = () => {
    if (input.type === 'text') {
        input.type = 'password'
        button.innerHTML = 'show'
    } else{
        input.type = 'text'
        button.innerHTML = 'hide'

    }
}