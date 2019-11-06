const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const requireDir = require("require-dir");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/instagrISI", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

requireDir("./src/models");

app.use("/", require("./src/routes"));

app.listen(5021);
