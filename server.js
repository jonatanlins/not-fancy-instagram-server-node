require("localenv");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./src/routes");

const app = express();

const { PORT, DB } = process.env;

app.use(express.json());
app.use(cors());

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
