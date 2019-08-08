//Select elements
var button = document.getElementById("button");

//Adds a new todo
function newTodo() {
    var item = document.getElementById("input").value;
    var newItem = document.createElement("li");
    var ul = document.getElementById("list");
    var field = document.getElementById("input");
    
    if (item == "") {
        document.getElementById("error").textContent = "Please enter a todo";
        field.className = "input-error";
    } else {
        document.getElementById("error").textContent = "";        
        field.classList.remove("input-error");
        ul.insertAdjacentHTML("beforeend", `
        <li>
        <i class="far fa-circle" job="complete" id="0"></i> ${item} &#10060;
        </li>
        `);
    } document.getElementById("input").value = "";
    

}

// Change todo to completed by clicking on it 

//document.getElementById("list").addEventListener("click", function(e) {
//    if (e.target && e.target.nodeName == "LI") {
        
//    }
//});



// Function to 
	function deleteListItem(){
		e.target.parentElement.removeChild(e.target);
    }
    

//Calls function when button is clicked on
button.addEventListener("click", newTodo);






