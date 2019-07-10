
function addTask() {
    var task = document.getElementById("user_input").value;

    document.getElementById("display").innerHTML = task;
}

document.getElementById("enter").addEventListener("click", addTask);

