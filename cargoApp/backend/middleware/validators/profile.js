const { body } = require('express-validator');

exports.validateAvatar = [
  body('avatar').notEmpty().withMessage('Avatar is required'),
  body('role').notEmpty().withMessage('Role is required'),
];

exports.validateAddressInformation = [
  body('country').notEmpty().withMessage('Country is required'),
  body('postalCode').notEmpty().withMessage('Postal code is required'),
  body('homeAddress').notEmpty().withMessage('Home address is required'),
];



