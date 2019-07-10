var todos = [];
var button = document.querySelector("button");

function addTodo() {
    var  input = document.getElementById("userInput").value;
    todos.push(input);
}

function printTodos() {
    var list = document.getElementById("tasks");
    list.innerHTML = "";

    for (var i = 0; i < todos.length; i++) {
        var li = document.createElement("li");
        var item = li.appendChild(document.createTextNode(todos[i]));
        list.appendChild(item);
    }
}

button.addEventListener("click", function() {
    addTodo();
    printTodos();
});