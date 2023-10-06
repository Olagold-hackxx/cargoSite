const nodemailer = require("nodemailer");

/**
 * nodemailer email transporter
 */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAUTH2",
    user: process.env.AUTH_EMAIL,
    clientId: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    refreshToken: process.env.AUTH_REFRESH_TOKEN,
  },
});

/**
 * function to send email to users
 * @param {*string} to : reciepient email address
 * @param {*string} subject : subject of email
 * @param {*string} text : content of email
 */
const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    to: to,
    from: process.env.AUTH_EMAIL,
    subject: subject,
    text: text,
  };

  await transporter.sendMail(mailOptions).catch((err) => {
    throw err;
  });
};

module.exports = sendEmail;
