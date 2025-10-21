import express from 'express';

const app = express(); // running express in app
app.use(express.json()); // middleware - have access to req/res to execute some other actions
// parse every body that is compatible to JSON to JSON
// because body is usually string
const books = [ // simulate a BD
    {
        id: 1,
        name: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        author: 'Robert C. Martin'
    },

    {
        id: 2,
        name: 'Grokking Algorithms: An illustrated guide for programmers and other curious people',
        author: 'Aditya Bhargava'
    }
]

function findBook(id) {
    return books.findIndex(book => { // findIndex tests every book to the arrow function
        return book.id === Number(id);
    })
}

app.get('/', (req, res) => {
    res.status(200).send("Test Server Node.js");
});

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

app.get('/books/:id', (req, res) => { // :id is a variable
    const index = findBook(req.params.id); // variable defined in get method
    res.status(200).json(books[index]);
})

app.post('/books', (req, res) => {
    books.push(req.body); // body (data to create a new object)
    res.status(201).send('book created');
});

app.put('/books/:id', (req, res) => {
    const index = findBook(req.params.id);
    books[index].name = req.body.name;
    books[index].author = req.body.author;
    res.status(200).json(books[index]);
})

app.delete('/books/:id', (req, res) => {
    const index = findBook(req.params.id);
    books.splice(index, 1);
    res.status(200).send('Book deleted')
})


export default app;