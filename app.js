const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET - Caminho: /');
});

app.route('/clientes')
  .get((req, res) => {
    res.send(`GET - Caminho: /clientes\nQueries: ${JSON.stringify(req.query)}`);
  })
  .post((req, res) => {
    res.send(`POST - Caminho: /clientes\nQueries: ${JSON.stringify(req.query)}`);
  })
  .put((req, res) => {
    res.send(`PUT - Caminho: /clientes\nQueries: ${JSON.stringify(req.query)}`);
  })
  .delete((req, res) => {
    res.send(`DELETE - Caminho: /clientes\nQueries: ${JSON.stringify(req.query)}`);
  });

app.route('/produtos')
  .get((req, res) => {
    res.send(`GET - Caminho: /produtos\nQueries: ${JSON.stringify(req.query)}`);
  })
  .post((req, res) => {
    res.send(`POST - Caminho: /produtos\nQueries: ${JSON.stringify(req.query)}`);
  })
  .put((req, res) => {
    res.send(`PUT - Caminho: /produtos\nQueries: ${JSON.stringify(req.query)}`);
  })
  .delete((req, res) => {
    res.send(`DELETE - Caminho: /produtos\nQueries: ${JSON.stringify(req.query)}`);
  });

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
