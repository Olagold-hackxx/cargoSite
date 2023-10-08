const { createJWT, isTokenValid, attachCookiesToResponse } = require('./jwt');
const createTokenUser = require('./createTokenUser');
const checkPermissions = require('./checkPermissions');
const sendVerifyEmail = require('./sendVerficationEmail');
const sendResetPasswordEmail = require('./sendResetPasswordEmail');
const createHash = require('./createHash');
const sendEmail = require('./sendEmail');


module.exports = {
  createJWT,
  isTokenValid,
  attachCookiesToResponse,
  createTokenUser,
  checkPermissions,
  sendVerifyEmail,
  sendResetPasswordEmail,
  createHash,
  sendEmail,
};
