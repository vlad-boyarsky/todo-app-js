const newTasks = document.getElementById('new-tasks');
const addTask = document.getElementById('add-task');
const taskText = document.getElementById('task-text');

addTask.addEventListener('click', function () {
    let newTextLine = document.createElement('p');

    newTextLine.innerText = "-" + taskText.value;
    newTasks.appendChild(newTextLine);

    newTextLine.addEventListener('dblclick', function () {
        newTasks.removeChild(newTextLine);
    });

    newTextLine.addEventListener('click', function () {
        newTextLine.style.textDecoration = "line-through";
    });
});



