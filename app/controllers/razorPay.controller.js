const Razorpay = require("razorpay");
const shortid = require("shortid");
const sql = require("../models/db.js");

const razorpay = new Razorpay({
  key_id: "rzp_test_woqjSrt5amEJuN",
  key_secret: "PDPPcEMfcQrXpn299OyQKxnq",
});

exports.razorpay = async (req, res) => {
  const payment_capture = 1;
  const amount = 499;
  const currency = "INR";

  const options = {
    amount: 1000,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log("1");
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log("2");
    console.log(error);
  }
};

exports.verification = (req, res) => {
  const secret = "12345678";

  console.log(req.body);

  const crypto = require("crypto");

  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  console.log(digest, req.headers["x-razorpay-signature"]);

  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("request is legit");
    // process it
    require("fs").writeFileSync(
      "payment1.json",
      JSON.stringify(req.body, null, 4)
    );
  } else {
    // pass it
  }
  res.json({ status: "ok" });
};

exports.putMemberPackage = (req, res) => {
  // ema("sportsmoker13@gmail.com",new Date(2022, 0, 28, 14, 13, 0))

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  } else {
    const amount = req.body["amount"];
    const razorId = req.body["razorId"];

    if (razorId !== null) {
      if (amount === 4999) {
        sql.query(
          "UPDATE `user` SET `subscriptionType`='individual',`subscriber`=1 where `id`=?",
          [req.body["id"]],
          (err, data) => {
            if (err) {
              console.log("error: ", err);
              res.status(404).send(null, err);
              return;
            } else {
              //   sql.query(
              //     "SELECT * FROM user WHERE mobile = ?",
              //     req.body["mobile"],
              //     (err, data) => {
              //       if (err) {
              //         console.log("error: ", err);
              //         result(null, err);
              //         return;
              //       } else {
              const resultArray = Object.values(
                JSON.parse(JSON.stringify(data))
              );
              console.log(data);
              res.send(resultArray);
              //       }
              //     }
              //   );

              return;
            }
          }
        );
      } else if (amount === 9999) {
        sql.query(
          "UPDATE `user` SET `subscriptionType`='family',`subscriber`='1' where `id`=?",
          [req.body["id"]],
          (err, data) => {
            if (err) {
              console.log("error: ", err);
              res.status(404).send(null, err);
              return;
            } else {
              const resultArray = Object.values(
                JSON.parse(JSON.stringify(data))
              );
              console.log(data);
              res.send(resultArray);
              return;
            }
          }
        );
      }
    }
  }
};
