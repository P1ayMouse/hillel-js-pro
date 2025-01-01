const addNewButton = document.getElementById('addNewBtn');
const elementsList = document.getElementById('elementsList');
const addNewInput = document.getElementById('addNewInput');

/* let readyElements = [
    {id: 1, text: "Hello world!", checked: false},
    {id: 2, text: "Bye world!", checked: true},
    {id: 3, text: "I am here", checked: false},
    {id: 4, text: "Nice text", checked: true},
    {id: 5, text: "Have a nice day!", checked: true},
    {id: 6, text: "What are you doing!?", checked: false},
] */

let toDoElements = JSON.parse(localStorage.getItem('toDoElements')) || [];

function saveToDoElements(){
    localStorage.setItem("toDoElements", JSON.stringify(toDoElements));
}

renderItems(toDoElements);

function renderItems (itemsList) {
    elementsList.innerHTML = '';

    itemsList.forEach((item) => {
        itemAddToList(item);
    })
}

function itemAddToList (item) {
    const checkedImg = document.createElement('span');

    const newElement = document.createElement('li');
    newElement.classList.add('todo-item');
    newElement.dataset.id = item.id;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('todo-item__delete');
    deleteButton.textContent = 'Видалити';

    const innerText = document.createElement('span');
    innerText.classList.add('todo-item__description');
    innerText.textContent = item.text;

    if (!item.checked) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        newElement.appendChild(checkedImg);
        newElement.appendChild(checkbox);
    }
    else {
        checkedImg.classList.add('todo-item--checked');
        newElement.appendChild(checkedImg);
    }

    newElement.appendChild(innerText);
    newElement.appendChild(deleteButton);
    elementsList.appendChild(newElement);
}

function itemAddToElements (value) {
    const id = toDoElements.length ? toDoElements[toDoElements.length-1].id + 1 : 1;
    const text = value;
    const checked = false;

    result = {id: id, text: text, checked: checked};
    toDoElements.push(result);
    saveToDoElements();
    return result;
}

function itemDeleteFromElements (id) {
    toDoElements = toDoElements.filter(elem => elem.id !== id);
    saveToDoElements();
}

function itemCheckElement (id) {
    let element = toDoElements.find(element => element.id === id);
    element.checked = !element.checked;
    saveToDoElements();
}

addNewButton.addEventListener('click', () => {
    let newValue = addNewInput.value.trim();

    if (newValue) {
        const element = itemAddToElements(newValue);
        itemAddToList(element);
        addNewInput.value = '';
    }
})

elementsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('todo-item__delete')) {
        itemDeleteFromElements(+e.target.parentNode.dataset.id);
        e.target.parentNode.remove();
    }
    else if (e.target.type === 'checkbox') {
        e.target.previousElementSibling.classList.toggle('todo-item--checked');
        itemCheckElement(+e.target.parentNode.dataset.id);
        e.target.remove();
    }
})
