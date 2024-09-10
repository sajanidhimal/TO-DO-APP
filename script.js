var tasks = []

function addTask() {
    var taskInput = document.getElementById('todoInput');
    var taskvalue = taskInput.value;
    
    //checks if the input is empty or not
    if (taskvalue.trim() !== "") {
        //add task to the list
        tasks.push({
            text: taskvalue,
            completed: false
        });
        taskInput.value = "";
        updatetoDoList();
        console.log(tasks);

    }
}

function updatetoDoList() {
    const todoList = document.getElementById('todoList');
//clear the existing list
    todoList.innerHTML = "";
    tasks.forEach ((task)=> {
        var listItem = document.createElement('li');
        listItem.textContent = task.text;
        listItem.className = task.completed ? 'completed' : '';
        listItem.onclick = function() {
            toogleCompleted(task);
        }
        todoList.appendChild(listItem);

    })

    // function to calculate total number of tasks and completed tasks
    updateAggregates();
}

function toogleCompleted(task) {
    task.completed = !task.completed;
    updatetoDoList();
}

function updateAggregates() {
    var totalTasks = document.getElementById('totalTasks');
    var completedTasks = document.getElementById('completedTasks');
    var total = tasks.length;

    var completed = tasks.reduce((acc, task) => {
        return task.completed ? acc + 1 : acc;
    }, 0);

    totalTasks.textContent = total;

    completedTasks.textContent = completed;

}

function filterTasks() {
    var searchInput = document.getElementById('searchInput');
    var searchValue = searchInput.value.toLowerCase();  

    var filteredTasks = tasks.filter((task) => {
        return task.text.toLowerCase().includes(searchValue);
    })

    //update the list with the filtered tasks
    updateToDoListWithFilteredTasks(filteredTasks);

}

function updateToDoListWithFilteredTasks(filteredTasks) {
    var todoList = document.getElementById('todoList');

    todoList.innerHTML = "";

    filteredTasks.forEach((task) => {

        var listItem = document.createElement('li');
        listItem.textContent = task.text;
        listItem.className = task.completed ? 'completed' : '';
        listItem.onclick = function() {
            toogleCompleted(task);
        }
        todoList.appendChild(listItem);

})

//update the aggregates
updateAggregates();

}