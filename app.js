
function addTask() {
    var task = document.getElementById("user_input").value;

    document.getElementById("display").innerHTML = task;
}

function addTodo() {
    var newTodo = task;
    todos.push(newTodo);
    return newTodo;
}
document.getElementById("add").addEventListener("click", addTask);

