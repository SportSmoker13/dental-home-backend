// const schedule = require('node-schedule');
// const nodemailer = require("nodemailer");



// const emailSchedule = async (email,date) => {

//     const transporter = nodemailer.createTransport({
//           service: 'gmail',
//           auth: {
//             user: 'dhanesh@dentalforhome.com',
//             pass: 'dental@2020'
//           }
//         });

//     const sch = schedule.scheduleJob(date, function(){
        
//         const mailOptions = {
//         from: 'dhanesh123indiana@gmail.com',
//         to: email,
//         subject: 'Sending Email using Node.js',
//         text: 'Email sent!'
//       };

//       await transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });
//     console.log("hhhh")

//       });

//       console.log(sch)

// }

// module.exports = emailSchedule;