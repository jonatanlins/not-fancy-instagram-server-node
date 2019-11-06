const express = require("express");

const routes = express.Router();

const InstagramController = require("./Controllers/InstagramController");

routes.get("/posts", InstagramController.index);
routes.get("/posts/:id", InstagramController.show);
routes.post("/posts", InstagramController.store);
routes.put("/posts/:id/like", InstagramController.update);

module.exports = routes;
