const express = require('express'); // express facilita para criar api
const port = process.env.PORT || 3000; // criando a porta do servidor
const app = express(); // criando a aplicação express
require('./src/models');
const usersRouter = require('./src/routers/users')
const shoesRouter = require('./src/routers/shoes')

app.use(express.json()); // configurando o express para receber json
app.use(usersRouter);
app.use(shoesRouter); // configurando o express para usar o router de shoes




app.listen(port, () => { // iniciando o servidor na porta definida
  console.log(`Server is running on http://localhost:${port}`);
});