const addNewButton = document.getElementById('addNewButton');
const elementsList = document.getElementById('elementsList');
const addNewInput = document.getElementById('addNewInput');

addNewButton.addEventListener('click', () => {
    if (addNewInput.value.trim()) {
        const newElement = document.createElement('li');
        const deleteButton = document.createElement('button');

        newElement.textContent = addNewInput.value + " ";
        deleteButton.textContent = 'Видалити';
        deleteButton.classList.add('listElementDelete');
        newElement.appendChild(deleteButton);
        elementsList.appendChild(newElement);

        addNewInput.value = '';
    }
})

elementsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('listElementDelete')) {
        e.target.parentNode.remove();
    }
})
