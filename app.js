var button = document.getElementById("enter");
var item = document.getElementsByTagName("li");

function newTask() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    
    if(input.value === ""){
        alert("Please add a task");
    } else {
        document.getElementById("tasks").appendChild(li);
    }
    document.getElementById("input").value = "";
}

button.addEventListener("click", newTask);







