const routes = require("express").Router();
const postController = require("./controllers/posts");
const sessionController = require("./controllers/sessions");
const userController = require("./controllers/users");
const authMiddleware = require("./middlewares/auth");

//rotas públicas
routes.post('/sessions', sessionController.store);
routes.post('/users', userController.store);

routes.use(authMiddleware);
routes.get("/posts", postController.index);
module.exports = routes;

  