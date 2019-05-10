const express = require('express');
const bodyParser = require('body-parser');
const incomes = requires('./routes/incomes');
const app = express();

app.use(express.json());
/*
 body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.
 A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body).
 This object will contain key-value pairs, where the value can be a string or array
 (when extended is false), or any type (when extended is true).
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/incomes', incomes);


module.exports = app;

