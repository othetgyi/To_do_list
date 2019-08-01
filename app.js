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

<<<<<<< Updated upstream
=======

//Show today's date
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

document.getElementById("date").innerHTML = today;

>>>>>>> Stashed changes
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

var ulList = document.querySelector("ul");
ulList.addEventListener("click", function(){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }
})

button.addEventListener("click", newTask);







