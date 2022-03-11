// const sql = require("./db.js");

// const UserAppointment = function (user) {
//   const sql = require("./db.js");

//   const Appointment = function (user) {
//     this.user_id = user.user_id;
//     this.patient_name = user.patient_name;
//     this.dentist_name = user.dentist_name;
//     this.location = user.location;
//     this.date = user.date;
//     this.time = user.time;
//     this.status = "scheduled";
//   };

//   Appointment.create = (newAppointment, result) => {
//     sql.query(
//       // "SELECT * FROM appointments WHERE user_id = ?",
//       // [newAppointment.user_id],
//       // (err, res) => {
//       //   if (err) {
//       //     console.log("error: ", err);
//       //     result(null, err);
//       //     return;
//       //   }
//       //   const resultArray = Object.values(JSON.parse(JSON.stringify(res)));
//       //   if (resultArray.length == 0) {
//       sql.query(
//         "INSERT INTO appointments SET ?",
//         newAppointment,
//         (err, resu) => {
//           if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//           }

//           result(null, { id: resu.insertId, ...newAppointment });
//         }
//       )
//       // });
//       //   } else {
//       //     console.log("Appointment Already Exists!!!");
//       //     result(null, "Appointment Already Exists!!!");
//       //   }
//       // }
//     );
//   };

//   Appointment.getAppointment = (mobile, result) => {};

//   module.exports = Appointment;
// };

// // Appointment.create = (newAppointment, result) => {
// //   sql.query(
// //     "SELECT * FROM appointments WHERE mobile = ?",
// //     [newAppointment.user_id],
// //     (err, res) => {
// //       if (err) {
// //         console.log("error: ", err);
// //         result(null, err);
// //         return;
// //       }
// //       const resultArray = Object.values(JSON.parse(JSON.stringify(res)));
// //       if (resultArray.length == 0) {
// //         sql.query("INSERT INTO appointments SET ?", newAppointment, (err, resu) => {
// //           if (err) {
// //             console.log("error: ", err);
// //             result(err, null);
// //             return;
// //           }

// //           result(null, { id: resu.insertId, ...newAppointment });
// //         });
// //       } else {
// //         console.log("Mobile Number Already Exists!!!");
// //         result(null, "Mobile Number Already Exists!!!");
// //       }
// //     }
// //   );
// // };

// // User.getUser = (mobile, result) => {};

// // module.exports = Appointment;

const sql = require("./db.js");

const Appointment = function (user) {
  this.user_id = user.user_id;
  this.patient_name = user.patient_name;
  this.dentist_name = user.dentist_name;
  this.location = user.location;
  this.date = user.date;
  this.time = user.time;
  this.status = "scheduled";
  this.type = user.type;
};

Appointment.create = (newAppointment, result) => {
  sql.query("INSERT INTO appointments SET ?", newAppointment, (err, resu) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, { id: resu.insertId, ...newAppointment });
  });
};

Appointment.getAppointment = (mobile, result) => {};

module.exports = Appointment;
