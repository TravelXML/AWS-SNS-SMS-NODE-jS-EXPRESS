  let sendMsg = require('aws-sns-sms');
  let awsConfig = {
  accessKeyId: '',
  secretAccessKey: '',
  region: '' // you could add any of your available region us-east-1 // eu-west-1
  };
 
  let msg = {
    "message": "your OTP is 845214",
    "sender": "VISHAL",
    "phoneNumber": "+91XXXXXXXXXX" // phoneNumber along with country code
  };
  sendMsg(awsConfig, msg).then(data => {
    console.log("Message sent");
  })
  .catch(err => {
    consolr.log(err);
  });

