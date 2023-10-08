const express = require("express");

const {
  registerClient,
  sendVerificationEmail,
  verifyUser,
  googleSignIn,
  loginUser,
  logoutUser,
  requestPasswordReset,
  updatePassword,
  prompt,
  accessType,
} = require("../controller/auth");
const { validate } = require("express-validation");
const {
  validateRegisterClient,
  validateVerifyUser,
  validateSendVerificationEmail,
  validateLoginUser,
  validateUpdatePassword,
} = require("../middleware/validators/user");
const passport = require("../config/passport");

const authRouter = express.Router();

authRouter.post(
  "/register",
  validate(validateRegisterClient, {}, {}),
  registerClient
);

authRouter.post(
  "/send-verification-email",
  validate(validateSendVerificationEmail, {}, {}),
  sendVerificationEmail
);

authRouter.get(
  "/verify-user/:userId/:token",
  validate(validateVerifyUser, {}, {}),
  verifyUser
);

authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    failureRedirect: "/",
    accessType: accessType,
    prompt: prompt,
  })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    session: false,
  }),
  googleSignIn
);

authRouter.post("/login", validate(validateLoginUser, {}, {}), loginUser);

authRouter.post("/logout", logoutUser);

authRouter.post("/request-password-reset", requestPasswordReset);

authRouter.patch(
  "/updatepassword/:token",
  validate(validateUpdatePassword, {}, {}),
  updatePassword
);

module.exports = authRouter;
