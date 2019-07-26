var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var input = document.getElementById("input");
var item = document.getElementsByTagName("li");

function validate() {
    if (input == "") {
        alert("Please add a task");
        return false;
    }
}



function newTask() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}




button.addEventListener("click", newTask);

validate();


//addeventlistener when you click on button, runs a function

