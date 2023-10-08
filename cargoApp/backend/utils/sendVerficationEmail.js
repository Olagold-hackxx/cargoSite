const sendEmail = require("./sendEmail");

const sendVerificationEmail = async ({
  userId,
  name,
  email,
  verificationToken,
}) => {
  const origin = process.env.BASE_URL;
  const verifyEmail = `${origin}/api/v1/auth/verify-user/${userId}/${verificationToken}`;

  const message = `<p>Please confirm your email by clicking on the following link :
  <a href="${verifyEmail}">Verify Email</a> </p>`;

  return sendEmail({
    to: email,
    subject: "Email Confirmation",
    html: `<h4> Hello, ${name}</h4>
    ${message}
    `,
  });
};

module.exports = sendVerificationEmail;
