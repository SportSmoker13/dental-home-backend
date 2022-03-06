const sql = require("./db.js");

const User = function (user) {
  this.name = user.name;
  this.email = user.email;
  this.mobile = user.mobile;
  // this.address = user.address;
  // this.gender = user.gender;
  // this.otp = user.otp;
};

User.create = (newUser, result) => {
  sql.query(
    "SELECT * FROM user WHERE mobile = ?",
    [newUser.mobile],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      const resultArray = Object.values(JSON.parse(JSON.stringify(res)));
      if (resultArray.length == 0) {
        sql.query("INSERT INTO user SET ?", newUser, (err, resu) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }

          result(null, { id: resu.insertId, ...newUser });
        });
      } else {
        console.log("Mobile Number Already Exists!!!");
        result(null, "Mobile Number Already Exists!!!");
      }
    }
  );
};

User.getUser = (mobile, result) => {};

module.exports = User;
