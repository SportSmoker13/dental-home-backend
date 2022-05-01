const User = require("../models/user.model.js");
const sql = require("../models/db.js");
const nodemailer = require("nodemailer");
const ema = require("../services/email.service");
const { getMaxListeners } = require("../models/db.js");
const Member = require("../models/member.model.js");

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // var transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'dhanesh123indiana@gmail.com',
  //     pass: ''
  //   }
  // });

  // Create a User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    // address: req.body.address,
    // gender: req.body.gender,
    // otp:req.body.otp
  });

  // Save User in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    else {
      // var mailOptions = {
      //   from: 'dhanesh123indiana@gmail.com',
      //   to: req.body.email,
      //   subject: 'Sending Email using Node.js',
      //   text: 'That was easy!'
      // };

      // transporter.sendMail(mailOptions, function(error, info){
      //   if (error) {
      //     console.log(error);
      //   } else {
      //     console.log('Email sent: ' + info.response);
      //   }
      // });

      res.send(data);
    }
  });
};

exports.createMember = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const user = new Member({
    name: req.body.name,
    email: req.body.email,
    parent_id: req.body.parent_id,
  });

  Member.createMember(user, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    else {
      res.send(data);
    }
  });
};

exports.getUser = (req, res) => {
  // ema("sportsmoker13@gmail.com",new Date(2022, 0, 28, 14, 13, 0))

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  sql.query(
    "SELECT * FROM user WHERE mobile = ?",
    [req.params["mobile"]],
    (err, data) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      } else {
        const resultArray = Object.values(JSON.parse(JSON.stringify(data)));
        if (resultArray.length !== 0) {
          return res.send(resultArray);
        } else {

          const user = new User({
            name: "",
            email: "",
            mobile: req.params.mobile,
            // address: req.body.address,
            // gender: req.body.gender,
            // otp:req.body.otp
          });
          User.create(user, (err, data) => {
            if (err)
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the User.",
              });
            else {
              res.send(data);
            }
          });
        }
      }
    }
  );
};

exports.getGoogleUser = (req, res) => {
  // ema("sportsmoker13@gmail.com",new Date(2022, 0, 28, 14, 13, 0))

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  sql.query(
    "SELECT * FROM user WHERE email = ?",
    [req.params["email"]],
    (err, data) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      } else {
        const resultArray = Object.values(JSON.parse(JSON.stringify(data)));
        if (resultArray.length !== 0) {
          return res.send(resultArray);
        } else {

          const user = new User({
            name: req.params.name,
            email: req.params.mobile,
            mobile: "",
          });
          User.create(user, (err, data) => {
            if (err)
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the User.",
              });
            else {
              res.send(data);
            }
          });
        }
      }
    }
  );
};

exports.getIdUser = (req, res) => {
  // ema("sportsmoker13@gmail.com",new Date(2022, 0, 28, 14, 13, 0))

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  sql.query(
    "SELECT * FROM family_member WHERE id = ?",
    [req.params["id"]],
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
exports.getMember = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  sql.query(
    "SELECT * FROM family_member WHERE parent_id = ?",
    [req.params["id"]],
    (err, data) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      } else {
        const resultArray = Object.values(JSON.parse(JSON.stringify(data)));
        // if (resultArray.length !== 0) {
        //   console.log("a");
        return res.send(resultArray);
        // } else {
        //   console.log("k");

        //   const user = new User({
        //     name: "",
        //     email: "",
        //     mobile: req.params.mobile,
        // address: req.body.address,
        // gender: req.body.gender,
        // otp:req.body.otp
        // });
        // User.create(user, (err, data) => {
        //   if (err)
        //     res.status(500).send({
        //       message:
        //         err.message || "Some error occurred while creating the User.",
        //     });
        //   else {
        //     res.send(data);
        //   }
        // });
        // }
      }
    }
  );
};

exports.putUser = (req, res) => {
  // ema("sportsmoker13@gmail.com",new Date(2022, 0, 28, 14, 13, 0))

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  sql.query(
    "UPDATE `user` SET `name`=?,`email`=? where `mobile`=?",
    [req.body["name"], req.body["email"], req.body["mobile"]],
    (err, data) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      } else {
        sql.query(
          "SELECT * FROM user WHERE mobile = ?",
          req.body["mobile"],
          (err, data) => {
            if (err) {
              console.log("error: ", err);
              result(null, err);
              return;
            } else {
              const resultArray = Object.values(
                JSON.parse(JSON.stringify(data))
              );
              console.log(data);
              res.send(resultArray);
            }
          }
        );

        return;
      }
    }
  );
};
exports.putMemberUser = (req, res) => {
  // ema("sportsmoker13@gmail.com",new Date(2022, 0, 28, 14, 13, 0))

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  sql.query(
    "UPDATE `user` SET `member1`=?,`member2`=?,`member3`=? where `mobile`=?",
    [
      req.body["member1"],
      req.body["member2"],
      req.body["member3"],
      req.body["mobile"],
    ],
    (err, data) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      } else {
        sql.query(
          "SELECT * FROM user WHERE mobile = ?",
          req.body["mobile"],
          (err, data) => {
            if (err) {
              console.log("error: ", err);
              result(null, err);
              return;
            } else {
              const resultArray = Object.values(
                JSON.parse(JSON.stringify(data))
              );
              console.log(data);
              res.send(resultArray);
            }
          }
        );

        return;
      }
    }
  );
};
exports.putUserAddress = (req, res) => {
  // ema("sportsmoker13@gmail.com",new Date(2022, 0, 28, 14, 13, 0))

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  sql.query(
    "UPDATE `user` SET `name`=?,`gender`=?,`dob`=?,`email`=?,`house_number`=?,`locality`=?,`landmark`=?,`country`=?,`state`=?,`pincode`=? where `mobile`=?",
    [
      req.body["name"],
      req.body["gender"],
      req.body["dob"],
      req.body["email"],
      req.body["house_number"],
      req.body["locality"],
      req.body["landmark"],
      req.body["country"],
      req.body["state"],
      req.body["pincode"],
      req.body["mobile"],
    ],
    (err, data) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      } else {
        sql.query(
          "SELECT * FROM user WHERE mobile = ?",
          req.body["mobile"],
          (err, data) => {
            if (err) {
              console.log("error: ", err);
              result(null, err);
              return;
            } else {
              const resultArray = Object.values(
                JSON.parse(JSON.stringify(data))
              );
              console.log(data);
              res.send(resultArray);
            }
          }
        );

        return;
      }
    }
  );
};
