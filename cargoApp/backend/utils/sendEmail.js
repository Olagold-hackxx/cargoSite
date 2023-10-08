const nodemailer = require("nodemailer");
const nodemailerConfig = require("../config/nodemailer");

const sendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport(nodemailerConfig);
  transporter.sendMail(
    {
      from: `Jay Cargo <${process.env.AUTH_EMAIL}>`,
      to,
      subject,
      html,
    },
    function (error, info) {
      if (error) {
        console.log(error);
        return error;
      }
      console.log("Message sent: " + info.response);
      return info.response;
    }
  );
};

module.exports = sendEmail;
