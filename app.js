//Select elements
var button = document.getElementById("button");
var input = document.getElementById("input");
var ul = document.getElementById("list");

//Adds a new todo
function newTodo(){
    if (input.value = "") {
        alert ("Please add a todo.")
    } else {
        var li = document.createTextNode("li");

    }










    
    li.appendChild(document.createTextNode(`<i class="far fa-circle" job="complete" id="0"></i>` +  input.value));

    if (input.value == ""){
        alert("Please add a task");
    }   else {
        document.getElementById("list").appendChild(li);
    }
    input.value = "";
    
    //const item = `
    //    <i class="far fa-circle" job="complete" id="0"></i>${toDo}
    //    <i class="fas fa-trash" job="delete" id="0"></i>
        
    //`;
   // const position = "beforeend";

    //list.insertAdjacentHTML(position, item);
}

//Calls function when button is clicked on
button.addEventListener("click", newTodo);






