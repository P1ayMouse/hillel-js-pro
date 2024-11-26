import {renderTasks} from "./dom.js";

const apiUrl = 'http://localhost:3000';

export const getTasks = async () => {
    const response = await fetch(`${apiUrl}/tasks`);
    const tasks = await response.json();
    renderTasks(tasks);
}

export const deleteTask = async (taskId) => {
    await fetch(`${apiUrl}/tasks/${taskId}`, {
        method: 'DELETE',
    });

    await getTasks();
}

export const addTask = async (e) => {
    e.preventDefault();

    const title = document.querySelector('#task-title').value;
    const description = document.querySelector('#task-description').value;

    await fetch(`${apiUrl}/tasks`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            title,
            description
        })
    });

    await getTasks();
    document.querySelector('#add-task-form').reset();
}

export const editTask = async (e) => {
    e.preventDefault();

    const id = document.getElementById('edit-task-id').value;
    const title = document.getElementById('edit-task-title').value;
    const description = document.getElementById('edit-task-description').value;
    const updatedTask = {title, description};

    await fetch(`${apiUrl}/tasks/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updatedTask)
    });

    document.querySelector('#edit-modal').classList.add('hidden');
    await getTasks();
}
