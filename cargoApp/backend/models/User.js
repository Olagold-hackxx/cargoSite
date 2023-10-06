const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const {ObjectId} = mongoose.Schema;


const user = new mongoose.Schema({
	firstName: {
		type: String,
		trim: true,
		required: [true, 'Please add your first name'],
		maxlength: 32
	},
	lastName: {
		type: String,
		trim: true,
		required: [true, 'Please add your last name'],
		maxlength: 32
	},
	username: {
		type: String,
		trim: true,
		required: [true, 'Please add a username'],
		maxlength: 32
	},
	email: {
		type: String,
		trim: true,
		required: [true, 'Please add an e-mail'],
		unique: true,
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email address']

	},
	password: {
			type: String,
			trim: true,
			required: [true, 'Please add a password'],
			unique: true

		},
	shipments: {
			type: ObjectId,
			ref: "Shipment"
},
verificationToken: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
  verified: Date,
  passwordToken: {
    type: String,
  },
  passwordTokenExpirationDate: {
    type: Date,
  },
  isGoogleUser: { type: Boolean, default: false },



}, {timestamps: true});

user.pre('save', function (next) {
	if (!this.isModified('password')) {
		next();
	}
	this.password = bcrypt.hash(this.password, 10);

} )
module.exports = mongoose.model("User", user)
