const addNewButton = document.getElementById('addNewButton');
const elementsList = document.getElementById('elementsList');
const addNewInput = document.getElementById('addNewInput');

addNewButton.addEventListener('click', () => {
    if (addNewInput.value.trim()) {
        const newElement = document.createElement('li');
        const deleteButton = document.createElement('button');

        newElement.textContent = addNewInput.value + " ";
        deleteButton.textContent = 'Видалити';
        newElement.appendChild(deleteButton);
        elementsList.appendChild(newElement);

        deleteButton.addEventListener('click', (e) => {
            e.target.parentNode.remove();
        })
        addNewInput.value = '';
    }
})
