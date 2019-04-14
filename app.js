const express = require('express');
const incomes = requires('./routes/incomes');
const app = express();

app.use(express.json());
app.use('/api/incomes', incomes);


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listen on port ${port}`));
