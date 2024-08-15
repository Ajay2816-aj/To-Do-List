document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    // Optionally, you could add functionality to remove tasks
    window.removeTask = function(button) {
        button.parentElement.remove();
    }
});
