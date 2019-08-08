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
        <i class="far fa-circle" job="complete" id="0" job="complete"></i> ${item} <i class="far fa-trash-alt" job="delete"></i>
        </li>
        `);
    } document.getElementById("input").value = "";
    

}

// Delete todo by clicking on trash can symbol

document.getElementById("list").addEventListener("click", function(e) {
   const element = event.target;
   const elementJob = element.attributes.job.value;

   if(elementJob == "complete"){
       console.log("Completed!");
   } else if(elementJob == "delete") {
    e.target.parentElement.removeChild(e.target);
   }
});



//element.parentNode.parentNode.removeChild(element.parentNode); 
// 

//Calls function when button is clicked on
button.addEventListener("click", newTodo);






