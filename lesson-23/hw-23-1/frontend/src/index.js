import {addBook, editBook, getBooks} from "./js/api.js";

const apiUrl = 'http://localhost:3000';

document.getElementById('cancelEdit').addEventListener('click', () => {
    document.getElementById('editModal').classList.add('hidden');
});

document.querySelector('#addBookForm').addEventListener('submit',
    (e) => addBook(e, apiUrl));
document.querySelector('#editBookForm').addEventListener('submit',
    (e) => editBook(e, apiUrl));
getBooks(apiUrl);