var button = document.getElementById("enter");
var item = document.getElementsByTagName("li");


//Add a task
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

//video 41:43
//Delete a task
function deleteTask(e){
   e.target.parentElement.removeChild(e.target);
}

button.addEventListener("click", newTask);







