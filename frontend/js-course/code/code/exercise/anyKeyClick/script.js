const $ = document
let body = $.querySelector('body')
let p = $.querySelector('p')
let key = $.querySelector('#key')
let loc = $.querySelector('#location')
let code = $.querySelector('#code')
let which = $.querySelector('#which')
body.onkeydown = function (event) {
    event.preventDefault();
    console.log(event.key)
    p.innerHTML = event.keyCode
    key.innerHTML = "key : " + event.key
    code.innerHTML = "code : " + event.code
    which.innerHTML = "which : " + event.keyCode
    loc.innerHTML = "location : " + event.location
    console.log()

}