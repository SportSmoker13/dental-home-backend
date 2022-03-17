module.exports = (app) => {
  const user = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", user.create);
  router.get("/:mobile", user.getUser);
  router.put("/", user.putUser);
  router.put("/member", user.putMemberUser);
  router.put("/address", user.putUserAddress);

  app.use("/api/user", router);
};
