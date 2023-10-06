const { validationResult } = require('express-validator');


// Middleware to handle validation error results
exports.handleValidationErrors = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		console.log("Validation error!!")
	  return res.status(400).json({ errors: errors.array() });
	}
	next();
  };