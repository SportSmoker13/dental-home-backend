const Service = require("../models/service.model");
const sql = require("../models/db.js");


exports.getTable = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  sql.query(
    "SELECT * FROM " + req.params["table"] + " WHERE user_id = ?",
    [ req.params["id"]],
    (err, data) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      } else {
        const resultArray = Object.values(JSON.parse(JSON.stringify(data)));
        return res.send(resultArray);
      }
    }
  );
};

exports.addTable = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const service = new Service({
    table: req.body.table,
    user_id: req.body.user_id,
    service_done: req.body.service_done,
    service_left: req.body.service_left,
  });

  Service.create(service, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    else {
      res.send(data);
    }
  });
};
