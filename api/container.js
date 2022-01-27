const { asClass, asFunction, asValue, createContainer } = require("awilix");

const StartUp = require("./startUp");
const Server = require("./server");
const { UserController } = require("../api/controllers");
const Routes = require("../api/routes");
const config = require("../config/environments");

const UserRoutes = require("../api/routes/user.routes");

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
  })
  .register({
    UserController: asClass(UserController).singleton(),
  })
  .register({
    router: asFunction(Routes).singleton(),
  })
  .register({
    config: asValue(config),
  })
  .register({
    UserRoutes: asFunction(UserRoutes).singleton(),
  });

module.exports = container;
