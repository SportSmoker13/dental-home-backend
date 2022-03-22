const sql = require("./db.js");

const Service = function (service) {
  this.table = service.table;
  this.user_id = service.user_id;
  this.service_done = service.service_done;
  this.service_left = service.service_left;
  
};

Service.create = (newService, result) => {
    
  sql.query(
    "SELECT * FROM " + newService.table + " WHERE `user_id` = ?",
    [newService.user_id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      const resultArray = Object.values(JSON.parse(JSON.stringify(res)));
      if (resultArray.length == 0) {
        sql.query("INSERT INTO " + newService.table + " SET  `user_id`=?, `service_done`=?,`service_left`=?", [newService.user_id,newService.service_done,newService.service_left], (err, resu) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }

          result(null, { id: resu.insertId, ...newService });
        });
      } else {
        console.log("Service Number Already Exists!!!");
        result(null, "Service Number Already Exists!!!");
      }
    }
  );
};

// Service.getUser = (mobile, result) => {};

module.exports = Service;
