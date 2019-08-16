//Select elements
var button = document.getElementById("button");

// Class names
const CHECK = "fas fa-check-circle";
const UNCHECK = "far fa-circle";
const LINE_THROUGH = "lineThrough"; 

//Adds a new todo
function newTodo(item, id, done) {
    var item = document.getElementById("input").value;
    var newItem = document.createElement("li");
    var ul = document.getElementById("list");
    var field = document.getElementById("input");
    
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : ""; 
    
    /*const tgt = event.target.firstElementChild;
    tgt.classList.toggle('far');
    tgt.classList.toggle('fas'); */
    
    if (item == "") {
        document.getElementById("error").textContent = "Please enter a todo";
        field.className = "input-error";
    } else {
        document.getElementById("error").textContent = "";        
        field.classList.remove("input-error");
        ul.insertAdjacentHTML("beforeend", `
        <li class="todo">
        <i class="far ${DONE}" job="complete" id="${id}" job="complete"></i>&nbsp;&nbsp; <p class="text ${LINE}">${item}</p>&nbsp;&nbsp;
        <i class="far fa-trash-alt" job="delete" id="${id}"></i>
        </li>
        `);
    } document.getElementById("input").value = "";
    

}
//Complete to do
function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
}

// Delete todo by clicking on trash can symbol
function removeTodo(element){
    element.parentNode.parentNode.removeChild(element.parentNode); 
}

// Targets dynamically created items
document.getElementById("list").addEventListener("click", function(e) {
   const element = event.target;
   const elementJob = element.attributes.job.value;
   
   if(elementJob == "complete"){
       completeToDo(element);
   } else if(elementJob == "delete") {
    removeTodo(element);
   }
});



//Calls function when button is clicked on
button.addEventListener("click", newTodo);






