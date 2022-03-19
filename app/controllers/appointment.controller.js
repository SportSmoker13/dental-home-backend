const Appointment = require("../models/appointment.model.js");
const sql = require("../models/db.js");

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a User
  const appointment = new Appointment({
    user_id: req.body.user_id,
    patient_name: req.body.patient_name,
    dentist_name: req.body.dentist_name,
    location: req.body.location,
    date: req.body.date,
    time: req.body.time,
    type: req.body.type,
  });

  // Save User in the database
  Appointment.create(appointment, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    else {
      res.send(data);
    }
  });
};

exports.getAdminAppointment = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  sql.query(
    "SELECT * FROM appointments WHERE dentist_name = ?",
    [req.params["dentist_name"]],
    (err, data) => {
      if (err) {
        console.log("error: ", err);
        res.send(null, err);
        return;
      } else {
        const resultArray = Object.values(JSON.parse(JSON.stringify(data)));
        console.log(data);
        return res.send(resultArray);
      }
    }
  );
};
exports.getUserAppointment = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  sql.query(
    "SELECT * FROM appointments WHERE user_id = ?",
    [req.params["user_id"]],
    (err, data) => {
      if (err) {
        console.log("error: ", err);
        res.send(null, err);
        return;
      } else {
        const resultArray = Object.values(JSON.parse(JSON.stringify(data)));
        console.log(data);
        return res.send(resultArray);
      }
    }
  );
};

exports.putAppointment = (req, res) => {
  // ema("sportsmoker13@gmail.com",new Date(2022, 0, 28, 14, 13, 0))

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  sql.query(
    "UPDATE `appointments` SET `link`=?,`status`='ongoing' where `id`=?",
    [req.body["link"], req.body["id"]],
    (err, data) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      } else {
res.send("success")
        return;
      }
    }
  );
};
exports.putUserAppointment = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  sql.query(
    "UPDATE `appointments` SET `status`='completed' where `id`=?",
    [req.body["id"]],
    (err, data) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      } else {
res.send("success")
        return;
      }
    }
  );
};