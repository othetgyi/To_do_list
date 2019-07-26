var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.getElementById("tasks");
var item = document.getElementsByTagName("li");

function addTodo(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

button.addEventListener("click", addTodo);


//extra code

var add = document.getElementById("add");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
}
//create li and add text to li
function addTask () {
    var li = document.createElement("li"); 
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
}

//add task after clicking
function addLi() {
    if (inputLength() > 0) {
        addTask();
    }
} 

add.addEventListener("click",addLi);
