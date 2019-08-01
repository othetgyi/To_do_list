<<<<<<< HEAD
//Select elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//Class names
const complete = "far fa-check-circle";
const unComplete = "";
const line_through = "lineThrough";

const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-UK", options);

function addTodo(toDo){
    const item = `
        <i class="far fa-circle" job="complete" id="0"></i>
        <p class="text">${toDo}</p>
        <i class="fas fa-trash"></i>
    
    `
}

=======
// Creating the Close buttons for lists that are not created with the main function
var myList = document.getElementsByTagName("li");
var index;
for(index = 0; index < myList.length; index++) {
    var aSpanTag = document.createElement("SPAN");
    var someTxt = document.createTextNode("\u00D7");
    aSpanTag.className ="close";
    aSpanTag.appenddChild(someTxt);
    myList[index].appendChild(aSpanTag);
}
var button = document.getElementById("enter");
var item = document.getElementsByTagName("li");
// Close Button
var closeButton = document.getElementsByClassName("close");


//Show today's date
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//Create a task
function newTask() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    
    if(input.value === ""){
        alert("Please add a task");
    } else {
        document.getElementById("tasks").appendChild(li);
    }
    document.getElementById("input").value = "";
    li.onclick = removeItem;

//Create span tag
var thePanTag = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
thePanTag.className = "close";
thePanTag.appendChild(txt);
li.appendChild(thePanTag);

}



//Delete todos when you click on li
function removeItem(e) {
    event.target.parentElement.removeChild(event.target);
}


>>>>>>> 1615a96e773cb5616db5a71dcf702732e4e99661








