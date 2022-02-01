require("dotenv").config();
//to generate otp
const speakeasy = require("speakeasy");

//to connect with twilio account
const client = require("twilio")(
  process.env.ACCOUNT_SID,
  process.env.AUTH_TOKEN
);

//to send otp to required mobile no.
exports.getOtp = (req, res) => {
  var code = speakeasy.totp({ secret: process.env.OTP_SECRET });
  // console.log(req.body.mobile)
  client.messages.create(
    {
      to: req.body.mobile,
      from: +16016546438,
      body: "Your verification code is: " + code,
    },
    function (twilioerr, responseData) {
      if (twilioerr) {
        console.log(twilioerr)
        res.send("error");
      } else {
        res.send(code);
      }
    }
  );
  // });
};
