const express = require("express");

const PostsController = require("./controllers/Posts");

const routes = express.Router();

routes.get("/posts", PostsController.index);
routes.get("/posts/:id", PostsController.show);
routes.post("/posts", PostsController.create);
routes.put("/posts/:id/like", PostsController.update);

module.exports = routes;
