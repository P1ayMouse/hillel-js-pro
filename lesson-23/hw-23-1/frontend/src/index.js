import {addTask, editTask, getTasks} from "./js/api.js";
import {openEditModal} from "./js/dom.js";

document.getElementById('cancel-edit').addEventListener('click', () => {
    document.getElementById('edit-modal').classList.add('hidden');
});

document.querySelector('#add-task-form').addEventListener('submit',
    (e) => addTask(e));
document.querySelector('#add-task-form').addEventListener('submit',
    (e) => editTask(e));

const tasks = getTasks();