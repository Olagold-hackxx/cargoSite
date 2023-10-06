const { Joi } = require("express-validation");

const validateRegisterClient = {
  body: Joi.object({
    lastName: Joi.string().required(),
    firstName: Joi.string().required(),
    mobileNumber: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  }),
};

const validateSendVerificationEmail = {
  body: Joi.object({
    email: Joi.string().email().required(),
  }),
};

const validateVerifyUser = {
  params: Joi.object({
    token: Joi.string().required(),
    userId: Joi.string().required(),
  }),
};

const validateLoginUser = {
  body: Joi.object({
    email: Joi.string().required(),
    password: Joi.string()
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()~¥=_+}{":;'?/>.<,`\-\|\[\]]{6,50}$/
      )
      .required(),
  }).strict(),
};

const validateUpdatePassword = {
  body: Joi.object({
    password: Joi.string()
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()~¥=_+}{":;'?/>.<,`\-\|\[\]]{6,50}$/
      )
      .required()
      .messages({
        "string.pattern.base":
          "password must contain one uppercase letter, at least one number and at least 8 characters long",
      }),

    confirmPassword: Joi.string()
      .valid(Joi.ref("password"))
      .required()
      .messages({ "any.only": "passwords have to match" }),
  }),
};

module.exports = {
  validateRegisterClient,
  validateVerifyUser,
  validateSendVerificationEmail,
  validateLoginUser,
  validateUpdatePassword,
};
