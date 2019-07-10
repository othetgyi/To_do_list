var todos = [];
var button = document.querySelector("button");

function addTodo() {
    var  input = document.getElementById("userInput");
    todos.push(input);
}

function printTodos() {
    var list = document.getElementById("tasks");

    for (var i = 0; i < todos.length; i++) {
        var li = document.createElement("li");
        var item = li.appendChild(document.createTextNode(todos[i]));
        list.appendChild(list);
    }
}
button.addEventListener("click", function() {
    addTodo();
    printTodos();
});