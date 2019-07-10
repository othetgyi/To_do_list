var todos = [];
var button = document.querySelector("button");

function addTodo() {
    var  input = document.getElementById("userInput");
    todos.push(input);
}

button.addEventListener("click", function() {
    addTodo();
    printTodos();
});