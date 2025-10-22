import express from 'express';
import connectInDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

const connection = await connectInDatabase(); // data of connection saved in const

// these will show how the connection went in the terminal
connection.on('error', (error) => {
    console.error('Connection error: ', error);
});

connection.once('open', () => {
    console.log('BD Connected')
});

const app = express(); 
routes(app); // execute the function created in routes/index.js


export default app;