var button = document.getElementById("enter");
var item = document.getElementsByTagName("li");
// Close Button
var closeButton = document.getElementsByClassName("close");

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
}

//Create span tag
var thePanTag = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
thePanTag.className = "close";
thePanTag.appendChild(txt);
li.appendChild(thePanTag);

//Delete todos when click on span close button
for(i = 0; i < closeButton.length; i++){
    closeBUtton[i].onclick = function(){
        var theDiv = this.parentElement;
        theDiv.style.display = "none";
    }
}


button.addEventListener("click", newTask);







