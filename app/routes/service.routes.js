module.exports = (app) => {
    const service = require("../controllers/service.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.get("/:table/:id", service.getTable);
    router.post("/", service.addTable);
  
    app.use("/api/service", router);
  };
  