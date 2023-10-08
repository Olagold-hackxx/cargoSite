const CustomAPIError = require('./custom-api');

class UnauthorizedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 405;
  }
}

module.exports = UnauthorizedError;
