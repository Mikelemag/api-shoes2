const express = require('express'); // express facilita para criar api
const port = process.env.PORT || 3000; // criando a porta do servidor
const app = express(); // criando a aplicação express
require('./src/models');
const usersRouter = require('./src/routers/users')

app.use(express.json()); // configurando o express para receber json
app.use(usersRouter);




app.listen(port, () => { // iniciando o servidor na porta definida
  console.log(`Server is running on http://localhost:${port}`);
});