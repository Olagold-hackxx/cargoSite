const express = require("express");
const multer = require('multer');
const { body } = require('express-validator');
const validator = require('../middleware/validators/profileValidator')
const { handleValidationErrors } = require('../middleware/errorHandler');

const {
  registerClient,
  sendVerificationEmail,
  verifyUser,
  googleSignIn,
  loginUser,
  requestPasswordReset,
  updatePassword
} = require("../new/controllers/authController");
const { validate } = require("express-validation");
const {
  validateRegisterClient,
  validateVerifyUser,
  validateSendVerificationEmail,
  validateLoginUser,
  validateUpdatePassword,
} = require("../middleware/validators/userValidator");
const passport = require("../config/passportConfig");

const authRouter = express.Router();

const profileController = require('../new/controllers/profileController')
authRouter.post(
  "/register-client",
  validate(validateRegisterClient, {}, {}),
  handleValidationErrors,
  registerClient
);

authRouter.post(
  "/send-verification-email",
  validate(validateSendVerificationEmail, {}, {}),
  handleValidationErrors,
  sendVerificationEmail
);

authRouter.post(
  "/verify-user/:userId/:token",
  validate(validateVerifyUser, {}, {}),
  handleValidationErrors,
  verifyUser
);

authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
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

authRouter.post(
  "/login",
  validate(validateLoginUser, {}, {}),
  handleValidationErrors,
  loginUser
);

authRouter.post(
  "/request-password-reset",
  requestPasswordReset
);

authRouter.patch(
  "/updatepassword/:token",
  validate(validateUpdatePassword, {}, {}),
  handleValidationErrors,
  updatePassword
);


//Multer for handling file uploads

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // This Specify the directory where uploaded files should be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now().toISOString() + '-' + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit the file size to 5MB
});

const validateAvatar = [
  upload.single('avatar'),
  body('role').notEmpty().withMessage('Image is required'),
];

// Routes with validation middleware
authRouter.post('/avatar', validateAvatar, handleValidationErrors, profileController.postAvatar);
authRouter.post('/address', validator.validateAddressInformation, handleValidationErrors, profileController.postAddressInformation);
authRouter.post('/companyDetails', validator.validateCompanyInformation, handleValidationErrors, profileController.postCompanyInformation);
authRouter.post('/identityVerification', validateAvatar, validator.validateIdentityVerification, handleValidationErrors, profileController.postIdentityVerification);



module.exports = authRouter;
