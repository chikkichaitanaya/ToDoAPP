// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add task
addBtn.addEventListener('click', function() {
    const task = taskInput.value.trim();
    if (task) {
        addTask(task);
        taskInput.value = '';  // Clear input after adding
    }
});

// Add task to list
function addTask(task) {
    const li = document.createElement('li');
    li.innerHTML = `${task} <button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(li);
}

// Delete task
function deleteTask(btn) {
    const li = btn.parentElement;
    taskList.removeChild(li);
}
