// Creating the Close buttons for lists that are not created with the main function
var myList = document.getElementsByTagName("li");
var index;




//Show today's date
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

document.getElementById("date").innerHTML = today;


//Create a task
function newTask(toDo) {
    const item = `<li class="item">
        <i class="fa fa-circle-thin co" job="complete" id="0"></i>
        <p class="text">Drink coffee</p>
        <i class="fa fa-trash-o de" job="delete" id="0"></i>
        </li>
        `;
    
        const position = "beforeend";

        list.insertAdjacentHTML(position, item);
    }













