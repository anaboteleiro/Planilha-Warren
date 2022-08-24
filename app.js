// const http = require('http');

// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Ola mundo');
// });

// server.listen(port, () => {
//   console.log(`Servidor ouvindo na porta ${port}`);
// });



// const http = require('http');

// const port = 3000;

// const server = http.createServer((req, res) => {
//     const html = `
//         <h1>Ola mundo!</h1>
//         <p>Criamos um servidor simples!</p>
//     `;
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");
//     res.write(html);
//     res.end();
// });


const express = require('express')

const TransacoesRepositorio = require("./transacoes-repositorio")

const app = express()
const port = 3000
app.use(express.json());
app.use(express.static(`${__dirname}/public`))
app.get ('/transacoes',(req,res)=>{})

app.post('/transacoes', (req, res) => {
    const repositorio = new TransacoesRepositorio()
    const transacoes = repositorio.listarTransacoes()
    res.send(transacoes)
})

app.post('/criar-transacao', (req, res) => {
    const repositorio = new TransacoesRepositorio()
    const transacao = req.body
    repositorio.criarTransacao(transacao)
    res.status(201).send(transacao)
})

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`)
})