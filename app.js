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

function validate() {
    if (input.value == "") {
        alert("Please add a task");
        return false;
    }
}

button.addEventListener("click", newTask);





//addeventlistener when you click on button, runs a function

