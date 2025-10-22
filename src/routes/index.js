import express from 'express';
import booksRoute from './BooksRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {res.status(200).send('Test Server')})

    app.use(express.json(), booksRoute); 
    // running express in app
    // middleware - have access to req/res to execute some other actions
    // parse every body that is compatible to JSON to JSON
    // because body is usually string
    // books are the routes from booksroutes.js
};

export default routes;