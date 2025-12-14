var todo = [
    {
        id: 1,
        name: `exercise`,
        time: `30 min`,
        isDoing: true
    },
    {
        id: 2,
        name: `do homework`,
        time: `30 min`,
        isDoing: true

    },
    {
        id: 2,
        name: `eat lunch`,
        time: `30 min`,
        isDoing: true

    },

];
var userMenu = prompt(`select options : \n 
1.add todo \n 
2.remove todo \n 
3.do todo`);
if (userMenu === `1`) {
    var newTodo = prompt(`enter new todo : `);
    var newTodoObject = {
        id: todo.length + 1,
        name: newTodo ,
        isDoing : false  
    }
    todo.push(newTodoObject);
    console.log(`todo : `,todo);
} else if (userMenu === `2`) {
    var deleteTodo = prompt(`enter  todo name you want to delete : `,``);
    var deletedTodo = todo.findIndex(function (todo){
        return todo.name === deleteTodo;
    })
    todo.splice(deletedTodo,1)
    console.log(`todo : `,todo);
} else if (userMenu === `3`) {
    var editTodo = prompt(`enter todo you want to change : `);
    todo.forEach(function (todo){
        if (todo.name === editTodo) {
            todo.isDoing = true;
        }
    })
} else {
    alert(`you only can select option 1 to 3`);
}
