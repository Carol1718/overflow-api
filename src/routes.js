const routes = require("express").Router();
const { route } = require("./app");
const postController = require("./controllers/posts");
const sessionController = require("./controllers/sessions");
const userController = require("./controllers/users");

routes.post('/sessions', sessionController.store);
routes.post('/users', userController.store);
routes.get("/posts", postController.index);
module.exports = routes;

  