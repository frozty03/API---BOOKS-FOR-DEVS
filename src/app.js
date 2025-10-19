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

app.get('/', (req, res) => {
    res.status(200).send("Test Server Node.js");
});

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

app.post('/books', (req, res) => {
    books.push(req.body); // body (data to create a new object)
    res.status(201).send('book created');
});

export default app;