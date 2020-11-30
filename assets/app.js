const newTasks = document.getElementById('new-tasks');
const addTask = document.getElementById('add-task');
const taskText = document.getElementById('task-text');

addTask.addEventListener('click', function () {
    let newTextLine = document.createElement('p');
    let newTextLineRemoveButton = document.createElement('button');
    let newTextLineDoneButton = document.createElement('button');
    let newTextLineEditButton = document.createElement('button');

    newTextLine.innerText = '-' + taskText.value;
    newTextLineEditButton.innerText = 'Edit';
    newTextLineDoneButton.innerText = 'Done';
    newTextLineRemoveButton.innerText = '-';

    newTasks.insertBefore(newTextLine, newTasks.firstChild);
    newTextLine.appendChild(newTextLineEditButton);
    newTextLine.appendChild(newTextLineDoneButton);
    newTextLine.appendChild(newTextLineRemoveButton);

    newTextLineRemoveButton.classList.add('remove-task');
    newTextLineDoneButton.classList.add('done-task');
    newTextLineEditButton.classList.add('edit-task');

    newTextLineRemoveButton.addEventListener('click', function () {
        newTasks.removeChild(newTextLine);
    });

    newTextLineDoneButton.addEventListener('click', function () {
        newTextLine.style.textDecoration = 'line-through';
    });

    newTextLineEditButton.addEventListener('click', function () {
        newTextLine.innerText = '-' + prompt();
        newTextLine.appendChild(newTextLineEditButton);
        newTextLine.appendChild(newTextLineDoneButton);
        newTextLine.appendChild(newTextLineRemoveButton);
        newTextLine.style.textDecoration = 'none';
    });
});



