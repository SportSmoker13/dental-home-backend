module.exports = (app) => {
  const user = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", user.create);
  router.post("/member", user.createMember);
  router.get("/member/:id", user.getMember);
  router.get("/:mobile", user.getUser);
  router.get("/google/:email/:name", user.getGoogleUser);
  router.get("/:id", user.getIdUser);
  router.put("/", user.putUser);
  router.put("/member", user.putMemberUser);
  router.put("/address", user.putUserAddress);

  app.use("/api/user", router);
};
