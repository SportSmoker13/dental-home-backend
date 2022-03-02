module.exports = (app) => {
  const user = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", user.create);
  router.get("/:mobile", user.getUser);

  app.use("/api/user", router);
};
