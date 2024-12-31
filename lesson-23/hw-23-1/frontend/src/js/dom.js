import {deleteTask} from "./api.js";

export const renderTasks = (tasks) => {
    const tasksList = document.querySelector('#tasks-list');
    tasksList.innerHTML = '';

    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';

        taskItem.innerHTML = `
            <p class="task-title">${task.title}</p>
            <p>${task.description}</p>
            <div>
                <button class="edit">Редагувати</button>
                <button class="delete">Видалити</button>
            </div>
        `;

        const editButton = taskItem.querySelector('.edit');
        editButton.addEventListener('click', () => {
            openEditModal(task.id, task.title, task.description);
        });

        const deleteButton = taskItem.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            deleteTask(task.id);
        });

        tasksList.appendChild(taskItem);
    });
}

export const openEditModal = (id, title, description) => {
    document.getElementById('edit-modal').classList.remove('hidden');
    document.getElementById('edit-task-id').value = id;
    document.getElementById('edit-task-title').value = title;
    document.getElementById('edit-task-description').value = description;
}