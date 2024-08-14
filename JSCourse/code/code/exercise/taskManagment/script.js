var employs = {
    ali: [`html`, `css`, `js`],
    amin: [`react`, `vue`, `angular`],
    mohammad: [`seo`, `link building`],
    amir: [`admin`, `content`]
};
var addTask = prompt(`welcome ! \nenter the new task name : `);
var addTaskToEmploy = prompt(`enter the employ name : `);
var employTasks = employs[addTaskToEmploy];
employTasks.push(addTask);
console.log(employs);