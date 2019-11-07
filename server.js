require("localenv");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./src/routes");

const app = express();

app.use(express.json());
app.use(cors());

console.log(process.env.DB);

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(routes);

app.listen(5021);
