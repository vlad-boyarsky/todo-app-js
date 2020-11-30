const newTasks = document.getElementById('new-tasks');
const addTask = document.getElementById('add-task');
const taskText = document.getElementById('task-text');

addTask.addEventListener('click', function () {
    let newTextLine = document.createElement('p');
    let newTextLineRemoveButton = document.createElement('button');

    newTextLine.innerText = '-' + taskText.value;
    newTextLineRemoveButton.innerText = '-';

    newTasks.insertBefore(newTextLine, newTasks.firstChild);
    newTextLine.appendChild(newTextLineRemoveButton);

    newTextLineRemoveButton.classList.add('remove-task');

    newTextLineRemoveButton.addEventListener('click', function () {
        newTasks.removeChild(newTextLine);
    });

    newTextLine.addEventListener('click', function () {
        newTextLine.style.textDecoration = 'line-through';
    });
});



