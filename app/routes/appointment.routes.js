module.exports = (app) => {
    const appointment = require("../controllers/appointment.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", appointment.create);
    router.get("/:user_id", appointment.getAppointment);
  
    app.use("/api/appointment", router);
  };
  