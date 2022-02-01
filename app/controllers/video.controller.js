// import AWS from 'aws-sdk'
const AWS = require('aws-sdk')
const fs = require('fs')

exports.upload = (req,res) => {

    const fileName = "D:/DHANESH/DentalForHome/dental-home-server/server.js"

    const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
      })

      const filename = 'the-file-name'
      const fileContent = fs.readFileSync(fileName)

      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${filename}.jpg`,
        Body: fileContent
      }

      s3.upload(params, (err, data) => {
        if (err) {
          reject(err)
        }
        resolve(data.Location)
      })
      res.send("success")
}