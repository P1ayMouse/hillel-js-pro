import {renderBooks} from "./dom.js";

export const getBooks = async (apiUrl) => {
    const response = await fetch(`${apiUrl}/books`);
    const books = await response.json();
    renderBooks(books);
}

export const deleteBook = async (bookId, apiUrl) => {
    await fetch(`${apiUrl}/books/${bookId}`, {
        method: 'DELETE',
    });

    await getBooks();
}

export const addBook = async (e, apiUrl) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const year = document.querySelector('#year').value;

    await fetch(`${apiUrl}/books`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            title,
            author,
            year,
        })
    });

    await getBooks();
    document.querySelector('#addBookForm').reset();
}

export const editBook = async (e, apiUrl) => {
    e.preventDefault();

    const id = document.getElementById('editId').value;
    const title = document.getElementById('editTitle').value;
    const author = document.getElementById('editAuthor').value;
    const year = document.getElementById('editYear').value;

    const updatedBook = {title, author, year};

    await fetch(`${apiUrl}/books/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updatedBook)
    });

    document.querySelector('#editModal').classList.add('hidden');
    await getBooks();
}
