const inp = (id) => {
    return document.querySelector(`#${id}`)
}
const userInfo = () => {
    let user = {
        name: inp('name').value,
        lname: inp('lname').value,
        password: inp('password').value
    }
    let { name,lname } = user
    inp('one').innerHTML = ` name : ${name}`
    inp('two').innerHTML = `last  name : ${lname}`
}
