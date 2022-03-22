module.exports = (app) => {
    const razor = require("../controllers/razorPay.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/razorpay", razor.razorpay);
    router.post("/verification", razor.verification);
    router.put("/database", razor.putMemberPackage);

    app.use("/api/razor", router);
  };
  