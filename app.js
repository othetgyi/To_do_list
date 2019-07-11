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
    input.value = "";
}

//add task after clicking
function addLi() {
    if (inputLength() > 0) {
        addTask();
    }
} 

add.addEventListener("click",addLi);



