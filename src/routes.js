const express = require("express");

const routes = express.Router();

const InstagramController = require("./Controllers/InstagramController");

routes.get("/", InstagramController.index);
routes.get("/:id", InstagramController.show);
routes.post("/", InstagramController.store);
routes.put("/:id/like", InstagramController.update);

module.exports = routes;
