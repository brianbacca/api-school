const { asClass, asFunction, asValue, createContainer } = require("awilix");

const StartUp = require("./startUp");
const Server = require("./server");
const Routes = require("../api/routes");
const config = require("../config/environments");

const UserRoutes = require("../api/routes/user.routes");
const { UserController } = require("../api/controllers");
const { UserRepository } = require("../dal/repositories");
const { UserService } = require("../services");

const db = require("../dal/entities");

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
    config: asValue(config),
  })
  .register({
    db: asValue(db),
  })
  .register({
    UserRoutes: asFunction(UserRoutes).singleton(),
  })
  .register({
    UserService: asClass(UserService).singleton(),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
  });

module.exports = container;
