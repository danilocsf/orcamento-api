const express = require('express');
const bodyParser = require('body-parser');
const incomes = requires('./routes/incomes');
const app = express();

//Possibilita o acesso das constantes globalmente (sem require)
require('./app/utils/constants');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/incomes', incomes);


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listen on port ${port}`));
