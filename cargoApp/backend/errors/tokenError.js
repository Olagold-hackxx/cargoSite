const CustomAPIError = require('./custom-api');

class TokenError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 403;
  }

  redirect(req, res) {
	return res.redirect(`${process.env.BASE_URL}/api/v1/auth/google`);
  }
}

module.exports = TokenError;
