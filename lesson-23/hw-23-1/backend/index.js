const express = require('express');
const cors = require('cors');
const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

let books = [];

app.get('/books', (req, res) => {
    res.json(books);
});

app.post('/books', (req, res) => {
    const newBook = {...req.body, id: books.length + 1};

    books.push(newBook);

    res.status(200).json(newBook);
});

app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { title, author, year } = req.body;

    const book = books.find(book => book.id === +(id));

    if(!book) {
        res.status(404).json({message: 'Книга не знайдена!'});
    } else {
        book.title = title || book.title;
        book.author = author || book.author;
        book.year = year || book.year;

        res.status(200).json(book);
    }
});

app.delete('/books/:id', (req, res) => {
    const { id } = req.params;

    const bookIndex = books.findIndex(book => book.id === +(id));

    if(bookIndex === -1) {
        res.status(404).json({message: 'Книга не знайдена!'});
    } else {
        books.splice(bookIndex, 1);

        res.status(200).json({message: 'Книга видалена!'});
    }
});


app.listen(PORT, () => {
    console.log('Server started!');
});