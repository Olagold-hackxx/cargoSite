const { Joi } = require("express-validation");

// validate payments details
const  validatePaymentDetails = {
  body: Joi.object({
    amount: Joi.number().positive().required(),
	email: Joi.string().email(),
  }),
};



module.exports = {
  validatePaymentDetails,
};
