module.exports = (app) => {
    const video = require("../controllers/video.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", video.upload);
    // router.get("/", video.download);
  
    app.use("/api/video", router);
  };
  