import express from 'express';
import BooksController from '../Controllers/BookController.js';

const booksRoute = express.Router();

booksRoute.get('/books', BooksController.listBooks); // route and the method

booksRoute.get('/books/:id', BooksController.listIdBook);

booksRoute.post('/books', BooksController.registerBook);

booksRoute.put('/books/:id', BooksController.updateBook);

booksRoute.delete('/books/:id', BooksController.deleteBook);

export default booksRoute;