const users = {
    name : "a",
    lastName : "z",
    age : 15
}
for(let user in users){
    console.log(`${user} : ${users[user]}`);
}