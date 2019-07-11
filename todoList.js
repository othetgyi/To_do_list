var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.getElementById("tasks");
var item = document.getElementsByTagName("li");

function addTodo(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

button.addEventListener("click", addTodo);