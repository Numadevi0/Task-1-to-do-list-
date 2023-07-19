// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        var newTask = document.createElement("li");
        newTask.innerHTML = taskInput.value + '<span class="delete" onclick="deleteTask(this)">X</span>';
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

// Function to delete a task
function deleteTask(task) {
    task.parentNode.remove();
}
