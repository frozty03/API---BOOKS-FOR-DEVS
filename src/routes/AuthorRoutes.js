import express from 'express';
import AuthorController from '../Controllers/AuthorController.js';

const authorRoute = express.Router();

authorRoute.get('/author', AuthorController.listAuthors); // route and the method

authorRoute.get('/author/:id', AuthorController.listIdAuthor);

authorRoute.post('/author', AuthorController.registerAuthor);

authorRoute.put('/author/:id', AuthorController.updateAuthor);

authorRoute.delete('/author/:id', AuthorController.deleteAuthor);

export default authorRoute;