const { asClass, asFunction, asValue, createContainer } = require("awilix");
const ConnectionParameters = require("pg/lib/connection-parameters");
const StartUp = require("./startUp");
const Server = require("./server");

const container = createContainer();

container.register({
  app: asClass(StartUp).singleton(),
  server: asClass(Server).singleton(),
});

module.exports = container;
