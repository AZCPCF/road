var admins = [
    {id : 1 , username : `admin_1` ,password : `admin`},
    {id : 2 , username : `a` ,password : `editor`},
    {id : 3 , username : `admin_3` ,password : `designer`},
    {id : 4 , username : `admin_4` ,password : `manager`},
]
var username = prompt(`enter your username : `);

var findAdminPassword = admins.find(function (user){
    return user.username === username;
})
console.log(findAdminPassword);