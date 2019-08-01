//Select elements
var button = document.getElementById("button");

//Adds a new todo
function newTodo() {
    var item = document.getElementById("input").value;
    var text = document.createTextNode(item);
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    
    if (item == "") {
        alert("Please add a todo.");
    } else {
        li.appendChild(text);
        ul.appendChild(li);
        item = "";

    } 










    
    
    
    //const item = `
    //    <i class="far fa-circle" job="complete" id="0"></i>${toDo}
    //    <i class="fas fa-trash" job="delete" id="0"></i>
        
    //`;
   // const position = "beforeend";

    //list.insertAdjacentHTML(position, item);
}

//Calls function when button is clicked on
button.addEventListener("click", newTodo);






