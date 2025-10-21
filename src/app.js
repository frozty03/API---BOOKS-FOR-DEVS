import express from 'express';
import connectInDatabase from './config/dbConnect.js';
import booksModel from './models/books.js';

const connection = await connectInDatabase(); // data of connection saved in const

// these will show how the connection went in the terminal
connection.on('error', (error) => {
    console.error('Connection error: ', error);
});

connection.once('open', () => {
    console.log('BD Connected')
});

const app = express(); // running express in app
app.use(express.json()); // middleware - have access to req/res to execute some other actions
// parse every body that is compatible to JSON to JSON
// because body is usually string

app.get('/', (req, res) => {
    res.status(200).send("Test Server Node.js");
});

app.get('/books', async (req, res) => {
    const booksList = await booksModel.find({}); // find wil try to find the book with no params 
    res.status(200).json(booksList);
});

app.get('/books/:id', async (req, res) => { // :id is a variable
    const index = findBook(req.params.id); // variable defined in get method
    res.status(200).json(books[index]);
});

app.post('/books', (req, res) => {
    books.push(req.body); // body (data to create a new object)
    res.status(201).send('book created');
});

app.put('/books/:id', (req, res) => {
    const index = findBook(req.params.id);
    books[index].name = req.body.name;
    books[index].author = req.body.author;
    res.status(200).json(books[index]);
});

app.delete('/books/:id', (req, res) => {
    const index = findBook(req.params.id);
    books.splice(index, 1);
    res.status(200).send('Book deleted')
});


export default app;