// criar servidor http local
import  http from 'http';

const PORT = 3000;

const routes = {
    '/': 'Teste Server Node.js',
    '/books': 'Show books',
    '/authors': 'Show authors'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'}); // header / cabecalho -> Os cabeçalhos contêm todas as informações necessárias para que a comunicação funcione corretamente. 
    res.end(routes[req.url]); // dado sendo passado para o servidor
});

server.listen(PORT, () => {
    console.log(`Servidor em: http://localhost:${PORT}`)
});