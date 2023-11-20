
function getTask() {
const taskInput = document.getElementById("todoInput").value;
const taskList = document.getElementById("taskList");

if (taskInput != "") {
    const newTask = document.createElement("div");
    newTask.className = "row";
    newTask.innerHTML = `
        <li class="d-flex"">
            <button class="btn btn-primary chButton">✓</button>
            <button class="btn btn-danger exButton">✕</button>
            <p class="col fw-bold mx-3"  style="top: 15px; position:relative;">${taskInput}</p>
            
        </li>`;

    taskList.appendChild(newTask);

    const taskContainer = taskList.lastElementChild;

    //EX BUTTON
    taskContainer.querySelector(".exButton").addEventListener("click", function() {
        this.parentNode.remove();
    })

    //CHECK BUTTON
    taskContainer.querySelector(".chButton").addEventListener("click", function() {
        const taskParagraph = taskContainer.querySelector('p');
        if (taskParagraph) {
            taskParagraph.style.textDecoration = "line-through";
            this.remove();
        }
    });
    
    //RESET INPUT FIELD
    document.getElementById("todoInput").value = "";


    //IN CASE FIELD IS EMPTY
} else {
    alert("Field cannot be empty!")
}
}

document.getElementById("todoInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        getTask();
    }
});

