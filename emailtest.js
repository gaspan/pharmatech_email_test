"use strict";
const nodemailer = require("nodemailer");
const SMTPServer = require('smtp-server').SMTPServer;
var arg = process.argv;


nodemailer.createTestAccount((err, account) => {
  let transporter = nodemailer.createTransport({
    host: "gator4013.hostgator.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "zijaemail@jacobhershberger.com",
      pass: "pharma1234"
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"here is the Test email you requested" <zijaemail@jacobhershberger.com>',
    to: arg[2],
    subject: "Test Email",
    html: {
      path: "zija_test_email/email_testfile.html"
    }
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    } else {
      console.log("Message sent to: ", info.envelope.to);
      console.log("----------------");
      console.log(
        "NOTE: Depending on the mail client, your email may be delivered to the junk / spam folders"
      );
    }
  });
});
