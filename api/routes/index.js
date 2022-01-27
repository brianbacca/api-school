const { Router } = require("express");
const express = require("express");
const cors = require("cors");
const compression = require("compression");

module.exports = function ({ UserRoutes }) {
  const router = Router();
  const apiRoute = Router();

  apiRoute.use(cors()).use(express.json()).use(compression());

  apiRoute.use("/user", UserRoutes);
  // apiRoute.use("/teacher", TeacherRoutes);
  router.use("/api", apiRoute);
  //GET api/user/sadfsd

  return router;
};
