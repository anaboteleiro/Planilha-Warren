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
const app = express()
const port = 3000
app.use (express.static(`${__dirname}/public`))

app.get('/ola', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`)
})

;