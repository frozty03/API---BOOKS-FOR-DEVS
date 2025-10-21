// create local server (without express)
// import  http from 'http';
import 'dotenv/config'
import app from './src/app.js'

const PORT = 3000;

// const routes = {
//     '/': 'Test Server Node.js',
//     '/books': 'Show books',
//     '/authors': 'Show authors'
// } CREATE ROUTES WITHOUT EXPRESS

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'}); // header -> contain all the necessary infomation so the comunication work properly
//     res.end(routes[req.url]); // data sent to server
// }); -> WAY TO DO WITHOUT EXPRESS

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`)
});