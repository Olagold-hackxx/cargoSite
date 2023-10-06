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

exports.validateCompanyInformation = [
  body('ownersName').notEmpty().withMessage("Owner's name is required"),
  body('companyName').notEmpty().withMessage('Company name is required'),
  body('country').notEmpty().withMessage('Country is required'),
  body('contact').notEmpty().withMessage('Contact is required'),
  body('companyAddress').notEmpty().withMessage('Company address is required'),
];

exports.validateIdentityVerification = [
  body('passport').notEmpty().withMessage('Passport is required'),
  body('governmentID').notEmpty().withMessage('Government ID is required'),
];


