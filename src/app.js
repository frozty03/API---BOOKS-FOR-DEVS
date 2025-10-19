import express from 'express';

const app = express(); // running express in app

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

export default app;