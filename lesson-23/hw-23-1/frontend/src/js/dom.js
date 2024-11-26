import {deleteBook} from "./api.js";

export const renderBooks = (books) => {
    const booksList = document.querySelector('#booksList');
    booksList.innerHTML = '';

    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';

        bookItem.innerHTML = `
            <span>${book.title} by ${book.author} (${book.year})</span>
            <div>
                <button class="edit" onclick="openEditModal(${book.id}, '${book.title}', '${book.author}', ${book.year})">Редагувати</button>
                <button onclick="deleteBook(${book.id})">Видалити</button>
            </div>
        `;

        booksList.appendChild(bookItem);
    });
}

export const openEditModal = (id, title, author, year) => {
    document.getElementById('editModal').classList.remove('hidden');
    document.getElementById('editId').value = id;
    document.getElementById('editTitle').value = title;
    document.getElementById('editAuthor').value = author;
    document.getElementById('editYear').value = year;
}