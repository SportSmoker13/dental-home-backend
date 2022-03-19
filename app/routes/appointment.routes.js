module.exports = (app) => {
    const appointment = require("../controllers/appointment.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", appointment.create);
    router.get("/admin/:dentist_name", appointment.getAdminAppointment);
    router.get("/user/:user_id", appointment.getUserAppointment);
    router.put("/", appointment.putAppointment);
    router.put("/update", appointment.putUserAppointment);

    
    app.use("/api/appointment", router);
  };
  