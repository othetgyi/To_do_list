//Select elements
var button = document.getElementById("button");

// Class names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const FAS = "fas";
const FAR = "far";
const LINE_THROUGH = "lineThrough"; 

// Variables
let LIST = []
    , id = 0;



// get item from localstorage
let data = localStorage.getItem("TODO");
console.log(data);
// check if data is not empty
if(data){
    LIST = JSON.parse(data);
    id = LIST.length; // set the id to the last one in the list
    loadList(LIST); // load the list to the user interface

}else{
    //if data isn't empty
    LIST = [];
    id = 0;
}

//load items to the user's interface
    function loadList(array){
        array.forEach(function(item){
            newTodo(item.name, item.id, item.done, item.trash);
        });
    }

//helper function to add an html li element to the list

function populateItem (item, id, done, trash){
    if(trash){ return;}

    const PREFIX = done ? FAS : FAR; 
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : ""; 
    
    listToAddTo.insertAdjacentHTML("beforeend", `
    <li class="todo">
    <i class="${PREFIX} ${DONE}" job="complete" id="${id}"></i>&nbsp;&nbsp; <p class="text ${LINE}">${item}</p>&nbsp;&nbsp;
    <i class="far fa-trash-alt" job="delete" id="${id}"></i>
    </li>
`);
}

//Adds a new todo
function newTodo(item, id, done, trash) {
    var item = document.getElementById("input").value;
    var newItem = document.createElement("li");
    var ul = document.getElementById("list");
    var field = document.getElementById("input");
    
    if(trash){ return;}

    const PREFIX = done ? FAS : FAR; 
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : ""; 
    
    
    if (item == "") {
        document.getElementById("error").textContent = "Please enter a task";
        field.className = "input-error";
    } else {
        document.getElementById("error").textContent = "";        
        field.classList.remove("input-error");
        populateItem(ul);

        LIST.push({
            name : item,
            id : id,
            done : false,
            trash : false
        });
        
        // add item to localstorage (this code must be added where the LIST array is updated)
        localStorage.setItem("TODO", JSON.stringify(LIST));

        id++;

        } document.getElementById("input").value = "";
    }

// add an item to the list

//Complete to do
function completeToDo(element) {
    element.classList.toggle(FAR);
    element.classList.toggle(FAS);
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// Delete todo by clicking on trash can symbol
function removeTodo(element){
    element.parentNode.parentNode.removeChild(element.parentNode); 

    LIST[element.id].trash = true;

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

// add item to localstorage (this code must be added where the LIST array is updated)
localStorage.setItem("TODO", JSON.stringify(LIST));

// Clear local storage
const clear = document.querySelector(".clear");

clear.addEventListener('click', function(){
    localStorage.clear();
    location.reload();
});

//Calls function when button is clicked on
button.addEventListener("click", newTodo);






