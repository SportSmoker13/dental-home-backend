module.exports = (app) => {
  const user = require("../controllers/otp.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.get("/", user.getOtp);

  app.use("/api/otp", router);
};
