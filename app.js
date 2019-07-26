var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var input = document.getElementById("input");
var item = document.getElementsByTagName("li");

function newTask() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    document.getElementById("input").value = "";
}

document.body.onkeyup = function(e) {
    if (e.keyCode == 13) {
        newTask();
    }
}

button.addEventListener("click", newTask);







