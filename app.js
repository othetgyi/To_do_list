//Select elements
var button = document.getElementById("button");

// Class names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const FAS = "fas";
const FAR = "far";
const LINE_THROUGH = "lineThrough"; 
const CLEARBUTTON = document.getElementById("clear");
CLEARBUTTON.addEventListener("click", clearTodo);


// Variables
let LIST = [], id = 0;



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
            populateItem(item.name, item.id, item.done, item.trash, item.date);
        });
    }

//helper function to add an html li element to the list

function populateItem (item, id, done, trash, date){
    var ul = document.getElementById("list");
    if(trash){ return;}

    const PREFIX = done ? FAS : FAR; 
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : ""; 
    
    ul.insertAdjacentHTML("beforeend", `
    <li class="todo">
    <i class="${PREFIX} ${DONE}" job="complete" id="${id}"></i>&nbsp;&nbsp; <p class="text ${LINE}">${item}&nbsp;${date}</p>&nbsp;&nbsp;
    <i class="far fa-trash-alt" job="delete" id="${id}"></i>
    </li>
`);
}

//Adds a new todo, b
function newTodo() {
    var item = document.getElementById("input").value;
    var newItem = document.createElement("li");
    var ul = document.getElementById("list");
    var field = document.getElementById("input");
    var date = document.getElementById("date").value;
    var dateField = document.getElementById("date")
    
    if (item == "") {
        document.getElementById("textError").textContent = "Please enter a task";
        field.className = "input-error";
    } else if (date == "") {
        document.getElementById("error").textContent = "Please enter a date";
        dateField.className = "input-error";
    }
     else {
        document.getElementById("dateError").textContent = "";        
        field.classList.remove("input-error");
        populateItem(item, id, false, false, date);

        LIST.push({
            name : item,
            date: date,
            id : id,
            done : false,
            trash : false
        });
        
        // add item to localstorage (this code must be added where the LIST array is updated)
        localStorage.setItem("TODO", JSON.stringify(LIST));

        id++;

        }
        field.value = "";
    }

//clear todo

function clearTodo() {
    let list = document.getElementById("list")
    list.innerHTML = ''
    localStorage.clear();
}

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
//const clear = document.querySelector(".clear");

//clear.addEventListener('click', function(){
//    localStorage.clear();
//    location.reload();
//});

//Calls function when button is clicked on
button.addEventListener("click", newTodo);






