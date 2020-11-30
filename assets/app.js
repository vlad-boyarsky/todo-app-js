const newTasks = document.getElementById('new-tasks');
const addTask = document.getElementById('add-task');
const taskText = document.getElementById('task-text');
const emptyTaskList = document.getElementById('empty-task-list');

addTask.addEventListener('click', () => {

    let newTextLine = document.createElement('p');
    let newTextLineRemoveButton = document.createElement('button');
    let newTextLineDoneButton = document.createElement('button');
    let newTextLineEditButton = document.createElement('button');

    if (taskText.value !== '') {

        emptyTaskList.style.display = 'none';

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

        taskText.value = '';
    }

    newTextLineRemoveButton.addEventListener('click', () => {
        newTasks.removeChild(newTextLine);

        if (newTasks.childElementCount === 1) {
            emptyTaskList.style.display = 'block';
        }

    });

    newTextLineDoneButton.addEventListener('click', () => {
        newTextLine.style.textDecoration = 'line-through';
    });

    newTextLineEditButton.addEventListener('click', () => {
        newTextLine.innerText = '-' + prompt('Edit', 'Task');
        newTextLine.appendChild(newTextLineEditButton);
        newTextLine.appendChild(newTextLineDoneButton);
        newTextLine.appendChild(newTextLineRemoveButton);
        newTextLine.style.textDecoration = 'none';
    });
});



