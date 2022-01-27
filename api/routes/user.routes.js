const { Router } = require("expresss");

module.export = function ({ UserController }) {
  const router = Router();
  router.get("/", UserController.sayHello);
  return router;
};
