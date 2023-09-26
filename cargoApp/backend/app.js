const express = require("express");
const app = express();
require("dotenv").config();
const dbController = require("./controller/database/dbController");

const database = new dbController();

database.connect();

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Running on Port " + port);
});

module.exports = app;
