const express = require("express");
const incomes = requires("./routes/incomes");
const cards = requires("./routes/cards");
const categories = requires("./routes/categories");
const app = express();

app.use(express.json());
/*
  This is a built-in middleware function in Express.
  It parses incoming requests with urlencoded payloads and is based on body-parser.
  This option allows to choose between parsing the URL-encoded data with the querystring library
  (when false) or the qs library (when true).
  The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format,
  allowing for a JSON-like experience with URL-encoded.
 */
app.use(express.urlencoded({ extended: false }));

app.use("/api/incomes", incomes);
app.use("/api/cards", cards);
app.use("/api/categories", categories);

app.use((req, res, next) => {
  // Informa que qualquer domínio pode acessar os resources
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );

});

module.exports = app;
