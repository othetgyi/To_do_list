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









