//Select elements
var button = document.getElementById("button");
var ul = document.getElementById("list");

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

//form validation
function validateInput() {
    //if the todo field is complete and the date field is entered, call the todo function
    var item = document.getElementById("input").value;
    var date = document.getElementById("date").value;
    if (item == "" && date == ""){
        document.getElementById("textError").textContent = "Please enter a task";
        item.className = "error";
        document.getElementById("dateError").textContent = "Please enter a due date";
        date.className = "error";
    } else if (item !== "" && date == "") {
        document.getElementById("dateError").textContent = "Please enter a due date";
        date.className = "error";
        document.getElementById("textError").textContent = "";      
        item.classList.remove("error");
       // document.getElementById("date").value = date;
    } else if (date == "") {
        document.getElementById("dateError").textContent = "Please enter a due date";
        date.className = "error";
    } else newTodo(item, date);
}

//adds an li to the ul
function populateItem (item, id, done, trash, date){
    var ul = document.getElementById("list");
    if(trash){return;}

    const PREFIX = done ? FAS : FAR; 
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : ""; 
    
    ul.insertAdjacentHTML("beforeend", `
    <li class="todo">
    <i class="${PREFIX} ${DONE}" job="complete" id="${id}"></i>&nbsp;&nbsp; <p class="text ${LINE}">${item}&nbsp;&nbsp;&nbsp;<i>${date}</i></p>&nbsp;&nbsp;&nbsp;
    <i class="far fa-trash-alt" job="delete" id="${id}"></i>
    </li>
`);
}

//Adds a new todo, b
function newTodo(item, date) {
  
    var newItem = document.createElement("li");
    var ul = document.getElementById("list");
    var item = document.getElementById("input").value;
    var date = document.getElementById("date").value;
    
    populateItem(item, id, false, false, date);
    saveInput(item, date);
    id++;
    document.getElementById("dateError").textContent = "";      
    item.classList.remove("error");
    item = "";
    date = "";
    }

//Submission after valid input
function saveInput(item, date){
LIST.push({
    name : item,
    date: date,
    id : id,
    done : false,
    trash : false
});
localStorage.setItem("TODO", JSON.stringify(LIST));
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

//Calls function when button is clicked on
button.addEventListener("click", validateInput);
