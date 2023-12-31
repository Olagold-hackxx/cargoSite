//const { validationResult } = require('express-validator');


// Middleware to handle validation error results
//exports.handleValidationErrors = (req, res, next) => {
//	const errors = validationResult(req);
//	if (!errors.isEmpty()) {
//		console.log("Validation error!!")
//	  return res.status(400).json({ errors: errors.array() });
//	}
//	next();
//  };

const errorHandlerMiddleware = (err, req, res, next) => {
	// console.log(err);
	let customError = {
	  // set default
	  statusCode: err.statusCode || 500,
	  msg: err.message || 'Something went wrong try again later',
	};
	if (err.name === 'ValidationError') {
	  customError.msg = Object.values(err.errors)
		.map((item) => item.message)
		.join(',');
	  customError.statusCode = 400;
	}
	if (err.code && err.code === 11000) {
	  customError.msg = `Duplicate value entered for ${Object.keys(
		err.keyValue
	  )} field, please choose another value`;
	  customError.statusCode = 400;
	}
	if (err.name === 'CastError') {
	  customError.msg = `No item found with id : ${err.value}`;
	  customError.statusCode = 404;
	}
	else {
		customError.msg = err;
		console.log(err)
	  customError.statusCode = 404;
	}

	return res.status(customError.statusCode).json({ msg: customError.msg });
  };

  module.exports = errorHandlerMiddleware;